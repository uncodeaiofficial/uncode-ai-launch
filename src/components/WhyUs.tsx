import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Speed to value",
    description:
      "We move fast without cutting corners. Most clients see measurable outcomes within 60–90 days of engagement start — not 12-month transformation timelines.",
  },
  {
    icon: Shield,
    title: "No fluff, no lock-in",
    description:
      "We recommend what's right for your business, not what earns us the highest referral fee. You own everything we build — code, models, IP — no exceptions.",
  },
  {
    icon: Users,
    title: "Operators, not theorists",
    description:
      "Our team has shipped production AI systems across logistics, finance, healthcare, and retail. We've felt the pain of bad implementations firsthand and we build to avoid it.",
  },
  {
    icon: TrendingUp,
    title: "ROI is the only metric that matters",
    description:
      "Every engagement is scoped around a measurable business outcome. We track it, report on it, and hold ourselves accountable to it — because that's how trust gets built.",
  },
];

type Diff = (typeof differentiators)[0];

const DiffCard = ({ d, index }: { d: Diff; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = d.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      className="flex gap-5"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mt-0.5">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <h3 className="text-base font-medium text-foreground tracking-tight mb-1.5">{d.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <span className="label-mono mb-4 block">Why Uncode AI</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-6">
              We've been on your side of the table.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We started Uncode AI because we watched too many companies get sold expensive AI projects that delivered nothing. We built this firm around a different promise: practical AI, measurable outcomes, and zero tolerance for theater.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-11 px-7 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Work with us
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <DiffCard key={d.title} d={d} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
