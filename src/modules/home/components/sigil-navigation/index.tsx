import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    name: "Shirts",
    href: "/categories/shirts",
    shards: ["Short Sleeve", "Long Sleeve"],
    angle: "top-[2%] left-1/2 -translate-x-1/2",
  },
  {
    name: "Hoodies",
    href: "/categories/hoodies",
    shards: ["Heavyweight", "Premium"],
    angle: "top-[29%] right-[2%]",
  },
  {
    name: "Crewnecks",
    href: "/categories/crewnecks",
    shards: ["Fleece", "Limited"],
    angle: "bottom-[11%] right-[12%]",
  },
  {
    name: "Hats",
    href: "/categories/hats",
    shards: ["Caps", "Beanies"],
    angle: "bottom-[11%] left-[12%]",
  },
  {
    name: "Woven Blankets",
    href: "/categories/woven-blankets",
    shards: ["Wall", "Throw"],
    angle: "top-[29%] left-[2%]",
  },
]

export default function SigilNavigation() {
  return (
    <section className="bg-mswysl-void py-16 text-white small:py-24">
      <div className="content-container grid gap-10 large:grid-cols-[0.95fr_1.05fr] large:items-center">
        <div className="max-w-xl">
          <p className="text-small-semi uppercase tracking-[0.24em] text-mswysl-acid">
            Sigil navigation
          </p>
          <h2 className="mt-4 text-3xl-regular text-white small:text-[44px] small:leading-[1.05]">
            Browse the drop through a radial category mark.
          </h2>
          <p className="mt-5 text-base-regular text-mswysl-muted">
            Each point opens a product family. Orbiting shards map to
            subcategories, drops, premium gates, and future digital releases.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[620px]">
          <div className="absolute inset-[8%] rounded-full border border-mswysl-line bg-[radial-gradient(circle_at_center,rgba(130,255,214,0.18),rgba(15,17,28,0.72)_38%,rgba(6,8,15,0.95)_72%)] shadow-[0_0_80px_rgba(130,255,214,0.18)]" />
          <svg
            className="absolute inset-0 h-full w-full text-mswysl-acid"
            viewBox="0 0 600 600"
            role="img"
            aria-label="MSWYSL radial category sigil"
          >
            <defs>
              <linearGradient id="sigil-stroke" x1="0" x2="1" y1="0" y2="1">
                <stop stopColor="#82ffd6" />
                <stop offset="0.55" stopColor="#b8a4ff" />
                <stop offset="1" stopColor="#ff3d81" />
              </linearGradient>
              <filter id="sigil-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g
              fill="none"
              stroke="url(#sigil-stroke)"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#sigil-glow)"
            >
              <path
                d="M300 42 372 232 565 212 410 336 472 520 300 410 128 520 190 336 35 212 228 232 300 42Z"
                strokeWidth="2.5"
              />
              <path d="M300 106 392 300 300 494 208 300 300 106Z" strokeWidth="1.5" />
              <path d="M98 300h404M166 164l268 272M434 164 166 436" strokeWidth="1.25" />
              <circle cx="300" cy="300" r="88" strokeWidth="1.25" />
              <circle cx="300" cy="300" r="156" strokeWidth="0.85" strokeDasharray="4 12" />
            </g>
          </svg>

          {categories.map((category) => (
            <LocalizedClientLink
              key={category.name}
              href={category.href}
              className={`absolute ${category.angle} group flex w-[138px] flex-col items-center gap-1 text-center`}
            >
              <span className="w-full border border-mswysl-line bg-black/55 px-3 py-2 text-small-semi uppercase text-white shadow-[0_0_22px_rgba(184,164,255,0.18)] backdrop-blur transition group-hover:border-mswysl-acid group-hover:text-mswysl-acid">
                {category.name}
              </span>
              <span className="text-[10px] uppercase leading-4 tracking-[0.16em] text-mswysl-muted group-hover:text-white">
                {category.shards.join(" / ")}
              </span>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}
