"use strict";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  residentialLinks,
  commercialLinks,
  aboutLinks,
  ContactUs,
} from "./lib/navLinks";

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 5,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const LinkColumn = ({
  name,
  links,
}: {
  name: string;
  links: { name: string; href: string }[];
}) => (
  <motion.div className="flex flex-col space-y-2" variants={columnVariants}>
    <Link href={links[0].href} className="text-lg font-semibold">
      {name}
    </Link>
    <ul className="flex flex-col space-y-3">
      {links.map((link) => (
        <motion.li key={link.href} variants={linkVariants}>
          <Link href={link.href} className="text-darkgrey hover:text-darkblue">
            {link.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default function FullNav() {
  return (
    <motion.nav
      className="absolute top-16 left-0 w-full z-50 bg-light h-100"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <LinkColumn name="Residential" links={residentialLinks} />
        <LinkColumn name="Commercial" links={commercialLinks} />
        <LinkColumn name="About" links={aboutLinks} />
        <LinkColumn name="Contact Us" links={ContactUs} />
      </div>
    </motion.nav>
  );
}
