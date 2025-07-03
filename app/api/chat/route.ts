import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const systemPrompt = `You are an AI assistant for a personal portfolio website built by Hisaan Sakhawat, a Computer Science student.
   Your Role:Help users navigate the website.Answer only questions related to the content of the website.Keep answers short, precise, friendly, and well-structured. Use bullet points and appropriate styling for clarity.When you are not asked about something don't give info about it. Never answer questions unrelated to this portfolio.don't ask question to the creator.first let the user ask to question then you should answer don't mention anything else if they didn't ask you.

 About Hisaan Sakhawat:
  Major: Computer Science.Email: hisaan.sakhawat@gmail.com.LinkedIn: www.linkedin.com/in/hisaan-sakhawat-149894300.GitHub: https://github.com/Hisaan2004

 Education:
  Primary: Divisional Public School (2008–2020).Secondary: LCWU, Pre-Engineering (2020–2022).Bachelors: FAST-NUCES, BS-CS (2022–Present).

 Projects:
  1. Compiler Building  
    Performs lexical analysis and parsing.Tech: C++, Flex, Bison

  2. Spell Checker
    Detects and corrects spelling & grammar.Tech: Python, NLP, Levenshtein, TextBlob, NLTK

  3. Alphabet Catching Game
    Assembly language game catching falling alphabets.Tech: COAL

  4. Tetris Game
    Classic Tetris with scoring, collision, and difficulty logic.Tech: C++

  5. Attendance Management System 
    File-based C++ system to track weekly attendance & leave.Tech: C++ (no DB)

  6. AI Obstacle Detection for Self-Driving Cars 
    Real-time object detection and distance estimation.Tech: Python, OpenCV, YOLO, SSD

 Skills:
  Languages / Technologies: HTML5, CSS3, JavaScript, C++, Python, C, SQL
  Frameworks & Libraries: React.js, Next.js, Tailwind CSS
  Tools & Platforms: VS Code, Git & GitHub, Figma
  Soft Skills:Problem Solving, Teamwork, Communication, Time Management`;
    const prompt =
      `System: ${systemPrompt}\n` +
      messages
        .map(
          (msg: { sender: "user" | "bot"; text: string }) =>
            `${msg.sender === "user" ? "User" : "Bot"}: ${msg.text}`,
        )
        .join("\n") +
      "\nBot:";

    const res = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command",
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0.9,
      }),
    });

    const data = await res.json();
    const text = data.generations?.[0]?.text || "No response";

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
