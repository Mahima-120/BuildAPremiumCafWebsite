import { FormEvent, useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1627743914480-5c0a391767f0?auto=format&fit=crop&w=2200&q=88",
  story:
    "https://images.unsplash.com/photo-1725545904327-4644b45f1a5f?auto=format&fit=crop&w=1200&q=85",
  espresso:
    "https://images.unsplash.com/photo-1565252556328-92ee4a9a0983?auto=format&fit=crop&w=900&q=85",
  matcha:
    "https://images.unsplash.com/photo-1749104953222-9d6ed76e4bf0?auto=format&fit=crop&w=900&q=85",
  morning:
    "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=85",
  croissant:
    "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?auto=format&fit=crop&w=900&q=85",
  bun: "https://images.unsplash.com/photo-1619540158579-1b4fd3529849?auto=format&fit=crop&w=900&q=85",
  cookie:
    "https://images.unsplash.com/photo-1579867779026-d8285a8c9625?auto=format&fit=crop&w=900&q=85",
  bread:
    "https://images.unsplash.com/photo-1612737144187-d51c1483225a?auto=format&fit=crop&w=900&q=85",
  cafe: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?auto=format&fit=crop&w=1200&q=85",
  gallery1:
    "https://images.unsplash.com/photo-1633998908137-d50f3d02e498?auto=format&fit=crop&w=800&q=85",
  gallery2:
    "https://images.unsplash.com/photo-1721277000438-488066df7ac8?auto=format&fit=crop&w=800&q=85",
  gallery3:
    "https://images.unsplash.com/photo-1563891848101-44b95a146a3a?auto=format&fit=crop&w=800&q=85",
};

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
  </svg>
);

const menuItems = [
  {
    name: "Brown Butter Latte",
    category: "Coffee",
    price: "$6.50",
    description: "Double espresso, brown butter caramel, steamed oat milk.",
    image: images.espresso,
  },
  {
    name: "Ceremonial Matcha",
    category: "Matcha",
    price: "$7.00",
    description: "Stone-ground matcha, wildflower honey, milk of choice.",
    image: images.matcha,
  },
  {
    name: "The Slow Morning",
    category: "Breakfast",
    price: "$14.00",
    description: "Soft eggs, cultured butter, sourdough and market greens.",
    image: images.morning,
  },
  {
    name: "Almond Croissant",
    category: "Fresh Bakes",
    price: "$5.75",
    description: "Twice-baked with almond cream and toasted flake almonds.",
    image: images.croissant,
  },
  {
    name: "Salted Cacao Cookie",
    category: "Desserts",
    price: "$4.50",
    description: "Dark chocolate, rye flour and hand-harvested sea salt.",
    image: images.cookie,
  },
];

const categories = ["All", "Coffee", "Matcha", "Fresh Bakes", "Breakfast", "Desserts"];

const bakes = [
  {
    name: "Butter Croissant",
    detail: "Laminated over three days",
    price: "$4.75",
    image: images.croissant,
  },
  {
    name: "Cardamom Knot",
    detail: "Brown sugar & green cardamom",
    price: "$5.25",
    image: images.bun,
  },
  {
    name: "Country Sourdough",
    detail: "48-hour natural fermentation",
    price: "$9.00",
    image: images.bread,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    category === "All"
      ? menuItems.slice(0, 4)
      : menuItems.filter((item) => item.category === category);

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div className="overflow-hidden bg-cream text-espresso selection:bg-caramel selection:text-cream">
      <div className="bg-espresso px-5 py-2.5 text-center text-[10px] font-semibold tracking-[0.28em] text-cream sm:text-[11px]">
        FRESHLY BREWED. FRESHLY BAKED. EVERY DAY.
      </div>

      <header className="absolute left-0 right-0 top-[35px] z-50 border-b border-white/25 text-white">
        <nav
          className="page-wrap flex h-[82px] items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#home" className="font-display text-[25px] font-semibold tracking-[0.08em]">
            BREW <i className="font-normal">&</i> CRUMB
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {["Home", "Menu", "Our Story", "Bakery", "Locations", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="nav-link text-[11px] font-semibold uppercase tracking-[0.16em]"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#locations"
            className="hidden border border-white/70 px-5 py-3 text-[10px] font-semibold tracking-[0.18em] transition hover:bg-white hover:text-espresso sm:block"
          >
            FIND A TABLE
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center sm:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-6 bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/20 bg-espresso px-6 py-7 sm:hidden">
            {["Home", "Menu", "Our Story", "Bakery", "Locations", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block border-b border-white/10 py-3 font-display text-2xl"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-[800px] items-end bg-charcoal text-white md:min-h-[880px] md:items-center"
        >
          <img
            src={images.hero}
            alt="Warm, sunlit interior at Brew & Crumb"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,25,20,.78)_0%,rgba(32,25,20,.42)_53%,rgba(32,25,20,.15)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          <div className="page-wrap relative z-10 w-full pb-24 pt-48 md:pb-12">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="h-px w-9 bg-caramel" /> Coffee · Bakery · Neighbourhood
            </p>
            <h1 className="max-w-[850px] font-display text-[clamp(4rem,8.2vw,8.8rem)] font-medium leading-[0.78] tracking-[-0.045em]">
              Your daily cup
              <br />
              of <i className="font-normal">comfort.</i>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/80 md:text-lg">
              Specialty coffee, handcrafted bakes and moments worth slowing down for.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="button-light">
                VIEW MENU <Arrow />
              </a>
              <a href="#locations" className="button-ghost">
                VISIT US
              </a>
            </div>
          </div>
          <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[10px] tracking-[0.2em] text-white/70 md:flex">
            <span className="h-px w-12 bg-white/50" /> SCROLL TO DISCOVER
          </div>
        </section>

        <section id="menu" className="section-pad">
          <div className="page-wrap">
            <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">From our counter</p>
                <h2 className="section-title">
                  Made for <i>slow moments.</i>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-brown/70">
                Season-led, carefully sourced, and made by hand in our kitchen every morning.
              </p>
            </div>
            <div
              className="no-scrollbar mb-11 flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Menu categories"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  role="tab"
                  aria-selected={category === item}
                  className={`whitespace-nowrap border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${category === item ? "border-espresso bg-espresso text-cream" : "border-espresso/20 hover:border-espresso"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div
              className={`grid gap-x-5 gap-y-10 ${filtered.length === 1 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}
            >
              {filtered.map((item) => (
                <article key={item.name} className="group animate-reveal">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 bg-cream px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em]">
                      {item.category}
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[27px] font-semibold leading-none">
                      {item.name}
                    </h3>
                    <span className="text-sm font-semibold">{item.price}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-5 text-brown/65">{item.description}</p>
                </article>
              ))}
            </div>
            <a href="#bakery" className="text-link mx-auto mt-14 w-fit">
              EXPLORE THE FULL MENU <Arrow />
            </a>
          </div>
        </section>

        <section id="our-story" className="bg-olive text-cream">
          <div className="grid min-h-[740px] lg:grid-cols-2">
            <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
              <img
                src={images.story}
                alt="A thoughtful breakfast and coffee spread"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full border border-cream/60 bg-olive/80 p-5 text-center font-display text-sm uppercase leading-5 tracking-widest backdrop-blur-sm">
                <div className="grid h-full place-items-center">
                  Made here
                  <br />
                  with care
                  <br />
                  Est. 2019
                </div>
              </div>
            </div>
            <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[10%]">
              <div className="max-w-xl">
                <p className="eyebrow !text-cream/70">Our story</p>
                <h2 className="section-title text-cream">
                  Good things take <i>time.</i>
                </h2>
                <p className="mt-8 font-display text-2xl leading-8 text-cream/95">
                  We started Brew & Crumb with a simple belief: everyday rituals deserve
                  extraordinary care.
                </p>
                <div className="mt-7 space-y-5 text-sm leading-7 text-cream/70">
                  <p>
                    Our coffee is sourced through long-standing relationships and roasted to reveal
                    its natural character. Our bakes are made from scratch, folded with cultured
                    butter, local grain and plenty of patience.
                  </p>
                  <p>
                    No shortcuts. No fuss. Just honest ingredients, practiced hands, and a warm seat
                    waiting for you.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-3 border-b border-cream/50 pb-2 text-[10px] font-bold tracking-[0.18em]"
                >
                  MORE ABOUT US <Arrow className="w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-wrap">
            <div className="text-center">
              <p className="eyebrow justify-center">Signature pours</p>
              <h2 className="section-title">
                A little <i>different.</i>
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                ["01", "Brown Butter Latte", "Nutty, silky, quietly indulgent", images.espresso],
                ["02", "Cloud Matcha", "Ceremonial matcha, vanilla sea-salt foam", images.matcha],
                [
                  "03",
                  "Orange Blossom Cold Brew",
                  "18-hour cold brew, citrus and tonic",
                  images.morning,
                ],
              ].map(([number, name, desc, image]) => (
                <article key={name} className="drink-card group">
                  <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/50 text-[10px] text-white">
                    {number}
                  </span>
                  <div className="absolute bottom-0 left-0 p-7 text-white">
                    <h3 className="font-display text-3xl">{name}</h3>
                    <p className="mt-2 text-xs tracking-wide text-white/70">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bakery" className="border-y border-espresso/10 bg-caramel/15 section-pad">
          <div className="page-wrap">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">From the ovens</p>
                <h2 className="section-title">
                  Freshly baked, <i>daily.</i>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-brown/70">
                Small-batch pastries and loaves, baked throughout the morning until they’re gone.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {bakes.map((bake) => (
                <article key={bake.name} className="group bg-cream p-3 pb-6">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={bake.image}
                      alt={bake.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 px-3 pt-5">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{bake.name}</h3>
                      <p className="mt-1 text-xs text-brown/60">{bake.detail}</p>
                    </div>
                    <span className="pt-1 text-sm font-semibold">{bake.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="bg-espresso text-cream">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[12%]">
              <div className="w-full max-w-md">
                <p className="eyebrow !text-caramel">Come as you are</p>
                <h2 className="section-title text-cream">
                  Find your <i>table.</i>
                </h2>
                <div className="mt-10 border-y border-cream/20 py-7">
                  <h3 className="font-display text-2xl">Old Town Café</h3>
                  <p className="mt-3 text-sm leading-6 text-cream/65">
                    42 Mercer Lane
                    <br />
                    Portland, OR 97209
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 border-b border-cream/20 py-7 text-xs leading-6">
                  <div>
                    <p className="mb-2 font-bold tracking-[0.14em] text-cream/45">WEEKDAYS</p>
                    <p>7:00am — 6:00pm</p>
                  </div>
                  <div>
                    <p className="mb-2 font-bold tracking-[0.14em] text-cream/45">WEEKENDS</p>
                    <p>8:00am — 5:00pm</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=42+Mercer+Lane+Portland+OR"
                  target="_blank"
                  rel="noreferrer"
                  className="button-light mt-8"
                >
                  GET DIRECTIONS <Arrow />
                </a>
              </div>
            </div>
            <div className="relative min-h-[520px] bg-olive">
              <img
                src={images.cafe}
                alt="Inside the Old Town café"
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-olive/25" />
              <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-center shadow-2xl">
                <div>
                  <span className="block font-display text-xl font-bold">B&C</span>
                  <span className="text-[8px] font-bold tracking-wider">YOU’RE HERE</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 bg-cream px-4 py-3 text-[9px] font-bold tracking-[.14em] text-espresso">
                OLD TOWN · PORTLAND
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-wrap">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="eyebrow">Kind words</p>
                <h2 className="section-title">
                  From our <i>regulars.</i>
                </h2>
                <div className="mt-6 text-caramel">★★★★★</div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  [
                    "“The kind of place that makes you want to order one more coffee and stay for another hour. Everything feels considered, but never precious.”",
                    "Mara L. · Local Guide",
                  ],
                  [
                    "“That cardamom knot alone is worth crossing town for. Pair it with their brown butter latte and your morning is officially made.”",
                    "Theo R. · Neighbour since 2020",
                  ],
                ].map(([quote, person]) => (
                  <blockquote key={person} className="border-l border-caramel pl-6">
                    <p className="font-display text-[25px] leading-8">{quote}</p>
                    <footer className="mt-6 text-[10px] font-bold uppercase tracking-[.15em] text-brown/55">
                      {person}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Instagram gallery"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        >
          {[
            images.gallery1,
            images.matcha,
            images.gallery2,
            images.croissant,
            images.gallery3,
            images.cookie,
          ].map((image, index) => (
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              key={image}
              className="group relative aspect-square overflow-hidden bg-stone-200"
              aria-label={`View Instagram post ${index + 1}`}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 grid place-items-center bg-espresso/50 opacity-0 transition group-hover:opacity-100">
                <span className="w-6 text-white">
                  <Instagram />
                </span>
              </div>
            </a>
          ))}
        </section>

        <section className="bg-caramel py-20 text-espresso">
          <div className="page-wrap flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="eyebrow">A note from the neighbourhood</p>
              <h2 className="font-display text-5xl leading-none sm:text-6xl">
                Good things, <i>delivered.</i>
              </h2>
              <p className="mt-4 text-sm text-espresso/70">
                Seasonal menus, bakery drops and the occasional treat—straight to your inbox.
              </p>
            </div>
            <form onSubmit={subscribe} className="w-full max-w-xl">
              <div className="flex border-b border-espresso">
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="YOUR EMAIL ADDRESS"
                  className="min-w-0 flex-1 bg-transparent py-4 text-xs font-semibold tracking-[.12em] outline-none placeholder:text-espresso/60"
                />
                <button className="flex items-center gap-2 px-2 text-[10px] font-bold tracking-[.16em]">
                  JOIN THE CLUB <Arrow className="w-5" />
                </button>
              </div>
              <p className="mt-3 min-h-5 text-xs">
                {subscribed
                  ? "Welcome to the club. Keep an eye on your inbox."
                  : "By subscribing, you agree to receive our occasional emails."}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-charcoal pb-8 pt-16 text-cream">
        <div className="page-wrap">
          <div className="grid gap-12 border-b border-cream/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <a href="#home" className="font-display text-3xl font-semibold tracking-[.06em]">
                BREW <i className="font-normal">&</i> CRUMB
              </a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-cream/55">
                Coffee, crumbs, and the simple pleasure of taking your time.
              </p>
              <div className="mt-7 flex gap-3">
                {["IG", "FB", "TK"].map((social) => (
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    key={social}
                    className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 text-[9px] transition hover:border-caramel hover:text-caramel"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <FooterColumn title="Explore" links={["Menu", "Our Story", "Bakery", "Locations"]} />
            <div>
              <h3 className="footer-heading">Visit</h3>
              <p className="footer-copy">
                42 Mercer Lane
                <br />
                Portland, OR 97209
              </p>
              <a href="mailto:hello@brewandcrumb.com" className="mt-4 block text-xs text-caramel">
                hello@brewandcrumb.com
              </a>
            </div>
            <div>
              <h3 className="footer-heading">Opening hours</h3>
              <p className="footer-copy">
                Mon—Fri &nbsp; 7am—6pm
                <br />
                Sat—Sun &nbsp; 8am—5pm
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[9px] uppercase tracking-[.15em] text-cream/35 sm:flex-row sm:justify-between">
            <p>© 2025 Brew & Crumb. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#home">Privacy</a>
              <a href="#home">Terms</a>
              <a href="#home">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="block text-xs text-cream/60 transition hover:text-caramel"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
