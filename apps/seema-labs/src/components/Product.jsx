import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const viewport = { once: true, amount: 0.3 };

export default function Product({ onRequestDemo }) {
  return (
    <section className="product section wrap" id="products">
      <motion.div
        className="product-intro"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <div>
          <p className="eyebrow">03 / PRODUCT</p>
          <div className="product-brand">
            <img src="/trinetra.svg" alt="" width="52" height="52" />
            <h2>Trinetra</h2>
          </div>
          <p className="product-tagline">
            The boundary, brought <br />
            to the coding task.
          </p>
          <button className="button" type="button" onClick={onRequestDemo}>
            Request a Demo
          </button>
        </div>
        <div>
          <span className="product-label">A PRODUCT FROM SEEMA LABS</span>
          <p className="product-description">
            Trinetra gives a coding agent only the authority one task needs. It proposes that authority, enforces
            it while the agent works, and records the result against the exact code change. It works with the
            coding agent the team already uses. The first workflow is Claude Code and GitHub.
          </p>
          <motion.ul
            className="objectives"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.li variants={fadeUp}>Proposes what the agent can read, write, and run, and why.</motion.li>
            <motion.li variants={fadeUp}>
              A person approves that proposal or makes it tighter before the agent proceeds.
            </motion.li>
            <motion.li variants={fadeUp}>Actions outside that authority are blocked, including sensitive files.</motion.li>
            <motion.li variants={fadeUp}>If the agent needs more, the request is narrow and has to be approved.</motion.li>
            <motion.li variants={fadeUp}>The finished change is checked, and the record is tied to that revision.</motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
