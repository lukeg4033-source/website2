import HeroSection from '../../components/HeroSection';
import { resources } from '../../data/resources';

/**
 * ResourcesPage
 *
 * This page aggregates various downloadable documents, certificates and catalogues
 * associated with Dalau's operations. The resources are grouped by category
 * (e.g. certificates, catalogues, datasheets) and listed with their publication
 * dates. Although the current implementation doesn’t provide actual files
 * for download, the structure is ready for linking to static assets or external
 * URLs when they become available.
 */
export default function ResourcesPage() {
  // Group resources by category. The key is the category name and the value is
  // an array of resource items belonging to that category. This makes it
  // straightforward to display each group with its own heading.
  const grouped = resources.reduce<Record<string, typeof resources>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <HeroSection
        title="Resources"
        subtitle="Download our brochures, certificates and datasheets"
        imageSrc="/images/hero.png"
      />
      <section className="mb-12 max-w-5xl mx-auto">
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We maintain a library of supporting materials for our customers, including
          product catalogues, certificates of accreditation and important terms and
          conditions. Please contact us if you require a document that is not listed
          here.
        </p>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{category}</h2>
            <ul className="space-y-3">
              {items.map((res, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded p-4 bg-white shadow-sm flex justify-between items-center"
                >
                  <span className="font-medium text-primary-dark">{res.name}</span>
                  <span className="text-sm text-gray-600">{res.date}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}