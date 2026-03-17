import { motion } from "framer-motion";
import { Brain, Workflow, Database, Shield, Cpu, BarChart3 } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Brain,
    title: "Custom LLM Development",
    description: "Fine-tuned large language models built on your proprietary data with enterprise-grade security and performance.",
    tag: "Foundation Models",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description: "Autonomous AI agents that orchestrate complex multi-step business processes with human-in-the-loop oversight.",
    tag: "Automation",
  },
  {
    icon: Database,
    title: "RAG Architecture",
    description: "Retrieval-augmented generation systems that ground AI responses in your organization's knowledge base.",
    tag: "Knowledge Systems",
  },
  {
    icon: Shield,
    title: "AI Safety & Governance",
    description: "Comprehensive frameworks for responsible AI deployment including bias testing, monitoring, and compliance.",
    tag: "Compliance",
  },
  {
    icon: Cpu,
    title: "MLOps Infrastructure",
    description: "End-to-end machine learning pipelines with automated training, evaluation, and deployment at scale.",
    tag: "Infrastructure",
  },
  {
    icon: BarChart3,
    title: "Data Strategy",
    description: "Transform raw enterprise data into structured, AI-ready assets that fuel continuous model improvement.",
    tag: "Analytics",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      className="card-surface-hover p-6 md:p-8 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
          <service.icon size={20} className="text-primary" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {service.tag}
        </span>
      </div>
      <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
          <span className="label-mono mb-4 block">What We Build</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            Enterprise AI, engineered.
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
