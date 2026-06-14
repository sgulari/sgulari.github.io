import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './AiChatWidget.css';

const RESPONSES = [
  { keywords: ['capital one', 'work', 'experience', 'job'], text: 'At Capital One, Sainath scaled an engineering squad of 8+ engineers, orchestrated a cloud migration across 20+ teams with zero downtime, and modernized a banking core processing 10k TPS!' },
  { keywords: ['skill', 'tech', 'stack', 'language', 'java', 'aws'], text: 'Sainath is an expert in Java, Python, Go, and Spring Boot. On the cloud side, he holds multiple AWS certifications and is a Certified Kubernetes Developer.' },
  { keywords: ['ai', 'claude', 'mcp', 'copilot'], text: 'He spearheaded the development of custom Claude AI capabilities (MCP) for his team, automating technical support for over 1,000+ internal users.' },
  { keywords: ['hi', 'hello', 'hey'], text: 'Hello! I am Sainath\'s AI assistant. Ask me anything about his experience, skills, or projects!' },
  { keywords: ['contact', 'email', 'hire', 'reach'], text: 'You can reach Sainath directly at saigoud1000@gmail.com, or use the Contact form at the bottom of the page!' }
];

const getResponse = (input) => {
  const lowerInput = input.toLowerCase();
  const match = RESPONSES.find(r => r.keywords.some(k => lowerInput.includes(k)));
  return match ? match.text : 'I am a simple simulated AI assistant! Try asking me about Sainath\'s "skills", his work at "Capital One", or his "AI" experience.';
};

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Hi! I am Sainath\'s AI assistant. Ask me about his experience!', sender: 'ai' }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    setTimeout(() => {
      const aiResponse = { text: getResponse(userMsg.text), sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    }, 600);
  };

  return (
    <div className="ai-chat-container">
      {isOpen ? (
        <div className="ai-chat-window glass-card">
          <div className="ai-chat-header">
            <h4>Resume Assistant</h4>
            <button className="icon-btn" onClick={() => setIsOpen(false)}><X size={18}/></button>
          </div>
          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="ai-chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              placeholder="Ask me anything..." 
            />
            <button type="submit" className="icon-btn"><Send size={18}/></button>
          </form>
        </div>
      ) : (
        <button className="ai-chat-toggle" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default AiChatWidget;
