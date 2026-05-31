import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/profile"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-20">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight">Let&apos;s connect</h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          I am always open to new opportunities, internships, and collaborations. Feel free to reach out through any of
          the channels below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
              {EMAIL}
            </a>
          </Button>
        </div>

        <p className="mt-12 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clinton Gikonyo · Built with v0
        </p>
      </div>
    </footer>
  )
}
