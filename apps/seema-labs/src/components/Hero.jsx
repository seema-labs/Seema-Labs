import { motion } from 'framer-motion';
import BoundarySim from './BoundarySim.jsx';

const easeOut = [0.16, 1, 0.3, 1];

export default function Hero({ onRequestDemo }) {
  return (
    <section className="hero wrap">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <p className="eyebrow">
          <span className="dot"></span> AUTONOMY, WITH INTENTION
        </p>
        <h1>
          Give AI autonomy,
          <br />
          not{' '}
          <span>
            unlimited
            <br />
            authority.
          </span>
        </h1>
        <p className="intro">
          Useful AI needs room to work. It also needs clear limits. Seema Labs helps organizations
          define the boundaries of authority for autonomous AI systems.
        </p>
        <div className="actions">
          <button className="button" type="button" onClick={onRequestDemo}>
            Request a Demo
          </button>
          <a className="text-link" href="#company">
            Why Seema Labs? <span>↓</span>
          </a>
        </div>
        <p className="hero-foot">Independent action. Deliberate authority.</p>
      </motion.div>
      <motion.div
        style={{ minWidth: 0 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
      >
        <BoundarySim />
      </motion.div>
    </section>
  );
}
