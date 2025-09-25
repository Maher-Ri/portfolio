import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Landing",
    img: "https://picsum.photos/seed/p1/800/450",
    desc: "Responsive portfolio landing page with animated hero and accessible navigation.",
    tech: ["React", "TypeScript", "CSS"],
    impact: "Improved LCP by 30% using optimized images & lazy loading.",
    github: "https://github.com/username/portfolio-landing",
    demo: "https://username.github.io/portfolio-landing"
  },
  {
    id: 2,
    title: "Task Manager App",
    img: "https://picsum.photos/seed/p2/800/450",
    desc: "CRUD task manager with offline support and local storage synchronization.",
    tech: ["React", "Vite", "IndexedDB"],
    impact: "Reduced API calls by 40% using local-first sync strategy.",
    github: "https://github.com/username/task-manager",
    demo: "https://username.github.io/task-manager"
  },
  {
    id: 3,
    title: "E-commerce UI",
    img: "https://picsum.photos/seed/p3/800/450",
    desc: "Product grid with filter, sort, and accessible keyboard navigation.",
    tech: ["React", "Tailwind", "Framer Motion"],
    impact: "Improved conversion-ready layout and reduced bundle by 18%.",
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://username.github.io/ecommerce-ui"
  },
  {
    id: 4,
    title: "Charts Dashboard",
    img: "https://picsum.photos/seed/p4/800/450",
    desc: "Admin dashboard with interactive charts and responsive tables.",
    tech: ["React", "Recharts", "SWR"],
    impact: "Faster dashboard load time by streaming critical data.",
    github: "https://github.com/username/charts-dashboard",
    demo: "https://username.github.io/charts-dashboard"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      {/* Inline CSS block for animations and advanced rules */}
      <style>{cssString}</style>

      <div style={styles.header}>
        <h2 style={styles.title}>Selected Projects</h2>
        <p style={styles.subtitle}>
          4 featured projects — screenshots, short descriptions, tech stack and results.
        </p>
      </div>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <article
            key={p.id}
            style={{ ...styles.card, animationDelay: `${i * 120}ms` }}
            aria-labelledby={`project-${p.id}-title`}
          >
            <div style={styles.imageWrapper}>
              <img
                src={p.img}
                alt={`${p.title} screenshot`}
                style={styles.image}
                loading="lazy"
                width="800"
                height="450"
              />
            </div>

            <div style={styles.cardBody}>
              <h3 id={`project-${p.id}-title`} style={styles.cardTitle}>
                {p.title}
              </h3>

              <p style={styles.cardDesc}>{p.desc}</p>

              <div style={styles.techRow}>
                {p.tech.map((t) => (
                  <span key={t} style={styles.techBadge}>
                    {t}
                  </span>
                ))}
              </div>

              <p style={styles.impact}><strong>Impact:</strong> {p.impact}</p>

              <div style={styles.links}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkButton}
                >
                  GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...styles.linkButton, ...styles.primaryButton }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Inline styles (JS objects) ---------- */
const styles = {
  section: {
    padding: "64px 20px",
    background: "#f8fafc",
  },
  header: {
    maxWidth: 980,
    margin: "0 auto 28px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
    lineHeight: 1.1,
    color: "#0f172a",
  },
  subtitle: {
    marginTop: 8,
    color: "#475569",
  },
  grid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
    alignItems: "stretch",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(2,6,23,0.08)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transform: "translateY(0)",
    transition: "transform 220ms cubic-bezier(.2,.9,.3,1), box-shadow 220ms",
    cursor: "default",
    animation: "cardIn 420ms ease forwards",
  },
  imageWrapper: {
    width: "100%",
    height: 0,
    paddingBottom: "56.25%", // 16:9 ratio
    position: "relative",
    overflow: "hidden",
    background: "#e6eef8",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transform: "scale(1)",
    transition: "transform 420ms ease",
    // subtle shimmer via background and pseudo overlay handled in cssString
  },
  cardBody: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flexGrow: 1,
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.125rem",
    color: "#0f172a",
  },
  cardDesc: {
    margin: 0,
    color: "#475569",
    fontSize: "0.95rem",
  },
  techRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 6,
  },
  techBadge: {
    fontSize: "0.75rem",
    padding: "6px 8px",
    borderRadius: 9999,
    background: "#eef2ff",
    color: "#3730a3",
    fontWeight: 600,
  },
  impact: {
    marginTop: 8,
    marginBottom: 0,
    color: "#334155",
    fontSize: "0.9rem",
  },
  links: {
    marginTop: "auto",
    display: "flex",
    gap: 8,
  },
  linkButton: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    background: "#f1f5f9",
    color: "#0f172a",
    fontWeight: 700,
    fontSize: "0.875rem",
    border: "1px solid rgba(2,6,23,0.04)",
  },
  primaryButton: {
    background: "#0ea5a4",
    color: "#fff",
    border: "none",
  }
};

/* ---------- CSS string for animations & pseudo effects ---------- */
const cssString = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* entrance animation for cards */
@keyframes cardIn {
  from { opacity: 0; transform: translateY(10px) scale(.996); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* hover lift + image zoom */
section#projects article:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 36px rgba(2,6,23,0.14);
}
section#projects article:hover img {
  transform: scale(1.06);
}

/* subtle shimmer overlay on images using linear-gradient background */
section#projects div[style] > img {
  /* no direct CSS variables for inline images; we'll add an overlay pseudo using a sibling gradient via background */
}

/* make images look slightly glassy: add a gradient overlay via a positioned ::after on parent */
section#projects div[style] {
  position: relative;
}
section#projects div[style]::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.0) 45%, rgba(255,255,255,0.06) 100%);
  mix-blend-mode: overlay;
  opacity: 0.9;
  background-size: 200% 100%;
  animation: shimmer 3.2s linear infinite;
}

/* small responsive tweaks */
@media (max-width: 640px) {
  section#projects { padding: 36px 14px; }
  section#projects h2 { font-size: 1.5rem; }
  section#projects .cardBody { padding: 12px; }
}

/* accessible focus outline on link buttons */
section#projects a:focus {
  outline: 3px solid rgba(14,165,164,0.22);
  outline-offset: 3px;
  border-radius: 8px;
}
`;

/* Notes:
 - The component uses placeholder images from picsum.photos (seeded).
 - Replace projects[] data with your real images/descriptions and real GitHub/demo URLs.
 - The CSS is included in a <style> tag (cssString) to keep everything self-contained.
 - Uses lazy loading for images and proper aria-labelledby for accessibility.
*/
