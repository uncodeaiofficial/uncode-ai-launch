import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  const x = useSpring(pos.x, { stiffness: 120, damping: 20, mass: 0.5 });
  const y = useSpring(pos.y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed top-0 left-0 z-[200] w-[400px] h-[400px] rounded-full"
      aria-hidden
    >
      <div className="w-full h-full rounded-full bg-primary/5 blur-[80px]" />
    </motion.div>
  );
};

export default CursorGlow;
