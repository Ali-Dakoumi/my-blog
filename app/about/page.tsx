import Link from "next/link"
import { ArrowLeft, Terminal, Github, Mail, MapPin, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header - Responsive */}
      <header className="border-b-2 border-green-400 p-3 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors mb-4 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            <span>{"<"} back to terminal</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2 text-green-600 text-xs sm:text-sm">
            <Terminal className="w-4 h-4 flex-shrink-0" />
            <span className="break-words">{">"} cat /about/ali.txt</span>
          </div>
        </div>
      </header>

      {/* Content - Responsive */}
      <main className="max-w-4xl mx-auto p-3 sm:p-6">
        <div className="space-y-6 sm:space-y-8">
          {/* ASCII Art Profile - Responsive */}
          <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
            <pre className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs overflow-x-auto whitespace-pre">
              {`
    ╭─────────────────────────────────────╮
    │   █████╗ ██╗     ██╗                │
    │  ██╔══██╗██║     ██║                │
    │  ███████║██║     ██║                │
    │  ██╔══██║██║     ██║                │
    │  ██║  ██║███████╗██║                │
    │  ╚═╝  ╚═╝╚══════╝╚═╝                │
    │                                     │
    │      FRONTEND DEVELOPER             │
    ╰─────────────────────────────────────╯
`}
            </pre>
          </div>

          {/* Bio - Responsive */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl text-cyan-400 mb-4">{">"} whoami</h1>
              <div className="text-green-300 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Hello! I'm Ali Dakoumi, a passionate frontend developer who believes that great code is like good
                  coffee - it should be strong, clean, and make your day better.
                </p>
                <p>
                  I specialize in building modern web applications with React, TypeScript, and Next.js. When I'm not
                  coding, you'll find me exploring new technologies, contributing to open source, or perfecting my
                  coffee brewing technique.
                </p>
              </div>
            </div>

            {/* Skills - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} cat /proc/skills</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
                  <h3 className="text-cyan-400 mb-2 text-sm sm:text-base">Frontend</h3>
                  <div className="text-green-300 text-xs sm:text-sm space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">React/Next.js</span>
                      <span className="text-green-400">████████████ 95%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">TypeScript</span>
                      <span className="text-green-400">██████████░░ 90%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Tailwind CSS</span>
                      <span className="text-green-400">███████████░ 92%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">JavaScript</span>
                      <span className="text-green-400">████████████ 95%</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
                  <h3 className="text-cyan-400 mb-2 text-sm sm:text-base">Tools & Others</h3>
                  <div className="text-green-300 text-xs sm:text-sm space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Git/GitHub</span>
                      <span className="text-green-400">███████████░ 88%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Node.js</span>
                      <span className="text-green-400">████████░░░░ 75%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Figma</span>
                      <span className="text-green-400">███████░░░░░ 70%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Coffee Brewing</span>
                      <span className="text-green-400">████████████ 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} neofetch</h2>
              <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
                <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre">
                  {`OS: macOS Sonoma
Host: MacBook Pro M2
Shell: zsh with oh-my-zsh
Editor: VS Code + Vim keybindings
Browser: Arc (for dev), Safari (daily)
Terminal: iTerm2 + tmux
Coffee: Ethiopian single origin ☕
WM: Rectangle (window management)
Theme: One Dark Pro
Font: JetBrains Mono Nerd Font`}
                </pre>
              </div>
            </div>

            {/* Philosophy - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} cat /etc/philosophy</h2>
              <div className="text-green-300 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <blockquote className="border-l-4 border-cyan-400 pl-4 italic break-words">
                  "Clean code is not written by following a set of rules. Clean code is written by someone who cares."
                </blockquote>
                <p>
                  I believe in writing code that's not just functional, but readable, maintainable, and elegant. Every
                  line should tell a story, and every function should have a purpose. I'm passionate about user
                  experience, performance optimization, and the continuous learning that comes with being a developer.
                </p>
              </div>
            </div>

            {/* Contact - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} ls -la /contact/</h2>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:text-cyan-400 transition-colors"
                  >
                    github.com/your-github
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/your-linkedin
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a href="mailto:your-email@example.com" className="break-all hover:text-cyan-400 transition-colors">
                    your-email@example.com
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">Your Location</span>
                </div>
              </div>
            </div>

            {/* Footer - Responsive */}
            <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
              <div className="text-xs text-green-600 space-y-1">
                <div>{">"} echo "Thanks for visiting!"</div>
                <div className="text-green-400">Thanks for visiting!</div>
                <div className="text-cyan-400">{">"} exit 0</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
