import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import AnimatedHeroLogo from "./AnimatedHeroLogo";

const AnimatedStat = ({ display, label }: { display: string; label: string }) => (
  <div className="text-center">
    <div className="font-mono text-2xl md:text-3xl font-medium text-foreground">{display}</div>
    <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 grid-bg grid-mask" />

      {/* Radial glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neural network background */}
      <NeuralBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="z-10 text-center max-w-4xl"
      >
        <AnimatedHeroLogo />

        <motion.span
          className="label-mono mb-2 block"
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Precision AI Consulting
        </motion.span>

        <motion.span
          className="block mb-3 text-gradient-hero"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        >
          Uncode AI
        </motion.span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground pb-4 leading-[1.05]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>
          {"The Intelligence Layer for Modern Business.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.2, 0, 0, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6"
          style={{ textWrap: "pretty" } as React.CSSProperties & { textWrap: string }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          We help companies identify, implement, and scale AI — from strategy to custom deployment.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 mt-10"
        >
          <AnimatedStat display="50+" label="Clients Served" />
          <AnimatedStat display="4.9★" label="Client Rating" />
          <AnimatedStat display="$2M+" label="Saved / Year" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="pulse-cta inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 px-8 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground h-12 px-8 rounded-lg font-medium text-sm hover:bg-muted transition-colors duration-200 glow-border"
          >
            View Case Studies
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
