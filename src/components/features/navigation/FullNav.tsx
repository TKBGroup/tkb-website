"use strict";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  residentialLinks,
  commercialLinks,
  aboutLinks,
  ContactUs,
  EmailLinks
} from "../../../lib/navLinks";
import ContactForm from "../contact/ContactForm";
import { X } from "lucide-react";


const Backdrop = ({ onClick }: { onClick?: () => void }) => (
  // <motion.div
  //   className="fixed h-screen inset-0 z-1 bg-darkblue/50 top-16 flex flex-col items-center justify-center overflow-y-auto "
  //   onClick={onClick}
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   exit={{ opacity: 0 }}
  // />

  <motion.div
    // className="fixed inset-0 z-40 bg-darkblue/50 top-16"
    className="fixed h-screen inset-0 z-1 bg-darkblue/50 top-16 flex flex-col items-center justify-center "
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

// Animation variants for the content switching
const contentVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
};

const LinkColumn = ({
  name,
  links,
  mainLink,
}: {
  name: string;
  links: { name: string; href: string }[];
  mainLink?: string;
}) => (
  <motion.div className="flex flex-col space-y-2" variants={columnVariants}>
    <Link href={mainLink ? mainLink : ""} className="text-lg font-semibold">
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
  const navRef = useRef<HTMLElement | null>(null);

  // NO scroll-locking JavaScript needed here.

  // const handeOpenForm = () => setForm(true);
  const handeOpenForm = () => {
    // KEY FIX 2: Scroll the nav container to the top before showing the form.
    if (navRef.current) {
      navRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // Use 'smooth' for a nice scrolling animation
      });
    }
    setForm(true);
  };

  const handeCloseForm = () => setForm(false);

  const handleAttemptClose = () => {
    if (isFormVisible) {
      // When the form is visible, the backdrop click should close the form, not the whole nav.
      handeCloseForm();
      return;
    }
    if (onRequestClose) {
      onRequestClose();
    }
  }; 

  return (
    <>

      <Backdrop onClick={handleAttemptClose} />
      <motion.nav
        className={`absolute top-16 left-0 right-0 z-50 bg-light ${isFormVisible ? 'xs:h-[calc(100vh-4rem)]' : 'xs:h-[calc(100vh-14rem)]'} h-[calc(100vh)] overflow-y-auto -webkit-overflow-scrolling-touch`}
        // variants={navVariants}   
        ref={navRef}    
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <button onClick={handleAttemptClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 z-99">
            <X size={24} />
          </button>
          {isFormVisible ? (
            <motion.div key="contact-form">
              <ContactForm isOpen={isFormVisible} onClose={() => handeCloseForm()} />
            </motion.div>
          ) : (
            <motion.div
              key="nav-links"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >                  <LinkColumn name="Residential" links={residentialLinks.slice(1)} mainLink={residentialLinks[0].href} />
              <LinkColumn name="Commercial" links={commercialLinks.slice(1)} mainLink={commercialLinks[0].href} />
              <LinkColumn name="About" links={aboutLinks.slice(1)} mainLink={aboutLinks[0].href} />
              <div className="flex flex-col gap-8">
                <LinkColumn name="Contact Us" links={ContactUs.slice(1)}  mainLink={ContactUs[0].href}/>
                <LinkColumn name="Inquiries" links={EmailLinks}  mainLink={ContactUs[0].href} />
                <motion.button onClick={handeOpenForm} className="hover:bg-darkblue hover:text-light text-center bg-transparent text-darkgrey border-2 border-darkgrey p-3 mt-3">
                  Contact Form
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}