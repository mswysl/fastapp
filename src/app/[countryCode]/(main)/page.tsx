import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "True Underground Tees",
  description:
    "MSWYSL storefront for physical products, digital drops, and premium gated releases.",
}

const categories = [
  { title: "Sprints", href: "/categories/sprints", note: "Fast limited drops" },
  { title: "T-Shirts", href: "/categories/t-shirts", note: "Core daily graphics" },
  { title: "Long Sleeves", href: "/categories/long-sleeves", note: "Cold weather cuts" },
  {
    title: "Premium",
    href: "/account",
    note: "Subscription required: unlock premium products",
  },
]

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
      <section className="border-y border-mswysl-line bg-black py-12 text-white">
        <div className="content-container grid gap-4 medium:grid-cols-4">
          {categories.map((category) => (
            <LocalizedClientLink key={category.title} href={category.href} className="border border-mswysl-line bg-white/[0.04] p-6 hover:border-mswysl-pink">
              <h2 className="text-xl-semi uppercase text-white">{category.title}</h2>
              <p className="mt-3 text-base-regular text-mswysl-muted">{category.note}</p>
            </LocalizedClientLink>
          ))}
        </div>
      </section>
      <section className="bg-mswysl-void py-14 text-white">
        <div className="content-container mb-8 flex flex-col gap-2">
          <p className="text-small-semi uppercase tracking-[0.24em] text-mswysl-pink">Collections</p>
          <h2 className="text-2xl-regular text-white">Latest products</h2>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </section>
    </>
  )
}
