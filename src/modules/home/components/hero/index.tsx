import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import RandomProductSelector from "../random-product-selector"

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
      <Image
        src="/images/mswysl-logo.png"
        alt="Hero collage"
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] flex-col justify-between py-10">
        <div className="content-container">
          <h1 className="text-[110px] leading-[0.86] font-black uppercase text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] small:text-[180px]">
            True
            <br />
            Underground
            <br />
            Tees
          </h1>
        </div>
        <div className="content-container space-y-6 pb-8">
          <p className="text-3xl font-black uppercase text-mswysl-pink">New shirts every three days</p>
          <div className="flex flex-wrap gap-3">
            <LocalizedClientLink href="/store" className="border border-white px-5 py-3 text-small-semi uppercase">Shop now</LocalizedClientLink>
            <LocalizedClientLink href="/account" className="border border-mswysl-pink px-5 py-3 text-small-semi uppercase text-mswysl-pink">Customer Account</LocalizedClientLink>
            <RandomProductSelector />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
