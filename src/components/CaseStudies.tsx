import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

const CaseStudyCard = ({ c, index }: { c: CaseStudy; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -4, boxShadow: "0 0 28px hsl(180 74% 36% / 0.14)" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.2, 0, 0, 1] }}
    >
      <Link
        to={`/case-studies/${c.slug}`}
        className="card-surface p-6 md:p-8 group block transition-colors duration-200 hover:border-primary/30"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">{c.industry}</span>
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
            {c.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-mono text-lg md:text-xl font-medium text-foreground">{m.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

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
          {caseStudies.map((c, i) => (
            <CaseStudyCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
