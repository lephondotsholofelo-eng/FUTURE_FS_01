import { MapPin, GraduationCap, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
                About
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                A bit about me
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m a dedicated Software Engineering Honours student at{" "}
              <span className="text-foreground font-medium">Belgium Campus iTversity</span>{" "}
              with a strong foundation in full-stack development and cloud infrastructure. 
              My journey in tech began with a passion for solving complex problems and has 
              evolved into a deep appreciation for architecting scalable software solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
             I bring both technical excellence and leadership to 
              every project I undertake. I&apos;m currently collaborating with engineering 
              students from <span className="text-foreground font-medium">Pennsylvania State University</span>{" "}
              on an Automated Mini-Smart Farm Project aimed at transforming STEM education 
              in South African primary schools.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              When I&apos;m not coding, you&apos;ll find me tutoring fellow students as part 
              of the Peer Tutoring program or leading as Head of Department in the Choir Club. 
              I believe in the power of community and lifting others as we climb.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 bg-card rounded-lg border border-border">
                <MapPin size={20} className="text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="text-foreground font-medium">Midrand, Gauteng</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <GraduationCap size={20} className="text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Studying</p>
                <p className="text-foreground font-medium">Bachelor of Computing, Specialising in Software Engineering</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <Sparkles size={20} className="text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="text-foreground font-medium">Full-Stack & Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
