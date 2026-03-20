export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-geo",
    title: "What Is GEO? The New Frontier of AI Search Visibility",
    category: "GEO",
    date: "March 12, 2026",
    readTime: "6 min read",
    excerpt:
      "Search is changing faster than most companies realize. Here's what Generative Engine Optimization is, why it matters, and what you can do about it right now.",
    content: [
      {
        body: "A few years ago, getting found online meant ranking on Google's first page. Today, a growing share of your potential customers are getting answers from ChatGPT, Perplexity, Google's AI Overviews, and other AI-powered systems — and they're never clicking through to a website at all. They're reading the AI's answer directly.",
      },
      {
        heading: "What Is GEO?",
        body: "Generative Engine Optimization (GEO) is the practice of optimizing your brand, content, and digital presence so that AI systems include you — accurately and favorably — in their generated answers. It's the evolution of SEO for a world where AI is the new search engine.",
      },
      {
        heading: "Why Traditional SEO Isn't Enough",
        body: "Traditional SEO optimizes for keyword rankings and backlinks. But AI systems like ChatGPT don't use the same signals. They draw on training data, real-time web access (in some cases), structured data, and authoritative sources. A brand can rank #1 on Google and still be completely invisible in AI-generated answers — or worse, be described inaccurately.",
      },
      {
        heading: "What GEO Actually Involves",
        body: "GEO encompasses several disciplines working together: content restructuring so AI can parse and cite your expertise clearly; schema markup and structured data that helps AI understand your offerings; authority building through the sources AI models treat as credible; and ongoing monitoring of how AI systems describe your brand across platforms. It's not a one-time fix — it's an ongoing discipline.",
      },
      {
        heading: "Who Needs GEO Now",
        body: "If your business depends on organic search traffic, operates in a competitive market, or sells products or services that people research before buying — you need a GEO strategy now. The window for early-mover advantage is open, but it's closing. Brands that establish AI visibility today will be significantly harder to displace a year from now.",
      },
      {
        heading: "Where to Start",
        body: "The first step is an AI visibility audit: search for your brand, your key services, and your core value propositions across ChatGPT, Perplexity, and Google's AI Overview. Note what's accurate, what's missing, and what competitors appear when you're absent. That gap analysis is your GEO roadmap.",
      },
    ],
  },
  {
    slug: "5-signs-ready-for-ai",
    title: "5 Signs Your Business Is Ready for AI",
    category: "Strategy",
    date: "March 5, 2026",
    readTime: "5 min read",
    excerpt:
      "Most companies ask 'should we do AI?' The better question is 'are we ready?' Here are five indicators that the answer is yes.",
    content: [
      {
        body: "The pressure to adopt AI is real, but rushing in before you're ready is one of the most common ways AI initiatives fail. The good news: readiness isn't about being a tech company or having a massive budget. It's about having the right foundations in place. Here are five clear signals.",
      },
      {
        heading: "1. You Have a Specific Problem, Not a General Interest",
        body: "Vague goals like 'use AI to improve efficiency' almost always fail. Ready organizations can name a concrete problem: 'Our customer support team handles 2,000 tickets a week and 60% are repetitive questions' or 'Our sales team spends 3 hours per rep per day on CRM data entry.' Specificity is the starting point for every successful AI project.",
      },
      {
        heading: "2. Your Data Is Accessible (Even If It's Messy)",
        body: "AI requires data — but it doesn't require perfect data. The question is whether your relevant data exists in a form that can be accessed and worked with. If your customer data lives in a CRM, your documents are in cloud storage, and your transactions are in a database, you likely have what you need. Completely siloed, paper-based, or undigitized data is a signal to pause and build foundations first.",
      },
      {
        heading: "3. Leadership Is Curious, Not Just Compliant",
        body: "The most successful AI initiatives have executive sponsors who are genuinely curious about the technology, not just signing off because AI is trendy. If your leadership team is asking real questions, attending demos, and thinking about use cases in their domain — that's a strong signal. AI without leadership engagement dies in pilot.",
      },
      {
        heading: "4. You Have a Clear Owner",
        body: "Someone needs to own the AI initiative. Not as a committee responsibility, but as a primary accountability. This doesn't have to be a technical person — a sharp operations leader or business unit head with a technical partner can be just as effective. Initiatives without a clear owner stall.",
      },
      {
        heading: "5. You're Willing to Change Processes, Not Just Add Tools",
        body: "This is the most important signal. AI doesn't just plug into existing workflows — it changes them. Companies that are ready for AI understand that implementing it means rethinking how work gets done, not just buying a new subscription. If your team is open to process change, you're ready.",
      },
    ],
  },
  {
    slug: "ai-agents-vs-automation",
    title: "AI Agents vs. Automation: What's the Difference?",
    category: "Technology",
    date: "February 26, 2026",
    readTime: "7 min read",
    excerpt:
      "Both AI agents and automation can save time — but they're fundamentally different tools. Knowing which to use (and when) can save you significant time and money.",
    content: [
      {
        body: "In almost every AI conversation we have with clients, 'automation' and 'AI agents' get used interchangeably. They're not the same thing, and confusing them leads to choosing the wrong solution for the problem — which means spending more money for worse results.",
      },
      {
        heading: "What Is Traditional Automation?",
        body: "Traditional automation (like Zapier, Make, or RPA tools) follows explicit, predefined rules. If X happens, do Y. It's deterministic: the same input always produces the same output. It's excellent for structured, repetitive tasks with clear rules — moving data between systems, sending notifications, generating reports from templates. It's fast to build, reliable, and cheap to run.",
      },
      {
        heading: "What Is an AI Agent?",
        body: "An AI agent can reason. It can take a goal, break it into steps, use tools, handle unexpected situations, and adapt its approach based on what it encounters. Where automation follows a script, an agent improvises intelligently within guardrails. An agent can read an email, decide what it's asking for, look up relevant information, draft a response, and flag edge cases for human review — all without a human defining every possible scenario in advance.",
      },
      {
        heading: "When to Use Automation",
        body: "Use automation when the process is well-defined, the data is structured, and exceptions are rare. Data syncing, invoice processing, scheduled reports, form submissions — these are automation's home turf. Automation is also the right starting point when budget is limited. You can automate a process for a fraction of the cost of building an agent.",
      },
      {
        heading: "When to Use AI Agents",
        body: "Use agents when the process requires judgment, handles unstructured inputs (emails, documents, calls), or needs to adapt to variability. Customer support triage, research tasks, proposal drafting, complex scheduling, multi-step research — these are agent territory. The tradeoff is higher build complexity and cost, so the task volume and business value need to justify it.",
      },
      {
        heading: "The Practical Answer",
        body: "For most organizations, the right answer is: start with automation for the structured, high-volume tasks, and layer in agents for the complex, judgment-heavy ones. Both are valuable. The mistake is building an expensive agent for a problem that a $50/month automation tool would solve just as well.",
      },
    ],
  },
  {
    slug: "how-to-measure-ai-roi",
    title: "How to Measure the ROI of AI in Your Business",
    category: "Strategy",
    date: "February 18, 2026",
    readTime: "6 min read",
    excerpt:
      "AI ROI is real — but measuring it correctly is harder than it looks. Here's the framework we use with every client.",
    content: [
      {
        body: "The most common question we get after a project proposal isn't 'can you do this?' — it's 'how do we know if it worked?' Measuring AI ROI is genuinely harder than measuring the ROI of, say, a new piece of equipment. But it's absolutely possible if you set up the right framework before you start.",
      },
      {
        heading: "Start With a Baseline",
        body: "You cannot measure improvement without knowing where you started. Before any AI project, document the current state: how long does the process take, how many people are involved, what does it cost, and what's the error rate or output quality. This sounds obvious, but most companies skip it and then spend months arguing about whether the AI 'actually helped.'",
      },
      {
        heading: "The Four Categories of AI Value",
        body: "AI generates value in four ways: time savings (people doing things faster), cost reduction (fewer people or resources needed), revenue impact (better decisions, faster output, or new capabilities that generate revenue), and risk reduction (fewer errors, better compliance, reduced fraud). Most projects touch 2–3 of these. Get specific about which ones apply to your project and how you'll measure them.",
      },
      {
        heading: "Hard vs. Soft ROI",
        body: "Hard ROI is measurable in dollars: hours saved × hourly cost, fraud losses avoided, support tickets deflected × cost per ticket. Soft ROI is real but harder to quantify: faster decisions, better employee morale, reduced burnout from repetitive work, competitive positioning. Include both in your case — but be honest about which is which.",
      },
      {
        heading: "The Time Horizon Problem",
        body: "AI ROI often takes 3–6 months to fully materialize. The first month is implementation and onboarding. The second month is team adjustment. By months 3–6, adoption is solid and you can measure actual impact. Set expectations accordingly — both with leadership and with yourself. Projects that get killed in month 1 because 'we haven't seen ROI yet' almost always would have paid off.",
      },
      {
        heading: "A Simple Framework",
        body: "Here's the framework we use: (1) Define 2–3 specific metrics before the project starts. (2) Measure the baseline. (3) Set a 90-day checkpoint for initial data. (4) Do a full ROI review at 6 months. (5) Adjust the system based on what the data shows. Simple, repeatable, and honest.",
      },
    ],
  },
  {
    slug: "what-is-fractional-ai-advisor",
    title: "The Fractional AI Advisor: What It Is and When You Need One",
    category: "Services",
    date: "February 10, 2026",
    readTime: "5 min read",
    excerpt:
      "Full-time AI leadership costs $250K+. A fractional advisor gives you the strategy without the overhead. Here's how to know if it's the right fit.",
    content: [
      {
        body: "The AI talent market is brutal. A seasoned AI strategy leader — someone who can evaluate tools, guide a roadmap, and keep a team accountable to real outcomes — commands $200,000–$350,000 in total compensation. For most mid-market companies, that's not a realistic hire. The fractional AI advisor model exists to bridge that gap.",
      },
      {
        heading: "What a Fractional AI Advisor Actually Does",
        body: "A fractional AI advisor provides ongoing strategic guidance on a part-time, retainer basis. This includes: evaluating AI tools and vendors before you commit, keeping your roadmap current as the technology evolves, pressure-testing pitches from vendors who have every incentive to oversell, running monthly strategy sessions with your leadership team, and being the person your team can call when they hit a decision they're not equipped to make alone.",
      },
      {
        heading: "What It Doesn't Include",
        body: "A fractional advisor is not a doer. They don't build software, manage your data infrastructure, or run your implementation projects. They are the strategic layer — the person who ensures you're making the right decisions, in the right order, for the right reasons. If you need hands-on implementation, that's a different engagement.",
      },
      {
        heading: "When You Need One",
        body: "You need a fractional AI advisor when: you're actively evaluating or implementing AI and don't have internal expertise to guide those decisions; you're spending money on AI tools but aren't sure they're working; you have a roadmap but no one is holding the organization accountable to it; or you keep getting pitched by AI vendors and can't tell what's real from what's marketing.",
      },
      {
        heading: "When You Don't",
        body: "If you have a strong, experienced CTO or Head of Data who lives in the AI space, you may not need a fractional advisor — you need an implementer. Similarly, if you haven't yet run an AI Readiness Assessment or defined a strategy, start there first. A fractional advisor is most valuable when there's a real initiative to guide.",
      },
      {
        heading: "The Cost Comparison",
        body: "A fractional AI advisor retainer typically runs $2,000–$8,000 per month, depending on scope and hours. Against a $300,000 full-time hire (including benefits and equity), even the high end of a fractional engagement is a fraction of the cost — and you get senior expertise without the HR overhead, notice periods, or equity dilution.",
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
