import { Rocket, Stethoscope, Cpu, Chip, FlaskConical, Cog, BatteryCharging } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  description: string;
}

function getIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'aerospace':
      return <Rocket className="text-accent" />;
    case 'medical':
      return <Stethoscope className="text-accent" />;
    case 'electronics':
      return <Cpu className="text-accent" />;
    case 'semiconductor':
      return <Chip className="text-accent" />;
    case 'chemical':
      return <FlaskConical className="text-accent" />;
    case 'engineering':
      return <Cog className="text-accent" />;
    case 'fuel cell':
      return <BatteryCharging className="text-accent" />;
    default:
      return <Cog className="text-accent" />;
  }
}

export default function IndustryCard({ name, description }: IndustryCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-primary-dark">{name}</h3>
        {getIcon(name)}
      </div>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
    </div>
  );
}