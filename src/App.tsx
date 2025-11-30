import { useChat } from './hooks/useChat';
import { ChatInterface } from './components/ChatInterface';
import { SocialSidebar } from './components/SocialSidebar';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const { messages, isTyping, sendMessage, currentPath, tabComplete, getSuggestions } = useChat();

  return (
    <div className="h-[100dvh] overflow-hidden font-mono selection:bg-accent/30 transition-colors duration-300 bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-200">
      <SocialSidebar onCommand={sendMessage} />
      <main className="h-full pt-16 md:pt-0 md:pr-20 transition-all duration-300 flex flex-col">
        <ChatInterface 
          messages={messages} 
          isTyping={isTyping} 
          onSendMessage={sendMessage}
          currentPath={currentPath}
          onTabComplete={tabComplete}
          getSuggestions={getSuggestions}
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
