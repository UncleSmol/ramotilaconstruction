import { CtaBand, PageHero } from "@/components/page-shell";

const items = [
  "Power distribution and electrical infrastructure support",
  "Lighting installations for working environments",
  "Cable routing, containment, and site installation assistance",
  "Electrical maintenance and fault-response support",
  "Coordination with mechanical and civil works during installation",
];

const readinessChecks = [
  "Understand the load, operating need, and installation environment.",
  "Plan cable routes, containment, access, and protection before installation starts.",
  "Coordinate electrical work around civil openings, supports, and mechanical equipment.",
  "Keep handover clear so the installation can be maintained and understood later.",
];

const examples = [
  "Distribution and reticulation support",
  "Lighting for operational and work areas",
  "Cable containment and route support",
  "Electrical maintenance and fault response",
];

export default function ElectricalEngineeringPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Electrical Engineering"
        title="Electrical work that supports dependable site operation."
        description="Ramotila Construction handles electrical scopes that need clear planning, safe installation conditions, and reliable integration with surrounding works."
        videoSrc="/assets/electrical-engineering-vid1.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Typical Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Planned for reliability and handover.
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
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Electrical Readiness
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Reliable electrical work is planned before cables are pulled.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Ramotila looks at installation conditions, routing, protection,
              access, and the other construction work that can affect electrical
              delivery.
            </p>
          </div>
          <div className="grid gap-3">
            {readinessChecks.map((check) => (
              <p key={check} className="border-l-4 border-amber-500 bg-stone-100 p-5 font-medium leading-7">
                {check}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Example Electrical Scopes
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
