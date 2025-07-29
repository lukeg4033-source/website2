import HeroSection from '../../components/HeroSection';
import MaterialTabs from '../../components/MaterialTabs';
import { materials } from '../../data/materials';

export default function MaterialsPage() {
  return (
    <>
      <HeroSection
        title="Materials"
        subtitle="Explore our range of fluoropolymers under the dalcon™ brand"
        imageSrc="/images/material.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          One of our main strengths is the ability to match materials and products to your specific requirements. Our team is happy to discuss material selection for your next project. Our fluoropolymer range includes PTFE, PEEK, PCTFE, PVDF, PFA and ETFE【764272159224306†L68-L80】. These materials offer high chemical resistance, strength and durability and are available in unmodified and modified grades.
        </p>
        <MaterialTabs materials={materials} />
      </section>
    </>
  );
}