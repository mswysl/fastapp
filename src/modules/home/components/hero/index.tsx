import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden border-b border-mswysl-line bg-mswysl-void text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,61,129,0.22),transparent_26%),radial-gradient(circle_at_76%_18%,rgba(130,255,214,0.18),transparent_30%),linear-gradient(145deg,#06080f_0%,#12111d_54%,#06080f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mswysl-void to-transparent" />
      <div className="content-container relative z-10 flex min-h-[calc(100vh-64px)] flex-col justify-center py-20">
        <div className="max-w-4xl">
          <p className="text-small-semi uppercase tracking-[0.28em] text-mswysl-acid">
            Physical goods / digital drops / premium access
          </p>
          <h1 className="mt-5 max-w-4xl text-[54px] font-normal leading-[0.92] text-white small:text-[88px] large:text-[112px]">
            MSWYSL
          </h1>
          <p className="mt-6 max-w-2xl text-large-regular text-mswysl-muted">
            A dark commerce platform for sigil-led product discovery, glowing
            modular surfaces, secure downloads, and subscription-gated releases.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <LocalizedClientLink
              href="/store"
              className="border border-mswysl-acid bg-mswysl-acid px-5 py-3 text-small-semi uppercase text-black transition hover:bg-white hover:text-black"
            >
              Enter Store
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/account"
              className="border border-mswysl-line bg-white/5 px-5 py-3 text-small-semi uppercase text-white transition hover:border-mswysl-pink hover:text-mswysl-pink"
            >
              Premium Login
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
