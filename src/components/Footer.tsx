import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import LogoIcon from "./LogoIcon";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Case Studies", href: "#cases" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <LogoIcon className="w-6 h-6 text-primary" />
              <span className="text-foreground text-lg tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Precision AI consulting for modern enterprise.
            </p>
            <a href="mailto:info@uncodeai.io" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={13} className="text-primary" />
              info@uncodeai.io
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={13} className="text-primary" />
              Chicago, IL
            </div>
            {/* Social links */}
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <a href="https://www.linkedin.com/company/uncodeai/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Uncode AI on LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://x.com/TheUncodeAI" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Uncode AI on X">
                <Twitter size={14} />
              </a>
              <a href="https://www.youtube.com/@UncodeAIOfficial" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Uncode AI on YouTube">
                <Youtube size={14} />
              </a>
              <a href="https://www.tiktok.com/@uncodeai" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label="Uncode AI on TikTok">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Navigation</p>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit">
                    {link.label}
                  </a>
                )
              )}
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Stay in the loop</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Practical AI insights — no hype, no spam. One email when it matters.
            </p>
            {subscribed ? (
              <p className="text-sm text-primary font-medium">You're in. Talk soon.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 h-9 px-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <button
                  type="submit"
                  className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Uncode AI. All rights reserved.
          </p>
          <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
