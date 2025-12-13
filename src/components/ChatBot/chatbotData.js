// src/components/chatbotData.js

export const aritraData = {
  resume: "Here is the link to my updated resume: [https://drive.google.com/file/d/1cIEl4429QK_iqiJ7xeUBnVaSuGWSRXYW/view?usp=sharing]",
  education: "A Computer Science & Engineering student (2021-2025) passionate about building dynamic, user-friendly web applications.",
  techSkills: "My technical stack includes:HTML,CSS,JavaScript, React, Node.js,EXPRESS,MONGOSE and SQL.",
  softSkills: "My key soft skills are problem-solving, team collaboration, and adaptability.",
  projects: "I have worked on several projects, including this portfolio,Salon Appointment Management Web App and an Infinity Insurance Solutions.",
  about: "Hi! I am Aritra, a passionate Full Stack Developer based in India, focused on building scalable web applications.",
  certificates:"Java Programming – Great Learning,Full Stack Development – Great Learning"
};

export const initialOptions = [
  { text: "Hey, know about Aritra", action: "show_menu" },
  { text: "Other / Chat with AI", action: "enable_chat" }
];

export const menuOptions = [
  { text: "About Aritra", key: "about" },
  { text: "Aritra's Updated Resume", key: "resume" },
  { text: "Education Background", key: "education" },
  { text: "Technical Skills", key: "techSkills" },
  { text: "Soft Skills", key: "softSkills" },
  { text: "Projects", key: "projects" },
  {text:"Certificates",key:"certificates"},
  { text: "Other Questions", action: "enable_chat" }
];