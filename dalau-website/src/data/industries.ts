export interface Industry {
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    name: 'Aerospace',
    description:
      'Precision machined components manufactured with AS 9100:2018 Rev D and ISO 9001:2015 approvals for the aerospace industry.',
  },
  {
    name: 'Medical',
    description:
      'Precision machined components such as PTFE pistons for needle‑free injection devices and other medical deployment equipment.',
  },
  {
    name: 'Electronics',
    description:
      'Hi‑tech micro components machined for electronic applications including telecommunications, industrial and consumer electronics.',
  },
  {
    name: 'Semiconductor',
    description:
      'State‑of‑the‑art five‑axis machining produces large custom components including low‑profile wafer carriers for the semiconductor industry.',
  },
  {
    name: 'Chemical',
    description:
      'Manufacture of complex solid PTFE pumps and components to customer specifications for high‑purity chemical applications.',
  },
  {
    name: 'Engineering',
    description:
      'Manufacture of bearing pads, slide plates and friction brakes that can be etched and bonded onto steel, cast iron or other materials.',
  },
  {
    name: 'Fuel Cell',
    description:
      'Expanding portfolio to produce materials for fuel cells used in the development of hydrogen vehicles and clean energy solutions.',
  },
];