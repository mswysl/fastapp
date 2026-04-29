import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SigilNavigation from "@modules/home/components/sigil-navigation"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Dark PWA Commerce",
  description:
    "MSWYSL storefront for physical products, digital drops, and premium gated releases.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <SigilNavigation />
      <section className="border-y border-mswysl-line bg-[#0b0d15] py-12 text-white">
        <div className="content-container grid gap-4 medium:grid-cols-3">
          {[
            ["Premium", "$7.99 monthly access to gated products and releases."],
            ["Downloads", "Signed delivery paths for digital purchases."],
            ["Drops", "Physical product launches with variant-led inventory."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border border-mswysl-line bg-white/[0.035] p-6 shadow-[0_0_32px_rgba(130,255,214,0.08)]"
            >
              <h2 className="text-xl-semi uppercase text-white">{title}</h2>
              <p className="mt-3 text-base-regular text-mswysl-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-mswysl-void py-14 text-white">
        <div className="content-container mb-8 flex flex-col gap-2">
          <p className="text-small-semi uppercase tracking-[0.24em] text-mswysl-pink">
            Collections
          </p>
          <h2 className="text-2xl-regular text-white">Current rails</h2>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </section>
    </>
  )
}
