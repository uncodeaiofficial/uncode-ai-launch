import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Floating data labels — the "AI readout" feel from the reference image
const dataLabels = [
  { text: "[ SYSTEM ACTIVE ]", x: "4%", y: "18%", delay: 0.5 },
  { text: "latency: 1.8ms", x: "76%", y: "22%", delay: 1.2 },
  { text: "accuracy: 97.2%", x: "80%", y: "70%", delay: 1.8 },
  { text: "0x4F3A → 0x8B2C", x: "3%", y: "72%", delay: 2.1 },
  { text: "nodes: 2,048", x: "68%", y: "44%", delay: 0.9 },
  { text: "inference: 0.9ms", x: "5%", y: "44%", delay: 1.5 },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  phaseSpeed: number;
  isHub: boolean;
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    // teal: hsl(180 74% 36%) ≈ rgb(24, 162, 162)
    const R = 24, G = 162, B = 162;
    const CONNECT_DIST = 190;
    const COUNT = 55;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, (_, i) => {
        const isHub = i < 6; // a handful of larger hub nodes
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isHub ? 0.22 : 0.38),
          vy: (Math.random() - 0.5) * (isHub ? 0.22 : 0.38),
          radius: isHub ? Math.random() * 3 + 3 : Math.random() * 2 + 1,
          opacity: isHub ? 0.7 : Math.random() * 0.4 + 0.25,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.018 + 0.008,
          isHub,
        };
      });
    };

    resize();
    init();

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.phaseSpeed;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
            ctx.lineWidth = particles[i].isHub || particles[j].isHub ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        const pulse = Math.sin(p.phase) * 0.25;
        const alpha = Math.min(1, p.opacity + pulse);
        const glowR = p.radius * (p.isHub ? 5 : 3.5);

        // Outer glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        g.addColorStop(0, `rgba(${R},${G},${B},${alpha * 0.5})`);
        g.addColorStop(1, `rgba(${R},${G},${B},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${Math.min(1, alpha + 0.4)})`;
        ctx.fill();

        // Hub nodes get a bright ring
        if (p.isHub) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Floating data readouts */}
      {dataLabels.map((label) => (
        <motion.span
          key={label.text}
          className="absolute font-mono text-[10px] text-primary/35 uppercase tracking-[0.14em] whitespace-nowrap"
          style={{ left: label.x, top: label.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{
            duration: 2,
            delay: label.delay,
            times: [0, 0.3, 0.6, 1],
            ease: "easeOut",
          }}
        >
          {label.text}
        </motion.span>
      ))}
    </div>
  );
};

export default NeuralBackground;
