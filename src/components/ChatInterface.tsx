import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { SkillsComponent, ContactComponent, AboutComponent, ProjectsComponent } from './RichComponents';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => void;
  messages: Message[];
  isTyping: boolean;
  currentPath: string;
  onTabComplete: (input: string) => string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSendMessage, messages, isTyping, currentPath, onTabComplete }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-focus input on click anywhere
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Scroll to bottom on window resize (handles mobile keyboard)
  useEffect(() => {
    const handleResize = () => {
      // Small delay to allow layout to update
      setTimeout(scrollToBottom, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const renderMessageContent = (msg: Message) => {
    switch (msg.type) {
      case 'skills':
        return <SkillsComponent />;
      case 'contact':
        return <ContactComponent />;
      case 'about':
        return <AboutComponent />;
      case 'projects':
        return <ProjectsComponent />;
      case 'text':
      default:
        return (
          <div className="whitespace-pre-wrap text-slate-300 leading-relaxed dark:text-slate-300 light:text-slate-700">
            {msg.text}
          </div>
        );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const completed = onTabComplete(input);
      setInput(completed);
    }
  };

  return (
    <div className="font-mono text-sm md:text-base max-w-4xl mx-auto w-full h-full flex flex-col">
      {/* Terminal Header */}
      <div className="p-4 md:p-8 pb-0 md:pb-0 shrink-0">
        <div className="mb-8 text-slate-500 text-xs md:text-sm border-b border-slate-800 pb-2 hidden md:block">
          <p>Patrick Brösamle (pbfman) - Portfolio Terminal</p>
          <p>Last login: {new Date().toUTCString()}</p>
        </div>
      </div>

      {/* Output Area */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 md:px-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="space-y-4 pb-4">
          {messages.map((msg) => (
            <div key={msg.id} className="animate-in fade-in duration-300">
              {msg.sender === 'user' ? (
                <div className="flex gap-2 text-slate-400 mt-6 mb-2 break-words dark:text-slate-400 light:text-slate-600">
                  <span className="text-green-500 shrink-0">visitor@broesamle.dev:{currentPath === '/home/visitor' ? '~' : currentPath}$</span>
                  <span className="text-white dark:text-white light:text-slate-900">{msg.text}</span>
                </div>
              ) : (
                <div className="ml-0 md:ml-4 border-l-2 border-slate-800 pl-4 py-1 overflow-x-auto dark:border-slate-800 light:border-slate-300">
                  <span className="text-accent text-xs font-bold mb-1 block opacity-50">[SYSTEM_RESPONSE]</span>
                  {renderMessageContent(msg)}
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="ml-0 md:ml-4 border-l-2 border-slate-800 pl-4 py-1">
               <span className="text-accent text-xs font-bold mb-1 block opacity-50">[PROCESSING]</span>
               <span className="inline-block w-2 h-4 bg-accent animate-pulse"></span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 border-t border-slate-800 bg-slate-950/90 backdrop-blur-sm dark:bg-slate-950/90 light:bg-slate-100/90 light:border-slate-300 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 pb-6 md:pb-6">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-500 shrink-0 text-xs md:text-sm">visitor@broesamle.dev:{currentPath === '/home/visitor' ? '~' : currentPath}$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-600 caret-accent min-w-0 dark:text-white light:text-slate-900 transition-colors duration-300"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

