"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"
import { title } from "process"

const featuredProjects = [
  {
    title: "Automated Mini-Smart Farm",
    description:
      "IoT-based educational tool developed in collaboration with Pennsylvania State University engineering students. Designed to introduce South African primary school students to STEM concepts through hands-on automated farming technology.",
    technologies: ["IoT", "Python", "Raspberry Pi", "Sensors"],
    github: "https://github.com/VoidMeBro/ENGR-422-Project",
    live: "#",
    image: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and React. Features smooth animations, dark theme, and optimized performance. Showcases full-stack development capabilities and professional presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/lephondotsholofelo-eng/FUTURE_FS_01",
    live: "https://future-fs-01-rust.vercel.app",
    image: null,
  },
]

const otherProjects = [
  {
    title: "LeadFlow CRM",

    description: "Application built for keeping track of leads, using MySQL to store these leads.",
    technologies: ["React", "MySQL", "Database Design"],
    github: "https://github.com/lephondotsholofelo-eng/FUTURE_FS_02",
    live: "#",
  },
  {
    title: "MustardSeed Studio",
    description: "Website for photography business for booking and information gathering",
    technologies: ["React", "CSS"],
    github: "https://github.com/lephondotsholofelo-eng/FUTURE_FS_03",
    live: "https://future-fs-03-lake-chi.vercel.app",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
                
                Projects
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                Things I&apos;ve built
              </p>
            </div>
          </div>

          {/* Projects Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Featured Projects */}
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View on GitHub"
                          >
                            <Github size={20} />
                          </Link>
                        )}
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View live site"
                          >
                            <ExternalLink size={20} />
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Projects */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Other Noteworthy Projects
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-card rounded-lg border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <Folder size={24} className="text-primary" />
                        <div className="flex items-center gap-3">
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View on GitHub"
                            >
                              <Github size={18} />
                            </Link>
                          )}
                          {project.live && (
                            <Link
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View live site"
                            >
                              <ExternalLink size={18} />
                            </Link>
                          )}
                        </div>
                      </div>
                      <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
