import Link from 'next/link';
import { Box } from 'lucide-react';

interface ProductCardProps {
  slug: string;
  name: string;
  description: string;
}

export default function ProductCard({ slug, name, description }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-primary-dark">{name}</h3>
        <Box className="text-accent" />
      </div>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
      <Link
        href={`/products#${slug}`}
        className="mt-4 inline-block self-start text-accent hover:text-accent-light text-sm font-medium"
      >
        Learn more →
      </Link>
    </div>
  );
}