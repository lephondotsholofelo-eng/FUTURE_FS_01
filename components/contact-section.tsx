"use client"

import { useState } from "react"
import { Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
   try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (!res.ok) throw new Error("Failed")

  setSubmitted(true)
  setFormData({ name: "", email: "", message: "" })

  setTimeout(() => setSubmitted(false), 5000)
} catch (err) {
  alert("Something went wrong. Try again.")
} finally {
  setIsSubmitting(false)
}
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
                Contact
              </h2>
              <p className="text-2xl font-semibold text-foreground mb-4">
                Get in touch
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I&apos;ll do 
                my best to get back to you!
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <Link
                  href="mailto:tsholofelolephondo7@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={18} className="group-hover:text-primary" />
                  <span className="text-sm">tsholofelolephondo7@gmail.com</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tsholofelo-lephondo-8b5368337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin size={18} className="group-hover:text-primary" />
                  <span className="text-sm">LinkedIn Profile</span>
                </Link>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} />
                  <span className="text-sm">Midrand, Gauteng, South Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Hi Tsholofelo, I'd like to talk about..."
                />
              </div>

              {submitted ? (
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-primary font-medium">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
