import React, { useState } from 'react';
import { Github, Linkedin, Mail, Scale } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const SocialSidebar: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

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
        top-0 right-0 w-full h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md
        md:w-20 md:h-full md:border-b-0 md:border-l
        flex md:flex-col items-center justify-center gap-8
      ">
        <div className="flex gap-8 items-center md:flex-col md:flex-1 md:justify-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.label === 'Email' ? undefined : "_blank"}
              rel={link.label === 'Email' ? undefined : "noopener noreferrer"}
              className="
                text-slate-400 hover:text-accent transition-all duration-300 hover:scale-110
                p-2 rounded-lg hover:bg-slate-800/50
              "
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <button
          onClick={() => setIsLegalOpen(true)}
          className="
            text-slate-400 hover:text-accent transition-all duration-300 hover:scale-110
            p-2 rounded-lg hover:bg-slate-800/50
            md:mb-8
          "
          aria-label="Impressum"
          title="Impressum"
        >
          <Scale size={24} />
        </button>
      </aside>

      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </>
  );
};
