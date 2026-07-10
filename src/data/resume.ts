// Education & certification content for the portfolio site.
// Single source of truth — components import from here and map over the arrays.
// Update this file when credentials change; do not hardcode this data in components.

export interface Education {
  degree: string;
  field: string;
  school: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
  // Client-facing benefit line shown on the card — the persuasive part.
  relevance: string;
}

export interface Skill {
  label: string;
  // Featured skills surface on the site; the rest stay in the data file.
  // Filter with: skills.filter((s) => s.featured)
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  dateCompleted: string;
  status: "completed" | "in-progress";
  // Client-facing benefit line shown on the card — the persuasive part.
  relevance: string;
  verifyUrl?: string;
  // Path under /public/certificates once the image is cropped/redacted.
  // "View certificate" only renders when this is set.
  certificateImage?: string;
  skills: Skill[];
  // Optional short blurb for a card or detail view
  summary?: string;
}

export const education: Education[] = [
  {
    degree: "Associate's Degree",
    field: "NMP Digital Marketing",
    school: "Middlesex Community College",
    startDate: "Fall 2023",
    endDate: "Fall 2026",
    inProgress: true,
    relevance:
      "Formal training in marketing strategy — so your site isn't just good-looking, it's built to bring in business.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Social Media Simternship®",
    issuer: "Stukent",
    dateCompleted: "April 27, 2025",
    status: "completed",
    relevance:
      "The same budget-and-KPI skills I'd use to prove your site is actually bringing in customers.",
    summary:
      "A hands-on simulation running live social media campaigns end to end — planning, launching, testing, and optimizing paid and organic content against real performance data and a working ad budget.",
    skills: [
      { label: "Managing a substantial advertising budget", featured: true },
      { label: "Measuring KPIs to track social media marketing success", featured: true },
      { label: "Demographic and audience targeting to increase engagement and drive conversions", featured: true },
      { label: "A/B testing content variations and promotional strategies", featured: true },
      { label: "Creating compelling ads across earned, owned, and paid media", featured: true },
      { label: "Analyzing performance data across multiple social channels", featured: false },
      { label: "Balancing promoted and organic posting for maximum reach", featured: false },
      { label: "Leveraging social media influencers within a strategy", featured: false },
      { label: "Social listening and engaging directly with consumers", featured: false },
    ],
  },
  {
    name: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google (via Coursera)",
    dateCompleted: "January 26, 2026",
    status: "completed", // Course 1 of 8 in the Google Digital Marketing & E-commerce Professional Certificate
    relevance:
      "Google-backed knowledge of how local customers find and choose a business online, baked into how I build your site.",
    verifyUrl: "https://coursera.org/verify/UYPCJQKEQRS1",
    summary:
      "Course 1 of 8 in Google's Digital Marketing & E-commerce Professional Certificate. Covers the fundamentals of digital marketing and e-commerce and the day-to-day work of an entry-level marketer.",
    skills: [
      { label: "Explaining the marketing funnel and how customers move through it", featured: true },
      { label: "Understanding the elements and goals of a digital marketing and e-commerce strategy", featured: true },
      { label: "Defining the fields of digital marketing and e-commerce", featured: false },
      { label: "Understanding the job responsibilities of an entry-level digital marketer and e-commerce specialist", featured: false },
    ],
  },
];
