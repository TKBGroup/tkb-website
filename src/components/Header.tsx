'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span className={`relative py-1 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>
        {children}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900" />
        )}
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header  
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between"> 
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-wider">
            TKB GROUP
          </Link>
 
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/commercial-millwork">Commercial</NavLink>
            <NavLink href="/residential-woodwork">Residential</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
 
          <div className="md:hidden">
            <button className="text-gray-800 focus:outline-none"> 
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
