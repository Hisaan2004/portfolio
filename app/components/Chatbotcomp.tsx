"use client";
import React, { useState } from "react";
import Aiicon from "@/app/components/Aiicon";
import Chatbot from "@/app/components/Chatbot";
const Chatbotcomp = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Aiicon onClick={() => setopen((prev) => !prev)} />
      {open && <Chatbot open={open} />}
    </div>
  );
};

export default Chatbotcomp;
