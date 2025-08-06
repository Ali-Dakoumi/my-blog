import { ImageResponse } from "next/og"

export function generateOGImage({
  title,
  author,
  date,
  tags,
}: {
  title: string
  author: string
  date: string
  tags: string[]
}) {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #22c55e 2%, transparent 0%), radial-gradient(circle at 75px 75px, #06d6a0 2%, transparent 0%)",
        backgroundSize: "100px 100px",
        fontFamily: "JetBrains Mono, monospace",
        color: "#22c55e",
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          backgroundColor: "#111111",
          borderBottom: "2px solid #22c55e",
          display: "flex",
          alignItems: "center",
          paddingLeft: "30px",
          fontSize: "16px",
        }}
      >
        <span style={{ color: "#06d6a0" }}>
          ali@localhost:~$ cat /blog/posts/{title.toLowerCase().replace(/\s+/g, "-")}.md
        </span>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 60px 60px",
          maxWidth: "900px",
        }}
      >
        {/* ASCII Art Border */}
        <div
          style={{
            fontSize: "12px",
            color: "#22c55e",
            marginBottom: "30px",
            fontFamily: "monospace",
          }}
        >
          ╭─────────────────────────────────────────────────────────────╮
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#06d6a0",
            margin: "0 0 30px 0",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          {title}
        </h1>

        {/* Meta Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            fontSize: "18px",
            color: "#22c55e",
            marginBottom: "30px",
          }}
        >
          <span>📅 {date}</span>
          <span>👤 {author}</span>
          <span>🏷️ {tags.slice(0, 2).join(", ")}</span>
        </div>

        {/* ASCII Art Border */}
        <div
          style={{
            fontSize: "12px",
            color: "#22c55e",
            fontFamily: "monospace",
          }}
        >
          ╰─────────────────────────────────────────────────────────────╯
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "30px",
          fontSize: "16px",
          color: "#666666",
        }}
      >
        CODE & COFFEE
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
