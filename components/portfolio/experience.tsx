"use client"

import { Briefcase, GraduationCap, Award } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const experience = [
  {
    role: "IT Intern",
    org: "Belva Digital",
    period: "3 Months",
    detail:
      "Worked with PHP and SQL on development and database-related tasks, supporting organizational IT operations and gaining hands-on industry experience.",
  },
]

const education = [
  {
    title: "Bachelor of Business Information Technology (BBIT)",
    org: "Strathmore University",
    period: "2022 – Present",
  },
  {
    title: "Student-Based Learning Program (SBL)",
    org: "Strathmore University",
    period: "Jan – Feb 2024",
  },
  
]

const certifications = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
    org: "Oracle University",
    note: "Issued Jan 2026",
    image: "/certificates/oracle-foundations-associate.png",
  },
  {
    title: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    note: "Issued May 2026",
    image: "/certificates/cisco-cybersecurity-essentials.png",
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-20">
      <div className="mx-auto grid w-full max-w-3xl gap-12">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <Briefcase className="size-5 text-primary" />
            Experience
          </h2>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <div key={item.org} className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {item.role} · <span className="text-primary">{item.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <GraduationCap className="size-5 text-primary" />
            Education
          </h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div
                key={item.title}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4"
              >
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <Award className="size-5 text-primary" />
            Certifications
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-primary"
                  >
                    <div className="aspect-[4/3] overflow-hidden border-b border-border bg-secondary">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} certificate`}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-2 font-mono text-xs text-primary">{item.note} · Click to view</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogTitle className="sr-only">{item.title} certificate</DialogTitle>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} certificate`}
                    className="w-full rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
