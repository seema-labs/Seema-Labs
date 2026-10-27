import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  useEffect(() => {
    function onKey(event) {
      if (event.key !== 'Escape' || !mobileOpen) return;
      setMobileOpen(false);
      mobileRef.current?.focus();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="header wrap">
      <a href="#" className="brand" aria-label="Seema Labs home">
        <img src="/logo.svg" alt="" width="35" height="35" />
        <span>Seema Labs</span>
      </a>
      <button
        ref={mobileRef}
        className="mobile-toggle"
        aria-expanded={mobileOpen}
        aria-controls="navigation"
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? 'Close ' : 'Menu '}
        <span>{mobileOpen ? '−' : '+'}</span>
      </button>
      <nav id="navigation" className={mobileOpen ? 'open' : undefined} aria-label="Main navigation">
        <a href="#company" onClick={closeMenu}>
          Company
        </a>
        <a href="#principles" onClick={closeMenu}>
          Principles
        </a>
        <a href="#products" onClick={closeMenu}>
          Product
        </a>
      </nav>
    </header>
  );
}
