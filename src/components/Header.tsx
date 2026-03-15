import { introData, socialLinks } from "@/data/portfolio-data";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
      <div>
        <span className="text-foreground font-medium">{introData.name}</span>
        <span className="text-muted ml-2 text-sm">{introData.title}</span>
      </div>
      <div className="flex items-center gap-4">
        {introData.resumeUrl && (
          <a
            href={introData.resumeUrl}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Resume
          </a>
        )}
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </header>
  );
}
