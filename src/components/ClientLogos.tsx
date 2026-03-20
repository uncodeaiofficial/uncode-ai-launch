import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Meridian Logistics",
  "NovaBridge Capital",
  "ClearPath Health",
  "Vertex Systems",
  "Orion Analytics",
  "Summit Retail Group",
];

const ClientLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-14 px-6 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Trusted by forward-thinking teams
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.2, 0, 0, 1] }}
              className="text-muted-foreground/50 font-medium text-sm tracking-tight select-none hover:text-muted-foreground/80 transition-colors duration-200"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
