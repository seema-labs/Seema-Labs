import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground.jsx';

const easeOut = [0.16, 1, 0.3, 1];
const productFocal = { x: 0.22, y: 0.62 };
const productPins = [
  { label: 'src/auth/session.py', x: 0.16, y: 0.6, variant: 'default' },
  { label: 'src/common/time.py', x: 0.35, y: 0.36, variant: 'default' },
  { label: 'tests/auth/test_session.py', x: 0.37, y: 0.78, variant: 'default' },
  { label: 'src/billing/payment.py', x: 0.06, y: 0.84, variant: 'deny' },
  { label: 'infra/prod.yaml', x: 0.3, y: 0.96, variant: 'deny' },
];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const viewport = { once: true, amount: 0.3 };
const workflowSteps = ['Task', 'Propose', 'Approve', 'Enforce', 'Verify', 'Record'];

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
        <NetworkBackground
          className="product-network"
          fullViewport={false}
          densityDivisor={9000}
          maxNodes={45}
          linkDistance={130}
          focal={productFocal}
          pins={productPins}
        />
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
          <div className="workflow">
            <p className="workflow-label">HOW IT WORKS</p>
            <ol className="workflow-steps">
              {workflowSteps.map((step, i) => (
                <li key={step}>
                  <span className="workflow-step-badge">{i + 1}</span>
                  <span className="workflow-step-label">{step}</span>
                  {i < workflowSteps.length - 1 ? <span className="workflow-connector" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
            <p className="workflow-note">
              Every pull request gets a Trinetra check:{' '}
              <span className="check-pill check-pass">PASS</span>
              <span className="check-pill check-review">REVIEW</span>
              <span className="check-pill check-block">BLOCK</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
