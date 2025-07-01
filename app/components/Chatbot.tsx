'use client';
import Text from '@/app/widget/Text';
import Images from '@/app/widget/Images';
import React, { useState } from 'react';
import Button from '@/app/widget/Button';
type prop={
  open:boolean;
};
const Chatbot: React.FC<prop> = ({ open }) => {
  if (!open) return null;
  const [message, setMessage] = useState('');
  //const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<
    { sender: 'user' | 'bot'; text: string }[]
  >([]);

  const handleSend = async () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text: message }]);

    const userText = message; 
    setMessage(''); 
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();
      const botText = data.reply;
      console.log("reply",data)

      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    
    <div className="fixed bottom-20 right-5 bg-gray-100 dark:bg-black p-4 shadow-xl border rounded-xl w-2/3 h-2/3 flex flex-col justify-between">
      <div className="text-center w-full border-b-2 border-black dark:border-white mb-2">
        <Text variant="heading2" className="text-black dark:text-white">Chatbot</Text>
      </div>
      <div className="flex-grow overflow-y-auto text-black dark:text-white mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="flex items-start gap-2 mb-4">
            <Images
              variant="profileicon"
              image={msg.sender === 'user' ? '/profilepicture.jpeg' : '/Aiicon.jpg'}
              names={msg.sender}
            />
            <Text className="dark:text-white">{msg.text}</Text>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-x-5 text-black rounded">
        <textarea
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-7/8 p-2 max-h-60 border bg-gray-200 sm:"
          rows={2}
        />
        <Button
          variant="modebutton"
          className="bottom-4 right-3 mb-3"
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
