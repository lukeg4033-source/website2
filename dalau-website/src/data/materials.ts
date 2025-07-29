import type { Material } from '../components/MaterialTabs';

export const materials: Material[] = [
  {
    id: 'ptfe',
    name: 'PTFE',
    description:
      'PTFE is a fully fluorinated polymer available in various unmodified and modified grades. It offers exceptional chemical and thermal resistance and is inherently inert due to its carbon–fluorine helical structure.',
    properties: [
      'Resists strong mineral acids, bases, oxidizing agents and solvents',
      'Very low coefficient of friction and excellent non‑stick surface',
      'Retains useful properties up to around 200 °C',
      'High electrical surface and volume resistivity'
    ],
  },
  {
    id: 'peek',
    name: 'PEEK',
    description:
      'PEEK is a semicrystalline thermoplastic with excellent mechanical and chemical resistance properties that are retained at high temperatures.',
    properties: [
      'High tensile and flexural strength',
      'Outstanding chemical resistance to organic and inorganic chemicals',
      'Useful operating temperature up to 250 °C',
      'Excellent wear and abrasion resistance'
    ],
  },
  {
    id: 'pctfe',
    name: 'PCTFE',
    description:
      'PCTFE shares many properties with PTFE, FEP and PFA but is mechanically superior in rigidity and has very low gas permeability.',
    properties: [
      'Low moisture absorption and gas permeability',
      'Excellent chemical resistance',
      'High tensile strength and rigidity',
      'Good electrical insulating properties'
    ],
  },
  {
    id: 'pvdf',
    name: 'PVDF',
    description:
      'PVDF is generally used in applications requiring high purity, strength and resistance to solvents, acids, bases and heat.',
    properties: [
      'High tensile strength and toughness',
      'Excellent resistance to chemicals and weathering',
      'Good fatigue resistance and creep resistance',
      'Useful in high‑purity semiconductor and chemical processing applications'
    ],
  },
  {
    id: 'pfa',
    name: 'PFA',
    description:
      'PFA combines many properties of PTFE and FEP. It is clear and transparent with a light blue glow, offering clarity, flexibility and higher continuous operating temperature range.',
    properties: [
      'Excellent chemical resistance comparable to PTFE',
      'Transparent and flexible with good dielectric properties',
      'Continuous service temperature up to about 260 °C',
      'Low coefficient of friction and non‑stick surface'
    ],
  },
  {
    id: 'etfe',
    name: 'ETFE',
    description:
      'ETFE is a fluorine‑based thermoplastic designed for high corrosion resistance and strength over a wide temperature range. It is unaffected by UV light, atmospheric pollution and other forms of environmental weathering.',
    properties: [
      'Superior resistance to weathering and UV radiation',
      'High mechanical strength and tear resistance',
      'Wide service temperature range from −185 °C to 150 °C',
      'Good electrical insulation and chemical resistance'
    ],
  },
];