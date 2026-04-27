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

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error("Failed to send message")
      }
      

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
              </p>

              <div className="mt-8 space-y-4">
                <Link href="mailto:tsholofelolephondo7@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span className="text-sm">Email Me</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/tsholofelo-lephondo-8b5368337"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </Link>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} />
                  <span className="text-sm">Midrand, South Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg"
                />

                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg"
                />
              </div>

              <textarea
                rows={6}
                required
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg resize-none"
              />

              {submitted ? (
                <p className="text-primary font-medium">
                  Message sent successfully!
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
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
