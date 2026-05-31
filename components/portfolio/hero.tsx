import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/profile"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 py-20">
      <div className="mx-auto w-full max-w-3xl">
        <p className="mb-4 font-mono text-sm tracking-wide text-primary">Hujambo, my name is</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Clinton Gikonyo</h1>
        <h2 className="mt-3 text-balance text-xl font-medium text-muted-foreground sm:text-2xl">
          Business Information Technology undergraduate &amp; aspiring software developer.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          I am building a strong foundation in information systems, programming, and IT operations at Strathmore
          University. I enjoy turning ideas into working software and I am currently seeking an industrial attachment to
          gain hands-on industry experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="size-4" />
              Email me
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
