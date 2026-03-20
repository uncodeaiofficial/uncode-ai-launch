import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";
import ScrollProgress from "@/components/ScrollProgress";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-medium text-foreground mb-3 tracking-tight">{title}</h2>
    <div className="text-sm text-muted-foreground leading-[1.9] space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <ScrollProgress />

    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon className="w-7 h-7 text-primary" />
          <span className="text-foreground tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to home</Link>
      </div>
    </nav>

    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">Legal</span>
        <h1 className="text-4xl font-medium tracking-tighter text-foreground mb-2" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: March 19, 2026</p>

        <Section title="Overview">
          <p>Uncode AI ("we," "us," or "our") operates uncodeai.com. This Privacy Policy explains how we collect, use, and protect information you provide when using our website. By using our site, you agree to the practices described here.</p>
        </Section>

        <Section title="Information We Collect">
          <p><strong className="text-foreground">Contact form data:</strong> When you submit our contact form, we collect your name, company name, email address, and the message you provide. This information is used solely to respond to your inquiry.</p>
          <p><strong className="text-foreground">Usage data:</strong> We may collect anonymized information about how you interact with our site (pages visited, time on page, referral source) to improve our content and user experience.</p>
          <p><strong className="text-foreground">Cookies:</strong> We use essential cookies to maintain site functionality. With your consent, we may use analytics cookies to understand traffic patterns. We do not use advertising or tracking cookies.</p>
        </Section>

        <Section title="How We Use Your Information">
          <p>We use your information to: respond to inquiries submitted through our contact form; improve our website and service offerings; and communicate with you if you have opted in to receive updates.</p>
          <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
        </Section>

        <Section title="Third-Party Services">
          <p>Our website uses the following third-party services that may process data:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-foreground">Calendly</strong> — for scheduling discovery calls. Calendly's privacy policy applies when you book a meeting.</li>
            <li><strong className="text-foreground">Google Fonts</strong> — for typography. Google may log requests to their font API.</li>
            <li><strong className="text-foreground">Fontshare</strong> — for the Satoshi typeface. Their standard data practices apply.</li>
          </ul>
        </Section>

        <Section title="Data Retention">
          <p>Contact form submissions are retained for up to 24 months for the purpose of business communications. You may request deletion of your data at any time by contacting us at info@uncodeai.io.</p>
        </Section>

        <Section title="Your Rights">
          <p>Depending on your location, you may have rights under GDPR, CCPA, or other applicable laws, including the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; opt out of any marketing communications; and lodge a complaint with a supervisory authority.</p>
          <p>To exercise any of these rights, email us at <a href="mailto:info@uncodeai.io" className="text-primary hover:underline">info@uncodeai.io</a>.</p>
        </Section>

        <Section title="Security">
          <p>We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="Children's Privacy">
          <p>Our services are not directed to individuals under 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </Section>

        <Section title="Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>
        </Section>

        <Section title="Contact">
          <p>Questions about this policy? Contact us at <a href="mailto:info@uncodeai.io" className="text-primary hover:underline">info@uncodeai.io</a> or write to Uncode AI, Chicago, IL.</p>
        </Section>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="https://calendly.com/uncodeai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-10 px-6 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call <ArrowRight size={14} />
          </a>
          <Link to="/" className="inline-flex items-center h-10 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Return to home
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);

export default PrivacyPolicy;
