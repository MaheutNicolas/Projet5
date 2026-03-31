import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/navigations/Header';
import Footer from './components/navigations/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/logement';
import './index.css';

function App() {
  const location = useLocation();
  const routeName = location.pathname.split("/")[1] || "home";
  const routeClass = {
    "home": "page home",
    "a-propos": "page about",
    "logement": "page logement",
  }[routeName] ?? "page default";

  return (
    <>
      <Header />
      <main className={routeClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);