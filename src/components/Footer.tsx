import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
           
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white tracking-wider">TKB GROUP</h3>
            <p className="mt-4 max-w-md mx-auto md:mx-0">
              Your trusted partner for commercial millwork and architectural woodwork, bringing an impeccable reputation to every project.
            </p>
          </div>
 
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/commercial-millwork" className="hover:text-white transition">Commercial</Link></li>
              <li><Link href="/residential-woodwork" className="hover:text-white transition">Residential</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
            </ul>
          </div>
 
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>info@tkbmillwork.com</li>
              <li>+1 (416) 675-6555</li>
              <li>112 Snidercroft Road, Unit 7 Concord, ON L4K 4S8</li>
            </ul>
          </div>

        </div>
 
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} TKB Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
