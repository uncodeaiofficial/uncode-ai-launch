import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * -20,
}));

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(p.id) * 40, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <motion.line
          x1="10%" y1="20%" x2="40%" y2="60%"
          stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="60%" y1="10%" x2="85%" y2="50%"
          stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="30%" y1="70%" x2="70%" y2="30%"
          stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default FloatingParticles;
