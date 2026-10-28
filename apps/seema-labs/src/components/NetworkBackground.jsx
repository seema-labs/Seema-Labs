import { useEffect, useRef } from 'react';

const NODE_COLOR = '85, 229, 214';
const ACCENT_COLOR = '255, 90, 42';
const LINE_RGB = '49, 81, 106';
const CORE_COLOR = '120, 255, 240';
const DENY_COLOR = '255, 147, 164';
const RING_CYCLE = 150;

export default function NetworkBackground({
  className = 'network-bg',
  fullViewport = true,
  densityDivisor = 18000,
  maxNodes = 70,
  linkDistance = 150,
  focal = null,
  pins = [],
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes = [];
    let raf = null;
    let frame = 0;
    let resizeObserver = null;

    function buildNodes() {
      const count = Math.min(maxNodes, Math.round((width * height) / densityDivisor));
      const fx = focal ? focal.x * width : 0;
      const fy = focal ? focal.y * height : 0;
      const clusterRadius = Math.min(width, height) * 0.48;
      nodes = Array.from({ length: count }, () => {
        let x;
        let y;
        if (focal && Math.random() < 0.55) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * clusterRadius;
          x = fx + Math.cos(angle) * radius;
          y = fy + Math.sin(angle) * radius;
        } else {
          x = Math.random() * width;
          y = Math.random() * height;
        }
        return {
          x: Math.min(Math.max(x, 0), width),
          y: Math.min(Math.max(y, 0), height),
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          accent: Math.random() < 0.08,
        };
      });
    }

    function setSize(w, h) {
      width = w;
      height = h;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (fullViewport) {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function resizeToViewport() {
      setSize(window.innerWidth, window.innerHeight);
    }

    function drawFocal() {
      const x = focal.x * width;
      const y = focal.y * height;
      const glowRadius = Math.min(width, height) * 0.22;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${CORE_COLOR}, 0.4)`);
      gradient.addColorStop(1, `rgba(${CORE_COLOR}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      const ringCount = reduceMotion ? 1 : 2;
      for (let i = 0; i < ringCount; i++) {
        const phase = reduceMotion ? 0.3 : (((frame + i * (RING_CYCLE / 2)) % RING_CYCLE) / RING_CYCLE);
        const r = 8 + phase * glowRadius * 0.85;
        const alpha = (1 - phase) * 0.4;
        ctx.strokeStyle = `rgba(${CORE_COLOR}, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = `rgba(235, 255, 250, 0.95)`;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawPins() {
      const fx = focal ? focal.x * width : width / 2;
      const fy = focal ? focal.y * height : height / 2;
      for (const pin of pins) {
        const px = pin.x * width;
        const py = pin.y * height;
        const color = pin.variant === 'deny' ? DENY_COLOR : CORE_COLOR;

        ctx.save();
        ctx.setLineDash([3, 6]);
        ctx.strokeStyle = `rgba(${color}, 0.28)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.restore();

        ctx.strokeStyle = `rgba(${color}, 0.45)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = `rgba(${color}, 0.95)`;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '10px ui-monospace, SFMono-Regular, Consolas, monospace';
        ctx.fillStyle = `rgba(${color}, 0.85)`;
        ctx.textAlign = px > width * 0.62 ? 'right' : px < width * 0.38 ? 'left' : 'center';
        ctx.fillText(pin.label, px, py - 13);
      }
    }

    function render(moving) {
      if (moving) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${0.35 * (1 - dist / linkDistance)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.accent ? ACCENT_COLOR : NODE_COLOR}, ${n.accent ? 0.85 : 0.6})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.accent ? 2.2 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (focal) drawFocal();
      if (pins.length) drawPins();
    }

    function loop() {
      frame += 1;
      render(true);
      raf = requestAnimationFrame(loop);
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      } else if (!reduceMotion && !raf) {
        raf = requestAnimationFrame(loop);
      }
    }

    if (fullViewport) {
      resizeToViewport();
      window.addEventListener('resize', resizeToViewport);
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        const box = entries[0].contentRect;
        setSize(box.width, box.height);
        render(false);
      });
      resizeObserver.observe(canvas);
    }

    render(false);
    if (!reduceMotion) raf = requestAnimationFrame(loop);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if (fullViewport) window.removeEventListener('resize', resizeToViewport);
      if (resizeObserver) resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
