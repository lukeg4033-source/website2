import HeroSection from '../../components/HeroSection';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Case Studies"
        subtitle="In‑depth stories of how our expertise delivers results"
        imageSrc="/images/hero.png"
      />
      <section className="mb-12">
        <p className="max-w-3xl text-gray-700 mb-6 text-sm sm:text-base">
          We forge successful working partnerships around the globe. Explore a selection of our projects to see how Dalau’s precision engineering has solved complex challenges for customers in various industries【815398361162173†L70-L88】.
        </p>
        <div className="space-y-6">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-primary-dark mb-1">{cs.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{cs.summary}</p>
              {cs.href && (
                <a
                  href={cs.href}
                  className="text-sm text-accent hover:text-accent-light"
                >
                  Read more →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}