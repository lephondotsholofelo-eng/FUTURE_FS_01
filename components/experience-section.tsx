import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "April 2026 — Present",
    title: "Full-Stack Web Development Intern",
    company: "Future Interns",
    description:
      "Architecting and deploying responsive web applications for small businesses using MySQL, React and JavaScript. Integrating front-end interfaces with efficient backend logic to ensure seamless user experiences. Building a professional portfolio of production-ready projects focused on scalability and performance.",
    technologies: ["React", "JavaScript", "MySQL", "Node.js"],
    link: null,
  },
  {
    period: "February 2026 — Present",
    title: "Peer Tutor",
    company: "Belgium Campus",
    description:
      "Conducting tutoring sessions for students to improve their academic performance. Assisting students complete challenging assignments and conducting exam preparation sessions, contributing to improved module pass rates within the cohort.",
    technologies: ["Teaching", "Mentorship", "Academic Support"],
    link: null,
  },

]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
                Experience
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                Where I&apos;ve worked
              </p>
            </div>
          </div>

          {/* Experience Items */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="sm:w-40 shrink-0">
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                          {exp.link && (
                            <Link
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block ml-2"
                            >
                              <ExternalLink size={14} />
                            </Link>
                          )}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Link */}
            <div className="mt-8">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <span className="border-b border-foreground group-hover:border-primary transition-colors">
                  View Full Resume
                </span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
