export interface Process {
  name: string;
  description: string;
}

export const processes: Process[] = [
  {
    name: 'Blending',
    description:
      'Custom‑designed blending facilities create dalcon™ PTFE compounds and colours in a clean, climate‑controlled environment.',
  },
  {
    name: 'Extrusion & Moulding',
    description:
      'Ideal for producing tight‑toleranced machined components for connector, electronics, medical and semiconductor industries.',
  },
  {
    name: 'Films & Sheets',
    description:
      'Production of exceptional high‑quality film with high physical properties and a skive‑mark‑free surface finish.',
  },
  {
    name: 'Design & Development',
    description:
      'Our CAD system allows designers to create 3D computer models simulating customers’ requirements, fostering innovation.',
  },
  {
    name: 'Precision Machining',
    description:
      'Precision engineering committed to offering quality machined components and products with unrivalled reliability.',
  },
  {
    name: 'Metrology',
    description:
      'Investment in metrology equipment enforces, validates and verifies standards for traceability, accuracy and precision.',
  },
  {
    name: 'Quality Control',
    description:
      'Our innovative SPC system allows real‑time monitoring of every dimension and characteristic in ISO 9001:2015 and AS 9100:2018 accredited production.',
  },
];