import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Terminal } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center p-6 lg:p-12">
      <div className="space-y-8">
        {/* Avatar & Name */}
        <div className="space-y-4">
          <div className="relative w-32 h-32 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-accent blur-2xl opacity-20 rounded-full"></div>
            <img 
              src="https://github.com/pbfman.png" 
              alt="Patrick Brösamle" 
              className="relative w-full h-full object-cover rounded-2xl border-2 border-slate-700 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-slate-900 p-2 rounded-lg border border-slate-700">
              <Terminal size={20} className="text-accent" />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Patrick Brösamle
            </h1>
            <h2 className="text-xl text-accent mt-2 font-medium">
              Software Engineer
            </h2>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-400 leading-relaxed max-w-md">
          Specializing in .NET, Backend Architecture, and AI Integration. 
          Building scalable microservices and exploring the frontiers of Large Language Models.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <MapPin size={18} className="text-accent" />
            <span>Germany</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <Code2 size={18} className="text-accent" />
            <span>Full Stack & AI</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <a 
            href="https://github.com/pbfman/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all hover:scale-110 border border-slate-700"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://de.linkedin.com/in/patrick-br%C3%B6samle-a13916378" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-xl transition-all hover:scale-110 shadow-lg shadow-blue-900/20"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:patrick@broesamle.dev"
            className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all hover:scale-110 border border-slate-700"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
