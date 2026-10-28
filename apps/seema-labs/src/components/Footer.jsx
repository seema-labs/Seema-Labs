import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <motion.div
        className="wrap footer-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="footer-brand">
          <a className="brand" href="#" aria-label="Seema Labs home">
            <img src="/logo.svg" alt="" width="32" height="32" />
            <span>Seema Labs</span>
          </a>
          <p>Autonomy, within boundaries.</p>
        </div>
        <nav aria-label="Footer navigation">
          <p>Quick Links</p>
          <a href="#">Home</a>
          <a href="#company">Company</a>
          <a href="#principles">Principles</a>
          <a href="#products">Trinetra</a>
        </nav>
      </motion.div>
      <div className="footer-bar">
        <div className="wrap">
          <span>© 2026 Seema Labs. All rights reserved.</span>
          <span>Rooted in Nepal. Guided by clear boundaries.</span>
        </div>
      </div>
    </footer>
  );
}
