import { GanttChartSquare } from 'lucide-react';

interface ProcessCardProps {
  name: string;
  description: string;
}

export default function ProcessCard({ name, description }: ProcessCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-primary-dark">{name}</h3>
        <GanttChartSquare className="text-accent" />
      </div>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
    </div>
  );
}