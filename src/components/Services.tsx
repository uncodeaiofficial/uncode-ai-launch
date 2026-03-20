import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, type ServiceData } from "@/data/services";

const ServiceCard = ({ service, index }: { service: ServiceData; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -6, boxShadow: "0 0 32px hsl(180 74% 36% / 0.18)" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="card-surface-hover p-6 md:p-8 group flex flex-col h-full block"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
            <Icon size={20} className="text-primary" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {service.tag}
          </span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="inline-block font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
            {service.price}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
            Learn more <ArrowRight size={12} />
          </span>
        </div>
      </Link>
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
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
