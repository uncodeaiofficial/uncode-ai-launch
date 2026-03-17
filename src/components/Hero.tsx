import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 grid-bg grid-mask" />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="z-10 text-center max-w-4xl"
      >
        <span className="label-mono mb-6 block">
          Precision AI Consulting
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-gradient-hero pb-4 leading-[0.95]">
          The Intelligence Layer for Global Enterprise.
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6" style={{ textWrap: "pretty" }}>
          We deploy custom LLM architectures and agentic workflows that turn
          unstructured data into competitive advantage.
        </p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 mt-10"
        >
          {[
            { value: "94%", label: "Model Accuracy" },
            { value: "2.4ms", label: "Avg Latency" },
            { value: "$1.2M", label: "Saved / Year" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-medium text-foreground">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
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
