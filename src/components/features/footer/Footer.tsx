import Link from "next/link";
import Image from "next/image";
import { footerLogos } from "@/lib/logos";
import { socialLinks, SocialName } from "../../../lib/navLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const icons: Record<SocialName, IconType> = {
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
  };
  return (
    <footer className="bg-darkblue text-lightgrey">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 text-center md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-light">
              TKB Group
            </Link>
            <p className="mt-4 max-w-md mx-auto md:mx-0 text-gray-4">
              Your trusted partner for commercial millwork and architectural
              woodwork, bringing an impeccable reputation to every project.
            </p>
            {/* <h3 className="mt-4 text-lg font-bold text-light tracking-wider">TRUSTED BY</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 grid grid-cols-3 items-center">
            {/* <div className="flex justify-center md:justify-start space-x-4 mt-4 ">  
              {footerLogos.map((logo: { name: string; src: string }) => (
            <div
              key={logo.name} 
              className="col-span-1"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={40}
                className="max-h-10 w-full object-contain grayscale-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
            </div> */}
            <h3 className="mt-6 text-lg font-bold text-light tracking-wider">STAY IN TOUCH WITH US</h3>
            <div className="flex justify-center md:justify-start space-x-4 pb-2 mt-4">
              {socialLinks.map((link) => {
                const Icon = icons[link.name];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-4 hover:text-blue-500 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-light mb-4">Quicklinks</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/residential-woodwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Residential Services
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-millwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-4 hover:text-light transition">
                  About TKB
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-4 hover:text-light transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-4 hover:text-light transition">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-4 hover:text-light transition">
                  Careers & Opportunities
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-4 hover:text-light transition">
                  Testimonials & Recognition
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-4 hover:text-light transition">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-4">
              <li>Commercial: info@tkbmillwork.com</li>
              <li>Residential: info@tkbmillwork.com</li>
              <li>Business Line: +1 (416) 880-2055</li>
              <li>Direct: +1 (416) 675-6555</li>
              <li>Showroom: 900 Caledonia Rd, Toronto, ON M6B 3Y1, Canada</li>
            </ul>
            <button className="hover:bg-light hover:text-darkgrey text-center bg-transparent text-light border-2 border-light p-3 mt-6 w-full">Contact Form</button>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-4 text-center text-lightgrey/80 text-sm">
          <Image className="mx-auto" src="/logos/whiteLogo.png" alt="TKB Logo" width={100} height={100} />
          <p className="text-gray-4">&copy; {currentYear} TKB Group. All Rights Reserved.</p>
          <div>
            <ul className="flex flex-wrap space-y-2 gap-4 justify-center mx-auto mt-4">
              <li>
                <Link
                  href="/residential-woodwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-millwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Manage Cookies
                </Link>
              </li> 
              <li>
                <Link
                  href="/commercial-millwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Terms of Use
                </Link>
              </li> 
              <li>
                <Link
                  href="/commercial-millwork"
                  className="text-gray-4 hover:text-light transition"
                >
                  Sitemap
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
