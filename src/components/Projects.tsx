import { projects } from "@/data/portfolio-data";

export default function Projects() {
  const featuredGames = projects.filter(
    (project) => project.category === "featured-game"
  );
  const gameJams = projects.filter((project) => project.category === "game-jam");
  const notableNonGames = projects.filter(
    (project) => project.category === "notable-non-game"
  );

  const renderProjectList = (sectionProjects: typeof projects) => (
    <div className="space-y-12">
      {sectionProjects.map((project) => (
        <div key={project.id} className="space-y-3">
          <div className="aspect-video rounded-lg overflow-hidden bg-surface max-w-2xl">
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
            <div className="flex gap-4 mt-3">
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
                  Play
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Projects</h2>
      <div className="space-y-16">
        <div className="space-y-6">
          <h3 className="text-xl font-medium tracking-tight">Featured Games</h3>
          {renderProjectList(featuredGames)}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-medium tracking-tight">Game Jams</h3>
          {renderProjectList(gameJams)}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-medium tracking-tight">
            Notable Non-Game Projects
          </h3>
          {renderProjectList(notableNonGames)}
        </div>
      </div>
    </section>
  );
}
