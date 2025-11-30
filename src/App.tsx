import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { ImpressumPage } from './pages/ImpressumPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
