import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Uncode AI took us from 'we should probably do something with AI' to a fully deployed pipeline in six weeks. The ROI was obvious within the first month.",
    name: "Sarah Mitchell",
    title: "VP of Operations",
    company: "Meridian Logistics",
    initials: "SM",
  },
  {
    quote: "Their fractional advisor model is exactly what we needed. Senior AI expertise on demand, without the overhead of a full-time hire.",
    name: "David Park",
    title: "CEO",
    company: "NovaBridge Capital",
    initials: "DP",
  },
  {
    quote: "The training workshops were the best investment we made last year. Our team went from skeptical to genuinely excited about AI in two days.",
    name: "Rachel Torres",
    title: "Head of Product",
    company: "ClearPath Health",
    initials: "RT",
  },
];

type Testimonial = typeof testimonials[0];

const TestimonialCard = ({ t, index }: { t: Testimonial; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -5, boxShadow: "0 0 28px hsl(180 74% 36% / 0.14)" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.2, 0, 0, 1] }}
      className="card-surface p-6 md:p-8 flex flex-col gap-6 cursor-default"
    >
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <span className="font-mono text-xs text-primary font-medium">{t.initials}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{t.name}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mt-0.5">
            {t.title}, {t.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block">Client Stories</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            Heard from the people who matter.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
