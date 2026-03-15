import { skills } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-6">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm bg-surface-light text-foreground px-4 py-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
