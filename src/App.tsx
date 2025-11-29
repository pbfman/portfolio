import { useChat } from './hooks/useChat';
import { ChatInterface } from './components/ChatInterface';
import { SocialSidebar } from './components/SocialSidebar';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const { messages, isTyping, sendMessage, currentPath, tabComplete } = useChat();

  return (
    <div className="min-h-screen font-mono selection:bg-accent/30 transition-colors duration-300 bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-200">
      <SocialSidebar onCommand={sendMessage} />
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
