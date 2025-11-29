import { MessageType } from '../types';

export interface KnowledgeEntry {
  keywords: string[];
  responseType: MessageType;
  text?: string;
  priority?: number;
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'start', 'begin', 'welcome', 'help'],
    responseType: 'text',
    text: "Hello! I am the interactive portfolio terminal of Patrick Brösamle.\n\nAvailable commands/topics:\n- `about`: Who am I?\n- `skills`: Technical expertise\n- `projects`: GitHub & Code\n- `contact`: Contact details\n\nType a command or ask a question to begin.",
    priority: 1
  },
  {
    keywords: ['who', 'patrick', 'about', 'yourself', 'introduction', 'bio'],
    responseType: 'about',
    priority: 2
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technology', 'technologies', 'language', 'framework', 'program', 'c#', '.net', 'ai', 'python'],
    responseType: 'skills',
    priority: 3
  },
  {
    keywords: ['contact', 'email', 'mail', 'reach', 'address', 'linkedin', 'social'],
    responseType: 'contact',
    priority: 3
  },
  {
    keywords: ['github', 'git', 'repo', 'code', 'project', 'work'],
    responseType: 'projects',
    priority: 3
  },
  {
    keywords: ['clear', 'cls'],
    responseType: 'text',
    text: 'CLEAR_COMMAND', // Special flag we'll handle in the hook
    priority: 5
  }
];

export const defaultResponse = "Command not recognized. Try `help`, `about`, `skills`, or `contact`.";
