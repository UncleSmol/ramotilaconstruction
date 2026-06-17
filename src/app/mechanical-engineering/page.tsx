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
      <section
        className="relative overflow-hidden bg-stone-950 bg-cover bg-center bg-fixed px-6 py-24 text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-stone-950/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/72 to-stone-950/42" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Mechanical Planning
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Mechanical work depends on what the site will allow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-200">
              Good mechanical delivery starts with understanding access,
              supports, tolerances, safety constraints, and the trades that must
              work before or after the installation.
            </p>
          </div>
          <div className="grid gap-3">
            {planningNotes.map((note) => (
              <p key={note} className="border-l-4 border-amber-400 bg-stone-950/82 p-5 font-medium leading-7 text-stone-100 backdrop-blur-sm">
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
