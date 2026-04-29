import { getBaseURL } from "@lib/util/env"
import { Metadata, Viewport } from "next"
import "styles/globals.css"
import PWARegister from "@modules/common/components/pwa-register"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "mswysl-logo.png",
    template: "%s | MSWYSL",
  },
  description:
    "TRUE Underground Tees. Highest Quality Prints; All on ShakaWear",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "mswysl-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#06080f",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="dark">
      <body>
        <PWARegister />
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
