interface TimelineEvent {
  year: string;
  description: string;
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative pl-4">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
      <ul className="space-y-8">
        {events.map((event, idx) => (
          <li key={idx} className="relative">
            <div className="absolute -left-2 w-4 h-4 rounded-full bg-accent"></div>
            <h4 className="font-semibold text-primary-dark mb-1">{event.year}</h4>
            <p className="text-sm text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}