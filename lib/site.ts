type NavItem = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

type Package = {
  name: string;
  price: string;
  description: string;
  delivery: string;
  featured?: boolean;
  features: string[];
};

type Project = {
  title: string;
  category: string;
  description: string;
  features: string[];
  result: string;
  tone: "warm" | "cool" | "blush";
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Faq = {
  question: string;
  answer: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.devstacksolutions.lk";
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94703855575";
const whatsappDisplay =
  process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+940703855575";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@devstacksolutions.lk";

export const siteConfig = {
  name: "DevStack Solutions",
  shortName: "DevStack",
  description:
    "Modern websites, web apps, and mobile-first digital experiences for Sri Lankan small businesses that want more leads from WhatsApp and Google.",
  url: siteUrl,
  locale: "en_LK",
  email: contactEmail,
  whatsappNumber,
  whatsappDisplay,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[]
};

export const whatsappHref = `https://wa.me/${
  siteConfig.whatsappNumber
}?text=${encodeURIComponent(
  "Hi DevStack Solutions, I want a modern website for my business."
)}`;

export const homeTrustItems = [
  "Fast delivery 3-5 days",
  "Mobile-first",
  "WhatsApp orders",
  "Google Maps"
];

export const services: Service[] = [
  {
    title: "Website",
    description:
      "Sales-focused websites for restaurants, salons, stores, and service businesses that need a polished online presence fast.",
    bullets: [
      "Landing pages and multi-page sites",
      "WhatsApp buttons and lead forms",
      "Google Maps, hours, and directions"
    ]
  },
  {
    title: "Web Apps",
    description:
      "Custom portals for bookings, inquiries, dashboards, and internal workflows when a brochure site is not enough.",
    bullets: [
      "Bookings and inquiry tracking",
      "Admin-friendly dashboards",
      "Custom integrations and reports"
    ]
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform app experiences for businesses that want direct access to repeat customers on mobile.",
    bullets: [
      "Customer-facing mobile flows",
      "Lightweight MVP builds",
      "Push-ready product foundations"
    ]
  },
  {
    title: "Maintenance",
    description:
      "Ongoing updates, content edits, backups, and monitoring so your site stays fast, current, and reliable.",
    bullets: [
      "Content and banner updates",
      "Performance and uptime checks",
      "Priority support for quick changes"
    ]
  }
];

export const packages: Package[] = [
  {
    name: "Starter",
    price: "30000 LKR",
    description:
      "A clean launch package for businesses that need a credible website quickly.",
    delivery: "3-5 days",
    features: [
      "Up to 5 sections or pages",
      "Mobile-first design",
      "WhatsApp click-to-chat CTA",
      "Google Maps and business hours",
      "Basic SEO setup"
    ]
  },
  {
    name: "Standard",
    price: "50000 LKR",
    description:
      "Best for businesses that want stronger lead generation and more polished content blocks.",
    delivery: "5-7 days",
    featured: true,
    features: [
      "Everything in Starter",
      "Lead capture contact form",
      "Testimonials and FAQ sections",
      "Gallery, services, or menu layout",
      "Analytics-ready setup"
    ]
  },
  {
    name: "Pro",
    price: "99000 LKR",
    description:
      "A flexible package for brands that need custom sections, integrations, or richer storytelling.",
    delivery: "1-2 weeks",
    features: [
      "Everything in Standard",
      "Advanced layout and animations",
      "Portfolio, blog, or catalog pages",
      "Custom integrations or forms",
      "Launch support and training"
    ]
  }
];

export const portfolioItems: Project[] = [
  {
    title: "Restaurant",
    category: "Food & Beverage",
    description:
      "A mobile-first site designed to push menu views, WhatsApp table requests, and Google Maps visits.",
    features: ["Digital menu", "Reservation CTA", "Map and opening hours"],
    result: "Built to turn late-night searches into direct inquiries.",
    tone: "warm"
  },
  {
    title: "Salon",
    category: "Beauty & Wellness",
    description:
      "A stylish booking-focused experience that highlights services, packages, and social proof on mobile.",
    features: ["Service pricing", "Before/after gallery", "WhatsApp booking"],
    result: "Built to reduce back-and-forth and increase appointment requests.",
    tone: "blush"
  },
  {
    title: "Retail Store",
    category: "Retail",
    description:
      "A compact storefront website that showcases products, promotions, and store details clearly.",
    features: ["Product highlights", "Location map", "Offer banners"],
    result: "Built to support walk-ins, calls, and WhatsApp orders.",
    tone: "cool"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We started getting WhatsApp inquiries from people who found us on Google within the first week.",
    name: "Nimal Perera",
    role: "Restaurant Owner"
  },
  {
    quote:
      "The site made our salon look far more professional and customers now ask about packages online.",
    name: "Tharushi Silva",
    role: "Salon Manager"
  },
  {
    quote:
      "Fast delivery, clear communication, and the mobile layout works exactly how our customers browse.",
    name: "Ravin Fernando",
    role: "Retail Store Director"
  }
];

export const faqs: Faq[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business sites can be launched in 3 to 5 days once content, branding, and approvals are ready."
  },
  {
    question: "What content do I need to provide?",
    answer:
      "A logo if you have one, business details, your services or products, contact info, and a few photos. We can guide you on what is missing."
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer:
      "Yes. We can help you connect a domain, set up hosting, and point everything correctly for launch."
  },
  {
    question: "How do payments work?",
    answer:
      "Typical projects are split into an upfront start payment and a final payment before launch. Package terms can be adjusted per scope."
  },
  {
    question: "Can I request updates later?",
    answer:
      "Yes. You can book one-off updates or choose a maintenance plan for ongoing edits and support."
  },
  {
    question: "Do you offer support after the website goes live?",
    answer:
      "Yes. We provide post-launch support for fixes, small adjustments, and guidance on your next improvements."
  }
];

export const processSteps = [
  {
    title: "1. Quick Discovery",
    description:
      "We collect your business details, goals, brand direction, and examples you like."
  },
  {
    title: "2. Build and Review",
    description:
      "You get a clean first version fast, then we refine the message, visuals, and CTA flow."
  },
  {
    title: "3. Launch and Support",
    description:
      "We publish, test, and help you turn traffic into calls, WhatsApp chats, and form submissions."
  }
];

export const pricingAddOns = [
  "Extra pages or service sections",
  "Google Business Profile optimization",
  "Copywriting support",
  "Monthly maintenance",
  "Booking or catalog integrations"
];

export const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
  { day: "Sunday", hours: "Closed" }
];
