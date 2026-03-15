import { introData } from "@/data/portfolio-data";

export default function Intro() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
        Hello! I&apos;m {introData.name.split(" ")[0]} Iljina
      </h1>
      <p className="text-muted leading-relaxed max-w-2xl">
        {introData.bio}
      </p>
    </section>
  );
}
