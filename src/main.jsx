import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navigations/Header';
import Footer from './components/navigations/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import './index.css';
import Logement from './pages/logement';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </StrictMode>
)