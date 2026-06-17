import Image from "next/image";
import Link from "next/link";
import ramotilaLogo from "@/app/assets/ramotila-construction-logo.png";
import {
  addressLines,
  navItems,
  officeMapEmbedUrl,
  officeMapUrl,
  serviceAreas,
} from "@/lib/site";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 px-6 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Ramotila Construction home"
          >
            <Image
              src={ramotilaLogo}
              alt="Ramotila Construction"
              className="h-20 w-auto"
              sizes="160px"
              placeholder="blur"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-stone-300">
            Mechanical, electrical, and civil engineering services delivered
            with practical site discipline and 20 years of construction
            experience.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Company
          </h2>
          <nav className="mt-5 grid gap-3 text-sm text-stone-300" aria-label="Footer navigation">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Services
          </h2>
          <nav className="mt-5 grid gap-3 text-sm text-stone-300" aria-label="Footer services">
            {serviceAreas.map((service) => (
              <Link key={service.href} href={service.href} className="transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Office
          </h2>
          <address className="mt-5 text-sm not-italic leading-7 text-stone-300">
            {addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <div className="mt-5 overflow-hidden border border-white/10">
            <iframe
              title="Ramotila Construction office map"
              src={officeMapEmbedUrl}
              className="h-40 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={officeMapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm font-semibold text-amber-300"
          >
            Open In Maps
          </a>
          <Link href="/contact" className="mt-3 block text-sm font-semibold text-stone-300">
            Contact Ramotila
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Ramotila Construction. All rights reserved.</p>
        <p>Mechanical. Electrical. Civil.</p>
      </div>
    </footer>
  );
}
