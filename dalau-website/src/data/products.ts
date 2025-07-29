export interface Product {
  slug: string;
  name: string;
  description: string;
}

export const products: Product[] = [
  {
    slug: 'extruded-rod',
    name: 'Extruded Rod',
    description:
      'Thermoplastic extrusion for high‑performance materials used in harsh chemical and high‑temperature environments.',
  },
  {
    slug: 'moulded-rod',
    name: 'Moulded Rods',
    description:
      'Wide range of PTFE moulded rods and tubes, in natural and filled grades, produced to a high standard under the dalcon™ trademark.',
  },
  {
    slug: 'film-sheets',
    name: 'Film & Sheets',
    description:
      'Tight‑tolerance PTFE films developed for the exacting demands of circuit board and semiconductor industries with a skive‑mark‑free surface.',
  },
  {
    slug: 'machined-components',
    name: 'Machined Components',
    description:
      'Precision machining of thermoplastic components produced to the medical, electronic and aerospace industries’ most stringent technical specifications.',
  },
  {
    slug: 'micro-components',
    name: 'Micro Components',
    description:
      'High‑tech machining capabilities allow production of over 100 million PTFE and other thermoplastic micro‑machined components a year.',
  },
  {
    slug: 'components',
    name: 'Components',
    description:
      'Investment in state‑of‑the‑art machining centres and our SPC system ensures components meet customers’ highest expectations.',
  },
  {
    slug: 'wafer-carriers',
    name: 'Wafer Carriers',
    description:
      'Standard and bespoke wafer carriers offering unique solutions for the washing and conveying of semiconductor wafers.',
  },
];