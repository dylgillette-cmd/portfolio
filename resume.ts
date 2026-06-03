// =========================================================
//  YOUR DETAILS — edit everything here. Pages read from this.
// =========================================================

export const profile = {
  name: "Dylan Gillette",
  title: "Regional Marketing Manager",
  tagline: "Multi-family property marketing",
  location: "Park City, Utah",
  email: "dyl.gillette@gmail.com",
  // Phone is intentionally left off the public site to cut spam/scraping.
  // Add it back here and surface it in Footer.astro if you want it visible.
  phone: "",
  // Add your real LinkedIn URL:
  linkedin: "https://www.linkedin.com/in/dylangillette",

  // The big line on the homepage:
  hero: "Marketing that fills units and keeps residents.",
  // The supporting paragraph under it:
  intro:
    "I'm a regional marketing manager in multi-family property management — I build lifecycle, content, and CRM systems that turn marketing spend into leases. This is where I publish my take on what's happening across the industry.",
};

export const expertise = [
  "Marketing Automation",
  "Lifecycle & CRM Marketing",
  "Team Leadership",
  "Marketing Strategy",
  "Process Improvement",
  "Social Media Marketing",
  "Training & Coaching",
  "Customer Data Insights",
];

export const tools = [
  "Entrata", "HubSpot", "SOCi", "Hotjar", "OneTrust", "Yext",
  "Bynder", "Google Business", "Salesforce", "Meta Business", "Power BI",
];

export const certifications = [
  "HubSpot Academy — Email Marketing",
  "Google Digital Garage — Fundamentals of Digital Marketing",
  "W3Cx — Web Accessibility (WCAG)",
  "Google — Analytics Certification",
];

export const education = [
  {
    degree: "B.S., Finance",
    school: "University of Utah",
    place: "Salt Lake City, UT",
  },
];

// Most recent role first. Each role can list bullet "points".
export const experience = [
  {
    org: "Mill Creek Residential Trust",
    title: "Regional Marketing Manager",
    note: "Promoted from Digital Content Manager.",  // edit/remove as you like
    place: "Boca Raton, FL",
    period: "2020 – Present",
    points: [
      "Lead digital marketing strategy across the portfolio — optimizing campaigns to drive leads, improve occupancy, and strengthen resident retention.",
      "Optimized web content, email automation, and social media across 110+ communities, lifting leads and occupancy while reducing turnover.",
      "Deployed automated email programs for 4 brands, improving email CTR by 15% and brand consistency across 2,600+ touchpoints.",
      "Integrated a digital asset management (DAM) tool into onboarding workflows.",
      "Stood up a listings-management system publishing 6,000+ listings and driving a meaningful lift in engagement.",
    ],
  },
  {
    org: "Hale | Wood PLLC",
    title: "Administrative Assistant / Runner",
    note: "",
    place: "Salt Lake City, UT",
    period: "2019 – 2020",
    points: [
      "Supported seven estate-planning attorneys, streamlining data management and improving client satisfaction.",
      "Managed 9,000+ legal document folders through a legal CRM system.",
    ],
  },
  {
    org: "CellTrak Technologies",
    title: "Marketing Intern",
    note: "",
    place: "Schaumburg, IL",
    period: "2018",
    points: [
      "Led CRM-improvement projects that increased lead conversion and sales.",
      "Researched 5,000+ prospective organizations to support sales efficiency.",
    ],
  },
  {
    org: "Scott Marsh Financial",
    title: "Finance Intern",
    note: "",
    place: "Salt Lake City, UT",
    period: "2017",
    points: [
      "Supported management of an investment portfolio across 90+ accounts.",
      "Ran Salesforce projects, compiling and structuring client data.",
    ],
  },
];
