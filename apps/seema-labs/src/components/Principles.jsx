import { motion } from 'framer-motion';

const principles = [
  ['01', '↗', 'Useful autonomy', 'AI agents should be able to complete meaningful work.'],
  ['02', '⌑', 'Clear boundaries', 'The authority given to an agent should be defined for its task.'],
  ['03', '↳', 'Human direction', 'People and organizations should have a say in what authority is granted.'],
  ['04', '≡', 'Understandable decisions', 'Permission requests should be clear enough to review.'],
];

const easeOut = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const viewport = { once: true, amount: 0.3 };

export default function Principles() {
  return (
    <section className="principles section" id="principles">
      <div className="wrap">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div>
            <p className="eyebrow">02 / PRINCIPLES</p>
            <h2>
              Room to act.
              <br />
              Reasons to trust the decision.
            </h2>
          </div>
          <p>The ideas that guide what we build.</p>
        </motion.div>
        <motion.div
          className="principle-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {principles.map(([number, mark, title, body]) => (
            <motion.article key={number} variants={fadeUp}>
              <span className="principle-top">
                {number} <b>{mark}</b>
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
