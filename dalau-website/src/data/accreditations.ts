export interface Accreditation {
  name: string;
  description?: string;
}

export const accreditations: Accreditation[] = [
  { name: 'AS 9100:2018', description: 'Quality Management System for the aerospace sector' },
  { name: 'WRAS BS6920', description: 'Approval certificate for water fittings' },
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety Management System' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { name: 'ISO 13485:2016', description: 'Quality Management System for medical devices' },
  { name: 'Cyber Essentials', description: 'UK government backed cyber security accreditation' },
];