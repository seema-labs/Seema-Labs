export default function Product({ onRequestDemo }) {
  return (
    <section className="product section wrap" id="products">
      <div className="product-intro">
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
          <ul className="objectives">
            <li>Proposes what the agent can read, write, and run, and why.</li>
            <li>A person approves that proposal or makes it tighter before the agent proceeds.</li>
            <li>Actions outside that authority are blocked, including sensitive files.</li>
            <li>If the agent needs more, the request is narrow and has to be approved.</li>
            <li>The finished change is checked, and the record is tied to that revision.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
