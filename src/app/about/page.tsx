import { CtaBand, PageHero, SectionIntro } from "@/components/page-shell";

const profileCards = [
  ["Experience", "20 years of service across construction and engineering work."],
  ["Coordination", "Mechanical, electrical, and civil scopes handled with awareness of each other."],
  ["Execution", "Practical delivery focused on safe access, clear scope, and reliable handover."],
];

const foundations = [
  {
    title: "Practical before theoretical",
    text: "The company approaches work by understanding the actual site conditions first: access, materials, programme pressure, and what other teams need next.",
  },
  {
    title: "Built around connected trades",
    text: "Mechanical, electrical, and civil scopes often meet in the same work area. Ramotila is positioned to think across those overlaps instead of treating each task in isolation.",
  },
  {
    title: "Clear enough to hand over",
    text: "Good work should be easy for the client, operator, or next contractor to understand. Scope clarity and completion discipline matter as much as the installation itself.",
  },
];

const projectLifecycle = [
  ["Assess", "Review the work area, constraints, access, and expected outcome."],
  ["Prepare", "Plan materials, labour, sequencing, and dependencies before work starts."],
  ["Deliver", "Execute the agreed scope with communication around progress and changes."],
  ["Close", "Finish with a clear handover that supports the next stage of work."],
];

const workingStandards = [
  "Site conditions are checked before assumptions are made.",
  "Scope and responsibilities are kept visible to reduce confusion.",
  "Trade interfaces are considered early, especially where one activity can block another.",
  "Communication stays direct, practical, and focused on moving the work forward.",
  "The final result must be useful, not just complete on paper.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="About Ramotila"
        title="A construction company shaped by practical engineering work."
        description="Ramotila Construction has been in service for 20 years, supporting projects that need dependable mechanical, electrical, and civil engineering capability."
        videoSrc="/assets/about.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Company Profile"
            title="Built around real site requirements, not generic promises."
            description="The company works across connected construction disciplines where planning, access, trade coordination, and handover quality matter. Ramotila's value is in understanding how work moves on site and helping each scope land cleanly."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {profileCards.map(([title, text]) => (
              <article key={title} className="border border-stone-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-stone-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Company Background
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Two decades of construction service creates a different kind of judgement.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              Ramotila Construction has grown around work that has to function
              on real sites. That means the company is not only concerned with
              the visible end result, but also with how the work is prepared,
              sequenced, accessed, completed, and handed over.
            </p>
            <p>
              The company operates across mechanical, electrical, and civil
              engineering services. This gives Ramotila a practical view of how
              trades affect one another during construction, maintenance,
              upgrades, and site preparation.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-stone-950 bg-cover bg-center bg-fixed px-6 py-24 text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "url('https://pixabay.com/images/download/webandi-skyscraper-4327213_1920.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-stone-950/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/72 to-stone-950/42" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                What Shapes The Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
                The work is measured by how well it performs after the team
                leaves.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-200">
              Ramotila&apos;s role is to help clients move from a requirement to
              a completed scope without losing control of the practical details
              that affect cost, timing, and quality.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-14">
            {foundations.map((item) => (
              <article
                key={item.title}
                className="perspective-card perspective-card-dark border border-white/14 bg-stone-950/82 p-7 text-white backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-200">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Project Lifecycle
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Ramotila can support a scope from early review through handover.
            </h2>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-4 lg:gap-14">
            {projectLifecycle.map(([title, text], index) => (
              <article
                key={title}
                className="perspective-card perspective-card-dark border border-white/12 bg-white/8 p-6"
              >
                <p className="text-sm font-semibold text-amber-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Working Standards
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Simple standards that make construction easier to manage.
            </h2>
          </div>
          <div className="grid gap-3">
            {workingStandards.map((standard) => (
              <p key={standard} className="border-l-4 border-amber-500 bg-stone-100 p-5 font-medium leading-7 text-stone-800">
                {standard}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
