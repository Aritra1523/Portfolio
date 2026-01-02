// src/components/chatbotData.js

export const aritraData = {
  resume:
    "Sure! 😊 You can check out my updated resume here: \nhttps://drive.google.com/file/d/1cIEl4429QK_iqiJ7xeUBnVaSuGWSRXYW/view?usp=sharing",

  education:
    "I’m currently pursuing B.Tech in Computer Science & Engineering (2021–2025). I really enjoy learning new technologies and building practical, real-world web applications.",

  techSkills:
    "I mostly work with HTML, CSS, and JavaScript. On the framework side, I use React for frontend and Node.js with Express for backend. I also have experience with MongoDB and SQL databases.",

  softSkills:
    "Apart from technical skills, I’m good at problem-solving, working in a team, adapting to new challenges, and communicating clearly.",

  projects:
    "I’ve built several projects such as my personal portfolio website, a Salon Appointment Management Web App, and an Insurance Management system called *Infinity Insurance Solutions*.",

  about:
    "Hi 👋 I’m Aritra Das, a passionate Full Stack Developer from India. I love creating scalable, user-friendly web applications and continuously improving my skills.",

  certificates:
    "I’ve completed certifications like *Java Programming* and *Full Stack Development* from Great Learning."
};

export const initialOptions = [
  { text: "👋 Tell me about Aritra", action: "show_menu" },
  { text: "🤖 Chat with AI", action: "enable_chat" }
];

export const menuOptions = [
  { text: "🙋 About Aritra", key: "about" },
  { text: "📄 View Resume", key: "resume" },
  { text: "🎓 Education", key: "education" },
  { text: "💻 Technical Skills", key: "techSkills" },
  { text: "🤝 Soft Skills", key: "softSkills" },
  { text: "🛠️ Projects", key: "projects" },
  { text: "📜 Certificates", key: "certificates" },
  { text: "❓ Ask Something Else", action: "enable_chat" }
];
