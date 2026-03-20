import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const PATH_LEFT =
  "M 95 158 L 200 75 L 265 140 L 198 250 L 265 360 L 200 425 L 95 342 Z";
const PATH_RIGHT =
  "M 405 158 L 300 75 L 235 140 L 302 250 L 235 360 L 300 425 L 405 342 Z";

const AnimatedHeroLogo = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { stiffness: 60, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [14, -14]), spring);
  const rotateY = useSpring(useTransform(mouseX, [-700, 700], [-14, 14]), spring);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-52 h-52 mx-auto mb-8 select-none">
      {/* Outer pulsing aura */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid glow ring */}
      <motion.div
        className="absolute inset-4 rounded-full bg-accent/10 blur-2xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Slow outer orbit ring */}
      <motion.div
        className="absolute inset-[-18px] rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_hsl(180_74%_36%/0.9)]" />
      </motion.div>

      {/* Fast inner orbit ring (opposite direction) */}
      <motion.div
        className="absolute inset-[-6px] rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_6px_hsl(180_74%_36%/0.7)]" />
      </motion.div>

      {/* 3D mouse-tilt container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full h-full"
      >
        {/* Floating SVG */}
        <motion.svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_20px_hsl(180_74%_36%/0.5)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left bracket — stroke draws in */}
          <motion.path
            d={PATH_LEFT}
            fill="none"
            stroke="hsl(180, 74%, 36%)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* Left bracket — fill fades in after draw */}
          <motion.path
            d={PATH_LEFT}
            fill="hsl(180, 74%, 19%)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />

          {/* Right bracket — stroke draws in with slight delay */}
          <motion.path
            d={PATH_RIGHT}
            fill="none"
            stroke="hsl(180, 74%, 36%)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* Right bracket — fill fades in */}
          <motion.path
            d={PATH_RIGHT}
            fill="hsl(180, 74%, 36%)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroLogo;
