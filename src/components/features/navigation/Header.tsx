"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FullNav from "./FullNav";
import { socialLinks, SocialName } from "../../../lib/navLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

export default function Header() {
  const [isFullNavVisible, setFullNavVisible] = useState(false);

  const closeNav = () => {
    setFullNavVisible(false);
  }

  const icons: Record<SocialName, IconType> = {
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
  };

  return (
    <header
      onMouseEnter={() => setFullNavVisible(true)}
      onMouseLeave={() => setFullNavVisible(false)}
      className={`fixed top-0 left-0 w-full max-w-[100vw]  ${
        // isFullNavVisible ? "bg-white" : "bg-transparent"
        isFullNavVisible ? "bg-light" : "bg-light/50"
      } backdrop-blur-sm shadow-sm z-999 transition-all duration-300"
    `}
    >
      <div className="container min-w-full w-full px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 min-w-[230px]">
          <Link href="/" className=" text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            TKB Group
          </Link>
          <div className="flex justify-end space-x-1 sm:space-x-2 lg:space-x-4 pb-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.name];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-3 h-3 lg:w-5 lg:h-5 text-gray-700 hover:text-blue-500 transition-colors" />
                </a>
              );
            })}
          </div>
          {/* <div className="flex sm:hidden">

          </div> */}
        </div>
      </div>

      <AnimatePresence>{isFullNavVisible && <FullNav onRequestClose={closeNav} />}</AnimatePresence>
    </header>
  );
}
 