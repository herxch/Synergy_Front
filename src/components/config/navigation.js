// Single source of truth for site navigation.
// Navbar filters out `hideInNavbar`; Footer filters out `hideInFooter`.
// `footerName` overrides `name` when rendered inside the footer.
export const NAV_LINKS = [
  { name: "About", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Dealer Locator", to: "/dealers" },
  { name: "Warranty", to: "/warranty" },
  { name: "Commercial Warranty", footerName: "Commercial Warranty", to: "/commercial-warranty" },
  { name: "Tire IQ", to: "/tire-iq" },
  { name: "Contact", footerName: "Contact Us", to: "/contact" },
];
