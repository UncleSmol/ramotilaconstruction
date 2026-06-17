import { CtaBand, PageHero } from "@/components/page-shell";

const items = [
  "Site preparation and construction readiness",
  "Concrete works, plinths, bases, and support structures",
  "Drainage and stormwater-related civil support",
  "General construction and structural support works",
  "Civil works coordinated around follow-on trades",
];

const deliveryConcerns = [
  "Prepare the work area so follow-on trades are not delayed by preventable site issues.",
  "Coordinate concrete, drainage, and structural support requirements with the final use of the area.",
  "Keep levels, access, and practical constructability in view during planning.",
  "Complete civil work in a way that supports mechanical and electrical installation needs.",
];

const examples = [
  "Equipment plinths and concrete bases",
  "Drainage and stormwater support",
  "Site access and preparation works",
  "Structural and general construction support",
];

export default function CivilEngineeringPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Civil Engineering"
        title="Civil work that prepares sites for the next stage of construction."
        description="Ramotila Construction supports civil scopes that help projects move from ground conditions to usable structures and coordinated site delivery."
        videoSrc="/assets/civil-engineering-vid1.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Typical Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Grounded construction support.
            </h2>
          </div>
          <div className="grid gap-4">
            {items.map((item) => (
              <p key={item} className="border-l-4 border-amber-500 bg-white p-5 text-lg font-medium shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden bg-stone-950 bg-cover bg-center bg-fixed px-6 py-24 text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "url('https://pixabay.com/images/download/pewasser-truck-3308261_1920.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-stone-950/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/72 to-stone-950/42" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Civil Readiness
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Civil work sets the conditions for everything that follows.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-200">
              Ramotila supports civil scopes that prepare, protect, level, drain,
              support, or structure a work area so the project can move forward.
            </p>
          </div>
          <div className="grid gap-3">
            {deliveryConcerns.map((concern) => (
              <p key={concern} className="border-l-4 border-amber-400 bg-stone-950/82 p-5 font-medium leading-7 text-stone-100 backdrop-blur-sm">
                {concern}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Example Civil Scopes
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {examples.map((example) => (
              <p key={example} className="border border-white/12 bg-white/8 p-5 font-semibold">
                {example}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
