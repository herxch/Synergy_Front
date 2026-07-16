// Resource-page content (Warranty, Commercial Warranty, Tire IQ, Dealer, Registration),
// transcribed from the original brand site.

export const WARRANTY = {
  kicker: "Owner Confidence",
  title: "Passenger Tire Limited Warranty",
  intro:
    "Every Synergy passenger tire is protected by a limited tread-life warranty plus a materials-and-workmanship warranty for the life of the original tread. Coverage extends to the original purchaser and original vehicle, requires proof of purchase, is valid in the United States and Canada, and lasts two years from the date of purchase. Commercial-vehicle use is excluded.",
  table: {
    title: "Limited Tread-Life Warranty",
    headers: ["Tire", "Warranted Mileage"],
    note: "Uneven wear voids the mileage coverage. Tires that wear evenly but fail to deliver the warranted mileage qualify for a pro-rate adjustment based on the usable remaining tread. Applies to P-metric sizes only; LT sizes excluded.",
    rows: [
      ["BW211 – HP", "40,000 miles"],
      ["BW212 – HP", "50,000 miles"],
      ["BW221 – UHP", "50,000 miles"],
      ["BW231 – CUV/SUV", "50,000 miles"],
      ["BW251 – A/T", "Not applicable"],
    ],
  },
  sections: [
    {
      title: "Materials & Workmanship",
      body: "Tires are warranted free from defects in workmanship and material to 2/32\", the point at which a tire is considered legally worn out. During the first 1/32\" of wear, a tire found defective is replaced with a comparable new Synergy tire (owner pays applicable taxes, mounting and balancing). Beyond that, a pro-rate credit is applied toward a comparable new tire based on the remaining usable tread.",
    },
    {
      title: "What Is Not Covered",
      body: "Road hazards (punctures, cuts, impact breaks), collision, fire, vandalism, damage from misalignment or wheel imbalance, improper application, and any loss of time, use, inconvenience or incidental or consequential damages. Blemished or non-adjustable tires are excluded.",
    },
    {
      title: "Owner Responsibilities",
      body: "Present your proof of purchase, the tire itself and maintenance records that follow the vehicle manufacturer's specifications, and file any claim within 30 days of discovering the condition.",
    },
  ],
};

export const COMMERCIAL_WARRANTY = {
  kicker: "Fleet Confidence",
  title: "Commercial Tire Warranty",
  intro:
    "Synergy MTR (Truck & Bus Radial) tires are warranted free from defects in workmanship and material for the life of the original tread, less 2/32\". Commercial coverage is structured in two tiers, with an additional casing warranty on truck tires.",
  table: {
    title: "Casing Warranty — Adjustment Credit",
    headers: ["Size", "Casing Credit"],
    note: "Casing defects are covered through the life of the second retread, valid for the first five years after the date of manufacture.",
    rows: [
      ["10.00R20", "$50"],
      ["11R22.5", "$65"],
      ["11R24.5", "$75"],
    ],
  },
  sections: [
    {
      title: "50% Free Replacement",
      body: "During the first half of the original tread life, a tire found defective is replaced with a comparable new Synergy tire by an authorized dealer (owner pays applicable taxes). Applies to new first-quality tires only; blemished tires, retreads and road-hazard damage are excluded.",
    },
    {
      title: "General Warranty",
      body: "After 50% of the tread is worn, a credit is issued proportional to the remaining usable tread, with the owner covering taxes, mounting and balancing. Out-of-balance or out-of-round adjustments are allowed only within the first 2/32\" of wear.",
    },
    {
      title: "Key Exclusions",
      body: "Road hazards, vehicle mechanical issues (misalignment, imbalance, brake or shock faults), tire alterations or transfers between vehicles, mounting and balancing service costs, and any loss of time, use, inconvenience or incidental or consequential damages.",
    },
    {
      title: "How to Claim",
      body: "Present the defective tire to the original authorized dealer with your proof of purchase, complete a warranty claim form, and submit it within 30 days of discovery.",
    },
  ],
};

export const TIRE_IQ = {
  kicker: "Tire IQ",
  title: "Get to Know Your Tires",
  intro:
    "A little tire knowledge goes a long way toward safety, performance and getting the most life out of your investment. Here are the essentials every driver and fleet should know.",
  topics: [
    {
      title: "Tire Pressure",
      body: "Check your pressure monthly and before long trips, always when the tires are cold. Under-inflation causes heat build-up, poor fuel economy and can lead to failure; over-inflation increases the risk of road-hazard damage. Always follow the vehicle manufacturer's recommended pressure.",
    },
    {
      title: "Tread Depth",
      body: "Tread depth directly impacts braking, cornering and handling. Replace your tires when the tread falls below 2/32\" (1.6 mm). A quick check: insert a penny into the tread with Lincoln's head upside down — if you can see the top of his head, it is time for new tires.",
    },
    {
      title: "Tire Age",
      body: "Your tires are a complex combination of rubber, steel and chemicals that harden and degrade over time. Replace any tire manufactured more than ten years ago, regardless of tread. Determine age from the last four digits of the DOT number, which indicate the week and year of production.",
    },
    {
      title: "Replacing Two Tires",
      body: "Replacement of four tires is always recommended. When replacing fewer, industry practice is to install the new tires on the rear axle to maintain hydroplaning control and stability.",
    },
    {
      title: "TPMS",
      body: "Since September 2008, passenger vehicles and light trucks sold in the U.S. have been required by NHTSA to include a Tire Pressure Monitoring System. TPMS warns of low pressure but cannot predict a sudden, catastrophic loss — manual checks are still essential.",
    },
    {
      title: "Slow Leaks",
      body: "A tire normally loses about 2 psi every 30 days. If you find yourself adding air more frequently, you likely have a slow leak that should be professionally inspected.",
    },
    {
      title: "Tire Rotation",
      body: "Regular rotation maximizes tread life and maintains even wear — and it is required to keep your warranty valid. Follow the pattern and frequency recommended by your vehicle manufacturer.",
    },
    {
      title: "Tire Repairs",
      body: "A proper repair follows Rubber Manufacturers Association standards: remove the tire for a full inside-and-out inspection, repair the tread area only, keep punctures under ¼\" (6 mm), never overlap repairs, and use a combination patch-plug.",
    },
    {
      title: "Used Tires",
      body: "We do not recommend the purchase of used tires. There is no way to verify the service history of a used tire, and internal damage or improper prior repairs may go undetected — an unreasonable safety risk.",
    },
    {
      title: "Spare Tire Care",
      body: "Check your spare's pressure every 30 days along with your regular tires so it is ready when you need it — this applies to both temporary and full-size spares.",
    },
  ],
};

export const DEALER = {
  kicker: "Find a Dealer",
  title: "Dealer Locator",
  intro:
    "Synergy tires are sold through a network of authorized independent dealers across the United States and Canada, serving both consumer and commercial customers. Tell us your location and we'll connect you with the nearest dealer carrying the Synergy line.",
  becomeDealer:
    "Interested in carrying Synergy? Dealers enjoy exclusive territory, complete brand integration, real-time delivery updates, marketing support, sales support and container tracking. Reach out through our contact page to start the conversation.",
};

export const REGISTRATION = {
  kicker: "Protect Your Investment",
  title: "Tire Registration",
  intro:
    "Registering your new Synergy tires helps us reach you quickly in the unlikely event of a safety recall. Registration takes just a few minutes and is strongly recommended for every set.",
  url: "https://register.cimstireregistration.com/index.cfm?id=sutong",
  steps: [
    "Locate the DOT number on the sidewall of each tire (the string that begins with \"DOT\").",
    "Have your purchase date and dealer information handy.",
    "Complete the secure registration form with your tire identification numbers.",
  ],
};
