import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Dr. Elena Vasquez", role: "CEO & Chief AI Architect", bio: "Former ML Lead at DeepMind. PhD in Computational Neuroscience, Stanford." },
  { name: "Marcus Chen", role: "CTO", bio: "Ex-Principal Engineer at Stripe. Built distributed systems serving 500M+ requests/day." },
  { name: "Aisha Patel", role: "VP of AI Research", bio: "Published 40+ papers in NeurIPS/ICML. Pioneered transformer architectures for enterprise NLP." },
  { name: "James Okafor", role: "Head of Engineering", bio: "Scaled ML infrastructure at Netflix. Specialist in real-time inference systems." },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="label-mono mb-4 block">Who We Are</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-6">
            Built by engineers, for engineers.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            Uncode AI was founded by a team of researchers and engineers from the world's
            leading AI labs and technology companies. We don't just consult—we build, deploy,
            and maintain production AI systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

            return (
              <motion.div
                ref={cardRef}
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                className="card-surface p-6"
              >
                <div className="w-12 h-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
                  <span className="font-mono text-sm text-primary font-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground">{member.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary mt-1 mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
