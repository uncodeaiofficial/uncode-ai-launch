import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Global Logistics Corp",
    industry: "Supply Chain",
    result: "43% reduction in route optimization time",
    description: "Deployed a multi-agent system that processes real-time logistics data across 12 distribution centers, reducing delivery times and operational costs.",
    metrics: { accuracy: "97.2%", latency: "1.8ms", roi: "$3.4M/yr" },
  },
  {
    client: "FinServe Holdings",
    industry: "Financial Services",
    result: "91% accuracy in fraud detection",
    description: "Built a custom transformer model for real-time transaction analysis, processing 2M+ events per second with sub-millisecond inference.",
    metrics: { accuracy: "91.4%", latency: "0.9ms", roi: "$8.1M/yr" },
  },
  {
    client: "MedTech Dynamics",
    industry: "Healthcare",
    result: "60% faster clinical document processing",
    description: "RAG-powered system that extracts and structures clinical trial data from unstructured medical literature at enterprise scale.",
    metrics: { accuracy: "94.8%", latency: "3.2ms", roi: "$1.7M/yr" },
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block">Proven Impact</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            Results that compound.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {cases.map((c, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

            return (
              <motion.div
                ref={cardRef}
                key={c.client}
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
                className="card-surface p-6 md:p-8 group cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                        {c.industry}
                      </span>
                      <span className="text-border">•</span>
                      <span className="text-sm text-muted-foreground">{c.client}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-3 flex items-center gap-2">
                      {c.result}
                      <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{c.description}</p>
                  </div>

                  <div className="flex gap-6 lg:gap-8 shrink-0">
                    {Object.entries(c.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <div className="font-mono text-lg md:text-xl font-medium text-foreground">{val}</div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
