import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, MapPin } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@uncodeai.io";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    data.append("_subject", "New inquiry from uncodeai.io");
    data.append("_template", "table");
    data.append("_captcha", "false");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          window.open("https://calendly.com/uncodeai/30min", "_blank");
        }, 800);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-11 px-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <span className="label-mono mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-6">
              Let's build your intelligence layer.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={{ textWrap: "pretty" } as React.CSSProperties & { textWrap: string }}>
              Tell us about your challenge. We'll respond within 24 hours with an
              initial assessment and proposed architecture.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {[
                { label: "Discovery Call", desc: "30-minute technical deep dive" },
                { label: "Architecture Review", desc: "Free assessment of your AI readiness" },
                { label: "Proof of Concept", desc: "4-week MVP with your data" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="mailto:info@uncodeai.io"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={15} className="text-primary" />
              info@uncodeai.io
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <MapPin size={15} className="text-primary" />
              Chicago, IL
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {submitted ? (
              <div className="card-surface p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Message received.</h3>
                <p className="text-sm text-muted-foreground mb-4">Opening your booking link now...</p>
                <a
                  href="https://calendly.com/uncodeai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-10 px-6 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Book Your Discovery Call
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-surface p-6 md:p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Name</label>
                    <input required name="name" type="text" className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Company</label>
                    <input required name="company" type="text" className={inputClass} placeholder="Acme Corp" />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Email</label>
                  <input required name="email" type="email" className={inputClass} placeholder="jane@acme.com" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Tell us about your challenge</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                    placeholder="We need to process 10M documents per day..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400 text-center">Something went wrong. Email us directly at info@uncodeai.io</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="pulse-cta h-12 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
