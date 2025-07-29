import { ReactNode } from 'react';

interface StatsCardProps {
  value: string | number;
  label: string;
  icon: ReactNode;
}

export default function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg border border-gray-200">
      <div className="p-3 bg-primary-light text-white rounded-full">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-primary-dark">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}