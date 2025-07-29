import HeroSection from '../../components/HeroSection';
import ProcessCard from '../../components/ProcessCard';
import { processes } from '../../data/processes';

export default function ProcessesPage() {
  return (
    <>
      <HeroSection
        title="Processes & Capabilities"
        subtitle="From blending and extrusion to precision machining and quality control"
        imageSrc="/images/process.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          With over 60 years’ experience in the manufacture of fluoropolymer products, we offer a complete range of processes from blending through semi‑finished rods and mouldings to precision‑machined components. Our commitment to customisation, superior processes and exceptional quality control is underpinned by our Statistical Process Control (SPC) and Total Quality Management (TQM) systems【215993204135204†L70-L82】.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((proc) => (
            <ProcessCard key={proc.name} {...proc} />
          ))}
        </div>
      </section>
    </>
  );
}