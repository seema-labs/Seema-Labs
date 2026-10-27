import BoundarySim from './BoundarySim.jsx';

export default function Hero({ onRequestDemo }) {
  return (
    <section className="hero wrap">
      <div className="hero-text">
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
      </div>
      <BoundarySim />
    </section>
  );
}
