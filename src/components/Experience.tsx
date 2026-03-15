import { experience } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Experience</h2>
      <div className="space-y-8">
        {experience.map((entry) => (
          <div key={entry.id}>
            <p className="text-sm text-muted">{entry.date}</p>
            <h3 className="text-lg font-medium mt-1">{entry.title}</h3>
            <p className="text-sm text-muted">
              {entry.organization}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
