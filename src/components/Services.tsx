import { motion, useInView } from "framer-motion";
import { ClipboardCheck, Map, Wrench, Code2, GraduationCap, UserCheck } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    description: "A one-time audit of your data, workflows, and tech stack to identify your highest-impact AI opportunities.",
    tag: "Audit",
    price: "$1,500–$5,000",
  },
  {
    icon: Map,
    title: "AI Strategy & Roadmap",
    description: "A prioritized plan for which AI tools and models to adopt, in what order, aligned to your goals and budget.",
    tag: "Strategy",
    price: "$3,000–$10,000",
  },
  {
    icon: Wrench,
    title: "AI Tool Implementation",
    description: "Hands-on setup of third-party AI tools — ChatGPT Enterprise, RAG systems, automation pipelines — scoped per project.",
    tag: "Implementation",
    price: "$5,000–$25,000",
  },
  {
    icon: Code2,
    title: "Custom AI Development",
    description: "Custom models, fine-tuned LLMs, or AI-integrated software built to your exact specifications.",
    tag: "Development",
    price: "$15,000–$75,000+",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    description: "Practical sessions that teach your team to use AI tools effectively, with real workflows and measurable outcomes.",
    tag: "Training",
    price: "$500–$3,000/day",
  },
  {
    icon: UserCheck,
    title: "Fractional AI Advisor",
    description: "Ongoing strategic AI guidance without the cost of a full-time hire. Popular with SMBs scaling their AI capability.",
    tag: "Retainer",
    price: "$2,000–$8,000/mo",
  },
];

type Service = typeof services[0];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      className="card-surface-hover p-6 md:p-8 group flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
          <service.icon size={20} className="text-primary" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {service.tag}
        </span>
      </div>
      <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
      <div className="mt-5">
        <span className="inline-block font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
          {service.price}
        </span>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            AI consulting, end to end.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
