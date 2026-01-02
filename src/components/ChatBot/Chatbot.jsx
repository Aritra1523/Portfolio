import React, { useState, useRef, useEffect } from 'react';
import { aritraData, initialOptions, menuOptions } from './chatbotData';
import { MessageCircle, X, Send } from 'lucide-react';
import './Chatbot.css';
//import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize API
//const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
//const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 

// Initialize Sound
const notificationSound = new Audio("/sound-pop.mp3");

// Helper function to play sound safely
const playSound = () => {
  // Reset sound so it can play rapidly
  notificationSound.currentTime = 0; 
  
  // Try to play
  const playPromise = notificationSound.play();

  // If the browser returns a promise (modern browsers do), catch the error
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      // We explicitly ignore the error here.
      // This suppresses the "user didn't interact" red error in the console.
      // console.log("Audio blocked: User has not interacted with page yet.");
    });
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [chatMode, setChatMode] = useState('init'); 
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    if (!isOpen) {
        playSound(); // Play when opening
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true);
    
    // This will try to play. If blocked, the new playSound function hides the error.
    playSound(); 

    const timer = setTimeout(() => {
        if (chatMode === 'init') { 
            setIsOpen(false);
        }
    }, 5000);

    return () => clearTimeout(timer);
  }, [chatMode]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, chatMode, isOpen]);

  const handleOptionClick = (option) => {
    playSound(); // Play sound when clicking a button

    const newMessages = [...messages, { sender: 'user', text: option.text }];
    setMessages(newMessages);

    if (option.action === 'show_menu') {
      setChatMode('menu');
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Sure! What would you like to know?' }]);
        playSound(); // Play sound when bot replies with menu
      }, 500);
    } 
    else if (option.action === 'enable_chat') {
      setChatMode('chat');
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Okay, ask me anything! (AI Mode Activated)' }]);
        playSound();
      }, 500);
    } 
    else if (option.key) {
      const answer = aritraData[option.key];
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: answer }]);
        playSound();
      }, 500);
    }
  };

  const handleSend = async () => {
  if (!userInput.trim()) return;

  playSound();

  setMessages(prev => [...prev, { sender: "user", text: userInput }]);
  setIsTyping(true);
  setUserInput("");

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userInput,
        context: aritraData,
      }),
    });

    const data = await response.json();

    setMessages(prev => [
      ...prev,
      { sender: "bot", text: data.reply },
    ]);

    playSound();
  } catch (err) {
    setMessages(prev => [
      ...prev,
      { sender: "bot", text: "Server error. Please try again." },
    ]);
  } finally {
    setIsTyping(false);
  }
};


  return (
    <div className="chatbot-wrapper">
      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Aritra's Assistant</h3>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            
            {isTyping && <div className="message bot typing">Typing...</div>}
            <div ref={messagesEndRef} />

            <div className="options-container">
              {chatMode === 'init' && (
                <div className="button-group">
                  {initialOptions.map((opt, i) => (
                    <button key={i} onClick={() => handleOptionClick(opt)}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}

              {chatMode === 'menu' && (
                <div className="chip-group">
                  {menuOptions.map((opt, i) => (
                    <button key={i} className="chip" onClick={() => handleOptionClick(opt)}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {chatMode === 'chat' && (
            <div className="chat-input-area">
              <input 
                type="text" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
              />
              <button onClick={handleSend}><Send size={18} /></button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;