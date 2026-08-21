import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Search,
  CalendarCheck,
  Timer,
  FileHeart,
  Apple,
  Play,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  Smile,
  Activity,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/hero-hospital.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import cardAppointments from "@/assets/card-appointments.jpg";
import cardQueue from "@/assets/card-queue.jpg";
import cardRecords from "@/assets/card-records.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareSeva — Find Hospitals & Doctors Near You" },
      {
        name: "description",
        content:
          "Discover the best hospitals and doctors around you. Book appointments, track live queues and keep your digital health records with CareSeva.",
      },
      { property: "og:title", content: "CareSeva — Find Hospitals & Doctors Near You" },
      {
        property: "og:description",
        content:
          "Book appointments, track live queues and carry your health records in your pocket with CareSeva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const offerings = [
  {
    title: "Book Appointments",
    copy: "Find hospitals and book instantly",
    image: cardAppointments,
    icon: CalendarCheck,
  },
  {
    title: "Live Queue Tracking",
    copy: "Never wait in line blindly",
    image: cardQueue,
    icon: Timer,
  },
  {
    title: "Digital Records",
    copy: "Your health history in your pocket",
    image: cardRecords,
    icon: FileHeart,
  },
];

const specialties = [
  { name: "General Physician", icon: Stethoscope },
  { name: "Cardiology", icon: Heart },
  { name: "Neurology", icon: Brain },
  { name: "Pediatrics", icon: Baby },
  { name: "Orthopedics", icon: Bone },
  { name: "Ophthalmology", icon: Eye },
  { name: "Dentistry", icon: Smile },
  { name: "Diagnostics", icon: Activity },
];

const stats = [
  { value: "2M+", label: "Patients served" },
  { value: "6,400+", label: "Verified hospitals" },
  { value: "40+", label: "Cities live" },
  { value: "18 min", label: "Avg. wait saved" },
];

const steps = [
  {
    step: "01",
    title: "Search near you",
    copy: "Pick your locality and search hospitals, clinics or a specialty.",
  },
  {
    step: "02",
    title: "Compare & book",
    copy: "See real ratings, fees and live queue length before you confirm.",
  },
  {
    step: "03",
    title: "Walk in on time",
    copy: "Track your token live and reach exactly when your turn is near.",
  },
];

const hospitals = [
  {
    name: "City Care Multispeciality",
    area: "Saket, Delhi",
    rating: "4.8",
    wait: "12 min wait",
    image: cardAppointments,
    tags: ["Cardiology", "24x7 ER"],
  },
  {
    name: "Sunrise Family Clinic",
    area: "Andheri West, Mumbai",
    rating: "4.6",
    wait: "5 min wait",
    image: cardQueue,
    tags: ["General", "Pediatrics"],
  },
  {
    name: "Lotus Health Institute",
    area: "Indiranagar, Bengaluru",
    rating: "4.9",
    wait: "20 min wait",
    image: cardRecords,
    tags: ["Ortho", "Diagnostics"],
  },
];

const localities = [
  { city: "Delhi NCR", count: "1,240 hospitals" },
  { city: "Mumbai", count: "980 hospitals" },
  { city: "Bengaluru", count: "870 hospitals" },
  { city: "Hyderabad", count: "640 hospitals" },
  { city: "Chennai", count: "590 hospitals" },
  { city: "Pune", count: "510 hospitals" },
  { city: "Kolkata", count: "480 hospitals" },
  { city: "Ahmedabad", count: "410 hospitals" },
  { city: "Jaipur", count: "330 hospitals" },
  { city: "Lucknow", count: "290 hospitals" },
  { city: "Kochi", count: "220 hospitals" },
  { city: "Indore", count: "180 hospitals" },
];

const testimonials = [
  {
    quote:
      "I booked my mother's cardiology appointment in under a minute and we skipped the whole waiting room queue.",
    name: "Ananya R.",
    city: "Delhi",
  },
  {
    quote:
      "The live token tracker is genuinely magic. We left home only when our number was 3 away.",
    name: "Vikram S.",
    city: "Pune",
  },
  {
    quote: "All my reports from three different hospitals now sit in one place. No more paper files.",
    name: "Meera K.",
    city: "Kochi",
  },
];

const footerLinks = [
  {
    title: "CareSeva",
    links: ["About us", "Careers", "Newsroom", "Contact"],
  },
  {
    title: "For patients",
    links: ["Book appointment", "Live queues", "Health records", "Help centre"],
  },
  {
    title: "For hospitals",
    links: ["Add your hospital", "Partner dashboard", "Queue hardware", "Pricing"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of use", "Data & security", "Grievance officer"],
  },
];

function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Hospital entrance lit up at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <span className="animate-fade-in font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-on-dark">
            Care<span className="text-primary">Seva</span>
          </span>
          <nav className="animate-fade-in flex items-center gap-3 sm:gap-6">
            <a
              href="#partners"
              className="hidden text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark sm:block"
            >
              Add Hospital
            </a>
            <a
              href="#get-app"
              className="rounded-full border border-on-dark/40 px-5 py-2 text-sm font-medium text-on-dark backdrop-blur-sm transition-colors hover:bg-on-dark/10"
            >
              Login / Signup
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-14 pb-24 text-center sm:pt-20">
          <span
            className="animate-fade-in font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-on-dark sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Care<span className="text-primary">Seva</span>
          </span>
          <h1
            className="animate-fade-in mt-8 text-4xl leading-[1.05] font-extrabold text-balance text-on-dark sm:text-6xl"
            style={{ animationDelay: "180ms" }}
          >
            Discover the best hospitals and doctors around you.
          </h1>

          <div
            className="animate-scale-in mt-10 w-full rounded-2xl bg-card p-2 shadow-float sm:flex sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <div className="flex items-center gap-3 border-border px-4 py-3 sm:w-[38%] sm:border-r">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden />
              <input
                aria-label="Location"
                placeholder="Location"
                defaultValue="Delhi NCR"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-1 items-center gap-3 px-4 py-3">
              <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden />
              <input
                aria-label="Search for hospitals, clinics, or specialties"
                placeholder="Search for hospitals, clinics, or specialties"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="gradient-cta animate-pulse-ring mt-2 w-full rounded-xl px-8 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-0 sm:w-auto">
              Search
            </button>
          </div>

          <div
            className="animate-fade-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-on-dark-muted"
            style={{ animationDelay: "480ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden /> Verified hospitals only
            </span>
            <span className="inline-flex items-center gap-2">
              <Timer className="size-4 text-primary" aria-hidden /> Live queue updates
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="size-4 text-primary" aria-hidden /> 2M+ patients trust us
            </span>
          </div>
        </div>
      </section>

      {/* SPECIALTY MARQUEE */}
      <section className="border-b border-border bg-card py-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-4">
            {[...specialties, ...specialties].map(({ name, icon: Icon }, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground"
              >
                <Icon className="size-4 text-primary" aria-hidden />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything care needs, in one app</h2>
          <p className="mt-3 text-muted-foreground">
            From finding the right hospital to walking out with your reports — CareSeva covers the
            whole visit.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ title, copy, image, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start gap-4 p-6">
                  <span className="mt-1 rounded-xl bg-accent p-2 text-accent-foreground transition-transform duration-300 group-hover:-rotate-6">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 100} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-primary sm:text-5xl">
                {value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Three steps to a shorter wait</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map(({ step, title, copy }, i) => (
            <Reveal key={step} delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary">
                <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-accent">
                  {step}
                </span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOP HOSPITALS */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Top rated near you</h2>
              <p className="mt-3 text-muted-foreground">Hand-picked hospitals in Delhi NCR</p>
            </div>
            <a
              href="#get-app"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              View all <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitals.map(({ name, area, rating, wait, image, tags }, i) => (
              <Reveal key={name} delay={i * 120}>
                <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-card-foreground backdrop-blur">
                      {wait}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold">{name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{area}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                        <Star className="size-3 fill-current" aria-hidden />
                        {rating}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Popular localities</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Explore verified hospitals, clinics and specialists in the places CareSeva serves.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {localities.map(({ city, count }, i) => (
            <Reveal key={city} delay={i * 50}>
              <a
                href="#get-app"
                className="block rounded-xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-1 hover:border-primary"
              >
                <span className="block font-medium text-surface-foreground">{city}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{count}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Loved by patients</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map(({ quote, name, city }, i) => (
              <Reveal key={name} delay={i * 120}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8 shadow-card">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">
                    “{quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-bold">
                    {name}
                    <span className="ml-2 font-normal text-muted-foreground">{city}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS / ADD HOSPITAL */}
      <section id="partners" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-border bg-card p-10 shadow-card">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold sm:text-3xl">Run a hospital or clinic?</h2>
              <p className="mt-3 text-muted-foreground">
                List on CareSeva, manage your live queue and fill empty slots — free for the first
                three months.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#partners"
                className="gradient-cta rounded-xl px-7 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add your hospital
              </a>
              <a
                href="#partners"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3 text-sm font-bold transition-colors hover:bg-muted"
              >
                <Phone className="size-4" aria-hidden /> Talk to sales
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GET THE APP */}
      <section id="get-app" className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="gradient-cta grid items-center gap-10 overflow-hidden rounded-3xl px-8 py-12 sm:px-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                Get the CareSeva app
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/85">
                Book appointments, watch your queue move in real time and carry every report with
                you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#get-app"
                  className="hover-scale inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-card-foreground"
                >
                  <Apple className="size-5" aria-hidden /> App Store
                </a>
                <a
                  href="#get-app"
                  className="hover-scale inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-card-foreground"
                >
                  <Play className="size-5" aria-hidden /> Google Play
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={appMockup}
                alt="CareSeva mobile app screens"
                width={1024}
                height={1024}
                loading="lazy"
                className="animate-float-soft mx-auto w-full max-w-sm rounded-2xl shadow-float"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
                Care<span className="text-primary">Seva</span>
              </span>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Care, closer to you. Find hospitals, skip the queue and keep your records safe.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#get-app"
                  className="hover-scale inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-bold"
                >
                  <Apple className="size-4" aria-hidden /> iOS
                </a>
                <a
                  href="#get-app"
                  className="hover-scale inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-bold"
                >
                  <Play className="size-4" aria-hidden /> Android
                </a>
              </div>
            </div>
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-sm font-bold">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#get-app"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} CareSeva Health Technologies Pvt. Ltd.</span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden /> Health data encrypted &
              ABDM-ready
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
