import { Routes, Route } from 'react-router-dom'
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
import './styles/App.css'
import './styles/background-theme.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:classId" element={<ClassDetailPage />} />
          <Route path="/paths" element={<PathsPage />} />
          <Route path="/paths/:pathId" element={<BackgroundPage />} />
          <Route path="/guides" element={<ClassGuidesPage />} />
          <Route path="/guides/:classId" element={<ClassGuideDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
