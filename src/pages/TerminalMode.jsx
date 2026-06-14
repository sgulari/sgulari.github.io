import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TerminalMode.css';

const COMMANDS = {
  help: 'Available commands: help, whoami, clear, exit, cat resume.md, ls',
  whoami: 'Sainath Gulari - Engineering Leader & Cloud Architect',
  ls: 'projects/   skills/   experience/   resume.md',
  'cat resume.md': '10+ years leading mission-critical fintech systems (55M+ accounts, 10k+ TPS). Specialist in cloud-native modernization.'
};

const TerminalMode = () => {
  const [history, setHistory] = useState([
    { text: 'SainathOS v1.0.0', type: 'system' },
    { text: 'Type "help" for a list of commands. Type "exit" to return to GUI.', type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;
    
    const newHistory = [...history, { text: `user@sainath:~$ ${input}`, type: 'input' }];
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd === 'exit') {
      navigate('/');
    } else if (COMMANDS[cmd]) {
      newHistory.push({ text: COMMANDS[cmd], type: 'output' });
      setHistory(newHistory);
    } else {
      newHistory.push({ text: `command not found: ${cmd}`, type: 'error' });
      setHistory(newHistory);
    }
    setInput('');
  };

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        {history.map((line, idx) => (
          <div key={idx} className={`term-line ${line.type}`}>{line.text}</div>
        ))}
        <form onSubmit={handleCommand} className="term-input-line">
          <span className="term-prompt">user@sainath:~$</span>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            autoFocus 
            className="term-input" 
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default TerminalMode;
