"use client";
import Text from "@/app/widget/Text";
import React, { useState, useEffect } from "react";
import Button from "@/app/widget/Button";
import { Bot, User } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

type Prop = {
  open: boolean;
};

const Chatbot: React.FC<Prop> = ({ open }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("chatbot_messages");
    if (saved && saved !== "undefined") {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved messages:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatbot_messages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userText = message;
    setMessage("");

    const updatedMessages = [
      ...messages,
      { sender: "user" as const, text: userText },
    ];
    setMessages(updatedMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      const botText = data.reply;

      setMessages((prev) => [
        ...prev,
        { sender: "bot" as const, text: botText },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  <div
    className={`fixed bottom-20 right-5 transition-opacity duration-300 ${
      open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    } bg-gray-100 dark:bg-black p-4 shadow-xl border rounded-xl w-2/3 h-2/3 md:w-2/3 md:h-2/3 flex flex-col justify-between`}
  ></div>;

  return (
    <div className="fixed bottom-20 right-5 bg-gray-100 dark:bg-black p-4 shadow-xl border rounded-xl  w-2/3 h-2/3 md:w-2/3 md:h-2/3 flex flex-col justify-between">
      <div className="text-center w-full border-b-2 border-black dark:border-white mb-2">
        <Text variant="heading2" className="text-black dark:text-white">
          Chatbot
        </Text>
      </div>

      <div className="flex-grow overflow-y-auto text-black dark:text-white mb-4 px-1">
        {messages.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <Text className="text-gray-400">No message yet</Text>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="flex items-start gap-2 mb-4">
              {msg.sender === "user" ? (
                <User className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <div className="w-8 h-8 flex justify-center items-center bg-gray-300 dark:bg-gray-700 rounded-full">
                  <Bot className="w-5 h-5 text-black dark:text-white" />
                </div>
              )}
              <Text className="dark:text-white">{msg.text}</Text>
            </div>
          ))
        )}
      </div>

      <div className="w-full border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-black p-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
          <textarea
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
};

export default Chatbot;
