import Link from "next/link";
import { CtaBand, PageHero, SectionIntro } from "@/components/page-shell";
import { serviceAreas } from "@/lib/site";

const decisionPoints = [
  ["Single-trade scope", "When the work is clearly mechanical, electrical, or civil, Ramotila can focus the team around that trade while still watching for site dependencies."],
  ["Combined scope", "When several trade areas overlap, the company helps coordinate the order of work so one activity does not block the next."],
  ["Maintenance support", "When work must happen around existing operations, the team can plan around access, shutdown windows, and practical handover needs."],
];

const supportTypes = [
  "New installation support",
  "Maintenance and repair assistance",
  "Site preparation for follow-on trades",
  "Construction upgrades and modifications",
  "Trade coordination on active work areas",
  "Practical scope review before work begins",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Services"
        title="Mechanical, electrical, and civil engineering services."
        description="Ramotila Construction supports projects with practical trade capability, careful sequencing, and construction work shaped around site realities."
        videoSrc="/assets/services-vid.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Service Areas"
            title="Three disciplines that often need to move together."
            description="The company helps visitors quickly understand what it does: engineering and construction support across mechanical works, electrical works, and civil works."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceAreas.map((service) => (
              <article key={service.title} className="border border-stone-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-7 text-stone-700">{service.intro}</p>
                <ul className="mt-6 space-y-3 text-sm font-medium text-stone-700">
                  {service.examples.map((example) => (
                    <li key={example} className="border-l-4 border-amber-500 pl-3">
                      {example}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="mt-7 inline-flex text-sm font-semibold text-amber-800">
                  View details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Choosing The Right Support"
            title="The best service route depends on what is blocking progress."
            description="Some projects need one focused trade. Others need a team that can understand the connection between ground conditions, installation access, electrical readiness, and mechanical requirements."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {decisionPoints.map(([title, text]) => (
              <article key={title} className="border border-stone-200 bg-stone-100 p-7">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-stone-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Work Types
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Services can be shaped around planned work or responsive site needs.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supportTypes.map((item) => (
              <p key={item} className="border-l-4 border-amber-400 bg-white/8 p-5 font-medium">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
