import React, { useState } from 'react';
import { Github, Linkedin, Mail, Scale, Sun, Moon } from 'lucide-react';
import { LegalModal } from './LegalModal';
import { useTheme } from '../context/ThemeContext';

interface SocialSidebarProps {
  onCommand?: (command: string) => void;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ onCommand }) => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const { theme } = useTheme();

  const handleThemeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCommand) {
      onCommand('toggle theme');
    }
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/pbfman/",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://de.linkedin.com/in/patrick-br%C3%B6samle-a13916378",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:patrick@broesamle.dev",
      label: "Email"
    }
  ];

  return (
    <>
      <aside className="
        fixed z-40
        top-0 right-0 w-full h-16 border-b backdrop-blur-md
        md:w-20 md:h-full md:border-b-0 md:border-l
        flex md:flex-col items-center justify-center gap-8
        transition-colors duration-300
        bg-slate-100/80 border-slate-300
        dark:bg-slate-950/80 dark:border-slate-800
      ">
        <div className="flex gap-8 items-center md:flex-col md:flex-1 md:justify-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.label === 'Email' ? undefined : "_blank"}
              rel={link.label === 'Email' ? undefined : "noopener noreferrer"}
              className="
                transition-all duration-300 hover:scale-110
                p-2 rounded-lg
                text-slate-600 hover:bg-slate-200/50
                dark:text-slate-400 dark:hover:bg-slate-800/50
                hover:text-accent
              "
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="flex gap-4 md:flex-col md:mb-8">
          <button
            onClick={handleThemeToggle}
            className="
              transition-all duration-300 hover:scale-110
              p-2 rounded-lg
              text-slate-600 hover:bg-slate-200/50
              dark:text-slate-400 dark:hover:bg-slate-800/50
              hover:text-accent
            "
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            onClick={() => setIsLegalOpen(true)}
            className="
              transition-all duration-300 hover:scale-110
              p-2 rounded-lg
              text-slate-600 hover:bg-slate-200/50
              dark:text-slate-400 dark:hover:bg-slate-800/50
              hover:text-accent
            "
            aria-label="Impressum"
            title="Impressum"
          >
            <Scale size={24} />
          </button>
        </div>
      </aside>

      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </>
  );
};
