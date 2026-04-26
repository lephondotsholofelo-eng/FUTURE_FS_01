"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                Software Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Tsholofelo Lephondo
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                I build accessible, pixel-perfect digital experiences for the web. 
                Currently pursuing my Honours in Computing while architecting scalable 
                software solutions and automating workflows.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/lephondotsholofelo-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tsholofelo-lephondo-8b5368337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:tsholofelolephondo7@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </Link>
            </div>

            <div className="pt-6">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Learn more about me
                <ArrowDown size={16} />
              </Link>
            </div>
          </div>

          {/* Right side - decorative element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute inset-8 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute inset-16 border border-primary/30 rounded-full" />
              <div className="absolute inset-0 border border-primary/10 rounded-full" />
              <div className="absolute inset-24 bg-card rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">TL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
