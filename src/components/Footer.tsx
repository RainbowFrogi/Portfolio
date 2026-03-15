import { contactInfo, socialLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="px-6 py-12 max-w-4xl mx-auto border-t border-surface-light">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {contactInfo.email}
          </a>
          <span className="text-sm text-muted">{contactInfo.location}</span>
        </div>
        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}
