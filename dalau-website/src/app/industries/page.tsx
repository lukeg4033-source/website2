import HeroSection from '../../components/HeroSection';
import IndustryCard from '../../components/IndustryCard';
import { industries } from '../../data/industries';

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        title="Industries"
        subtitle="Serving aerospace, medical, electronics, semiconductor, chemical, engineering and fuel cell sectors"
        imageSrc="/images/industries.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          As one of the largest PTFE and fluoropolymer processors in the UK and Europe, our high‑quality products are used across a range of industrial sectors, from aerospace and medical to fuel cell technology【744170430515620†L68-L80】.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.name} {...ind} />
          ))}
        </div>
      </section>
    </>
  );
}