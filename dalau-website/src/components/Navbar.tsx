import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Processes', href: '/processes' },
  { name: 'Materials', href: '/materials' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Accreditations', href: '/accreditations' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center font-bold text-lg">
              <span className="sr-only">Dalau</span>
              {/* Use a simple initials logo */}
              <span className="px-2 py-1 bg-accent text-white rounded mr-2">DL</span>
              Dalau Ltd
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-accent-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark py-4">
          <div className="space-y-2 px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-3 rounded hover:bg-primary-light"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}