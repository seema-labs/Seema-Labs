import { useEffect, useState } from 'react';
import Company from './components/Company.jsx';
import DemoForm from './components/DemoForm.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NetworkBackground from './components/NetworkBackground.jsx';
import Principles from './components/Principles.jsx';
import Product from './components/Product.jsx';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  useEffect(() => {
    if (!window.location.hash) return;
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <NetworkBackground />
      <Header />
      <main id="main">
        <Hero onRequestDemo={openDemo} />
        <Company />
        <Principles />
        <Product onRequestDemo={openDemo} />
      </main>
      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
