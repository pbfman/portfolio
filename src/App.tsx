import { useChat } from './hooks/useChat';
import { ChatInterface } from './components/ChatInterface';
import { SocialSidebar } from './components/SocialSidebar';

function App() {
  const { messages, isTyping, sendMessage, currentPath, tabComplete } = useChat();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-mono selection:bg-accent/30">
      <SocialSidebar />
      <main className="pt-16 md:pt-0 md:pr-20 min-h-screen transition-all duration-300">
        <ChatInterface 
          messages={messages} 
          isTyping={isTyping} 
          onSendMessage={sendMessage}
          currentPath={currentPath}
          onTabComplete={tabComplete}
        />
      </main>
    </div>
  )
}

export default App
