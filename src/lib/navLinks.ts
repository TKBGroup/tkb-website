export const navCols = [
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
export const residentialLinks = [
  //   {columnName: "Residential"},
  // { name: "Residential", href: "/residential" },
  { name: "Residential Services", href: "/residential/services" },
  { name: "Custom Kitchens", href: "/residential/custom-kitchens" },
  { name: "Custom Bathrooms", href: "/residential/custom-bathrooms" },
  { name: "Custom Closets", href: "/residential/custom-closets" },
  { name: "Custom Built-ins", href: "/residential/custom-built-ins" },
  { name: "Residential Gallery", href: "/residential/residential#gallery" },
];

export const commercialLinks = [
  //   { columnName: "Commercial" },
  // { name: "Commercial", href: "/commercial" },
  { name: "Commercial Services", href: "/commercial/services" },
  {
    name: "Retail Displays and Exhibitions",
    href: "/commercial/retail-displays",
  },
  { name: "Retail Spaces", href: "/commercial/retail-spaces" },
  { name: "Office Spaces", href: "/commercial/office-spaces" },
  { name: "Hospitality", href: "/commercial/hospitality" },
  { name: "Commercial Gallery", href: "/commercial/commercial#gallery" },
];

export const aboutLinks = [
  //   { columnName: "About Us" },
  // { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Our Team", href: "/team" },
  { name: "Testimonials & Recognition", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Careers", href: "/careers" },
  { name: "FAQs", href: "/faqs" },
];

export const ContactUs = [
  // { name: "Contact Us", href: "/contact" },
  {
    name: "Business Line: +1 (416) 880-2055", href: "tel:+14168802055"
  },
  {
    name: "Direct: +1 (416) 675-6555", href: "tel:+14166756555"
  }, 
];

export const EmailLinks = [
  { name: "info@tkbcabinetry.com" , href: "mailto:info@tkbcabinetry.com"},
  { name: "info@tkbmillwork.com" , href: "mailto:info@tkbmillwork.com"}
]


export type SocialName = "Facebook" | "Instagram" | "LinkedIn";
export const socialLinks: { name: SocialName; href: string }[] = [
  { name: "Facebook", href: "https://www.facebook.com/TKBWoodworking" },
  { name: "Instagram", href: "https://www.instagram.com/tkbwoodworking/" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/tkb-woodworking/",
  },
];
