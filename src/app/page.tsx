import Link from "next/link";
import { CtaBand, SectionIntro } from "@/components/page-shell";
import { serviceAreas, workPrinciples } from "@/lib/site";

const projectFits = [
  {
    title: "Facilities that need dependable uptime",
    text: "Maintenance, repair, and upgrade work where access, timing, and trade coordination must be handled carefully.",
  },
  {
    title: "Contractors needing trade support",
    text: "Mechanical, electrical, or civil support that can plug into an existing construction programme without creating confusion on site.",
  },
  {
    title: "Owners planning practical improvements",
    text: "Construction work that needs a grounded team to assess constraints, prepare the site, and complete the scope properly.",
  },
  {
    title: "Sites with overlapping work areas",
    text: "Projects where one discipline affects another and the sequence needs to be understood before work starts.",
  },
];

const deliverySteps = [
  ["01", "Scope Review", "Clarify the work area, access, constraints, and expected output before committing teams."],
  ["02", "Site Planning", "Check dependencies, materials, safety requirements, and sequencing so work can start with fewer unknowns."],
  ["03", "Execution", "Carry out the agreed scope with attention to coordination, workmanship, and communication."],
  ["04", "Handover", "Close the work in a way that is clear for operations, follow-on teams, or the next construction stage."],
];

const workSituations = [
  "A machine base, plinth, bracket, or support needs construction-ready preparation.",
  "A site upgrade requires electrical work to be coordinated around civil or mechanical activity.",
  "A maintenance shutdown needs practical labour, planning, and trade awareness.",
  "Drainage, concrete, access, or structural support work is blocking the next stage.",
  "A project needs one team that understands how mechanical, electrical, and civil tasks affect each other.",
  "A contractor needs reliable support without adding unnecessary management overhead.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <section className="relative min-h-[calc(100svh-89px)] overflow-hidden bg-stone-950 text-white">
        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          src="/assets/engineering-vid1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ramotila-hero.jpg"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-stone-950/82 to-stone-950/30" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-89px)] max-w-7xl items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Mechanical. Electrical. Civil.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-7xl">
              Engineering and construction work delivered with site discipline.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              Ramotila Construction brings 20 years of service to mechanical,
              electrical, and civil engineering scopes. The company supports
              projects where planning, trade coordination, and practical
              execution need to work together.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center bg-amber-400 px-6 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
              >
                Contact The Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["20 Years", "Consistent construction and engineering service."],
            ["3 Disciplines", "Mechanical, electrical, and civil capability."],
            ["Site Focused", "Planning shaped around real working conditions."],
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-amber-500 pl-5">
              <p className="text-2xl font-semibold">{title}</p>
              <p className="mt-2 leading-7 text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What Ramotila Does"
            title="Construction support across connected engineering scopes."
            description="Most construction problems do not sit inside one neat box. Ramotila's work covers the trade areas that often overlap on real projects, helping teams move from site preparation through installation and handover."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceAreas.map((service, index) => (
              <article
                key={service.title}
                className="border border-stone-200 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-semibold text-amber-700">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-normal">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-700">{service.intro}</p>
                <Link
                  href={service.href}
                  className="mt-7 inline-flex text-sm font-semibold text-amber-800 transition hover:text-stone-950"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              How Work Gets Done
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Good site work starts before the first team arrives.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Ramotila approaches each scope by understanding constraints first:
              access, sequencing, safety, dependencies, materials, and handover.
              That keeps work easier to coordinate and easier to trust.
            </p>
          </div>

          <div className="grid gap-4">
            {workPrinciples.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-5 border-l-4 border-amber-500 bg-stone-100 p-5"
              >
                <span className="mt-1 text-sm font-semibold text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-medium leading-7 text-stone-800">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Who The Work Is For"
            title="Useful where construction needs more than isolated labour."
            description="Ramotila is a good fit when the work needs practical judgement before execution: what must happen first, what will block progress, and how each trade affects the next."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projectFits.map((item) => (
              <article key={item.title} className="border border-stone-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              From Enquiry To Handover
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              A simple process that keeps the work understandable.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {deliverySteps.map(([number, title, text]) => (
              <article key={title} className="border border-white/12 bg-white/8 p-6">
                <p className="text-sm font-semibold text-amber-300">{number}</p>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Common Work Situations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              When to bring Ramotila into the conversation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              The best time to involve the team is before a small constraint
              becomes a site delay. These are the kinds of situations where a
              practical construction partner can help move work forward.
            </p>
          </div>

          <div className="grid gap-3">
            {workSituations.map((situation) => (
              <div key={situation} className="border-l-4 border-amber-500 bg-stone-100 p-5">
                <p className="font-medium leading-7 text-stone-800">{situation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
