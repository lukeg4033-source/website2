import HeroSection from '../../components/HeroSection';
import Timeline from '../../components/Timeline';
import { companyHistory } from '../../data/companyHistory';

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="From a family‑run garage to the UK’s largest processor of PTFE & fluoropolymers"
        imageSrc="/images/about.png"
      />
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Founded as a family business in 1955, Dalau has grown into a global leader in PTFE and fluoropolymer processing. From humble beginnings in a garage at Normanhurst, the company now operates state‑of‑the‑art facilities in the UK, USA, Germany and China, exporting high‑quality products to over 35 countries. Our heritage is rooted in innovation, customer collaboration and unwavering commitment to quality.
        </p>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          All our products are manufactured under the dalcon™ trademark, distinguishing them for their consistent quality and performance. We invest heavily in advanced machinery, computerised Statistical Process Control (SPC) systems and metrology equipment to ensure every product meets exacting standards. Our AS 9100 and ISO 9001 certifications reflect our dedication to continual improvement and customer satisfaction.
        </p>
      </section>
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Milestones</h2>
        <Timeline events={companyHistory} />
      </section>
    </>
  );
}