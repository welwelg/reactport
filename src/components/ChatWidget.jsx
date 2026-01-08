import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const hasGreeted = useRef(false);

  // YOUR WEBHOOK URL
  const WEBHOOK_URL = "https://hook.eu1.make.com/2tjl6ynseij1fwr56uuh6uhd74vheet4"; 

  // Proactive Tooltip Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Human Greeting Timer
  useEffect(() => {
    if (isOpen && !hasGreeted.current) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          { 
            id: 1, 
            sender: 'bot', 
            text: "Hello! I'm WelTechCode. Ask me anything about Rogelio's projects or skills. 🚀" 
          }
        ]);
        setIsLoading(false);
        hasGreeted.current = true;
      }, 1500);
    }
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMsg = inputValue.trim();
    
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`${WEBHOOK_URL}?message=${encodeURIComponent(userMsg)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: data.reply || "No response from AI." 
      }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: "Oops! I'm having trouble connecting. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end font-sans">
      
      {/* Proactive Tooltip */}
      {!isOpen && showTooltip && (
        <div className="mb-2 mr-2 bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-br-none shadow-xl border border-gray-100 dark:border-gray-700 animate-in slide-in-from-right-5 fade-in duration-500 max-w-[200px]">
          <div className="flex items-center gap-2">
            <span className="relative flex w-3 h-3">
              {/* THEME COLOR Ping animation */}
              <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
              {/* THEME COLOR Static dot */}
              <span className="relative inline-flex w-3 h-3 bg-orange-500 rounded-full"></span>
            </span>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
              Hiring? Ask me about Rogelio!
            </p>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }} 
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="
            mb-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300
            /* MOBILE */ w-[calc(100vw-32px)] h-[60vh]
            /* DESKTOP */ md:w-[380px] md:h-[550px]
        ">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white shadow-md bg-gradient-to-r from-orange-600 to-orange-800">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Bot size={20} />
                {/* Online status border */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-orange-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-sm font-bold tracking-wide">
                  WelTechCode AI <Sparkles size={12} className="text-yellow-300"/>
                </h3>
                {/* Header lighter text  */}
                <p className="text-[10px] text-orange-100 opacity-90">
                  Full Stack & Automation Expert
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 transition rounded-full hover:bg-white/20 active:scale-95">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-950/50 scroll-smooth">
            <div className="flex justify-center">
              <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                WelTechCode AI Assistant is here!
              </span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                
                {/* Bot Avatar */}
                {msg.sender === 'bot' && (
                  <div className="flex items-center justify-center w-6 h-6 mt-1 mr-2 bg-orange-100 rounded-full dark:bg-orange-900 shrink-0">
                    <Bot size={14} className="text-orange-600 dark:text-orange-300"/>
                  </div>
                )}

                {/* User Message Bubble */}
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-orange-600 text-white rounded-br-none' 
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator - THEME DOTS */}
            {isLoading && (
              <div className="flex justify-start duration-300 animate-in fade-in">
                 <div className="flex items-center justify-center w-6 h-6 mt-1 mr-2 bg-orange-100 rounded-full dark:bg-orange-900 shrink-0">
                    <Bot size={14} className="text-orange-600 dark:text-orange-300"/>
                  </div>
                <div className="flex items-center gap-1 p-3 bg-white border border-gray-100 rounded-bl-none shadow-sm rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex gap-2 p-3 bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
            {/* Input Focus Ring - THEME COLOR */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 text-sm text-gray-900 transition-all bg-gray-100 border-transparent dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            {/* Send Button - THEME BG/SHADOW */}
            <button 
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="p-3 text-white transition bg-orange-600 shadow-lg rounded-xl hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shadow-orange-600/20"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button (FAB) - THEME BG/SHADOW */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center text-white transition-all transform bg-orange-600 rounded-full shadow-xl w-14 h-14 hover:bg-orange-700 shadow-orange-600/30 hover:scale-110 active:scale-90"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
        
        {!isOpen && (
          <span className="absolute top-0 right-0 flex w-4 h-4 -mt-1 -mr-1">
            <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-4 h-4 bg-red-500 border-2 border-white rounded-full dark:border-gray-900"></span>
          </span>
        )}
      </button>

    </div>
  );
};

export default ChatWidget;