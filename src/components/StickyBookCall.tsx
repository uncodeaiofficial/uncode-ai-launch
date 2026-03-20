import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const StickyBookCall = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://calendly.com/uncodeai/30min"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 z-[150] flex items-center gap-2.5 bg-primary text-primary-foreground h-11 px-5 rounded-full font-medium text-sm shadow-[0_4px_24px_hsl(180_74%_19%/0.6)] hover:opacity-95 transition-opacity"
        >
          <Calendar size={15} />
          Book a Call
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default StickyBookCall;
