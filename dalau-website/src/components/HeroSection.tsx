import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  imageSrc: string;
}

export default function HeroSection({ title, subtitle, cta, imageSrc }: HeroProps) {
  return (
    <section className="relative rounded-xl overflow-hidden h-96 mb-12">
      <Image
        src={imageSrc}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6 sm:px-12 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
          {title}
        </h1>
        <p className="mb-6 max-w-2xl text-lg sm:text-xl">
          {subtitle}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-block bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded shadow"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}