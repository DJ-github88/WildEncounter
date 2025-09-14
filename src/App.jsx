import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import ClassesPage from './pages/ClassesPage'
import ClassDetailPage from './pages/ClassDetailPage'
import PathsPage from './pages/PathsPage'
import ClassGuidesPage from './pages/ClassGuidesPage'
import ClassGuideDetailPage from './pages/ClassGuideDetailPage'
import BackgroundPage from './pages/backgrounds/BackgroundPage'
import RacesPage from './pages/RacesPage'
import RaceDetailPage from './pages/RaceDetailPage'
import './styles/App.css'
import './styles/background-theme.css'
import './styles/pathfinder-components.css'
import './styles/performance-optimizations.css'

function App() {
  // Performance optimization: disable animations during scroll
  useEffect(() => {
    let scrollTimer = null;

    const handleScroll = () => {
      // Add scrolling class to disable animations
      document.body.classList.add('scrolling');

      // Clear existing timer
      clearTimeout(scrollTimer);

      // Remove scrolling class after scroll ends
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="app gpu-accelerated">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:classId" element={<ClassDetailPage />} />
          <Route path="/paths" element={<PathsPage />} />
          <Route path="/paths/:pathId" element={<BackgroundPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/races/:raceId" element={<RaceDetailPage />} />
          <Route path="/guides" element={<ClassGuidesPage />} />
          <Route path="/guides/:classId" element={<ClassGuideDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
