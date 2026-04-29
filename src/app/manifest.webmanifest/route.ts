export function GET() {
  return new Response(
    JSON.stringify({
      name: "MSWYSL",
      short_name: "MSWYSL",
      description:
        "Dark PWA commerce for physical goods, digital drops, and premium gated releases.",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#06080f",
      theme_color: "#06080f",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "48x48",
          type: "image/x-icon",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json",
      },
    }
  )
}
