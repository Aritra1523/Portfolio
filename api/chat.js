import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Vercel Serverless Function
 * URL: /api/chat
 * Method: POST
 */
export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1️⃣ Check API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY not found in environment variables",
      });
    }

    // 2️⃣ Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // 3️⃣ Read message from frontend
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    // 4️⃣ Generate AI response
    const result = await model.generateContent(message);
    const response = result.response.text();

    // 5️⃣ Send back response
    return res.status(200).json({
      reply: response,
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: "Failed to generate response",
    });
  }
}
