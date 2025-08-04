import Link from "next/link"
import { ArrowLeft, Terminal, Github, Mail, Coffee } from "lucide-react"

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
            <span className="break-words">{">"} cat /about/me.txt</span>
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
    │  ██████╗ ███████╗███████╗██╗  ██╗   │
    │ ██╔════╝ ██╔════╝██╔════╝██║ ██╔╝   │
    │ ██║  ███╗█████╗  █████╗  █████╔╝    │
    │ ██║   ██║██╔══╝  ██╔══╝  ██╔═██╗    │
    │ ╚██████╔╝███████╗███████╗██║  ██╗   │
    │  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   │
    │                                     │
    │         BLOG MAINTAINER             │
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
                  Greetings, fellow digital wanderer! I'm a passionate code warrior who believes that the terminal is
                  mightier than the GUI, and that vim keybindings should be universal.
                </p>
                <p>
                  By day, I wrangle code and architect systems. By night, I rice my Linux desktop and contribute to open
                  source projects. My coffee-to-code ratio is approximately 1:1.
                </p>
              </div>
            </div>

            {/* Skills - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} cat /proc/skills</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
                  <h3 className="text-cyan-400 mb-2 text-sm sm:text-base">Languages</h3>
                  <div className="text-green-300 text-xs sm:text-sm space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">JavaScript/TypeScript</span>
                      <span className="text-green-400">████████████ 95%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Python</span>
                      <span className="text-green-400">██████████░░ 85%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Rust</span>
                      <span className="text-green-400">████████░░░░ 70%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Go</span>
                      <span className="text-green-400">███████░░░░░ 65%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">C</span>
                      <span className="text-green-400">██████░░░░░░ 60%</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
                  <h3 className="text-cyan-400 mb-2 text-sm sm:text-base">Technologies</h3>
                  <div className="text-green-300 text-xs sm:text-sm space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Linux/Unix</span>
                      <span className="text-green-400">████████████ 95%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Docker</span>
                      <span className="text-green-400">██████████░░ 85%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Kubernetes</span>
                      <span className="text-green-400">████████░░░░ 75%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">AWS</span>
                      <span className="text-green-400">███████░░░░░ 70%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 flex-shrink-0">Terraform</span>
                      <span className="text-green-400">██████░░░░░░ 65%</span>
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
                  {`OS: Arch Linux x86_64
Host: ThinkPad X1 Carbon Gen 9
Kernel: 6.7.1-arch1-1
Uptime: 42 days, 13 hours, 37 mins
Packages: 1337 (pacman)
Shell: zsh 5.9
Resolution: 2560x1440
WM: i3-gaps
Theme: Gruvbox Dark
Terminal: Alacritty
CPU: Intel i7-1165G7 (8) @ 4.700GHz
GPU: Intel TigerLake-LP GT2
Memory: 16384MiB`}
                </pre>
              </div>
            </div>

            {/* Philosophy - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} cat /etc/philosophy</h2>
              <div className="text-green-300 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <blockquote className="border-l-4 border-cyan-400 pl-4 italic break-words">
                  "Code is poetry, and every bug is a haiku waiting to be debugged."
                </blockquote>
                <p>
                  I believe in writing clean, maintainable code that doesn't require a PhD to understand. I'm a strong
                  advocate for open source software, minimal desktop environments, and the philosophy that the best tool
                  is the one you know how to use properly.
                </p>
              </div>
            </div>

            {/* Contact - Responsive */}
            <div>
              <h2 className="text-lg sm:text-xl text-green-400 mb-4">{">"} ls -la /contact/</h2>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">github.com/geek-coder</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">hello@geekblog.dev</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-green-300 text-sm sm:text-base">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">buymeacoffee.com/geekcoder</span>
                </div>
              </div>
            </div>

            {/* Footer - Responsive */}
            <div className="p-3 sm:p-4 border border-green-800 bg-gray-950 rounded">
              <div className="text-xs text-green-600 space-y-1">
                <div>{">"} echo "Thanks for reading!"</div>
                <div className="text-green-400">Thanks for reading!</div>
                <div className="text-cyan-400">{">"} exit 0</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
