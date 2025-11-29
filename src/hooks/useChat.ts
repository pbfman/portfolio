import { useState, useCallback } from 'react';
import { Message } from '../types';
import { knowledgeBase, defaultResponse } from '../data/knowledgeBase';
import { fileSystem, FileSystemItem } from '../data/fileSystem';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'text',
      text: "Welcome to Patrick Brösamle's Portfolio Terminal v1.0.0\nSystem initialized.\n\nType `help` to see available commands.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentPath, setCurrentPath] = useState<string[]>(['home', 'visitor']);

  // Helper to get item at path
  const getItemAtPath = (path: string[]): FileSystemItem | null => {
    let current: FileSystemItem = fileSystem;
    for (const part of path) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    return current;
  };

  // Helper to resolve path string to array
  const resolvePath = (pathStr: string): string[] => {
    if (pathStr === '/') return [];
    if (pathStr === '~') return ['home', 'visitor'];
    
    let parts = pathStr.split('/').filter(p => p);
    let newPath = pathStr.startsWith('/') ? [] : [...currentPath];

    for (const part of parts) {
      if (part === '.') continue;
      if (part === '..') {
        if (newPath.length > 0) newPath.pop();
      } else {
        newPath.push(part);
      }
    }
    return newPath;
  };

  const processMessage = useCallback(async (text: string) => {
    const trimmedText = text.trim();
    const lowerText = trimmedText.toLowerCase();
    const args = trimmedText.split(' ');
    const command = args[0].toLowerCase();

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'text',
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    // Handle clear command immediately
    if (command === 'clear' || command === 'cls') {
      setMessages([]);
      return;
    }

    setIsTyping(true);

    // Simulate processing delay
    const delay = Math.min(Math.max(text.length * 10, 200), 800);
    
    setTimeout(() => {
      let responseMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'text',
        sender: 'bot',
        timestamp: new Date()
      };

      // --- Terminal Commands ---

      if (command === 'ls' || command === 'll') {
        const targetPath = args[1] ? resolvePath(args[1]) : currentPath;
        const item = getItemAtPath(targetPath);

        if (item && item.type === 'directory') {
          if (item.permissions === '-') {
             responseMsg.text = `ls: cannot open directory '${args[1] || '.'}': Permission denied`;
          } else {
            const contents = Object.keys(item.children || {}).map(name => {
                const child = item.children![name];
                const isDir = child.type === 'directory';
                return isDir ? `${name}/` : name;
            }).join('\n');
            responseMsg.text = contents || '(empty)';
          }
        } else {
          responseMsg.text = `ls: cannot access '${args[1] || '.'}': No such file or directory`;
        }
      }

      else if (command === 'cd') {
        const targetPathStr = args[1] || '~';
        const newPath = resolvePath(targetPathStr);
        const item = getItemAtPath(newPath);

        if (item && item.type === 'directory') {
           if (item.permissions === '-') {
             responseMsg.text = `cd: permission denied: ${targetPathStr}`;
           } else {
             setCurrentPath(newPath);
             responseMsg.text = ''; // No output on success
             // Don't add empty message
             setIsTyping(false);
             return; 
           }
        } else {
          responseMsg.text = `cd: no such file or directory: ${targetPathStr}`;
        }
      }

      else if (command === 'pwd') {
        responseMsg.text = '/' + currentPath.join('/');
      }

      else if (command === 'cat') {
        if (!args[1]) {
            responseMsg.text = 'cat: missing file operand';
        } else {
            const targetPath = resolvePath(args[1]);
            const item = getItemAtPath(targetPath);
            
            if (item && item.type === 'file') {
                if (item.permissions === '-') {
                    responseMsg.text = `cat: ${args[1]}: Permission denied`;
                } else {
                    responseMsg.text = item.content;
                }
            } else if (item && item.type === 'directory') {
                responseMsg.text = `cat: ${args[1]}: Is a directory`;
            } else {
                responseMsg.text = `cat: ${args[1]}: No such file or directory`;
            }
        }
      }

      else if (command === 'sudo') {
        const sudoCommand = args.slice(1).join(' ');
        if (sudoCommand === 'rm -rf /') {
            const steps = [
                "Access granted. Root privileges acquired.",
                "rm: removing directory '/'",
                "rm: removing '/bin'",
                "rm: removing '/usr'",
                "rm: removing '/etc'",
                "rm: removing '/home/visitor'",
                "rm: removing '/var'",
                "CRITICAL ERROR: System files missing.",
                "Kernel panic - not syncing: Attempted to kill init!",
                "Rebooting system..."
            ];

            let currentDelay = 0;
            
            steps.forEach((step, i) => {
                currentDelay += 800;
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now().toString() + i,
                        type: 'text',
                        text: step,
                        sender: 'bot',
                        timestamp: new Date()
                    }]);
                }, currentDelay);
            });

            setTimeout(() => {
                setMessages([{
                    id: Date.now().toString(),
                    type: 'text',
                    text: "Welcome to Patrick Brösamle's Portfolio Terminal v1.0.0\nSystem initialized.\n\nType `help` to see available commands.",
                    sender: 'bot',
                    timestamp: new Date()
                }]);
                setCurrentPath(['home', 'visitor']);
                setIsTyping(false);
            }, currentDelay + 2500);

            return;
        }
        responseMsg.text = "Nice try! But you don't have root privileges here. 😉\nThis incident will be reported to Santa Claus.";
      }

      else if (command === 'su') {
        responseMsg.text = "Password: *******\nSorry, authentication failed. No root for you!";
      }

      else if (command === 'whoami') {
        responseMsg.text = "visitor";
      }

      else if (command === 'rm') {
        if (args.includes('-rf') && (args.includes('/') || args.includes('*'))) {
            responseMsg.text = "I'm sorry, Dave. I'm afraid I can't do that.";
        } else {
            responseMsg.text = "rm: cannot remove files: Read-only file system";
        }
      }

      else if (command === 'vi' || command === 'vim' || command === 'nano') {
        responseMsg.text = "I haven't installed a text editor in this browser terminal yet.\nBut I prefer VS Code and JetBrains IDEs anyway!";
      }
      
      else if (command === 'help') {
          responseMsg.text = "Available commands:\n\n" +
          "  about     - Who am I?\n" +
          "  skills    - My technical stack\n" +
          "  projects  - What I've built\n" +
          "  contact   - Get in touch";
      }

      // --- Fallback to Knowledge Base (Natural Language) ---
      else {
        // Find best match
        let bestMatch = null;
        let maxScore = 0;

        for (const entry of knowledgeBase) {
            let score = 0;
            for (const keyword of entry.keywords) {
            if (lowerText.includes(keyword)) {
                score += 1;
            }
            }
            
            if (score > 0 && (entry.priority || 0) + score > maxScore) {
            maxScore = (entry.priority || 0) + score;
            bestMatch = entry;
            }
        }

        if (bestMatch) {
            responseMsg.type = bestMatch.responseType;
            responseMsg.text = bestMatch.text;
        } else {
            responseMsg.text = defaultResponse;
        }
      }

      setMessages(prev => [...prev, responseMsg]);
      setIsTyping(false);
    }, delay);

  }, [currentPath]);

  const tabComplete = (input: string): string => {
    const args = input.split(' ');
    const isNewArg = input.endsWith(' ');
    
    if (isNewArg && args.length > 1) return input;

    const currentWord = args[args.length - 1];

    // Command completion
    if (args.length === 1) {
      const commands = ['help', 'about', 'skills', 'projects', 'contact', 'ls', 'cd', 'cat', 'pwd', 'clear', 'sudo', 'whoami', 'rm', 'vi', 'vim', 'nano'];
      const matches = commands.filter(cmd => cmd.startsWith(currentWord));
      
      if (matches.length === 1) {
        return matches[0] + ' ';
      }
      return input;
    }

    // File completion
    const command = args[0];
    if (['ls', 'cd', 'cat', 'rm', 'vi', 'vim', 'nano'].includes(command)) {
        let searchPath: string[] = [];
        let partialName = '';

        if (currentWord.includes('/')) {
            const lastSlashIndex = currentWord.lastIndexOf('/');
            let dirPart = currentWord.substring(0, lastSlashIndex);
            partialName = currentWord.substring(lastSlashIndex + 1);
            
            if (dirPart === '' && currentWord.startsWith('/')) {
                dirPart = '/';
            }
            searchPath = resolvePath(dirPart);
        } else {
            searchPath = [...currentPath];
            partialName = currentWord;
        }

        const dirItem = getItemAtPath(searchPath);
        if (dirItem && dirItem.type === 'directory' && dirItem.children) {
            const candidates = Object.keys(dirItem.children);
            const matches = candidates.filter(name => name.startsWith(partialName));

            if (matches.length === 1) {
                const match = matches[0];
                const item = dirItem.children[match];
                const isDir = item.type === 'directory';
                
                let completedPath = '';
                if (currentWord.includes('/')) {
                    const lastSlashIndex = currentWord.lastIndexOf('/');
                    completedPath = currentWord.substring(0, lastSlashIndex + 1) + match;
                } else {
                    completedPath = match;
                }

                if (isDir) completedPath += '/';
                
                args[args.length - 1] = completedPath;
                return args.join(' ');
            }
        }
    }

    return input;
  };

  return {
    messages,
    isTyping,
    sendMessage: processMessage,
    currentPath: '/' + currentPath.join('/'),
    tabComplete
  };
};
