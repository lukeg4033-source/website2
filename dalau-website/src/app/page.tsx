import HeroSection from '../components/HeroSection';
import StatsCard from '../components/StatsCard';
import ProductCard from '../components/ProductCard';
import ProcessCard from '../components/ProcessCard';
import IndustryCard from '../components/IndustryCard';
import { Package, Globe2, Flag, Users } from 'lucide-react';
import { stats } from '../data/stats';
import { products } from '../data/products';
import { processes } from '../data/processes';
import { industries } from '../data/industries';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="World‑Class Engineering in PTFE & Fluoropolymers"
        subtitle="Your vision, our solutions – delivering high‑performance components across 35 countries."
        cta={{ label: 'Explore Products', href: '/products' }}
        imageSrc="/images/hero.png"
      />

      {/* Stats Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">2024 in Review</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            let icon;
            switch (stat.id) {
              case 'components':
                icon = <Package size={24} />;
                break;
              case 'exports':
                icon = <Globe2 size={24} />;
                break;
              case 'countries':
                icon = <Flag size={24} />;
                break;
              case 'staff':
                icon = <Users size={24} />;
                break;
              default:
                icon = <Package size={24} />;
            }
            return (
              <StatsCard
                key={stat.id}
                value={stat.value}
                label={stat.label}
                icon={icon}
              />
            );
          })}
        </div>
      </section>

      {/* Products Overview */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Our Products</h2>
          <a href="/products" className="text-sm text-accent hover:text-accent-light">View All Products</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      {/* Processes Overview */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Our Processes</h2>
          <a href="/processes" className="text-sm text-accent hover:text-accent-light">View All Processes</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.slice(0, 3).map((proc) => (
            <ProcessCard key={proc.name} {...proc} />
          ))}
        </div>
      </section>

      {/* Industries Overview */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Industries We Serve</h2>
          <a href="/industries" className="text-sm text-accent hover:text-accent-light">View All Industries</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 3).map((ind) => (
            <IndustryCard key={ind.name} {...ind} />
          ))}
        </div>
      </section>
    </>
  );
}