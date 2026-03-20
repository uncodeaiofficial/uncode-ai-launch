import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "OpenAI", letter: "O" },
  { name: "Anthropic", letter: "A" },
  { name: "Google Cloud", letter: "G" },
  { name: "Microsoft Azure", letter: "M" },
  { name: "AWS", letter: "⬡" },
  { name: "Meta AI", letter: "M" },
];

const TechPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Powered by leading AI infrastructure
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.2, 0, 0, 1] }}
              className="flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <span className="font-mono text-[10px] font-bold text-primary">{p.letter}</span>
              </div>
              <span
                className="text-muted-foreground/50 text-sm font-medium tracking-tight group-hover:text-muted-foreground/80 transition-colors duration-200"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
              >
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
