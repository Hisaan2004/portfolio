"use client";
import React, { useState, useEffect } from "react";
import { Bot, User } from "lucide-react";
import Text from "@/app/widget/Text";
import Button from "@/app/widget/Button";
import { systemPrompt } from "@/app/api/chat/systemPrompt";

type Prop = {
  open: boolean;
};

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

function Chatbot({ open }: Prop) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("chatbot_messages");
    if (saved) {
      try {
        const parsed: ChatMessage[] = JSON.parse(saved);
        if (Array.isArray(parsed)) setMessages(parsed);
      } catch (err) {
        console.error("Failed to parse saved messages:", err);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatbot_messages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
            userMessage,
          ],
        }),
      });

      const data = await res.json();
      const botMessage: ChatMessage = {
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div
      className={`fixed bottom-20 right-5 transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-gray-100 dark:bg-black p-4 shadow-xl border rounded-xl w-2/3 h-2/3 flex flex-col justify-between`}
    >
      <div className="text-center w-full border-b-2 border-black dark:border-white mb-2">
        <Text variant="heading2" className="text-black dark:text-white">
          Chatbot
        </Text>
      </div>

      <div className="flex-grow overflow-y-auto text-black dark:text-white mb-4 px-1">
        {messages.filter((m) => m.role !== "system").length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <Text className="text-gray-400">No message yet</Text>
          </div>
        ) : (
          messages
            .filter((msg) => msg.role !== "system")
            .map((msg, idx) => (
              <div key={idx} className="flex items-start gap-2 mb-4">
                <div className="flex">
                  {msg.role === "user" ? (
                    <User className="w-5 h-5 text-black dark:text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-black dark:text-white" />
                  )}
                </div>
                <Text className="dark:text-white">{msg.content}</Text>
              </div>
            ))
        )}
      </div>

      <div className="w-full border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-black p-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
          <textarea
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full md:flex-grow p-2 h-16 max-h-40 border bg-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
            rows={2}
          />
          <Button
            variant="modebutton"
            className="w-full md:w-auto md:ml-2"
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
