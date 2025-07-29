import HeroSection from '../../components/HeroSection';
import { accreditations } from '../../data/accreditations';

export default function AccreditationsPage() {
  return (
    <>
      <HeroSection
        title="Accreditations & Quality Assurance"
        subtitle="Committed to providing high standards"
        imageSrc="/images/process.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          We aim to instil confidence in our customers and believe that effective and efficient use of our resources, whilst exceeding legislative and regulatory requirements, will maximise quality and ensure continued customer satisfaction【728589147182675†L70-L75】.
        </p>
        <ul className="space-y-4">
          {accreditations.map((acc, idx) => (
            <li key={idx} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-primary-dark mb-1">{acc.name}</h3>
              {acc.description && <p className="text-sm text-gray-700">{acc.description}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}