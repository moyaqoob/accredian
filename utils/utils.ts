type DomainKey =
  | "product"
  | "ai"
  | "leadership"
  | "data"
  | "operations"
  | "digital"
  | "fintech"

const domains = [
  { key: "product", label: "Product & Innovation Hub" },
  { key: "ai", label: "Gen-AI Mastery" },
  { key: "leadership", label: "Leadership Elevation" },
  { key: "data", label: "Tech & Data Insights" },
  { key: "operations", label: "Operations Excellence" },
  { key: "digital", label: "Digital Enterprise" },
  { key: "fintech", label: "Fintech Innovation Lab" },
] as const

const domainData: Record<DomainKey, any> = {
  product: {
    stats: [
      { label: "Learners", value: "8,200" },
      { label: "Completion", value: "91%" },
      { label: "Programs", value: "22" },
    ],
    programs: [
      { name: "Product Strategy", progress: 80 },
      { name: "UX Research", progress: 65 },
    ],
  },
  ai: {
    stats: [
      { label: "Learners", value: "12,480" },
      { label: "Completion", value: "94%" },
      { label: "Programs", value: "47" },
    ],
    programs: [
      { name: "Gen AI", progress: 87 },
      { name: "ML Ops", progress: 72 },
    ],
  },
  leadership: {
    stats: [
      { label: "Leaders", value: "4,200" },
      { label: "Growth", value: "88%" },
      { label: "Programs", value: "18" },
    ],
    programs: [
      { name: "Executive Leadership", progress: 75 },
      { name: "Team Building", progress: 60 },
    ],
  },
  data: {
    stats: [
      { label: "Analysts", value: "9,300" },
      { label: "Completion", value: "92%" },
      { label: "Programs", value: "30" },
    ],
    programs: [
      { name: "Data Science", progress: 85 },
      { name: "Analytics", progress: 70 },
    ],
  },
  operations: {
    stats: [
      { label: "Ops Teams", value: "6,100" },
      { label: "Efficiency", value: "89%" },
      { label: "Programs", value: "25" },
    ],
    programs: [
      { name: "Process Optimization", progress: 78 },
      { name: "Lean Ops", progress: 66 },
    ],
  },
  digital: {
    stats: [
      { label: "Enterprises", value: "5,500" },
      { label: "Adoption", value: "90%" },
      { label: "Programs", value: "28" },
    ],
    programs: [
      { name: "Digital Transformation", progress: 82 },
      { name: "Cloud", progress: 68 },
    ],
  },
  fintech: {
    stats: [
      { label: "Fintech Users", value: "3,900" },
      { label: "Completion", value: "87%" },
      { label: "Programs", value: "20" },
    ],
    programs: [
      { name: "Payments", progress: 76 },
      { name: "Blockchain", progress: 62 },
    ],
  },
}
