import { useEffect, useState } from 'react';
import './DigitalTwinRepository.css';

const stages = [
  {
    label: 'SCAN',
    status: 'REPOSITORY SCAN',
    detail: 'Task: Fix login session timeout bug',
    code: 'src/auth/session.py',
  },
  {
    label: 'MAP',
    status: 'RELEVANCE MAPPED',
    detail: 'Dependency: session.py → common/time.py',
    code: 'TASK CONTEXT IDENTIFIED',
  },
  {
    label: 'POLICY',
    status: 'AUTHORITY DEFINED',
    detail: 'TR-001: permitted paths and protected resources',
    code: 'infra/** · secrets/** PROTECTED',
  },
  {
    label: 'DENY',
    status: 'PROTECTED REQUEST DENIED',
    detail: 'Attempted access to infra/prod.yaml',
    code: 'DENY / PROTECTED PATH',
  },
  {
    label: 'VERIFY',
    status: 'REPOSITORY VERIFIED',
    detail: 'Unauthorized-change check passed in testbed',
    code: 'VERIFIER / PASS',
  },
];

const files = [
  {
    name: 'src/auth/session.py',
    x: 276, y: 132,
    kind: 'allowed',
    radius: 23,
    labelX: 276, labelY: 96,
    detail: 'Relevant file. Read/write permitted by example policy.',
  },
  {
    name: 'src/common/time.py',
    x: 455, y: 106,
    kind: 'dependency',
    radius: 19,
    labelX: 455, labelY: 72,
    detail: 'Dependency found during repository analysis.',
  },
  {
    name: 'tests/auth/test_session.py',
    x: 465, y: 252,
    kind: 'neutral',
    radius: 19,
    labelX: 465, labelY: 288,
    detail: 'Illustrative test file; permissions not established.',
  },
  {
    name: 'src/billing/payment.py',
    x: 160, y: 260,
    kind: 'neutral',
    radius: 18,
    labelX: 160, labelY: 293,
    detail: 'Unrelated file outside identified task relevance.',
  },
  {
    name: 'infra/prod.yaml',
    x: 674, y: 121,
    kind: 'protected',
    radius: 19,
    labelX: 674, labelY: 87,
    detail: 'Protected production configuration. Access denied.',
  },
  {
    name: 'secrets/.env',
    x: 662, y: 266,
    kind: 'protected',
    radius: 19,
    labelX: 662, labelY: 303,
    detail: 'Protected secrets path.',
  },
];

export default function DigitalTwinRepository() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const stage = stages[step];

  // Respect the visitor's reduced-motion preference.
  useEffect(() => {
    if (
      !window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      setPlaying(true);
    }
  }, []);

  // Auto-play the five-stage sequence.
  useEffect(() => {
    if (!playing) return;

    const interval = window.setInterval(() => {
      setStep((previous) => (previous + 1) % stages.length);
      setSelectedFile(null);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [playing]);

  const chooseStep = (index) => {
    setStep(index);
    setSelectedFile(null);
    setPlaying(false);
  };

  const chooseFile = (file) => {
    setSelectedFile(file);
    setPlaying(false);
  };

  const nextStage = () => {
    setStep((previous) => (previous + 1) % stages.length);
    setSelectedFile(null);
    setPlaying(false);
  };

  return (
    <div className="trinetra-twin">
      <div className="twin-header">
        <span>
          <span className="twin-live-dot" />
          TRINETRA / REPOSITORY INTELLIGENCE
        </span>
        <span>SIMULATED REPLAY · TR-001</span>
      </div>

      <div className="twin-visual">
        <svg
          viewBox="0 0 820 382"
          role="img"
          aria-label="Interactive repository graph showing relevance, authority constraints, denied access and verification"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="twin-ambient">
              <stop
                offset="0%"
                stopColor="#17b6b1"
                stopOpacity=".24"
              />
              <stop
                offset="100%"
                stopColor="#17b6b1"
                stopOpacity="0"
              />
            </radialGradient>

            <filter
              id="twin-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Atmospheric glow */}
          <circle
            cx="381"
            cy="186"
            r="245"
            fill="url(#twin-ambient)"
          />

          {/* Background grid */}
          <g className="twin-grid">
            <path d="M0 95H820 M0 190H820 M0 285H820" />
            <path d="M105 0V382 M205 0V382 M305 0V382 M405 0V382 M505 0V382 M605 0V382 M705 0V382" />
          </g>

          {/* Rotating spatial rings */}
          <g className="twin-orbit">
            <ellipse
              cx="385"
              cy="185"
              rx="245"
              ry="116"
              fill="none"
              stroke="#2c6670"
              strokeDasharray="3 11"
              opacity=".55"
            />
            <ellipse
              cx="385"
              cy="185"
              rx="205"
              ry="154"
              fill="none"
              stroke="#294f63"
              opacity=".45"
            />
          </g>

          {/* Authority envelope */}
          <g
            className={
              'twin-boundary ' +
              (step >= 2 ? 'visible' : '')
            }
          >
            <path
              d="M186 100 L417 51 L556 132 L526 288 L291 330 L166 244 Z"
              fill="#19bbae"
              fillOpacity=".06"
              stroke="#6ef3d4"
              strokeWidth="2"
              strokeDasharray="7 7"
            />

            <text
              x="322"
              y="42"
              className="twin-boundary-label"
            >
              TR-001 / AUTHORITY ENVELOPE
            </text>
          </g>

          {/* Repository dependency connections */}
          <g className="twin-wires">
            <path d="M276 132 L455 106 L465 252 L276 132 L160 260 L276 132" />

            <path
              d="M276 132 L674 121 M465 252 L662 266"
              className="twin-protected-wire"
            />

            <path
              d="M276 132 L455 106"
              className={
                'twin-relevance-line ' +
                (step >= 1 ? 'visible' : '')
              }
            />
          </g>

          {/* Interactive file nodes */}
          {files.map((file) => (
            <g
              key={file.name}
              className={
                'twin-node twin-node-' + file.kind
              }
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${file.name}`}
              onClick={() => chooseFile(file)}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  chooseFile(file);
                }
              }}
            >
              <circle
                cx={file.x}
                cy={file.y}
                r={file.radius}
                className="twin-node-shell"
              />

              <circle
                cx={file.x}
                cy={file.y}
                r="5"
                className="twin-node-center"
              />

              <text
                x={file.labelX}
                y={file.labelY}
                textAnchor="middle"
              >
                {file.name}
              </text>
            </g>
          ))}

          {/* Coding agent */}
          <g className="twin-agent">
            <circle
              cx="377"
              cy="189"
              r="42"
              className="twin-agent-outer"
            />

            <circle
              cx="377"
              cy="189"
              r="25"
              className="twin-agent-middle"
            />

            <circle
              cx="377"
              cy="189"
              r="10"
              className="twin-agent-core"
              filter="url(#twin-glow)"
            />
          </g>

          <text
            x="377"
            y="242"
            textAnchor="middle"
            className="twin-agent-label"
          >
            CODING AGENT
          </text>

          {/* Denied access pulse */}
          <g
            className={
              'twin-deny ' +
              (step === 3 ? 'visible' : '')
            }
          >
            <path
              d="M628 121 L555 152"
              className="twin-deny-beam"
              filter="url(#twin-glow)"
            />

            <circle
              cx="555"
              cy="152"
              r="22"
              className="twin-deny-ring"
            />

            <path
              d="M546 143L564 161 M564 143L546 161"
              className="twin-deny-cross"
            />

            <text
              x="579"
              y="191"
              className="twin-deny-label"
            >
              DENIED / PROTECTED PATH
            </text>
          </g>

          {/* Verification result */}
          <g
            className={
              'twin-verified ' +
              (step === 4 ? 'visible' : '')
            }
          >
            <path
              d="M307 291 L320 304 L347 279"
              className="twin-checkmark"
            />

            <text
              x="348"
              y="316"
              className="twin-verified-label"
            >
              VERIFIER TEST / PASS
            </text>
          </g>
        </svg>
      </div>

      {/* Result panel */}
      <div className="twin-details" aria-live="polite">
        <div className="twin-result-info">
          <div
            className={
              'twin-result ' +
              (step === 3 && !selectedFile
                ? 'denied'
                : '')
            }
          >
            {selectedFile
              ? 'SELECTED REPOSITORY NODE'
              : stage.status}
          </div>

          <p>
            {selectedFile
              ? `${selectedFile.name} — ${selectedFile.detail}`
              : stage.detail}
          </p>

          <code>
            {selectedFile
              ? selectedFile.name
              : stage.code}
          </code>
        </div>

        <button
          type="button"
          className="twin-play"
          onClick={() => {
            setSelectedFile(null);
            setPlaying((value) => !value);
          }}
        >
          {playing ? 'Ⅱ PAUSE' : '▶ PLAY'}
        </button>
      </div>

      {/* Stage selection */}
      <div className="twin-controls">
        {stages.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={
              'twin-step ' +
              (index === step ? 'active' : '')
            }
            aria-pressed={index === step}
            onClick={() => chooseStep(index)}
          >
            {String(index + 1).padStart(2, '0')}
            {' / '}
            {item.label}
          </button>
        ))}

        <button
          type="button"
          className="twin-step twin-next"
          onClick={nextStage}
        >
          NEXT →
        </button>
      </div>

      <p className="twin-disclaimer">
        Illustrative playback based on Trinetra testbed
        experiments. Not a live security enforcement service.
      </p>
    </div>
  );
}
