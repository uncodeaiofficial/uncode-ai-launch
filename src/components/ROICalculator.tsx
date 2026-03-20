import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

const useCases = [
  { label: "Document & Data Processing", hoursPerEmployee: 6, automationRate: 0.7 },
  { label: "Customer Support & Triage", hoursPerEmployee: 5, automationRate: 0.65 },
  { label: "Sales & CRM Data Entry", hoursPerEmployee: 4, automationRate: 0.75 },
  { label: "Reporting & Analytics", hoursPerEmployee: 3, automationRate: 0.8 },
  { label: "Research & Summarization", hoursPerEmployee: 5, automationRate: 0.6 },
  { label: "Email & Communication Drafting", hoursPerEmployee: 3, automationRate: 0.65 },
];

const ROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [employees, setEmployees] = useState(25);
  const [avgSalary, setAvgSalary] = useState(70000);
  const [useCaseIndex, setUseCaseIndex] = useState(0);

  const selected = useCases[useCaseIndex];
  const hourlyRate = avgSalary / 2080;
  const weeklyHoursSaved = employees * selected.hoursPerEmployee * selected.automationRate;
  const annualSavings = weeklyHoursSaved * 52 * hourlyRate;
  const annualSavingsFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(annualSavings);

  return (
    <section id="roi-calculator" className="py-24 md:py-32 px-6 border-t border-border bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">ROI Calculator</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            What could AI save your business?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            A rough estimate based on real-world automation rates. Actual results vary — book a call for a tailored analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Inputs */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
                Number of Employees Affected
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="flex-1 accent-primary h-1.5 rounded-full"
                />
                <span className="font-mono text-lg font-medium text-foreground w-16 text-right">
                  {employees}
                </span>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
                Average Annual Salary (USD)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={30000}
                  max={200000}
                  step={5000}
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="flex-1 accent-primary h-1.5 rounded-full"
                />
                <span className="font-mono text-lg font-medium text-foreground w-24 text-right">
                  ${(avgSalary / 1000).toFixed(0)}K
                </span>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
                Primary Use Case
              </label>
              <div className="grid gap-2">
                {useCases.map((uc, i) => (
                  <button
                    key={uc.label}
                    onClick={() => setUseCaseIndex(i)}
                    className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-all duration-150 ${
                      i === useCaseIndex
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {uc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="flex flex-col gap-4">
            <div className="bg-primary/8 border border-primary/25 rounded-2xl p-8 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-primary" />
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                  Estimated Annual Savings
                </span>
              </div>
              <div
                className="text-5xl md:text-6xl font-medium text-foreground tracking-tighter mb-2"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
              >
                {annualSavingsFormatted}
              </div>
              <p className="text-sm text-muted-foreground mt-3">per year from AI automation</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-card/60 rounded-xl p-4 border border-border">
                  <div className="font-mono text-xl font-medium text-foreground">
                    {Math.round(weeklyHoursSaved).toLocaleString()}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                    Hours saved / week
                  </div>
                </div>
                <div className="bg-card/60 rounded-xl p-4 border border-border">
                  <div className="font-mono text-xl font-medium text-foreground">
                    {Math.round(selected.automationRate * 100)}%
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                    Automation rate
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Want a detailed ROI analysis built around your specific workflows and data?
              </p>
              <a
                href="https://calendly.com/uncodeai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-10 px-6 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-full justify-center"
              >
                Get a tailored estimate
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
