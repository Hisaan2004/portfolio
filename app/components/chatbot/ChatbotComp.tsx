"use client";
import React, { useState } from "react";
import AiIcon from "@/app/widget/AiIcon";
import Chatbot from "@/app/components/chatbot/ChatBot";
function ChatbotComp() {
  const [open, setopen] = useState(false);
  return (
    <div>
      <AiIcon onClick={() => setopen((prev) => !prev)} />
      {open && <Chatbot open={open} />}
    </div>
  );
}

export default ChatbotComp;
