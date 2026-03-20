import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Package, BarChart3, Users, ChevronRight } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LogoIcon from "@/components/LogoIcon";

const CALENDLY = "https://calendly.com/uncodeai/30min";

const Section = ({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
    className="bg-card rounded-xl border border-border p-6 md:p-8"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
        <Icon size={16} className="text-primary" />
      </div>
      <h2 className="text-lg font-medium text-foreground tracking-tight">{title}</h2>
    </div>
    {children}
  </motion.div>
);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Service not found.</p>
          <Link to="/#services" className="text-primary underline text-sm">
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorGlow />

      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon className="w-7 h-7 text-primary" />
            <span className="text-foreground tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
          </Link>
          <button
            onClick={() => navigate("/#services")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            All Services
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <Icon size={22} className="text-primary" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {service.tag}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground mb-4 leading-[0.95]">
            {service.title}
          </h1>

          <p className="text-xl md:text-2xl text-primary/80 font-medium mb-6 tracking-tight">
            {service.tagline}
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-12 px-8 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </a>
            <div className="inline-flex items-center gap-2 bg-card border border-border h-12 px-6 rounded-lg">
              <span className="font-mono text-sm text-accent">{service.price}</span>
              <span className="text-muted-foreground text-xs">typical range</span>
            </div>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Outcomes */}
          <Section icon={CheckCircle2} title="Business Outcomes" delay={0.1}>
            <ul className="space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Best For */}
          <Section icon={Users} title="Best For" delay={0.15}>
            <ul className="space-y-3">
              {service.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <ChevronRight size={15} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Deliverables */}
          <Section icon={Package} title="Key Deliverables" delay={0.2}>
            <ul className="space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Scope & Metrics */}
          <div className="flex flex-col gap-4">
            <Section icon={Clock} title="Scope & Duration" delay={0.25}>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.scope}</p>
              <div className="inline-flex items-center gap-2 bg-secondary rounded-lg px-3 py-1.5">
                <Clock size={13} className="text-primary" />
                <span className="font-mono text-xs text-foreground">{service.duration}</span>
              </div>
            </Section>

            <Section icon={BarChart3} title="Success Metrics" delay={0.3}>
              <ul className="space-y-2">
                {service.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <BarChart3 size={13} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>

        {/* Related services */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.2, 0, 0, 1] }}
            className="mb-10"
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Often Paired With
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {related.map((r) => {
                const RelIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    to={`/services/${r.slug}`}
                    className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <RelIcon size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-snug">{r.title}</p>
                      <p className="font-mono text-xs text-accent mt-1">{r.price}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.2, 0, 0, 1] }}
          className="bg-primary/8 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tighter text-foreground mb-3">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We'll learn about your business, answer your questions, and tell you honestly if this service is the right fit.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-12 px-10 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Contact Us Now — Book a Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
