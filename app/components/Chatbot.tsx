'use client';
import Text from '@/app/widget/Text';
import Images from '@/app/widget/Images';
import React, { useState } from 'react';
import Button from '@/app/widget/Button';
import { Bot } from 'lucide-react';

type Prop = {
  open: boolean;
};

const Chatbot: React.FC<Prop> = ({ open }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);

  if (!open) return null;

  const handleSend = async () => {
    if (!message.trim()) return;

    const userText = message;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setMessage('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { sender: 'user', text: userText }],
        }),
      });

      const data = await res.json();
      const botText = data.reply;

      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 bg-gray-100 dark:bg-black p-4 shadow-xl border rounded-xl  w-2/3 h-2/3 md:w-2/3 md:h-2/3 flex flex-col justify-between">
      {/* Header */}
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
              {msg.sender === 'user' ? (
                <Images
                  variant="profileicon"
                  image="/profilepicture.jpeg"
                  names="user"
                />
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
      <div className="w-full max-w-full overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 w-full text-black rounded">
          <textarea
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full md:flex-grow p-2 max-h-60 border bg-gray-200 rounded-md resize-none"
            rows={1}
          />
          <div className="mt-2 md:mt-0 md:flex-shrink-0 w-full md:w-auto">
            <Button
              variant="modebutton"
              className="w-full md:w-auto"
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
