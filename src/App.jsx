import './App.css'
import Direction from './pages/Direction'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ScrollToTop from './pages/ScrollToTop'
import Apply from './pages/Apply'
import Cine from './pages/Cine'
import Book from './pages/Book'
import Workshop from './pages/Workshop'
import TC from './components/Policy/TC'
import Privacy from './components/Policy/Privacy'
import Cancel from './components/Policy/Cancel'
import FloatingButtons from './pages/FloatingButtons'
import GlobalRecog from './pages/GlobalRecog'
import { useEffect } from 'react'
import MentorsSection from './pages/Mentor'
import Contact from './components/Contact/Contact'
import CoursePage from './pages/CoursePage'
import Placements from './pages/Placements'
import Events2 from './components/Events/Events2'
import Tamilnadu from './pages/TamilNadu'

function App() {

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <FloatingButtons />
        <div className="global-mouse-glow"></div>
        <div className="global-noise"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/direction" element={<CoursePage courseKey="direction" />} />
          <Route path="/cinematography" element={<CoursePage courseKey="cinematography" />} />
          <Route path="/editing" element={<CoursePage courseKey="editing" />} />
          {/* <Route path="/virtual-production" element={<CoursePage courseKey="virtual-production" />} /> */}

          <Route path="/stage-unreal_virtual-production" element={<CoursePage courseKey="stage-unreal" />} />

          <Route path="/advanced-virtual-production" element={<CoursePage courseKey="advanced-virtual-production" />} />

          <Route path="/acting" element={<CoursePage courseKey="acting" />} />
          <Route path="/photography" element={<CoursePage courseKey="photography" />} />
          <Route path="/di" element={<CoursePage courseKey="di" />} />
          <Route path='/books' element={<Book />} />
          <Route path='/apply-now' element={<Apply />} />
          <Route path='/workshops' element={<Workshop />} />
          <Route path='/global-recognition' element={<GlobalRecog />} />
          <Route path='/terms' element={<TC />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cancel' element={<Cancel />} />
          <Route path='/mentor' element={<MentorsSection />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/events' element={<Events /> } /> */}
          <Route path='/events' element={<Events2 />} />
          <Route path='/placements' element={<Placements />} />
          <Route path='/india' element={<Tamilnadu/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
