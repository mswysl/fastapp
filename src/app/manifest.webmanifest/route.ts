export function GET() {
  return new Response(
    JSON.stringify({
      name: "mswysl-logo.png",
      short_name: "mswysl-sigil.png",
      description:
        "TRUE Underground Tees.",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#06080f",
      theme_color: "#06080f",
      icons: [
        {
          src: "/mswysl-sigil.png",
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
