// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import cors from "cors";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Gemini setup
// const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
// console.log("KEY:", process.env.REACT_APP_GEMINI_API_KEY?.slice(0, 6));
// console.log("GEMINI KEY:", process.env.REACT_APP_GEMINI_API_KEY ? "Found ✅" : "Not found ❌");


// const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
// });

// // Chat API
// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message, context } = req.body;

//     const prompt = `
// You are a professional portfolio assistant for Aritra Das.

// Context:
// ${JSON.stringify(context)}

// User Question:
// ${message}
// `;

//     const result = await model.generateContent(prompt);
//     const response = result.response.text();

//     res.json({ reply: response });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ reply: "AI service unavailable." });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`✅ Backend running on http://localhost:${PORT}`)
// );
