import {
  ClipboardCheck,
  Map,
  Wrench,
  Code2,
  GraduationCap,
  UserCheck,
  Workflow,
  Bot,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

export type ServiceData = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tag: string;
  price: string;
  tagline: string;
  description: string;
  outcomes: string[];
  scope: string;
  duration: string;
  deliverables: string[];
  metrics: string[];
  bestFor: string[];
  relatedSlugs: string[];
};

export const services: ServiceData[] = [
  {
    slug: "ai-readiness-assessment",
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    tag: "Audit",
    price: "$1,500–$5,000",
    tagline: "Know exactly where you stand before you invest a dollar.",
    description:
      "Before any AI initiative can succeed, you need a clear picture of where your organization stands today. Our AI Readiness Assessment is a structured audit of your data infrastructure, workflows, team capabilities, and technology stack — designed to surface your highest-impact opportunities and flag the gaps that would sink a poorly-planned AI rollout.",
    outcomes: [
      "A clear understanding of your organization's current AI maturity level",
      "Prioritized list of AI opportunities ranked by ROI and feasibility",
      "Identification of data, talent, and infrastructure gaps blocking progress",
      "Confidence to move forward with an AI investment — or know what to fix first",
    ],
    scope:
      "Typically conducted over 2–4 weeks through stakeholder interviews, workflow observation, data audits, and technology review. We work with your team asynchronously to minimize disruption.",
    duration: "2–4 weeks",
    deliverables: [
      "AI Readiness Scorecard across 6 dimensions",
      "Gap analysis report with specific recommendations",
      "Prioritized opportunity matrix (impact vs. effort)",
      "Executive summary deck for leadership alignment",
    ],
    metrics: [
      "Readiness score across data, infrastructure, talent, culture, process, and strategy",
      "Number of high-priority AI opportunities identified",
      "Estimated ROI range for top 3 recommendations",
    ],
    bestFor: [
      "Companies evaluating AI for the first time",
      "Organizations that have tried AI pilots without clear results",
      "Leadership teams that need business-case clarity before budgeting",
      "Companies preparing for a digital transformation initiative",
    ],
    relatedSlugs: ["ai-strategy-roadmap", "ai-tool-implementation"],
  },
  {
    slug: "ai-strategy-roadmap",
    icon: Map,
    title: "AI Strategy & Roadmap",
    tag: "Strategy",
    price: "$3,000–$10,000",
    tagline: "A prioritized plan to turn AI potential into business results.",
    description:
      "Having identified your opportunities, the next step is a strategy you can actually execute. We build a multi-phase AI roadmap that sequences your initiatives by impact, aligns them to your budget and team capacity, and gives leadership a clear picture of what gets built, when, and why. No generic frameworks — this is a plan built around your specific business.",
    outcomes: [
      "A phased, actionable AI roadmap your team can execute without external help",
      "Clear prioritization of which initiatives deliver the fastest ROI",
      "Alignment across leadership, operations, and IT on the AI direction",
      "A framework for evaluating new AI opportunities as they emerge",
    ],
    scope:
      "Collaborative strategy sessions with key stakeholders across business units, followed by synthesis and roadmap design. Delivered over 3–6 weeks depending on organization complexity.",
    duration: "3–6 weeks",
    deliverables: [
      "12–18 month phased AI roadmap",
      "Initiative briefs for each prioritized project (scope, cost, owner, KPIs)",
      "Build vs. buy vs. partner recommendation for each initiative",
      "Change management and adoption playbook",
      "Board/executive presentation deck",
    ],
    metrics: [
      "Number of initiatives planned vs. capacity",
      "Projected cost savings and revenue impact per phase",
      "Timeline to first measurable AI outcome",
    ],
    bestFor: [
      "Mid-market companies ready to move from exploration to execution",
      "Organizations with multiple AI ideas but no clear prioritization",
      "Companies that need executive alignment before allocating budget",
      "Teams that have completed an AI Readiness Assessment",
    ],
    relatedSlugs: ["ai-readiness-assessment", "ai-tool-implementation", "custom-ai-development"],
  },
  {
    slug: "ai-tool-implementation",
    icon: Wrench,
    title: "AI Tool Implementation",
    tag: "Implementation",
    price: "$5,000–$25,000",
    tagline: "The right tools, properly configured, actually delivering results.",
    description:
      "The AI tools market is overwhelming — and most implementations fail not because of bad software, but because of poor configuration, inadequate training, and missing integrations. We handle the full setup of third-party AI platforms (ChatGPT Enterprise, RAG systems, automation tools, and more), scoped to your workflows and connected to your existing data and systems.",
    outcomes: [
      "AI tools that are live, integrated, and actively used by your team",
      "Workflows redesigned around AI capabilities — not bolted on as afterthoughts",
      "Reduced time-to-value compared to self-directed implementation",
      "Team members trained and confident using the new toolset",
    ],
    scope:
      "Scoped per project based on the number of tools, integrations, and workflows involved. Includes requirements gathering, configuration, integration, testing, and team onboarding.",
    duration: "4–12 weeks",
    deliverables: [
      "Fully configured and integrated AI tool(s)",
      "Integration documentation and system architecture diagram",
      "Standard operating procedures (SOPs) for AI-enhanced workflows",
      "Admin and end-user training sessions",
      "30-day post-launch support window",
    ],
    metrics: [
      "Tool adoption rate (% of team actively using within 30 days)",
      "Time saved per workflow per week",
      "Error rate reduction in targeted processes",
    ],
    bestFor: [
      "Companies that have selected a tool but need expert implementation",
      "Teams replacing manual processes with AI-assisted workflows",
      "Organizations deploying ChatGPT Enterprise, knowledge bases, or RAG systems",
      "Companies that have failed at self-directed AI tool rollouts",
    ],
    relatedSlugs: ["ai-automation-workflow", "ai-training-workshops"],
  },
  {
    slug: "custom-ai-development",
    icon: Code2,
    title: "Custom AI Development",
    tag: "Development",
    price: "$15,000–$75,000+",
    tagline: "When off-the-shelf AI isn't enough — we build exactly what you need.",
    description:
      "Some business problems require solutions that don't exist yet. We design and build custom AI systems — fine-tuned language models, proprietary data pipelines, AI-integrated software applications, and intelligent decision systems — tailored to your exact specifications. From prototype to production, we handle the full development lifecycle.",
    outcomes: [
      "A production-ready AI system built for your specific use case",
      "Proprietary capability that your competitors cannot replicate with off-the-shelf tools",
      "Full ownership of the code, models, and intellectual property",
      "A scalable foundation to expand AI capabilities over time",
    ],
    scope:
      "Follows a full software development lifecycle: discovery, architecture, development, testing, deployment, and handoff. Complexity and timeline vary based on scope.",
    duration: "8–24 weeks",
    deliverables: [
      "Functional AI system deployed to your infrastructure or cloud",
      "Technical documentation and architecture guide",
      "Source code and model artifacts (full IP transfer)",
      "QA test results and performance benchmarks",
      "Developer handoff and maintenance guide",
    ],
    metrics: [
      "System accuracy and performance benchmarks vs. baseline",
      "Processing speed and scalability under load",
      "Business KPI impact (cost reduction, revenue, error rate)",
    ],
    bestFor: [
      "Companies with unique data assets they want to capitalize on",
      "Organizations where off-the-shelf AI lacks the precision required",
      "Businesses building AI as a product or core feature",
      "Teams needing proprietary models for compliance or competitive reasons",
    ],
    relatedSlugs: ["ai-agent-development", "ai-strategy-roadmap"],
  },
  {
    slug: "ai-training-workshops",
    icon: GraduationCap,
    title: "AI Training & Workshops",
    tag: "Training",
    price: "$500–$3,000/day",
    tagline: "Your team, empowered to use AI effectively from day one.",
    description:
      "AI tools are only as powerful as the people using them. Our training programs are practical, hands-on, and built around real workflows from your industry — not generic theory. From executive AI literacy sessions to deep-dive technical workshops, we meet your team where they are and give them the skills to leverage AI confidently and responsibly.",
    outcomes: [
      "A team that understands AI capabilities, limitations, and best practices",
      "Measurable improvement in AI tool usage and output quality",
      "A shared internal language around AI that accelerates adoption",
      "Reduced dependency on external support for everyday AI tasks",
    ],
    scope:
      "Available as single-day intensives, multi-session series, or ongoing monthly enablement programs. Format is tailored to audience (executives, managers, individual contributors, or technical teams).",
    duration: "1 day to 3 months",
    deliverables: [
      "Custom workshop curriculum and slides",
      "Hands-on exercises built from your actual workflows",
      "Prompt libraries and AI usage guidelines for your team",
      "Post-training assessment and competency benchmark",
      "Resource kit for continued self-guided learning",
    ],
    metrics: [
      "Pre/post assessment score improvement",
      "AI tool adoption rate 30 days post-training",
      "Participant confidence rating",
      "Number of new AI use cases identified by participants",
    ],
    bestFor: [
      "Companies deploying new AI tools and need team buy-in",
      "Leadership teams that want to understand AI before making investment decisions",
      "Organizations with low AI literacy that are falling behind competitors",
      "Teams that have AI tools but aren't using them effectively",
    ],
    relatedSlugs: ["ai-tool-implementation", "fractional-ai-advisor"],
  },
  {
    slug: "fractional-ai-advisor",
    icon: UserCheck,
    title: "Fractional AI Advisor",
    tag: "Retainer",
    price: "$2,000–$8,000/mo",
    tagline: "Senior AI expertise in your corner — without the full-time cost.",
    description:
      "As AI evolves rapidly, having an expert you can call on makes the difference between smart investments and expensive mistakes. Our Fractional AI Advisor service gives you access to senior AI strategy support on an ongoing basis — for evaluating tools, guiding your team, pressure-testing vendor pitches, and ensuring your AI initiatives stay on track.",
    outcomes: [
      "Faster, better-informed AI decisions at every level of the organization",
      "Protection against costly vendor lock-in and technology mistakes",
      "A steady hand steering your AI program as the landscape shifts",
      "Access to a strategic AI perspective without a $300K+ full-time hire",
    ],
    scope:
      "Monthly retainer with defined hours per month. Includes advisory calls, async Q&A, document reviews, vendor evaluations, and team office hours. Scales with your needs.",
    duration: "Ongoing (3-month minimum)",
    deliverables: [
      "Dedicated monthly strategy sessions",
      "On-demand async support via Slack or email",
      "Monthly AI landscape briefing relevant to your industry",
      "Vendor and tool evaluation reports as needed",
      "Quarterly roadmap review and adjustment",
    ],
    metrics: [
      "Number of AI decisions supported per month",
      "Cost avoidance from vendor/tool guidance",
      "Roadmap milestone progress",
      "Team AI capability improvement over engagement period",
    ],
    bestFor: [
      "SMBs scaling their AI capability without a full-time AI team",
      "Companies mid-way through an AI initiative needing ongoing guidance",
      "Leadership teams that want a trusted second opinion on AI decisions",
      "Organizations managing multiple AI vendors or tools simultaneously",
    ],
    relatedSlugs: ["ai-strategy-roadmap", "ai-training-workshops"],
  },
  {
    slug: "ai-automation-workflow",
    icon: Workflow,
    title: "AI Automation & Workflow Build-Outs",
    tag: "Automation",
    price: "$1,500–$15,000",
    tagline: "Turn manual, repetitive work into intelligent, automated processes.",
    description:
      "Most businesses have dozens of workflows that drain time and create errors — data entry, report generation, document processing, approvals, communication follow-ups. We design and build end-to-end AI-powered automation that connects your tools, eliminates manual steps, and lets your team focus on work that actually requires human judgment.",
    outcomes: [
      "Hours of manual work eliminated every week through intelligent automation",
      "Consistent, error-free process execution at any scale",
      "Real-time visibility into workflow status and performance",
      "A foundation for compounding efficiency gains as you add more automations",
    ],
    scope:
      "Begins with a workflow audit to identify automation candidates, followed by design, build, testing, and deployment. Each automation is documented and handed off with training.",
    duration: "2–8 weeks per workflow set",
    deliverables: [
      "Fully operational automated workflow(s)",
      "Integration map showing all connected systems",
      "Monitoring dashboard and alerting setup",
      "Workflow documentation and runbooks",
      "Team training on managing and modifying automations",
    ],
    metrics: [
      "Hours saved per week per automated workflow",
      "Error rate before vs. after automation",
      "Process cycle time reduction",
      "ROI payback period",
    ],
    bestFor: [
      "Operations teams drowning in repetitive manual tasks",
      "Companies with fragmented tool stacks that don't talk to each other",
      "Businesses experiencing scaling pains as headcount can't keep up with volume",
      "Teams that have identified automation opportunities but lack technical resources",
    ],
    relatedSlugs: ["ai-agent-development", "ai-tool-implementation"],
  },
  {
    slug: "ai-agent-development",
    icon: Bot,
    title: "AI Agent Development",
    tag: "Agents",
    price: "$5,000–$50,000",
    tagline: "Autonomous AI that works for you around the clock.",
    description:
      "AI agents represent the next frontier — software that doesn't just answer questions, but takes action. We design and build custom AI agents that can reason through complex tasks, use tools, manage multi-step workflows, and operate autonomously with minimal human intervention. From internal operations agents to customer-facing solutions, we build agents that deliver real business leverage.",
    outcomes: [
      "Autonomous AI systems that complete complex tasks end-to-end without manual oversight",
      "24/7 operational capacity without additional headcount",
      "Scalable execution of high-volume, high-complexity workflows",
      "Competitive advantage through capabilities your competitors are still figuring out",
    ],
    scope:
      "Covers full agent design and development: capability scoping, tool integration, reasoning architecture, safety guardrails, testing, and deployment. Complexity varies based on task domain and integration requirements.",
    duration: "6–20 weeks",
    deliverables: [
      "Production-deployed AI agent with defined capability set",
      "Tool integrations and API connections",
      "Safety and escalation protocols",
      "Agent monitoring and observability dashboard",
      "Full technical documentation and handoff",
    ],
    metrics: [
      "Task completion rate and accuracy",
      "Autonomous vs. escalated action ratio",
      "Time saved vs. manual equivalent",
      "Cost per task (agent) vs. cost per task (human baseline)",
    ],
    bestFor: [
      "Companies looking to automate complex, multi-step processes beyond simple workflows",
      "Organizations with high-volume decision-making that requires consistency",
      "Businesses building AI-native products or features",
      "Teams exploring agentic AI as a competitive differentiator",
    ],
    relatedSlugs: ["ai-automation-workflow", "custom-ai-development"],
  },
  {
    slug: "geo-generative-engine-optimization",
    icon: SearchCheck,
    title: "GEO (Generative Engine Optimization)",
    tag: "GEO",
    price: "$1,500–$3,500",
    tagline: "Get found in the AI answers your customers are already reading.",
    description:
      "Search is changing. A growing share of your customers are getting answers from ChatGPT, Perplexity, Google Gemini, and other AI systems — not traditional search results. GEO is the discipline of optimizing your brand, content, and digital presence to appear in those AI-generated answers. We audit your current visibility, identify gaps, and implement a strategy to make your brand the answer AI gives.",
    outcomes: [
      "Increased brand visibility in AI-generated search responses",
      "More authoritative positioning when AI systems summarize your industry",
      "A content and structure strategy built for how AI models consume information",
      "Early-mover advantage in a channel most competitors haven't touched yet",
    ],
    scope:
      "Includes an AI visibility audit, competitive gap analysis, content restructuring recommendations, schema and structured data optimization, and an ongoing monitoring framework.",
    duration: "3–6 weeks",
    deliverables: [
      "AI visibility audit report (ChatGPT, Perplexity, Gemini, and others)",
      "Competitive GEO gap analysis",
      "Content and structure optimization recommendations",
      "Implementation of schema markup and structured data improvements",
      "GEO monitoring setup and 30-day progress report",
    ],
    metrics: [
      "Brand mention frequency in AI-generated responses",
      "Share of AI-answer visibility vs. competitors",
      "Increase in AI-referred traffic (where measurable)",
      "Content authority score improvement",
    ],
    bestFor: [
      "Companies heavily reliant on organic search traffic",
      "Brands in competitive markets where AI-generated answers drive purchase decisions",
      "Organizations that want to build presence on the next generation of search",
      "Businesses that have invested in SEO and want to extend that into AI channels",
    ],
    relatedSlugs: ["ai-strategy-roadmap", "ai-training-workshops"],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);
