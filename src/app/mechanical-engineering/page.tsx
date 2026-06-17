import { CtaBand, PageHero } from "@/components/page-shell";

const items = [
  "Mechanical maintenance and site support",
  "Equipment installation and alignment support",
  "Steel support, platforms, brackets, and access-related works",
  "Pipework support, mechanical fixing, and installation coordination",
  "Shutdown and maintenance-period construction assistance",
];

const planningNotes = [
  "Confirm equipment position, access path, and working clearance before teams arrive.",
  "Coordinate mechanical works with civil bases, steel supports, electrical feeds, and surrounding operations.",
  "Plan installation or maintenance around downtime, lifting requirements, and safe working conditions.",
  "Leave the completed work ready for use, inspection, or the next trade stage.",
];

const examples = [
  "Pump, motor, fan, and equipment support work",
  "Steel support for machinery or access",
  "Pipework brackets and installation support",
  "Mechanical maintenance during planned shutdowns",
];

export default function MechanicalEngineeringPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Mechanical Engineering"
        title="Mechanical work planned around access, downtime, and site sequence."
        description="Ramotila Construction supports mechanical scopes where practical installation knowledge and coordination with other trades are essential."
        videoSrc="/assets/mechanical-engineering-vid1.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Typical Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Built for active environments.
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
              Mechanical Planning
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Mechanical work depends on what the site will allow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Good mechanical delivery starts with understanding access,
              supports, tolerances, safety constraints, and the trades that must
              work before or after the installation.
            </p>
          </div>
          <div className="grid gap-3">
            {planningNotes.map((note) => (
              <p key={note} className="border-l-4 border-amber-500 bg-stone-100 p-5 font-medium leading-7">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Example Mechanical Scopes
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
