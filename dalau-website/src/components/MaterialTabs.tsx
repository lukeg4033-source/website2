import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

export interface Material {
  id: string;
  name: string;
  description: string;
  properties: string[];
}

interface MaterialTabsProps {
  materials: Material[];
}

export default function MaterialTabs({ materials }: MaterialTabsProps) {
  return (
    <Tabs.Root defaultValue={materials[0]?.id ?? ''} className="w-full">
      <Tabs.List className="flex border-b border-gray-200 overflow-x-auto">
        {materials.map((material) => (
          <Tabs.Trigger
            key={material.id}
            value={material.id}
            className={clsx(
              'px-4 py-2 whitespace-nowrap text-sm font-medium',
              'focus:outline-none',
              'data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:text-accent',
              'data-[state=inactive]:text-gray-500'
            )}
          >
            {material.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {materials.map((material) => (
        <Tabs.Content
          key={material.id}
          value={material.id}
          className="mt-4"
        >
          <h3 className="text-lg font-semibold text-primary-dark mb-2">
            {material.name}
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            {material.description}
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {material.properties.map((prop, idx) => (
              <li key={idx}>{prop}</li>
            ))}
          </ul>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}