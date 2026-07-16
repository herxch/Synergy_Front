// Single source of truth for brand-level copy and identity.
// Swapping this file (plus assets and CSS tokens) re-skins the whole site.
export const SITE = {
  name: "Synergy Tire",
  shortName: "Synergy",
  legalName: "Sutong China Tire Resources",
  tagline: "Practical Design. Performance Driven.",
  domain: "synergytire.com",
  trademarkSince: 2013,

  hero: {
    kicker: "PCR · UHP · CUV/SUV · Light Truck · TBR",
    titleLines: ["Practical Design.", "Performance Driven."],
    accentLineIndex: 1,
    subtitle:
      "Synergy Tire brings together the most popular PCR, UHP, CUV, SUV, LT and TBR fitments under one brand name of quality products that meets your price point.",
  },

  intro: {
    kicker: "Who We Are",
    title: "A High-Quality Tire, Built With First-Class Technology",
    paragraph:
      "Synergy Tire brings passenger, ultra-high-performance, CUV/SUV, light-truck and commercial trucking fitments together under one name. Designed and manufactured on the same assembly lines as some of the most respected names in the industry — with the overhead stripped out.",
  },

  // Dealer / partnership value propositions
  valueProps: {
    kicker: "Why Partner With Us",
    title: "Built for Dealers",
    items: [
      {
        title: "Exclusive Territory",
        description:
          "Dealers receive protected, exclusive territories and complete brand integration so you can grow Synergy in your market.",
      },
      {
        title: "Real-Time Logistics",
        description:
          "Real-time delivery updates and container tracking keep you informed from the factory floor to your door.",
      },
      {
        title: "Sales & Marketing Support",
        description:
          "Dedicated sales and marketing support helps you move product — from point-of-sale materials to program design.",
      },
    ],
  },

  about: {
    kicker: "About Us",
    heroTitle: "Practical Design. Performance Driven.",
    lead:
      "Synergy Tire customers enjoy a high-quality tire built with first-class technology — without the first-class price tag.",
    sections: [
      {
        title: "Synergy, By Definition",
        body: "syn·er·gy — a mutually advantageous conjunction or compatibility of distinct business participants or elements. Synergy Tire brings PCR, UHP, SUV, CUV, LT and TBR fitments together under one brand for retailers and wholesalers seeking complete brand integration.",
      },
      {
        title: "The Same Lines, Less Overhead",
        body: "Our tires are designed and manufactured on the same assembly lines as some of the most well-known and respected names in the tire industry. By reducing overhead costs, we deliver first-class technology at a price that meets your point.",
      },
      {
        title: "A Partner to Our Dealers",
        body: "Synergy dealers enjoy exclusive territory, real-time delivery updates, marketing support, sales support, container tracking and more — everything needed to build the brand with confidence.",
      },
      {
        title: "A Trademark You Can Trust",
        body: "Synergy Tire has been a registered U.S. trademark since 2013, backed by the global sourcing network of Sutong China Tire Resources.",
      },
    ],
  },

  social: {
    facebook: "https://www.facebook.com/pages/Synergy-Tire/727886910690015",
    twitter: "https://twitter.com/SynergyTires",
    youtube: "https://www.youtube.com/channel/UC8vssGryj208JAvo92-ny_w",
  },

  contact: {
    categories: ["Sales", "Warranty", "Product Information", "New Dealer Request"],
    blurb:
      "Questions about the consumer or commercial line, a warranty claim, or interested in becoming a dealer? Send us a note and the Synergy team will get back to you.",
  },

  productsPage: {
    kicker: "The Line-Up",
    title: "Synergy Tires",
    intro:
      "From passenger and ultra-high-performance radials to a full commercial truck & bus radial range — engineered with silica-infused compounds and backed by our limited warranties.",
    groups: [
      { id: "consumer", label: "Consumer Tires" },
      { id: "commercial", label: "Commercial Tires (TBR)" },
    ],
  },
};
