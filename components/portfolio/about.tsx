import { Code2, Users, Heart } from "lucide-react"

const skills = ["Kotlin", "Java", "Python", "PHP", "SQL"]
const softSkills = ["Communication & teamwork", "Problem-solving", "Adaptability", "Time management"]
const interests = ["Technology", "Football", "Nature walks", "Travelling", "Chess & Drama"]

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          I am a Business Information Technology undergraduate with a keen interest in software development and IT
          operations. I have completed the Cisco Networking Academy Cybersecurity Essentials course and earned the
          Oracle Cloud Infrastructure (OCI) Foundations Associate certification. Outside of academics I stay active in
          community projects and creative hobbies.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <Code2 className="size-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold">Technical skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <Users className="size-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold">Soft skills</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <Heart className="size-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold">Interests</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {interests.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
