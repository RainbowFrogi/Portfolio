"use client";

import { useMemo, useState } from "react";

import { projects } from "@/data/portfolio-data";

export default function Projects() {
  const categories = {
    "featured-game": "Featured Projects",
    "game-jam": "Game Jams",
    "miscellaneous": "Miscellaneous",
  } as const;
  type CategoryKey = keyof typeof categories;

  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("featured-game");

  const projectsByCategory = useMemo(
    () => ({
      "featured-game": projects.filter(
        (project) => project.category === "featured-game"
      ),
      "game-jam": projects.filter((project) => project.category === "game-jam"),
      "miscellaneous": projects.filter(
        (project) => project.category === "miscellaneous"
      ),
    }),
    []
  );

  const activeProjects = projectsByCategory[activeCategory];

  return (
    <section id="projects" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Projects</h2>
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Project categories">
          {(Object.keys(categories) as CategoryKey[]).map((categoryKey) => {
            const isActive = activeCategory === categoryKey;

            return (
              <button
                key={categoryKey}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(categoryKey)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-background"
                    : "bg-surface-light text-muted hover:text-primary"
                }`}
              >
                {categories[categoryKey]} ({projectsByCategory[categoryKey].length})
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-10">
          {activeProjects.map((project) => (
            <div key={project.id} className="space-y-3">
              <div className="w-full max-w-full aspect-video rounded-lg overflow-hidden bg-surface">
                {project.mediaType === "video" ? (
                  <video
                    src={project.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                {project.duration && (
                  <p className="text-xs text-muted mt-1">Duration: {project.duration}</p>
                )}
                <p className="text-muted text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted bg-surface-light px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Source code
                    </a>
                  )}
                  {project.itchUrl && (
                    <a
                      href={project.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Play Here
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
