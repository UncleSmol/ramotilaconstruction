import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export function PageHero({
  eyebrow,
  title,
  description,
  videoSrc = "/assets/engineering-vid2.mp4",
}: {
  eyebrow: string;
  title: string;
  description: string;
  videoSrc?: string;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950 text-white">
      {videoSrc ? (
        <>
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/ramotila-hero.jpg"
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-stone-950/82 to-stone-950/28" />
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />
        </>
      ) : null}
      <SiteHeader />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-3xl text-lg leading-8 text-stone-700">{description}</p>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-stone-950 px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Start A Conversation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">
            Need mechanical, electrical, or civil work scoped properly?
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center bg-amber-400 px-6 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
        >
          Contact Ramotila
        </Link>
      </div>
    </section>
  );
}
