import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do we need an internal tech team to work with you?",
    a: "No. Most of our clients don't have a dedicated AI or data team — that's exactly why they hire us. We handle the technical heavy lifting and translate everything into plain business language. For implementations, we work alongside whoever manages your existing tools and systems.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "It depends on the service. An AI Readiness Assessment runs 2–4 weeks. A strategy engagement is 3–6 weeks. Implementation and development projects range from 6 to 24 weeks depending on complexity. We'll give you a specific timeline in our proposal, and we hold to it.",
  },
  {
    q: "What if we're not sure which service we need?",
    a: "That's completely normal — most clients aren't sure when they first reach out. Book a free 30-minute discovery call and we'll ask the right questions, diagnose where you are, and recommend the most appropriate starting point. No pressure, no pitch.",
  },
  {
    q: "Who owns the AI systems and code you build?",
    a: "You do. Fully. We transfer all code, model weights, documentation, and intellectual property to you at project close. We don't retain licensing rights, we don't create vendor lock-in, and we don't build systems that require ongoing fees to us to function.",
  },
  {
    q: "How do you price your work?",
    a: "Most services are project-scoped with fixed pricing so there are no surprises. Ongoing advisory retainers are monthly. We publish pricing ranges on our services page as a starting point — exact pricing depends on scope, which we define together before any commitment.",
  },
  {
    q: "What industries do you work with?",
    a: "We've delivered results in supply chain, financial services, healthcare, retail, professional services, and SaaS. AI principles translate across industries, but we bring industry-specific knowledge to every engagement. If you're wondering whether your industry is a fit, just ask — we'll tell you honestly.",
  },
  {
    q: "What happens if the AI doesn't perform as expected?",
    a: "Every engagement includes defined success metrics agreed upon before we start. We do regular checkpoints against those metrics and adjust our approach if results aren't tracking as expected. We don't disappear after delivery — we stand behind our work.",
  },
  {
    q: "Can you work with our existing tools and software stack?",
    a: "Almost always yes. We're tool-agnostic by design. We've integrated with Salesforce, HubSpot, SAP, ServiceNow, Microsoft 365, Google Workspace, and dozens of industry-specific platforms. If we encounter a tool we haven't worked with, we'll tell you upfront.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            Questions we hear every day.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5 hover:text-primary transition-colors duration-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://calendly.com/uncodeai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-10 px-6 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Book a free call — we'll answer anything
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
