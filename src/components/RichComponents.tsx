import React from 'react';
import { Terminal, Cloud, Cpu, Layout } from 'lucide-react';

export const SkillsComponent: React.FC = () => {
  const skillCategories = [
    {
      title: "Core & Backend",
      icon: <Terminal className="text-green-400" />,
      skills: ["C# .NET", "Python", "Java", "Microservices", "ASP.NET Core"]
    },
    {
      title: "AI & Data",
      icon: <Cpu className="text-purple-400" />,
      skills: ["LLMs", "Neural Networks", "GANs", "SQL", "PostgreSQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-blue-400" />,
      skills: ["GCP", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Frontend",
      icon: <Layout className="text-orange-400" />,
      skills: ["Blazor", "React", "TypeScript", "HTML/CSS"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg hover:border-accent/50 transition-colors dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
          <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold dark:text-slate-200 light:text-slate-800">
            {cat.icon}
            {cat.title}
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, sIdx) => (
              <span key={sIdx} className="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded font-mono border border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 light:bg-slate-300 light:text-slate-800 light:border-slate-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ContactComponent: React.FC = () => {
  return (
    <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg my-4 max-w-md dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
      <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 dark:text-white dark:border-slate-700 light:text-slate-900 light:border-slate-300">Contact Information</h3>
      <div className="space-y-3 font-mono text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">Email:</span>
          <a href="mailto:patrick@broesamle.dev" className="text-accent hover:underline">patrick@broesamle.dev</a>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">LinkedIn:</span>
          <a href="https://de.linkedin.com/in/patrick-br%C3%B6samle-a13916378" target="_blank" rel="noreferrer" className="text-accent hover:underline">Profile</a>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">GitHub:</span>
          <a href="https://github.com/pbfman/" target="_blank" rel="noreferrer" className="text-accent hover:underline">@pbfman</a>
        </div>
      </div>
    </div>
  );
};

export const AboutComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-900/30 p-6 rounded-xl border border-slate-800 my-4 dark:bg-slate-900/30 dark:border-slate-800 light:bg-slate-200/30 light:border-slate-300">
      <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-accent/50 shadow-lg shadow-accent/20">
        <img src="https://github.com/pbfman.png" alt="Patrick" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2 dark:text-white light:text-slate-900">Patrick Brösamle</h2>
        <p className="text-accent font-mono text-sm mb-4">Software Engineer • AI Enthusiast • Backend Specialist</p>
        <p className="text-slate-300 leading-relaxed text-sm dark:text-slate-300 light:text-slate-700">
          I specialize in building robust backends, microservices, and integrating AI solutions. 
          My passion lies in solving complex problems using .NET, Python, and Cloud technologies.
          Currently exploring the frontiers of Large Language Models and Generative AI.
        </p>
      </div>
    </div>
  );
};

export const ProjectsComponent: React.FC = () => {
  return (
    <div className="my-4 space-y-4">
      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://couponvault.de" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              CouponVault.de
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A comprehensive platform for discovering and sharing the best deals and coupons.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>Web App</span>
          <span>Deals</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">Portfolio Terminal</h3>
          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">Active</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A React-based interactive terminal portfolio featuring a local mock-LLM chat interface.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
        </div>
      </div>
      
      <div className="text-center p-2">
        <a href="https://github.com/pbfman/" target="_blank" rel="noreferrer" className="text-accent hover:underline text-sm">
          View more on GitHub →
        </a>
      </div>
    </div>
  );
};
