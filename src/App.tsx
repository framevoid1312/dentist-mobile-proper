import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

const nav = ["Ιατρείο", "Γιατρός", "Υπηρεσίες", "Ραντεβού"];

const services = [
  "Προληπτικός έλεγχος",
  "Καθαρισμός δοντιών",
  "Αισθητική οδοντιατρική",
  "Λεύκανση",
  "Σφραγίσματα",
  "Παιδοδοντιατρική φροντίδα",
  "Επείγοντα περιστατικά",
  "Σχέδιο θεραπείας",
];

const reviews = [
  "Μου μίλησε απλά, χωρίς υπερβολές. Κατάλαβα τι χρειάζομαι και τι μπορεί να περιμένει.",
  "Ο χώρος είναι ήρεμος και καθαρός. Για πρώτη φορά πήγα σε οδοντίατρο χωρίς να αγχωθώ.",
  "Στην εξέταση ένιωσα ότι με άκουσαν πραγματικά. Πολύ προσεκτική δουλειά και συνέπεια.",
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(() => !localStorage.getItem('cookie_consent'));
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <main className="min-h-screen bg-[#f3fbff] font-gilroy text-[#2d2d2d]">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#f3fbff]/90 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-3 items-center gap-5">
          <a href="#top" className="hidden text-xs font-semibold uppercase tracking-[0.22em] lg:block col-start-1 justify-self-start">
            Γυθείου 22, Χαλάνδρι
          </a>
          <a href="#top" className="flex col-start-2 justify-self-center" aria-label="Dr. Chrysa">
            <img src="/tooth-heart.webp" alt="Dr. Chrysa tooth heart logo" className="h-[35px] w-[33px] rounded-full object-cover" />
          </a>
          <div className="hidden items-center justify-end gap-5 text-sm font-medium lg:flex col-start-3 justify-self-end">
            <a href="tel:+302107117021" className="flex items-center gap-2">
              <Phone size={16} /> 210 711 7021
            </a>
            <a href="#Ραντεβού" className="rounded-full bg-[#2d2d2d] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white">
              Κλείσε ραντεβού
            </a>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-full bg-white lg:hidden col-start-3 justify-self-end" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu />
          </button>
        </div>
        <nav className="mx-auto mt-2 hidden w-fit items-center gap-8 rounded-full bg-white/75 px-8 py-3 text-sm shadow-sm lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} className="transition hover:text-[#7e6f67]">
                {item}
              </a>
            ))}
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#f3fbff] p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.22em]">Dr. Chrysa</span>
            <button className="grid h-11 w-11 place-items-center rounded-full bg-white" onClick={() => setOpen(false)} aria-label="Close">
              <X />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-7 text-5xl font-light">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
          <a
            href="#Ραντεβού"
            onClick={() => setOpen(false)}
            className="mb-6 flex items-center justify-center gap-3 rounded-full bg-[#2d2d2d] px-7 py-4 text-base font-semibold uppercase tracking-[0.18em] text-white"
          >
            Κλείσε ραντεβού <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      <section id="top" className="px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="min-h-[calc(100vh-8rem)]">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.26em] text-[#7e6f67]">
              Γυθείου 22, Χαλάνδρι
            </p>
            <h1 className="mx-auto max-w-[1380px] text-center text-[12vw] font-extralight uppercase leading-[0.82] tracking-[-0.08em] sm:text-[11vw] lg:text-[8.5rem]">
              Χαμόγελα
              <span className="mx-5 inline-block text-[0.32em] font-light normal-case italic tracking-[-0.04em] text-[#7e6f67]">
                που νιώθουν
              </span>
              <br />
              <span className="mr-4 text-[0.36em] font-light normal-case italic tracking-[-0.04em] text-[#7e6f67]">
                φροντίδα
              </span>
              από την πρώτη στιγμή
            </h1>
            <div className="mx-auto mt-7 flex max-w-4xl flex-col items-center gap-5 text-center">
              <p className="text-xl leading-8 text-[#5c5c5c]">
                Στο Χαλάνδρι, η οδοντιατρική γίνεται πιο απλή: σας ακούμε,
                σας εξηγούμε καθαρά και φροντίζουμε το χαμόγελό σας με ηρεμία.
              </p>
              <a href="#Ραντεβού" className="inline-flex items-center gap-3 rounded-full bg-[#2d2d2d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Κλείσε ραντεβού <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[2.4rem]">
              <img src="/clinic-hero.webp" alt="Σύγχρονη αίθουσα οδοντιατρείου" className="h-[38vh] min-h-[300px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 grid gap-7 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <h2 className="text-[12vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[7vw] lg:text-[5.8rem]">
              Το ιατρείο
              <span className="mx-4 text-[0.42em] normal-case italic tracking-[-0.04em] text-[#7e6f67]">
                μέσα από
              </span>
              εικόνες
            </h2>
            <p className="text-xl leading-9 text-[#5c5c5c]">
              Πραγματικές εικόνες χώρων, εξοπλισμού και θεραπευτικής διαδικασίας,
              για να ξέρετε πού έρχεστε πριν κλείσετε ραντεβού.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <img loading="lazy" src="/clinic-chair-angle.webp" alt="Ζεστός χώρος αναμονής" className="h-[200px] md:h-[400px] lg:h-[540px] w-full rounded-[2.2rem] object-cover" />
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <img loading="lazy" src="/clinic-waiting-blue.webp" alt="Χώρος αναμονής" className="h-[120px] md:h-[220px] lg:h-[260px] w-full rounded-[1.2rem] sm:rounded-[1.8rem] object-cover" />
              <img loading="lazy" src="/clinic-hall.webp" alt="Υποδοχή και διάδρομος" className="h-[120px] md:h-[220px] lg:h-[260px] w-full rounded-[1.2rem] sm:rounded-[1.8rem] object-cover" />
              <img loading="lazy" src="/clinic-treatment.webp" alt="Οδοντιατρική θεραπεία" className="h-[120px] md:h-[220px] lg:h-[260px] w-full rounded-[1.2rem] sm:rounded-[1.8rem] object-cover" />
              <img loading="lazy" src="/clinic-consult.webp" alt="Συζήτηση με ασθενή" className="h-[120px] md:h-[220px] lg:h-[260px] w-full rounded-[1.2rem] sm:rounded-[1.8rem] object-cover" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 sm:mt-5 sm:gap-5">
            <img loading="lazy" src="/clinic-xray.webp" alt="Ψηφιακή ακτινογραφία" className="h-24 sm:h-48 md:h-60 lg:h-72 w-full rounded-[1rem] sm:rounded-[1.8rem] object-cover" />
            <img loading="lazy" src="/clinic-lounge.webp" alt="Άνετος χώρος αναμονής" className="h-24 sm:h-48 md:h-60 lg:h-72 w-full rounded-[1rem] sm:rounded-[1.8rem] object-cover" />
            <img loading="lazy" src="/clinic-sterilization.webp" alt="Αποστείρωση εργαλείων" className="h-24 sm:h-48 md:h-60 lg:h-72 w-full rounded-[1rem] sm:rounded-[1.8rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#2d2d2d] px-5 py-24 text-[#f3fbff] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
            <h2 className="max-w-6xl text-[13vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[8vw] lg:text-[6.5rem]">
            Πρώτα νιώθεις
            <span className="mx-4 text-[0.42em] normal-case italic tracking-[-0.04em] text-[#8cc7de]">και μετά</span>
            χαμογελάς
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Σας ακούμε", "Ξεκινάμε από την απορία, την ενόχληση ή τον φόβο που φέρνετε μαζί σας."],
              ["Μιλάμε καθαρά", "Χωρίς υπερβολές και χωρίς πίεση. Μόνο όσα χρειάζεται να ξέρετε για να αποφασίσετε."],
              ["Προχωράμε ήρεμα", "Με προσοχή στη λεπτομέρεια, σταθερό ρυθμό και σεβασμό στο πώς αισθάνεστε."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[2rem] bg-white/8 p-8">
                <Check className="mb-14 text-[#8cc7de]" />
                <h3 className="mb-4 text-3xl font-light">{title}</h3>
                <p className="text-lg leading-8 text-[#d8eaf1]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="Ιατρείο" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h2 className="text-[13vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[8vw] lg:text-[6rem]">
              Ένας χώρος που σε βοηθά να χαλαρώσεις
            </h2>
            <p className="text-xl leading-9 text-[#5c5c5c]">
              Φωτεινή αναμονή, καθαρές αίθουσες και μικρές λεπτομέρειες που κάνουν
              την επίσκεψη πιο ήρεμη από την πρώτη στιγμή.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <img loading="lazy" src="/clinic-reception.webp" alt="Υποδοχή ιατρείου" className="h-[220px] md:h-[420px] lg:h-[560px] w-full rounded-[2.2rem] object-cover" />
            <div className="grid gap-5">
              <img loading="lazy" src="/clinic-equipment.webp" alt="Σύγχρονος εξοπλισμός" className="h-[140px] md:h-[220px] lg:h-[270px] w-full rounded-[2.2rem] object-cover" />
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <img loading="lazy" src="/clinic-treatment-new.webp" alt="Θεραπευτική διαδικασία" className="h-[120px] md:h-[220px] lg:h-[270px] w-full rounded-[2.2rem] object-cover" />
                <img loading="lazy" src="/patient-closeup.webp" alt="Ασθενής στην καρέκλα" className="h-[120px] md:h-[220px] lg:h-[270px] w-full rounded-[2.2rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Γιατρός" className="bg-[#fbf4ed] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <img loading="lazy" src="/chrysa-doctor.webp" alt="Χρύσα Χατζημεών" className="h-[260px] md:h-[540px] lg:h-[720px] w-full rounded-[2.4rem] object-cover object-[50%_20%]" />
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#7e6f67]">Χρύσα Χατζημεών</p>
            <h2 className="text-[12vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[7vw] lg:text-[5.8rem]">
              Η φροντίδα ξεκινά πριν καθίσετε στην καρέκλα
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5c5c5c]">
              Κάθε θεραπεία ξεκινά με συζήτηση. Τι σας ενοχλεί, τι θέλετε να αλλάξει,
              τι χρειάζεται άμεσα και τι μπορεί να γίνει αργότερα. Έτσι η φροντίδα
              γίνεται προσωπική, καθαρή και ανθρώπινη.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <img loading="lazy" src="/dental-tools.webp" alt="Οδοντιατρικά εργαλεία" className="h-40 md:h-48 lg:h-60 rounded-[1.6rem] object-cover" />
              <img loading="lazy" src="/dentist-xray-screen.webp" alt="Εξέταση ακτινογραφίας" className="h-40 md:h-48 lg:h-60 rounded-[1.6rem] object-cover" />
              <div className="rounded-[1.6rem] bg-[#d7edf5] p-7">
                <Star className="mb-16 fill-[#2d2d2d]" />
                <p className="text-4xl font-light">10.0</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#5c5c5c]">17 αξιολογήσεις</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Υπηρεσίες" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-[13vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[8vw] lg:text-[6rem]">
              Υπηρεσίες
            </h2>
            <a href="#Ραντεβού" className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2d2d2d] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em]">
              Ραντεβού <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="divide-y divide-[#d5e9f1] border-y border-[#d5e9f1]">
            {services.map((service, index) => (
              <a key={service} href={service === 'Λεύκανση' ? '#Λεύκανση' : '#Ραντεβού'} className="group grid gap-4 py-7 text-[#2d2d2d] transition hover:bg-white/60 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                <span className="text-xl text-[#7e6f67]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-2xl font-light leading-none sm:text-4xl lg:text-6xl">{service}</span>
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="Λεύκανση" className="bg-[#fbf4ed] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <h2 className="text-[12vw] font-extralight uppercase leading-[0.92] tracking-[-0.07em] sm:text-[8vw] lg:text-[6.5rem]">
              Αποτελέσματα
              <span className="mx-4 text-[0.42em] normal-case italic tracking-[-0.04em] text-[#7e6f67]">που μιλούν</span>
              <br />από μόνα τους
            </h2>
            <p className="text-xl leading-9 text-[#5c5c5c]">
              Δείτε τη διαφορά πριν και μετά από θεραπεία λεύκανσης στο ιατρείο μας. Σύρετε το βέλος για να συγκρίνετε το αποτέλεσμα.
            </p>
          </div>
          <div
            className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.4rem] select-none cursor-col-resize"
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderPos(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
              }
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              setSliderPos(Math.min(100, Math.max(0, ((touch.clientX - rect.left) / rect.width) * 100)));
            }}
          >
            <img loading="lazy" src="/after-smile.webp" alt="Μετά τη λεύκανση" className="block w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img loading="lazy" src="/before-smile.webp" alt="Πριν τη λεύκανση" className="block h-[300px] sm:h-[400px] lg:h-[520px] object-cover" style={{ width: `${10000 / Math.max(sliderPos, 1)}%` }} />
            </div>
            <div
              className="absolute inset-y-0 z-10 flex items-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="h-full w-[3px] bg-white shadow-lg" />
              <div className="absolute top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white shadow-lg">
                <span className="text-sm font-bold text-[#2d2d2d]">↔</span>
              </div>
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-[#2d2d2d]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">ΠΡΙΝ</span>
            <span className="absolute bottom-4 right-4 rounded-full bg-[#2d2d2d]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">ΜΕΤΑ</span>
          </div>
        </div>
      </section>

      <section className="bg-[#2d2d2d] px-5 py-24 text-[#f3fbff] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[#8cc7de]"><Star className="fill-[#8cc7de]" /> 10.0 / 17 αξιολογήσεις</p>
            <h2 className="text-[12vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[7vw] lg:text-[5.5rem]">
              Λόγια ασθενών
            </h2>
          </div>
          <div className="grid gap-5">
            {reviews.map((review, index) => (
              <article key={review} className="rounded-[2rem] bg-white/8 p-8">
                <p className="mb-8 text-[#8cc7de]">( {String(index + 1).padStart(2, "0")} )</p>
                <p className="text-xl font-light leading-tight sm:text-2xl lg:text-3xl">{review}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="Ραντεβού" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-[2.5rem] bg-white p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <CalendarDays className="mb-8" size={44} />
            <h2 className="text-[12vw] font-extralight uppercase leading-[0.95] tracking-[-0.07em] sm:text-[7vw] lg:text-[5.5rem]">
              Κλείστε ραντεβού
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#5c5c5c]">
              Για προληπτικό έλεγχο, καθαρισμό ή αισθητική οδοντιατρική, οργανώνουμε
              την επίσκεψη με τρόπο απλό και ξεκάθαρο.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#f3fbff] p-6">
            {["Αύριο / από 11:00", "25 Ιουν / από 09:00", "26 Ιουν / από 09:00"].map((slot) => (
              <button key={slot} className="mb-3 flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-left text-lg">
                {slot} <ArrowUpRight size={17} />
              </button>
            ))}
            <p className="mt-5 flex items-center gap-2 text-[#5c5c5c]"><MapPin size={18} /> Γυθείου 22, Χαλάνδρι</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d2d2d] py-8 text-center text-xs uppercase tracking-widest text-white/40 border-t border-white/5">
        <div className="mx-auto max-w-[1500px] px-5 flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
          <p>© {new Date().getFullYear()} Dr. Chrysa Chatzimeon. All rights reserved.</p>
          <div className="flex gap-5">
            <button
              onClick={() => setShowCookies(true)}
              className="hover:text-[#8cc7de] transition underline decoration-dotted cursor-pointer"
            >
              Ρυθμίσεις Cookies
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-[#8cc7de] transition underline decoration-dotted cursor-pointer"
            >
              Όροι Χρήσης
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-[#8cc7de] transition underline decoration-dotted cursor-pointer"
            >
              Πολιτική Απορρήτου
            </button>
          </div>
        </div>
      </footer>

      {showCookies && (
        <div className="fixed bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 z-[100] mx-auto max-w-lg rounded-[1.5rem] sm:rounded-[2rem] bg-[#2d2d2d] p-4 sm:p-6 text-[#f3fbff] shadow-2xl md:bottom-8">
          <h3 className="mb-2 text-base sm:text-lg font-medium">Χρήση Cookies</h3>
          {localStorage.getItem('cookie_consent') && (
            <p className="mb-2 text-[10px] uppercase tracking-wider text-[#8cc7de]">
              Τρέχουσα επιλογή: {localStorage.getItem('cookie_consent') === 'accepted' ? 'Αποδεκτά' : 'Απορρίφθηκαν'}
            </p>
          )}
          <p className="mb-4 text-[11px] sm:text-xs leading-relaxed text-[#d8eaf1]">
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας στο ιατρείο μας. Συνεχίζοντας, συμφωνείτε με τη χρήση τους.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                localStorage.setItem("cookie_consent", "declined");
                setShowCookies(false);
              }}
              className="rounded-full border border-white/20 px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              Απόρριψη
            </button>
            <button
              onClick={() => {
                localStorage.setItem("cookie_consent", "accepted");
                setShowCookies(false);
              }}
              className="rounded-full bg-[#8cc7de] px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-wider text-[#2d2d2d] font-semibold hover:bg-[#a6d9ee] transition"
            >
              Αποδοχή
            </button>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] bg-white p-6 shadow-2xl sm:p-10 text-[#2d2d2d]">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-[#f3fbff] hover:bg-[#e4f5fe] transition cursor-pointer"
              aria-label="Κλείσιμο"
            >
              <X size={20} />
            </button>
            <h2 className="mb-6 text-3xl font-light uppercase tracking-tight text-[#7e6f67]">Πολιτική Απορρήτου</h2>
            <div className="space-y-4 text-sm leading-relaxed text-[#5c5c5c]">
              <p><strong>Τελευταία ενημέρωση: 24 Ιουνίου 2026</strong></p>
              <p>
                Στο οδοντιατρείο της <strong>Dr. Χρύσας Χατζημεών</strong>, σεβόμαστε το απόρρητο των δεδομένων σας. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις προσωπικές σας πληροφορίες σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">1. Υπεύθυνος Επεξεργασίας</h3>
              <p>
                Υπεύθυνος επεξεργασίας των δεδομένων σας είναι η Dr. Χρύσα Χατζημεών, με έδρα τη Γυθείου 22, Χαλάνδρι. Τηλέφωνο επικοινωνίας: 210 711 7021.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">2. Νομική Βάση Επεξεργασίας</h3>
              <p>
                Η επεξεργασία των δεδομένων σας βασίζεται στη συγκατάθεσή σας (Άρθρο 6(1)(α) GDPR), στην εκτέλεση σύμβασης παροχής οδοντιατρικών υπηρεσιών (Άρθρο 6(1)(β)), και στη συμμόρφωσή μας με νομικές υποχρεώσεις (Άρθρο 6(1)(γ)).
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">3. Δεδομένα που Συλλέγουμε</h3>
              <p>
                Εάν επικοινωνήσετε μαζί μας ή ζητήσετε ραντεβού, ενδέχεται να συλλέξουμε:
                Ονοματεπώνυμο, αριθμό τηλεφώνου, διεύθυνση ηλεκτρονικού ταχυδρομείου (email) και πληροφορίες σχετικά με το ιατρικό ιστορικό σας (κατόπιν δικής σας συγκατάθεσης για την παροχή οδοντιατρικής φροντίδας).
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">4. Σκοπός Επεξεργασίας</h3>
              <p>
                Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για τον προγραμματισμό των ραντεβού σας, την επικοινωνία μαζί σας και την παροχή των ζητούμενων οδοντιατρικών υπηρεσιών.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">5. Ιατρικό Απόρρητο</h3>
              <p>
                Όλα τα ιατρικά σας δεδομένα προστατεύονται από το ιατρικό απόρρητο και δεν κοινοποιούνται σε τρίτους χωρίς τη ρητή γραπτή συγκατάθεσή σας, εκτός εάν απαιτείται από το νόμο.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">6. Χρόνος Διατήρησης Δεδομένων</h3>
              <p>
                Τα δεδομένα σας διατηρούνται για όσο χρόνο είναι απαραίτητο για την εκπλήρωση των σκοπών συλλογής τους ή για όσο απαιτείται από την ισχύουσα νομοθεσία. Τα ιατρικά αρχεία τηρούνται σύμφωνα με τις απαιτήσεις του νόμου για ιατρικά δεδομένα.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">7. Τα Δικαιώματά σας</h3>
              <p>
                Έχετε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής («δικαίωμα στη λήθη»), περιορισμού της επεξεργασίας και εναντίωσης στην επεξεργασία των προσωπικών σας δεδομένων. Μπορείτε να ασκήσετε αυτά τα δικαιώματα επικοινωνώντας μαζί μας.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">8. Δικαίωμα Υποβολής Καταγγελίας</h3>
              <p>
                Εάν θεωρείτε ότι η επεξεργασία των δεδομένων σας παραβιάζει τον GDPR, έχετε δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ), Κηφισίας 1-3, Τ.Κ. 115 23, Αθήνα — <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-[#7e6f67] underline">www.dpa.gr</a>.
              </p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] bg-white p-6 shadow-2xl sm:p-10 text-[#2d2d2d]">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-[#f3fbff] hover:bg-[#e4f5fe] transition cursor-pointer"
              aria-label="Κλείσιμο"
            >
              <X size={20} />
            </button>
            <h2 className="mb-6 text-3xl font-light uppercase tracking-tight text-[#7e6f67]">Όροι Χρήσης</h2>
            <div className="space-y-4 text-sm leading-relaxed text-[#5c5c5c]">
              <p><strong>Τελευταία ενημέρωση: 24 Ιουνίου 2026</strong></p>
              <p>
                Η χρήση αυτού του ιστότοπου υπόκειται στους παρακάτω όρους. Με την πρόσβαση και χρήση του ιστότοπου, αποδέχεστε πλήρως τους παρόντες όρους.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">1. Γενικές Πληροφορίες</h3>
              <p>
                Ο ιστότοπος λειτουργεί από το οδοντιατρείο της Dr. Χρύσας Χατζημεών, Γυθείου 22, Χαλάνδρι, Αττική. Σκοπός του είναι η παροχή πληροφοριών σχετικά με τις οδοντιατρικές υπηρεσίες μας και η διευκόλυνση επικοινωνίας.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">2. Πνευματική Ιδιοκτησία</h3>
              <p>
                Όλο το περιεχόμενο αυτού του ιστότοπου (κείμενα, εικόνες, γραφικά, λογότυπα) προστατεύεται από τους νόμους περί πνευματικής ιδιοκτησίας. Απαγορεύεται η αναπαραγωγή, αντιγραφή ή διανομή χωρίς γραπτή άδεια.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">3. Ιατρική Αποποίηση</h3>
              <p>
                Οι πληροφορίες στον ιστότοπο παρέχονται για ενημερωτικούς σκοπούς και δεν αποτελούν ιατρική συμβουλή. Για εξατομικευμένη διάγνωση και θεραπεία, απευθυνθείτε στο ιατρείο μας.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">4. Περιορισμός Ευθύνης</h3>
              <p>
                Καταβάλλουμε κάθε προσπάθεια για την ακρίβεια των πληροφοριών. Ωστόσο, δεν εγγυόμαστε την πληρότητα ή καταλληλότητά τους. Η χρήση του ιστότοπου γίνεται με δική σας ευθύνη.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">5. Εφαρμοστέο Δίκαιο</h3>
              <p>
                Οι παρόντες όροι διέπονται από το Ελληνικό Δίκαιο. Για οποιαδήποτε διαφορά, αρμόδια είναι τα δικαστήρια Αθηνών.
              </p>
              <h3 className="text-base font-semibold text-[#2d2d2d] mt-4">6. Επικοινωνία</h3>
              <p>
                Για ερωτήσεις σχετικά με τους παρόντες όρους, επικοινωνήστε μαζί μας στο τηλέφωνο 210 711 7021 ή επισκεφθείτε μας στη Γυθείου 22, Χαλάνδρι.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
