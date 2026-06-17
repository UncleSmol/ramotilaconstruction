export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/mechanical-engineering", label: "Mechanical" },
  { href: "/electrical-engineering", label: "Electrical" },
  { href: "/civil-engineering", label: "Civil" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const addressLines = ["Ext.12", "6 Coert Steynberg St", "1035"];

export const officeMapQuery = "Ext.12, 6 Coert Steynberg St, 1035";

export const officeMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  officeMapQuery,
)}&output=embed`;

export const officeMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  officeMapQuery,
)}`;

export const serviceAreas = [
  {
    title: "Mechanical Engineering",
    href: "/mechanical-engineering",
    intro:
      "Mechanical installation, maintenance support, steel work, equipment foundations, pipework support, and practical site problem solving.",
    examples: [
      "Mechanical maintenance support",
      "Steel support and fabrication coordination",
      "Equipment installation and alignment support",
      "Pipework, brackets, platforms, and access support",
    ],
  },
  {
    title: "Electrical Engineering",
    href: "/electrical-engineering",
    intro:
      "Electrical work for site infrastructure, distribution, lighting, control support, fault response, and project installations.",
    examples: [
      "Power distribution support",
      "Industrial and commercial lighting",
      "Cable routing and containment",
      "Fault response and maintenance support",
    ],
  },
  {
    title: "Civil Engineering",
    href: "/civil-engineering",
    intro:
      "Civil works for construction readiness, concrete, drainage, site preparation, structural support, and built-environment delivery.",
    examples: [
      "Concrete works and plinths",
      "Site preparation and earthworks support",
      "Drainage and stormwater support",
      "Structural and general construction works",
    ],
  },
];

export const workPrinciples = [
  "Understand the site before committing resources.",
  "Define scope clearly so teams know what success looks like.",
  "Coordinate mechanical, electrical, and civil dependencies early.",
  "Communicate changes before they become delays.",
  "Hand over work in a way the next team can use.",
];
