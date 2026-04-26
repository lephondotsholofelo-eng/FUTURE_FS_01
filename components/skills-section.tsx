import { Code2, Cloud, Database, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C#", "JavaScript", "Python", "T-SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Code2,
    skills: ["React", ".NET Core", "Node.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Oracle Cloud (OCI)", "Kubernetes (OKE)", "CI/CD Pipelines", "OCI Vault", "Docker"],
  },
  {
    title: "Specializations",
    icon: Database,
    skills: ["Database Development", "SQL Server", "IoT Architecture", "App Architecture", "Web Optimization"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["International Collaboration", "Problem-Solving", "Team Leadership", "Peer Tutoring", "Communication"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
                Skills
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                Technologies I work with
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon size={20} className="text-primary" />
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Highlight */}
            <div className="mt-8 p-6 bg-card rounded-lg border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Education & Certifications
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="text-foreground">BSc Honours in Computing</span> — Belgium Campus iTversity (2024 - Present)
                    </p>
                    <p>
                      <span className="text-foreground">National Senior Certificate</span> — Standerton High School (Top 30 Student)
                    </p>
                    <p className="text-sm text-primary">
                      Top Achiever Award in Information Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
