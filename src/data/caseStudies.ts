export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  result: string;
  description: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  services: string[];
  timeline: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-logistics-corp",
    client: "Global Logistics Corp",
    industry: "Supply Chain",
    result: "43% reduction in route optimization time",
    description:
      "Deployed a multi-agent system that processes real-time logistics data across 12 distribution centers, reducing delivery times and operational costs.",
    metrics: [
      { label: "Accuracy", value: "97.2%" },
      { label: "Latency", value: "1.8ms" },
      { label: "ROI", value: "$3.4M/yr" },
    ],
    challenge:
      "Global Logistics Corp was managing route optimization manually across 12 regional distribution centers, each running on separate legacy systems with no shared data layer. Planners were spending 6+ hours daily reconciling spreadsheets, and delivery time estimates were off by an average of 22%. As volume grew, the process simply couldn't scale — they needed a solution that could ingest real-time data from all centers and make intelligent routing decisions autonomously.",
    approach: [
      "Conducted a 3-week AI Readiness Assessment to map all data sources, integration points, and workflow bottlenecks across distribution centers.",
      "Designed a multi-agent architecture where specialized agents handle route planning, delay prediction, load balancing, and exception management independently — then coordinate through a central orchestration layer.",
      "Built real-time data pipelines connecting all 12 centers, normalizing data formats and establishing a single source of truth for fleet, inventory, and demand signals.",
      "Deployed the system in a shadow mode alongside existing operations for 4 weeks, allowing the team to validate outputs before going live.",
      "Ran a 2-day AI Training & Workshop with the operations team to build confidence and establish escalation protocols.",
    ],
    outcome:
      "Route optimization time dropped from 6+ hours daily to under 45 minutes — a 43% reduction — with planners now reviewing and approving AI recommendations rather than building plans from scratch. Delivery accuracy improved to 97.2%, and the system identified $3.4M in annual savings through load consolidation and fuel optimization that human planners had missed.",
    services: ["AI Readiness Assessment", "AI Agent Development", "AI Training & Workshops"],
    timeline: "16 weeks end-to-end",
  },
  {
    slug: "finserve-holdings",
    client: "FinServe Holdings",
    industry: "Financial Services",
    result: "91% accuracy in fraud detection",
    description:
      "Built a custom transformer model for real-time transaction analysis, processing 2M+ events per second with sub-millisecond inference.",
    metrics: [
      { label: "Accuracy", value: "91.4%" },
      { label: "Latency", value: "0.9ms" },
      { label: "ROI", value: "$8.1M/yr" },
    ],
    challenge:
      "FinServe's existing rules-based fraud detection system was generating a 34% false positive rate — blocking legitimate transactions and frustrating customers — while still missing sophisticated fraud patterns. Their compliance team was manually reviewing thousands of flagged transactions daily. The business impact was significant: customer churn from blocked transactions plus actual fraud losses were costing over $12M annually.",
    approach: [
      "Ran an AI Readiness Assessment focused on data quality, transaction history, and labeling coverage across 3 years of transaction records.",
      "Designed a custom transformer architecture trained on FinServe's transaction data with behavioral sequencing — capturing patterns across time, not just individual transactions.",
      "Built a two-stage inference pipeline: a fast first-pass model (sub-1ms) for real-time decisions, and a deeper analysis model for borderline cases requiring human review.",
      "Implemented continuous learning loops so the model improves as analysts provide feedback on edge cases.",
      "Delivered full documentation, model cards, and compliance-ready explainability reports for regulatory review.",
    ],
    outcome:
      "Fraud detection accuracy reached 91.4% while cutting false positives by 71% — meaning fewer blocked legitimate transactions and dramatically less manual review. The system processes 2M+ transactions per second at 0.9ms latency, with zero production downtime since launch. Combined fraud loss reduction and operational savings delivered $8.1M in annual ROI.",
    services: ["AI Readiness Assessment", "Custom AI Development"],
    timeline: "20 weeks end-to-end",
  },
  {
    slug: "medtech-dynamics",
    client: "MedTech Dynamics",
    industry: "Healthcare",
    result: "60% faster clinical document processing",
    description:
      "RAG-powered system that extracts and structures clinical trial data from unstructured medical literature at enterprise scale.",
    metrics: [
      { label: "Accuracy", value: "94.8%" },
      { label: "Latency", value: "3.2ms" },
      { label: "ROI", value: "$1.7M/yr" },
    ],
    challenge:
      "MedTech Dynamics' research team was spending 40+ hours per clinical trial manually extracting data from unstructured medical literature, regulatory filings, and trial reports. With a pipeline of 60+ active trials, this bottleneck was delaying time-to-insight by weeks and tying up senior researchers in administrative work. They needed a system that could handle the complexity of medical language, varied document formats, and strict accuracy requirements.",
    approach: [
      "Audited document types, data extraction requirements, and accuracy thresholds across 5 representative trial datasets.",
      "Built a Retrieval-Augmented Generation (RAG) system using a fine-tuned biomedical language model, grounded in MedTech's proprietary document corpus.",
      "Designed a structured extraction pipeline that identifies, classifies, and normalizes clinical data points into a standardized schema compatible with their existing trial management software.",
      "Implemented confidence scoring and automated flagging for low-confidence extractions, routing them to human reviewers with highlighted context.",
      "Integrated with their existing document management system via API, enabling automated processing as new documents are ingested.",
    ],
    outcome:
      "Clinical document processing time dropped by 60%, freeing senior researchers to focus on analysis rather than extraction. The system achieves 94.8% extraction accuracy — exceeding the team's initial threshold of 90% — and has processed over 18,000 documents since launch without manual intervention beyond the confidence-flagged queue. Annual productivity savings total $1.7M.",
    services: ["AI Strategy & Roadmap", "Custom AI Development", "AI Tool Implementation"],
    timeline: "14 weeks end-to-end",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
