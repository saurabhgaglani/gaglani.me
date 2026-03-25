import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Highlights from './Highlights';
import Links from './Links';

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(d => {
      document.documentElement.classList.toggle('dark', !d);
      return !d;
    });
  };

  return (
    <>
      <Navbar dark={dark} onToggleDark={toggleDark} />
      <div id="top" className="max-w-2xl mx-auto px-6 pt-24 flex flex-col min-h-screen">
        <div className="flex-1">
          <Hero />
          <div id="projects"><Projects /></div>
          <div id="about"><About /></div>
          <div id="highlights"><Highlights /></div>
        </div>
        <div id="links"><Links /></div>
      </div>
    </>
  );
}
