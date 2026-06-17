import { CtaBand, PageHero, SectionIntro } from "@/components/page-shell";

const scopes = [
  "Industrial site support",
  "Commercial construction support",
  "Maintenance-period works",
  "Installation and upgrade projects",
  "Civil preparation for mechanical and electrical work",
  "Multi-trade construction coordination",
];

const projectStages = [
  ["Early Review", "Useful when a client needs practical input before finalising the work method, sequencing, or trade responsibilities."],
  ["Active Delivery", "Useful when the work is already moving and a reliable team is needed to support installation, construction, or maintenance tasks."],
  ["Follow-On Works", "Useful after one trade has completed and the next stage needs preparation, modification, repair, or handover support."],
];

const capabilitySignals = [
  "The work has more than one trade interface.",
  "A site condition is stopping the next construction activity.",
  "Existing operations need to continue around the work.",
  "The scope needs practical review before teams are committed.",
  "Maintenance, upgrades, or installation work must happen in a controlled window.",
  "The final handover needs to be clear for operators or follow-on contractors.",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Projects And Capability"
        title="Project work shaped around scope, sequence, and trade coordination."
        description="Ramotila Construction is suited to projects where mechanical, electrical, and civil work need to be understood together rather than treated as disconnected tasks."
        videoSrc="/assets/projects.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Where The Team Fits"
            title="A practical construction partner for planned works and responsive support."
            description="This page is intentionally framed around capability rather than invented case studies. When project references are available, this section can become a detailed portfolio."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scopes.map((scope) => (
              <p key={scope} className="border border-stone-200 bg-white p-6 text-lg font-semibold shadow-sm">
                {scope}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Project Stages"
            title="Ramotila can fit into different points of the construction programme."
            description="Some clients need help before work starts. Others need trade support during active delivery, or construction assistance that prepares the next stage."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projectStages.map(([title, text]) => (
              <article key={title} className="border border-stone-200 bg-stone-100 p-7">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-stone-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              When Capability Matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              The right project is usually defined by coordination pressure.
            </h2>
          </div>
          <div className="grid gap-3">
            {capabilitySignals.map((signal) => (
              <p key={signal} className="border-l-4 border-amber-400 bg-white/8 p-5 font-medium">
                {signal}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
