import { useEffect, useState } from 'react';

const stages = [
  {
    phase: 'Delegation',
    status: 'Authority envelope initialized',
    desc: 'The agent is constrained to an explicitly permitted set of operations.',
    x: 346,
    y: 208,
    label: 'AGENT ACTIVE',
    color: '#55e5d6',
  },
  {
    phase: 'Authorized execution',
    status: 'Authorized action permitted',
    desc: 'Editing an in-scope source file is within the delegated boundary.',
    x: 209,
    y: 203,
    label: 'AUTHORIZED ACTION',
    color: '#55e5d6',
  },
  {
    phase: 'Boundary enforcement',
    status: 'Unauthorized action denied',
    desc: 'Attempted access to environment secrets is outside the authorized scope.',
    x: 505,
    y: 155,
    label: 'PERMISSION DENIED',
    color: '#ff93a4',
  },
  {
    phase: 'Verification',
    status: 'Evidence sequence recorded',
    desc: 'The record captures permitted actions and rejected attempts.',
    x: 489,
    y: 229,
    label: 'EVIDENCE RECORDED',
    color: '#55e5d6',
  },
];

function labelPoint(index, stage) {
  if (index === 2) return { x: 350, y: 185 };
  if (index === 3) return { x: 346, y: 174 };
  return { x: stage.x, y: stage.y - 34 };
}

export default function BoundarySim() {
  const [current, setCurrent] = useState(0);
  const stage = stages[current];
  const label = labelPoint(current, stage);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => {
      setCurrent((index) => (index + 1) % stages.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="sim" aria-label="AI authority boundary simulation">
      <div className="sim-header">
        <div className="sim-phase">
          0{current + 1} / {stage.phase}
        </div>
      </div>
      <div className="sim-viewport">
        <svg viewBox="0 0 760 395" role="img" aria-labelledby="sim-title sim-desc">
          <title id="sim-title">AI agent authority boundary</title>
          <desc id="sim-desc">
            An agent can read, edit, test, verify and audit inside a perimeter, but cannot access
            secrets or deploy outside it.
          </desc>
          <defs>
            <linearGradient id="sim-perimeter" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#26c9f3" />
              <stop offset="1" stopColor="#61f7c1" />
            </linearGradient>
            <radialGradient id="sim-field">
              <stop stopColor="#0c404e" stopOpacity="0.63" />
              <stop offset="1" stopColor="#0b2b3d" stopOpacity="0" />
            </radialGradient>
            <filter id="sim-blur">
              <feGaussianBlur stdDeviation="13" />
            </filter>
            <radialGradient id="sim-lines-fade">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="65%" stopColor="#fff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="sim-lines-mask">
              <ellipse cx="380" cy="198" rx="380" ry="198" fill="url(#sim-lines-fade)" />
            </mask>
          </defs>
          <ellipse cx="354" cy="196" rx="258" ry="192" fill="url(#sim-field)" />
          <g
            stroke="#1b4559"
            strokeWidth="1"
            strokeDasharray="2 10"
            opacity="0.24"
            fill="none"
            mask="url(#sim-lines-mask)"
          >
            <path d="M0 40L760 350M10 340L740 65M110 0L640 395M630 0L130 395" />
            <circle cx="355" cy="200" r="186" />
          </g>
          <path
            d="M212 82L431 60L558 155L519 312L316 357L165 249Z"
            fill="#20c5bb"
            fillOpacity="0.05"
            stroke="#4eeadd"
            strokeWidth="16"
            opacity="0.13"
            filter="url(#sim-blur)"
          />
          <path
            className="sim-hex"
            d="M212 82L431 60L558 155L519 312L316 357L165 249Z"
            fill="none"
            stroke="url(#sim-perimeter)"
            strokeWidth="1.7"
          />
          <g fill="#54d5d0">
            <circle cx="212" cy="82" r="4" />
            <circle cx="431" cy="60" r="4" />
            <circle cx="558" cy="155" r="4" />
            <circle cx="519" cy="312" r="4" />
            <circle cx="316" cy="357" r="4" />
            <circle cx="165" cy="249" r="4" />
          </g>
          <g fill="none" stroke="#4b94a1" opacity="0.57" strokeWidth="1.6" strokeDasharray="4 7">
            <path d="M346 208L276 137L209 203" />
            <path d="M346 208L445 147L489 229" />
            <path d="M346 208L351 292" />
            <path d="M346 208L625 104" />
            <path d="M346 208L635 313" />
          </g>
          <g fontFamily="ui-monospace, Consolas, monospace" fontSize="11" textAnchor="middle">
            <g>
              <circle cx="276" cy="137" r="19" fill="#0a2831" stroke="#3cafa2" />
              <text x="276" y="141" fill="#5df3d6">
                ↗
              </text>
              <text x="276" y="111" fill="#a2b5c0" fontSize="10">
                READ
              </text>
            </g>
            <g>
              <circle cx="209" cy="203" r="19" fill="#0a2831" stroke="#3cafa2" />
              <text x="209" y="207" fill="#5df3d6">
                {'{ }'}
              </text>
              <text x="209" y="177" fill="#a2b5c0" fontSize="10">
                EDIT
              </text>
            </g>
            <g>
              <circle cx="445" cy="147" r="19" fill="#0a2831" stroke="#3cafa2" />
              <text x="445" y="151" fill="#5df3d6">
                ⌘
              </text>
              <text x="445" y="121" fill="#a2b5c0" fontSize="10">
                TEST
              </text>
            </g>
            <g>
              <circle cx="489" cy="229" r="19" fill="#0a2831" stroke="#3cafa2" />
              <text x="489" y="233" fill="#5df3d6">
                ✓
              </text>
              <text x="489" y="258" fill="#a2b5c0" fontSize="10">
                VERIFY
              </text>
            </g>
            <g>
              <circle cx="351" cy="292" r="19" fill="#0a2831" stroke="#3cafa2" />
              <text x="351" y="296" fill="#5df3d6">
                ≡
              </text>
              <text x="351" y="321" fill="#a2b5c0" fontSize="10">
                AUDIT
              </text>
            </g>
            <g>
              <circle cx="625" cy="104" r="23" fill="#321b29" stroke="#b97181" strokeDasharray="3 4" />
              <text x="625" y="109" fill="#ff9cab" fontSize="20">
                ×
              </text>
              <text x="625" y="72" fill="#e79baa" fontSize="10">
                SECRETS
              </text>
            </g>
            <g>
              <circle cx="635" cy="313" r="23" fill="#321b29" stroke="#b97181" strokeDasharray="3 4" />
              <text x="635" y="318" fill="#ff9cab" fontSize="20">
                ×
              </text>
              <text x="635" y="346" fill="#e79baa" fontSize="10">
                DEPLOY
              </text>
            </g>
          </g>
          <g className="sim-agent" transform={`translate(${stage.x} ${stage.y})`}>
            <circle r="35" fill="#6fffe9" opacity="0.28" filter="url(#sim-blur)" />
            <circle r="27" fill="none" stroke="#8af8ec" strokeOpacity="0.5" strokeDasharray="4 6" />
            <circle className="sim-agent-halo" r="17" fill="#6ffff0" opacity="0.78" />
            <circle r="12" fill="#e5fffc" />
            <circle r="6" fill="#fff" />
          </g>
          <text
            key={current}
            className="sim-label-text"
            x={label.x}
            y={label.y}
            fontFamily="ui-monospace, Consolas, monospace"
            textAnchor="middle"
            fill={stage.color}
            fontSize="12"
            letterSpacing="1.2"
          >
            {stage.label}
          </text>
          <g fontFamily="ui-monospace, Consolas, monospace" fontSize="11" letterSpacing="1.3">
            <text x="240" y="390" fill="#80f4e5">
              AUTHORIZED EXECUTION ZONE
            </text>
            <text x="590" y="390" fill="#f1a1af">
              RESTRICTED
            </text>
          </g>
        </svg>
      </div>
      <div className="sim-status">
        <div className="sim-status-line" key={current}>
          <span className="sim-status-dot" style={{ background: stage.color, color: stage.color }} />
          <div>
            <div className="sim-status-title">{stage.status}</div>
            <div className="sim-status-desc">{stage.desc}</div>
          </div>
        </div>
        <div className="sim-count">0{current + 1} / 04</div>
      </div>
    </div>
  );
}
