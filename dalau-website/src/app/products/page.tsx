import HeroSection from '../../components/HeroSection';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Products"
        subtitle="Our range of semi‑finished and machined components"
        imageSrc="/images/hero.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          We specialise in the extrusion of fluoropolymer rods, high‑quality skived films and the precision machining of plastic components in all engineering plastics for a range of industries worldwide. Our aim is to maintain flexibility and adaptability whether your requirement is for small or large quantities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} id={product.slug}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}