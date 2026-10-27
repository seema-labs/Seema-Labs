const principles = [
  ['01', '↗', 'Useful autonomy', 'AI agents should be able to complete meaningful work.'],
  ['02', '⌑', 'Clear boundaries', 'The authority given to an agent should be defined for its task.'],
  ['03', '↳', 'Human direction', 'People and organizations should have a say in what authority is granted.'],
  ['04', '≡', 'Understandable decisions', 'Permission requests should be clear enough to review.'],
];

export default function Principles() {
  return (
    <section className="principles section" id="principles">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / PRINCIPLES</p>
            <h2>
              Room to act.
              <br />
              Reasons to trust the decision.
            </h2>
          </div>
          <p>The ideas that guide what we build.</p>
        </div>
        <div className="principle-grid">
          {principles.map(([number, mark, title, body]) => (
            <article key={number}>
              <span className="principle-top">
                {number} <b>{mark}</b>
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
