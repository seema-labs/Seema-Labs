import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const viewport = { once: true, amount: 0.3 };

export default function Company() {
  return (
    <>
      <section className="mission-strip">
        <motion.div
          className="wrap"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p>OUR FOCUS</p>
          <h2>
            The question isn’t only what AI can do.
            <br />
            It’s what we choose to let it do.
          </h2>
          <span className="strip-symbol" aria-hidden="true">
            ↳
          </span>
        </motion.div>
      </section>
      <section className="company section wrap" id="company">
        <motion.div
          className="company-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div>
            <p className="eyebrow">01 / COMPANY</p>
            <h2>Why Seema Labs?</h2>
          </div>
          <div className="story">
            <p className="large-copy">Autonomy is useful. Authority should be intentional.</p>
            <div className="story-body">
              <p>
                AI coding agents can modify software, run commands, access tools, and interact with development
                infrastructure. As that scope grows, organizations need a way to decide what authority to delegate.
              </p>
              <p>
                Seema means “boundary” or “limit” in Nepali. We chose the name because our work focuses on defining
                clear boundaries for autonomous AI systems.
              </p>
              <p>
                Seema Labs is built around a simple principle: AI agents should have enough freedom to do meaningful
                work while staying within clearly defined limits.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="name-story"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div className="name-graphic">
            <span className="nepali" lang="ne">
              सीमा
            </span>
            <span>
              SEEMA <i>/</i> BOUNDARY, LIMIT
            </span>
          </div>
          <div>
            <p className="eyebrow">ROOTED IN NEPAL. FOCUSED ON WHAT COMES NEXT.</p>
            <h3>The story behind our name</h3>
            <p>
              We wanted a name that reflects both where we come from and the problem we are working on. “Seema”
              connects our Nepali roots to our belief that useful AI autonomy needs clear boundaries.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
