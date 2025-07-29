import { useState } from 'react';
import HeroSection from '../../components/HeroSection';

interface RegionContact {
  region: string;
  address: string;
  email: string | string[];
  phone: string;
}

const contacts: RegionContact[] = [
  {
    region: 'United Kingdom',
    address: 'Ford Road, Clacton-on-Sea, Essex CO15 3DZ, UK',
    email: 'sales@dalau.com',
    phone: '+44 (0)1255 220220',
  },
  {
    region: 'Europe',
    address: 'Ford Road, Clacton-on-Sea, Essex CO15 3DZ, UK',
    email: 'sales@dalau.com',
    phone: '+44 (0)1255 220221',
  },
  {
    region: 'USA & The Americas',
    address: '19 Star Drive, Unit F, Merrimack, NH 03054, USA',
    email: 'sales@dalauinc.com',
    phone: '(+1) 603 670 1031',
  },
  {
    region: 'Asia',
    address: 'Ford Road, Clacton-on-Sea, Essex CO15 3DZ, UK',
    email: ['sales@dalau.com', 'nestecwk@naver.com'],
    phone: '+44 (0)1255 220220',
  },
  {
    region: 'Rest of World',
    address: 'Ford Road, Clacton-on-Sea, Essex CO15 3DZ, UK',
    email: 'sales@dalau.com',
    phone: '+44 (0)1255 220220',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', region: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, send form data to a server or API
    console.log(form);
    alert('Thank you for your enquiry!');
    setForm({ name: '', company: '', email: '', phone: '', region: '', message: '' });
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We’re here to help – choose your region and send us your enquiry"
        imageSrc="/images/hero.png"
      />
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <select
              name="region"
              value={form.region}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select Region</option>
              {contacts.map((c) => (
                <option key={c.region} value={c.region}>
                  {c.region}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light text-white font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            {contacts.map((c) => (
              <li key={c.region} className="border border-gray-200 rounded p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-primary-dark mb-1">{c.region}</h3>
                <p>{c.address}</p>
                {Array.isArray(c.email) ? (
                  <p>
                    {c.email.map((e, idx) => (
                      <span key={idx} className="block"><a href={`mailto:${e}`} className="text-accent hover:text-accent-light">{e}</a></span>
                    ))}
                  </p>
                ) : (
                  <p>
                    <a href={`mailto:${c.email}`} className="text-accent hover:text-accent-light">{c.email}</a>
                  </p>
                )}
                <p>{c.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}