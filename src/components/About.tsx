import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Tyler Allen", role: "Founder & CEO", photo: "/tyler.png" },
  { name: "Andrew", role: "VP of Sales", photo: "/andrew.jpg" },
  { name: "Austin", role: "VP of Marketing", photo: "" },
  { name: "Kristina", role: "Client Success", photo: "" },
];

type TeamMember = { name: string; role: string; photo: string };

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      className="card-surface p-6"
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover object-top mb-4"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
          <span className="font-mono text-sm text-primary font-medium">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
      )}
      <h3 className="text-sm font-medium text-foreground">{member.name}</h3>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary mt-1">{member.role}</p>
    </motion.div>
  );
};

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
            Built on results. Driven by impact.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties & { textWrap: string }}>
            Uncode AI was founded to close the gap between AI hype and real business results.
            We're practitioners — not theorists — and we work hands-on with your data, your team,
            and your goals. Every engagement ends with something running in production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
