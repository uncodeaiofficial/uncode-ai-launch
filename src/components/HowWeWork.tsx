import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Assess",
    description: "We audit your data, workflows, and tech stack to find the highest-impact AI opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "We build a prioritized AI roadmap aligned to your business goals and budget.",
  },
  {
    number: "03",
    title: "Build",
    description: "We implement tools, pipelines, or custom models — hands-on, to production.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Ongoing advisory, training, and optimization to compound your AI advantage.",
  },
];

type Step = typeof steps[0];

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.2, 0, 0, 1] }}
      className="flex-1 relative"
    >
      {/* Connector line between steps on desktop. Visually verify alignment in final check — adjust left-16 if misaligned. */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-5 left-16 right-0 h-px bg-border" />
      )}
      <div className="relative z-10">
        <span className="font-mono text-4xl font-medium text-primary/30 block mb-4">
          {step.number}
        </span>
        <h3 className="text-xl font-medium text-foreground tracking-tight mb-3">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-work" className="py-24 md:py-32 px-6 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            From insight to impact — in weeks, not months.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
