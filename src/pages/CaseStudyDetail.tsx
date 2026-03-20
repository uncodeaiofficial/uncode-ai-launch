import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Wrench, Clock } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LogoIcon from "@/components/LogoIcon";

const CALENDLY = "https://calendly.com/uncodeai/30min";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const cs = getCaseStudyBySlug(slug ?? "");

  if (!cs) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Case study not found.</p>
          <Link to="/#cases" className="text-primary underline text-sm">Back to case studies</Link>
        </div>
      </div>
    );
  }

  const others = caseStudies.filter((c) => c.slug !== cs.slug);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorGlow />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon className="w-7 h-7 text-primary" />
            <span className="text-foreground tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
          </Link>
          <button
            onClick={() => navigate("/#cases")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Case Studies
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{cs.industry}</span>
            <span className="text-border">•</span>
            <span className="text-sm text-muted-foreground">{cs.client}</span>
            <span className="text-border">•</span>
            <span className="text-sm text-muted-foreground">{cs.timeline}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground mb-6 leading-[0.95]">
            {cs.result}
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {cs.metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-xl px-5 py-3 text-center">
                <div className="font-mono text-xl font-medium text-foreground">{m.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-11 px-8 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get similar results — Book a call
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center text-primary text-xs font-mono">01</span>
              The Challenge
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center text-primary text-xs font-mono">02</span>
              Our Approach
            </h2>
            <ol className="space-y-4">
              {cs.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-muted-foreground mt-0.5 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center text-primary text-xs font-mono">03</span>
              The Outcome
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{cs.outcome}</p>
          </motion.div>

          {/* Services used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.2, 0, 0, 1] }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.12em] text-muted-foreground mb-4">Services Used</h2>
            <div className="flex flex-wrap gap-2">
              {cs.services.map((s) => (
                <span key={s} className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other case studies */}
        {others.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="mt-10 mb-10"
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary block mb-2">{c.industry}</span>
                  <p className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">{c.result}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.2, 0, 0, 1] }}
          className="bg-primary/8 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tighter text-foreground mb-3">
            Want results like this?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
            Book a free 30-minute call. We'll learn about your business and tell you honestly what's possible.
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

export default CaseStudyDetail;
