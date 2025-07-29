import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Dalau Ltd</h3>
          <p className="text-sm">
            World-class processor of PTFE and fluoropolymers since 1955. We design,
            manufacture and export precision machined components worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/products" className="hover:text-accent-light">Products</Link></li>
            <li><Link href="/processes" className="hover:text-accent-light">Processes</Link></li>
            <li><Link href="/materials" className="hover:text-accent-light">Materials</Link></li>
            <li><Link href="/industries" className="hover:text-accent-light">Industries</Link></li>
            <li><Link href="/case-studies" className="hover:text-accent-light">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            Ford Road,<br />
            Clacton-on-Sea, Essex CO15 3DZ, UK<br />
            <a href="mailto:sales@dalau.com" className="hover:text-accent-light">sales@dalau.com</a><br />
            Tel: +44 (0)1255 220220
          </p>
        </div>
      </div>
      <div className="border-t border-primary-light py-4 text-center text-xs">
        © {new Date().getFullYear()} Dalau Ltd. All rights reserved.
      </div>
    </footer>
  );
}