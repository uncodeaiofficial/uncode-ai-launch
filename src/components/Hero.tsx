import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedStat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, display } = useCountUp(value, 2000, suffix);
  return (
    <div className="text-center" ref={ref}>
      <div className="font-mono text-2xl md:text-3xl font-medium text-foreground">{display}</div>
      <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 grid-bg grid-mask" />

      {/* Radial glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="z-10 text-center max-w-4xl"
      >
        <motion.span
          className="label-mono mb-6 block"
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Precision AI Consulting
        </motion.span>
        <motion.span
          className="text-2xl md:text-3xl font-medium text-primary tracking-tight block mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        >
          Uncode AI
        </motion.span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-gradient-hero pb-4 leading-[0.95]">
          {"The Intelligence Layer for Global Enterprise.".split(" ").map((word, i) => (
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
          style={{ textWrap: "pretty" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          We deploy custom LLM architectures and agentic workflows that turn
          unstructured data into competitive advantage.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 mt-10"
        >
          <AnimatedStat value={94} suffix="%" label="Model Accuracy" />
          <AnimatedStat value={2} suffix=".4ms" label="Avg Latency" />
          <AnimatedStat value={1} suffix=".2M" label="Saved / Year" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="pulse-cta inline-flex items-center justify-center gap-2 bg-foreground text-background h-12 px-8 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200"
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
