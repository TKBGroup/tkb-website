"use strict";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  residentialLinks,
  commercialLinks,
  aboutLinks,
  ContactUs,
  EmailLinks
} from "./lib/navLinks"; 
import ContactForm from "./ContactForm";


const Backdrop = ({ onClick }: { onClick?: () => void }) => (
  <motion.div
    className="fixed h-screen inset-0 z-1 bg-darkblue/50 top-16 flex flex-col items-center justify-center overflow-y-auto "
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
);
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut", 
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};


// const navVariants: Variants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.1,
//       delayChildren: 0.3,
//     },
//   },
// };

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

export default function FullNav({ onRequestClose }: { onRequestClose?: () => void }) {

  const [isFormVisible, setForm] = useState(false);

  const handeOpenForm = () => {
    console.log("Hnadle Open Form");
    setForm(true);
  }
  const handleAttemptClose = () => { 
    if (isFormVisible) {
      console.log("isFormVisible return");
      return;
    } 
    if (onRequestClose) {
      console.log("OnrequestingClose");
      onRequestClose();
    }
      
  };

  const handeCloseForm = () => {
    console.log("Hnadle Close Form");
    setForm(false);
  }
  return (
    <>
      <Backdrop onClick={handleAttemptClose} />
      <motion.nav
        className={`absolute top-16 left-0 w-full z-50 bg-light `}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      > {
          isFormVisible ?
            // <div className="bg-white h-screen"></div>
            <ContactForm isOpen={isFormVisible} onClose={handeCloseForm} />
            :
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8`}>
              <LinkColumn name="Residential" links={residentialLinks} />
              <LinkColumn name="Commercial" links={commercialLinks} />
              <LinkColumn name="About" links={aboutLinks} />
              <div className="flex flex-col gap-8">
                <LinkColumn name="Contact Us" links={ContactUs} />
                <LinkColumn name="Inquiries" links={EmailLinks} />
                <motion.button variants={navVariants} onClick={handeOpenForm} className="hover:bg-darkblue hover:text-light text-center bg-transparent text-darkgrey border-2 border-darkgrey p-3 mt-3">Contact Form</motion.button>
              </div>
            </div>

        }
      </motion.nav>
    </>
  );
}
