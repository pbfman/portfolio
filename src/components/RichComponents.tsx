import React from 'react';
import { Terminal, Cloud, Cpu, Layout, ExternalLink } from 'lucide-react';

export const SkillsComponent: React.FC = () => {
  const skillCategories = [
    {
      title: "Core & Backend",
      icon: <Terminal className="text-green-400" />,
      skills: ["C# .NET", "EF Core", "ASP.NET Core", "Python", "Java", "Microservices", "REST"]
    },
    {
      title: "AI & Data",
      icon: <Cpu className="text-purple-400" />,
      skills: ["LLMs", "Google Gemini", "OpenAI GPT", "Prompt Engineering", "Neural Networks", "GANs", "Image Generation", "SQL", "PostgreSQL"]
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
            <a href="https://couponvault.de" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              CouponVault
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A comprehensive platform for saving, organizing and sharing the best deals and coupons.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>Android App</span>
          <span>React Native</span>
          <span>Typescript</span>
          <span>Google Gemini</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://github.com/pbfman/portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              Portfolio Terminal
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A React-based interactive terminal portfolio.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://avantgarde-labs.com/de/case-studies/zz-tool-bei-fsd/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              ZZ-Tool
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          Maintained and enhanced a legacy tool with AI (.NET Framework) while developing new microservices to replace it with modern features and technologies.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>C# .NET</span>
          <span>ASP.NET Core</span>
          <span>EF Core</span>
          <span>REST</span>
          <span>AI</span>
          <span>Python</span>
          <span>Microservices</span>
          <span>Kubernetes</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://avantgarde-labs.com/de/case-studies/otx-ninja-bei-fsd/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              OTX-Ninja
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A web application for configuring OTX vehicle diagnostic XML files, integrating data from ODX.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>React</span>
          <span>Python</span>
          <span>Django</span>
          <span>ODX</span>
          <span>OTX</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://avantgarde-labs.com/de/case-studies/odx-ninja-bei-fsd/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              ODX-Ninja
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A data transformation tool that aggregates, adapts, and converts individual vehicle diagnostic data from basic structured formats into the standardized ODX XML format.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>Python</span>
          <span>XSD/XML</span>
          <span>ODX</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            Dresden Science Calendar App
          </h3>
          <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Archived</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          A Windows 8 app integrating the Dresden Science Calendar via XML API, featuring native calendar synchronization.
        </p>
        <div className="mt-3 flex gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>C# .NET</span>
          <span>REST API</span>
          <span>Windows 8</span>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg dark:bg-slate-900/50 dark:border-slate-700 light:bg-slate-200/50 light:border-slate-300">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white dark:text-white light:text-slate-900">
            <a href="https://dresden-science-calendar.de/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:underline transition-colors">
              Dresden Science Calendar
              <ExternalLink size={16} />
            </a>
          </h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded dark:text-green-400 light:text-green-600">Live</span>
        </div>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400 light:text-slate-600">
          An online calendar for aggregating and displaying scientific events in Dresden.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
          <span>PHP</span>
          <span>CakePHP</span>
          <span>Perl</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
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
