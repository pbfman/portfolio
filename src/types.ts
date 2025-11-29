export type MessageType = 'text' | 'skills' | 'contact' | 'about' | 'projects';

export interface Message {
  id: string;
  type: MessageType;
  text?: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
