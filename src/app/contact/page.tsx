import { CtaBand, PageHero } from "@/components/page-shell";
import { addressLines, officeMapEmbedUrl, officeMapUrl, serviceAreas } from "@/lib/site";

const enquiryChecklist = [
  "Which service area is involved: mechanical, electrical, civil, or a combination.",
  "Where the work sits in the project: planning, active delivery, maintenance, or handover.",
  "Any access limits, shutdown windows, safety requirements, or operational constraints.",
  "Photos, drawings, measurements, or notes that help explain the current site condition.",
  "The preferred timing and whether the work is urgent, planned, or still being scoped.",
];

const responseTopics = [
  "Scope clarification",
  "Site constraints",
  "Trade coordination",
  "Timing and availability",
  "Required supporting information",
  "Next practical steps",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <PageHero
        eyebrow="Contact"
        title="Speak to Ramotila Construction about your next scope of work."
        description="Use this page for project enquiries, site requirements, and conversations about mechanical, electrical, or civil engineering support."
        videoSrc="/assets/contact.mp4"
      />
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            <address className="border-l-4 border-amber-500 bg-white p-8 text-2xl font-semibold not-italic leading-10 shadow-sm">
              {addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <div className="overflow-hidden border border-stone-200 bg-white shadow-sm">
              <iframe
                title="Ramotila Construction office map"
                src={officeMapEmbedUrl}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={officeMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center bg-amber-400 px-6 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              Open In Google Maps
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Enquiry Guide
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Share the work area, site constraints, and timing.
            </h2>
            <div className="mt-8 grid gap-4">
              {serviceAreas.map((service) => (
                <p key={service.title} className="border-l-4 border-stone-300 bg-white p-5 font-medium text-stone-700">
                  {service.title}: {service.intro}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              What To Include
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              A clear enquiry helps the team understand the work faster.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              You do not need a perfect brief before making contact. A few
              practical details are enough to start the conversation and decide
              what should happen next.
            </p>
          </div>
          <div className="grid gap-3">
            {enquiryChecklist.map((item) => (
              <p key={item} className="border-l-4 border-amber-500 bg-stone-100 p-5 font-medium leading-7">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Conversation Topics
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
            The first conversation should make the next step obvious.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {responseTopics.map((topic) => (
              <p key={topic} className="border border-white/12 bg-white/8 p-5 font-semibold">
                {topic}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
