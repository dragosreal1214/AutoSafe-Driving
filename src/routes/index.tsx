import { useEffect, useRef, useState } from 'react';
import { SteeringIcon, Icon } from '../components/site/icons';
import { useReveal, useCounter } from '../hooks/useReveal';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: 'AutoSafe Driving — Școală de șoferi în Iași | Categoria B, C, D' },
      { name: 'description', content: 'AutoSafe Driving Iași — școală auto premium pe Bd. Dacia 29. 4.7★ Google, Firma de Aur 5 ani consecutiv. Categorii B, C, D, CE. Înscrie-te acum.' },
    ],
  }),
});

const NAV = [
  { id: 'acasa', label: 'Acasă' },
  { id: 'despre', label: 'Despre' },
  { id: 'categorii', label: 'Categorii' },
  { id: 'flota', label: 'Flotă' },
  { id: 'instructori', label: 'Instructori' },
  { id: 'preturi', label: 'Prețuri' },
  { id: 'faq', label: 'FAQ' },
];

const HERO_IMG = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=80';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all border-b ${
        scrolled
          ? 'bg-white/92 backdrop-saturate-150 backdrop-blur-md border-[#E0E8F0] shadow-[0_1px_0_rgba(12,35,64,0.03)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[74px] flex items-center justify-between">
        <a href="#acasa" className={`flex items-center gap-3 font-extrabold text-[19px] tracking-tight transition-colors ${scrolled ? 'text-[#0C2340]' : 'text-white'}`} style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
          <span className={`w-[38px] h-[38px] rounded-[9px] grid place-items-center transition-colors ${scrolled ? 'bg-[#0C2340]' : 'bg-white'}`}>
            <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]">
              <circle cx="12" cy="12" r="9" stroke="#1E9E57" strokeWidth="2" />
              <circle cx="12" cy="12" r="2.4" fill="#1E9E57" />
              <path d="M12 3.2v6.4M12 14.4v6.4M3.2 12h6.4M14.4 12h6.4" stroke="#1E9E57" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span>AUTOSAFE</span>
            <small className="text-[10.5px] font-semibold tracking-[0.22em] text-[#1E9E57] mt-[-2px]">DRIVING · IAȘI</small>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative text-[15px] font-semibold transition-colors hover:text-[#1E9E57] ${scrolled ? 'text-[#16263A]' : 'text-white'}`}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="bg-[#1E9E57] hover:bg-[#157A43] text-white font-bold text-[15px] px-5 py-[11px] rounded-[8px] transition shadow-[0_4px_14px_rgba(30,158,87,0.32)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(30,158,87,0.4)]">
            Înscrie-te
          </a>
        </nav>
        <button className={`lg:hidden ${scrolled ? 'text-[#0C2340]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Meniu">
          <Icon d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0C2340] text-white px-5 py-5 flex flex-col gap-4">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-1 text-lg font-semibold">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-[#1E9E57] text-white font-bold text-center py-3 rounded-lg">Înscrie-te</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <header id="acasa" className="relative min-h-screen flex items-center pt-[74px] overflow-hidden bg-[#0C2340]">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Mâini pe volan în trafic"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.28]"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 600px at 78% 18%, rgba(30,158,87,0.22), transparent 60%),' +
              'radial-gradient(800px 700px at 8% 88%, rgba(29,111,184,0.30), transparent 60%),' +
              'linear-gradient(160deg, rgba(12,35,64,0.86) 0%, rgba(10,44,80,0.82) 55%, rgba(12,35,64,0.92) 100%)',
          }}
        />
        <svg className="absolute right-[-4%] bottom-[-10%] w-[60%] opacity-10 rotate-[-8deg]" viewBox="0 0 400 400" fill="none">
          <g stroke="#7FE3AC" strokeWidth="3" strokeLinecap="round">
            {[0, 80, 160, 240, 320].map((y, i) => <line key={`a${i}`} x1="60" y1={y} x2="60" y2={y + 40} />)}
            {[20, 100, 180, 260].map((y, i) => <line key={`b${i}`} x1="200" y1={y} x2="200" y2={y + 40} />)}
            {[0, 80, 160].map((y, i) => <line key={`c${i}`} x1="340" y1={y} x2="340" y2={y + 40} />)}
          </g>
        </svg>
        <div className="absolute inset-0 hero-grain pointer-events-none" />
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-light">Școală de șoferi · Iași · din 2022</span>
          <h1 className="text-white font-extrabold mt-6 mb-6" style={{ fontSize: 'clamp(2.6rem, 6.4vw, 5.4rem)', letterSpacing: '-0.03em' }}>
            <span className="word-up" style={{ animationDelay: '0.05s' }}>Învață</span>{' '}
            <span className="word-up" style={{ animationDelay: '0.13s' }}>să</span>{' '}
            <span className="word-up" style={{ animationDelay: '0.21s' }}>conduci</span>{' '}
            <span className="word-up" style={{ animationDelay: '0.29s' }}>cu</span>{' '}
            <span className="word-up text-[#7FE3AC]" style={{ animationDelay: '0.37s' }}>încredere.</span>
          </h1>
          <p className="text-[#C3D2E2] max-w-xl mb-10" style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.32rem)' }}>
            Pregătire serioasă pentru permisul tău, cu instructori răbdători și dedicați. La AutoSafe formăm șoferi siguri — nu doar candidați la examen.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a href="#contact" className="btn-primary">
              Înscrie-te online
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#preturi" className="btn-ghost-light">
              Vezi prețurile și pachetele
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7FE3AC" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute right-7 bottom-12 z-[2] flex-col items-center gap-2.5 text-[#9FB2C6] text-[11px] tracking-[0.18em] uppercase">
        <span>Scroll</span>
        <span className="scroll-line" />
      </div>
    </header>
  );
}

function Trust() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const r3 = useRef<HTMLSpanElement>(null);
  const r4 = useRef<HTMLSpanElement>(null);
  useCounter(4.7, r1);
  useCounter(104, r2);
  useCounter(5, r3);
  useCounter(2022, r4);
  return (
    <section className="bg-white border-b border-[#E0E8F0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { ref: r1, suffix: '', label: 'Rating Google' },
            { ref: r2, suffix: '+', label: 'Recenzii verificate', green: true },
            { ref: r3, suffix: '×', label: 'Firma de Aur', green: true },
            { ref: r4, suffix: '', label: 'Anul fondării' },
          ].map((s, i) => (
            <div key={i} className={`reveal text-center py-12 px-7 ${i < 3 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} border-[#E0E8F0]`}>
              <div className="font-extrabold leading-none" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>
                <span ref={s.ref} className={s.green ? 'text-[#1E9E57]' : 'text-[#1D6FB8]'}>0</span>
                <span className={s.green ? 'text-[#1E9E57]' : 'text-[#1D6FB8]'}>{s.suffix}</span>
              </div>
              <div className="text-[13.5px] text-[#5C6B7A] font-semibold mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const feats = [
    { t: 'Instructori dedicați', d: 'Calmi, răbdători și orientați spre rezultate — recomandați de sute de cursanți.', i: 'M20 6 9 17l-5-5' },
    { t: 'Flotă modernă', d: 'Autovehicule bine întreținute, cu cutie manuală și automată, dotate complet pentru siguranță.', i: 'M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2' },
    { t: 'Prețuri transparente', d: 'Costuri clare, fără surprize. Știi exact ce plătești și ce primești de la început.', i: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
    { t: 'Programări flexibile', d: 'Ore de condus adaptate programului tău — inclusiv în weekend.', i: 'M12 7v5l3 2' },
  ];
  return (
    <section id="despre" className="py-20 lg:py-[120px] bg-[#F5F9FC]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-[70px] items-start">
          <div className="reveal">
            <span className="eyebrow">Despre noi</span>
            <h2 className="mt-5 font-extrabold" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
              Nu predăm pentru examen.{' '}
              <span className="italic font-normal text-[#1E9E57]" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: 0 }}>
                Predăm pentru o viață la volan.
              </span>
            </h2>
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#E0E8F0] shadow-[0_1px_2px_rgba(12,35,64,0.04),0_8px_24px_rgba(12,35,64,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                alt="Mașină pe drum la apus — pregătire AutoSafe"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal">
            <p className="text-[1.15rem] text-[#16263A] mb-5">
              AutoSafe Driving este o școală de șoferi din Iași construită pe răbdare, seriozitate și respect față de fiecare cursant.
            </p>
            <p className="text-[#16263A] mb-5">
              Pregătim viitorii șoferi temeinic — întâi teoretic, apoi practic — pentru a face față traficului real din Iași. Punem accent pe condusul preventiv, pe deciziile corecte la volan și pe încrederea în propriile forțe, astfel încât permisul să fie doar confirmarea unei pregătiri solide.
            </p>
            <div className="mt-8 grid gap-5">
              {feats.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-[10px] bg-[#E7F5ED] grid place-items-center flex-shrink-0">
                    <Icon d={f.i} className="w-[22px] h-[22px]" />
                  </div>
                  <div className="text-[#157A43]">
                    <h4 className="text-[17px] mb-0.5 text-[#0C2340]">{f.t}</h4>
                    <p className="text-[14.5px] text-[#5C6B7A] m-0">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, mark, light = false }: { eyebrow: string; title: string; sub?: string; mark: string; light?: boolean }) {
  return (
    <div className="flex justify-between items-end gap-6 flex-wrap mb-4 reveal">
      <div>
        <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
        <h2 className={`mt-4 font-extrabold ${light ? 'text-white' : ''}`} style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', maxWidth: '620px' }}>{title}</h2>
        {sub && <p className={`mt-3 ${light ? 'text-[#A8BBCF]' : 'text-[#5C6B7A]'}`} style={{ maxWidth: '560px' }}>{sub}</p>}
      </div>
      <div
        className="font-extrabold leading-[0.8] select-none"
        style={{
          fontFamily: "'Schibsted Grotesk', sans-serif",
          fontSize: 'clamp(3rem, 7vw, 5rem)',
          color: light ? 'rgba(255,255,255,0.08)' : '#EAF2FA',
        }}
      >
        {mark}
      </div>
    </div>
  );
}

function Categorii() {
  const cats = [
    {
      letter: 'B', title: 'Autoturisme', sub: 'Cea mai cerută categorie — manuală sau automată',
      img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80',
      alt: 'Autoturism pe șosea',
      specs: [['Vârsta minimă', '18 ani'], ['Teorie', '30 ore'], ['Practică', 'min. 30 ședințe'], ['Durată', '3–4 luni']],
      docs: { t: 'Acte necesare pentru dosar', d: 'Copie CI · fișă medicală auto (valabilă 1 an) · aviz psihologic · cazier judiciar cu mențiunea „examen auto" (valabil 6 luni) · taxa de permis 89 RON.' },
    },
    {
      letter: 'B auto', title: 'Categoria B — cutie automată', sub: 'Ideală pentru traficul urban din Iași',
      img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Schimbător automat de viteze',
      specs: [['Vârsta minimă', '18 ani'], ['Teorie', '30 ore'], ['Practică', 'min. 30 ședințe'], ['Avantaj', 'Fără ambreiaj']],
      docs: { t: 'De ce automată?', d: 'Transmisia automată reduce complexitatea manevrelor și îți permite să te concentrezi pe trafic, reguli și anticipare. Recomandată celor care vor o experiență de condus mai simplă și relaxată.' },
    },
    {
      letter: 'C', title: 'Autocamioane', sub: 'Pentru transport de marfă peste 3,5 t',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Cap tractor camion',
      specs: [['Vârsta minimă', '21 ani'], ['Condiție', 'Categoria B'], ['Teorie', '140 ore'], ['Practică', 'min. 30 ședințe']],
      docs: { t: 'Acte necesare', d: 'Copie CI · copie permis categoria B · fișă medicală auto · aviz psihologic · cazier judiciar cu mențiunea „examen auto".' },
    },
    {
      letter: 'D', title: 'Autobuze și autocare', sub: 'Pentru transport de persoane',
      img: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=900&q=80',
      alt: 'Autobuz urban',
      specs: [['Vârsta minimă', '24 ani'], ['Condiție', 'Categoria B'], ['Teorie', '140 ore'], ['Practică', 'min. 30 ședințe']],
      docs: { t: 'Acte necesare', d: 'Copie CI · copie permis categoria B · fișă medicală auto · aviz psihologic · cazier judiciar cu mențiunea „examen auto".' },
    },
    {
      letter: 'CE', title: 'Autotren (cap tractor + semiremorcă)', sub: 'Pentru transport profesional',
      img: 'https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=900&q=80',
      alt: 'Semiremorcă pe autostradă',
      specs: [['Condiție', 'Categoria C'], ['Destinat', 'Transport marfă'], ['Teorie + practică', 'Conform legii'], ['CPC', 'La cerere']],
      docs: { t: 'Acte necesare', d: 'Copie CI · copie permis categoria C · fișă medicală auto · aviz psihologic · cazier judiciar cu mențiunea „examen auto".' },
    },
  ];
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <section id="categorii" className="py-20 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Categorii permis" title="Categoriile pe care le predăm" sub="Pregătire completă, cu instructori specializați și vehicule potrivite fiecărei categorii." mark="01" />
        <div className="mt-12 border-t border-[#E0E8F0] reveal">
          {cats.map((c, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-[#E0E8F0]">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-6 py-7 px-2 text-left hover:pl-5 transition-[padding] duration-300"
                >
                  <span
                    className={`font-extrabold transition-colors ${isOpen ? 'text-[#1E9E57]' : 'text-[#0C2340]'}`}
                    style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', minWidth: 84 }}
                  >
                    {c.letter}
                  </span>
                  <div className="flex-1">
                    <strong className="block font-bold text-[18px] text-[#0C2340]" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{c.title}</strong>
                    <span className="text-[14.5px] text-[#5C6B7A]">{c.sub}</span>
                  </div>
                  <span className={`w-10 h-10 rounded-full grid place-items-center flex-shrink-0 transition-all relative border-2 ${isOpen ? 'border-[#1E9E57] bg-[#1E9E57]' : 'border-[#E0E8F0]'}`}>
                    <span className={`absolute w-[14px] h-[2.5px] ${isOpen ? 'bg-white' : 'bg-[#1D6FB8]'}`} />
                    <span className={`absolute w-[2.5px] h-[14px] transition-transform ${isOpen ? 'bg-white scale-y-0' : 'bg-[#1D6FB8]'}`} />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pl-2 lg:pl-[110px] pr-2 pb-8 grid lg:grid-cols-[260px_1fr] gap-7">
                      <div className="rounded-xl overflow-hidden border border-[#E0E8F0] aspect-[4/3] lg:aspect-auto lg:max-h-[260px]">
                        <img src={c.img} alt={c.alt} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="grid gap-4 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                          {c.specs.map(([k, v], j) => (
                            <div key={j}>
                              <div className="text-[11.5px] uppercase tracking-[0.08em] text-[#157A43] font-bold">{k}</div>
                              <div className="text-[15.5px] font-semibold text-[#0C2340] mt-0.5">{v}</div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#EAF2FA] rounded-xl py-5 px-6 text-[14.5px] text-[#16263A]">
                          <strong className="text-[#0C2340] block mb-1.5" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{c.docs.t}</strong>
                          {c.docs.d}
                        </div>
                        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[#157A43] font-bold text-[14.5px] hover:gap-3 transition-all">
                          Solicită detalii
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#157A43" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Flota() {
  const cars = [
    {
      name: 'Dacia Logan', brand: 'Dacia', model: 'Logan', year: '2022', gear: 'Manuală', engine: '1.0 TCe · Benzină',
      tag: 'Cutie manuală',
      img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Dacia Sandero', brand: 'Dacia', model: 'Sandero', year: '2023', gear: 'Manuală', engine: '1.0 SCe · Benzină',
      tag: 'Cutie manuală',
      img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Skoda Octavia', brand: 'Skoda', model: 'Octavia', year: '2021', gear: 'Automată', engine: '1.5 TSI · Benzină',
      tag: 'Cutie automată',
      img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Ford Transit / Iveco Daily', brand: 'Ford / Iveco', model: 'Transit / Daily', year: '—', gear: 'Manuală', engine: 'Diesel',
      tag: 'Categorii C/D',
      img: 'https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1200&q=80',
    },
  ];
  const safety = ['Frâne ABS', 'Airbag-uri', 'Duble comenzi', 'Aer condiționat', 'Centuri de siguranță'];
  return (
    <section id="flota" className="py-20 lg:py-[120px] bg-[#0C2340]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead light eyebrow="Flota auto" title="O flotă întreținută și sigură" sub="Prezentăm transparent fiecare vehicul cu care vei învăța — pentru că încrederea începe înainte de prima oră de condus." mark="02" />
        <div className="mt-12 grid md:grid-cols-2 gap-7">
          {cars.map((c, i) => (
            <div key={i} className="card-lift bg-[#102C4F] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7FE3AC]/40">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/70 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 bg-[#1E9E57]/92 text-white text-[11.5px] font-bold px-2.5 py-1 rounded tracking-wider">{c.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{c.name}</h3>
                <div className="grid grid-cols-2 gap-px bg-white/[0.07] rounded-[9px] overflow-hidden mb-4">
                  {[['Marcă / Model', `${c.brand} ${c.model}`], ['An', c.year], ['Cutie', c.gear], ['Motor', c.engine]].map(([k, v], j) => (
                    <div key={j} className="bg-[#102C4F] py-3 px-3.5">
                      <div className="text-[10.5px] uppercase tracking-wider text-[#7FE3AC] font-bold">{k}</div>
                      <div className="text-[14.5px] text-[#E4ECF4] font-semibold mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {safety.map((t) => (
                    <span key={t} className="text-[11.5px] text-[#C3D2E2] border border-white/[0.18] px-2.5 py-1 rounded-full font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#A8BBCF] text-[14.5px] mt-8 text-center">Flota este actualizată periodic. Contactează-ne pentru detalii despre vehiculele disponibile.</p>
      </div>
    </section>
  );
}

function Instructori() {
  const team = [
    {
      n: 'Alexandru Chirilă', spec: 'Categoria B — manual & automat',
      bio: 'Instructor certificat, atestat ARR. Calm, dedicat și atent la fiecare elev. Pune accent pe tehnica corectă și pe siguranța în trafic.',
      q: 'Cel mai bun, calm și dedicat instructor!', by: 'elev verificat Google',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      n: 'Cătălin Mămăligă', spec: 'Categoria B',
      bio: 'Instructor certificat. Direct și eficient — te ajută să înțelegi traficul real din Iași, nu doar teoria.',
      q: 'Recomand cu încredere pe dl. Mămăligă — garantat iei permisul.', by: 'elev verificat',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      n: 'Ștefan Rață', spec: 'Categoria B',
      bio: 'Instructor certificat. Abordare aparte, relaxat și profesionist — creează o atmosferă liniștitoare în mașină.',
      q: 'Foarte calm, cu o abordare aparte. Recomand!', by: 'Rareș D.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    },
  ];
  return (
    <section id="instructori" className="py-20 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Instructori" title="Ghizi răbdători, încredere pas cu pas" sub="Instructorii noștri îți construiesc încrederea pas cu pas, indiferent de nivelul tău de experiență." mark="03" />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="reveal group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-[#E0E8F0]">
                <img src={m.img} alt={m.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1E9E57] rounded-2xl transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-[#0C2340] mt-5" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{m.n}</h3>
              <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#157A43] mt-1">{m.spec}</div>
              <p className="text-[14.5px] text-[#5C6B7A] mt-3">{m.bio}</p>
              <div className="mt-4 pl-3.5 border-l-[3px] border-[#1E9E57] italic text-[14.5px] text-[#16263A]">
                „{m.q}"
                <div className="mt-1 text-[12px] text-[#5C6B7A] not-italic">— {m.by}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#5C6B7A] text-[14.5px] mt-10">Echipa noastră include instructori pentru categoriile B, C și D. Contactează-ne pentru disponibilitate.</p>
      </div>
    </section>
  );
}

function Preturi() {
  const plans = [
    {
      tag: 'Categoria B Manual', name: 'Pachet Standard', price: '2.800',
      img: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80',
      alt: 'Schimbător manual de viteze',
      items: ['30 ore teorie (legislație, vehicul, condus preventiv)', '30 ședințe practică (50 min/ședință)', 'Acces platformă teste online', 'Suport complet pentru dosar', 'Programare examen'],
      cta: 'Înscrie-te acum', featured: true,
    },
    {
      tag: 'Categoria B Automat', name: 'Pachet Automată', price: '3.100',
      img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Schimbător automat',
      items: ['Toate beneficiile pachetului Standard', 'Vehicul cu transmisie automată', 'Recomandat pentru traficul urban din Iași'],
      cta: 'Înscrie-te acum',
    },
    {
      tag: 'Categoria C / D', name: 'Pachet Profesional', price: 'La cerere',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Camion profesional',
      items: ['Pregătire completă conform legislației', 'CPC inițial / periodic', 'Instructori specializați transport profesional'],
      cta: 'Solicită ofertă',
    },
  ];
  return (
    <section id="preturi" className="py-20 lg:py-[120px] bg-[#F5F9FC]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Prețuri & pachete" title="Transparență totală, fără surprize" sub="Toate prețurile de mai jos acoperă integral pregătirea pentru examen — fără taxe ascunse." mark="04" />
        <div className="mt-12 grid lg:grid-cols-3 gap-7 items-stretch">
          {plans.map((p, i) => (
            <div key={i} className={`card-lift reveal relative bg-white rounded-2xl overflow-hidden flex flex-col ${p.featured ? 'border-2 border-[#1E9E57] shadow-[0_16px_44px_rgba(30,158,87,0.16)]' : 'border border-[#E0E8F0]'}`}>
              {p.featured && (
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-[#1E9E57] text-white font-extrabold text-[11.5px] tracking-[0.1em] py-1.5 px-4 rounded-full z-10">RECOMANDAT</div>
              )}
              <div className="relative h-32 overflow-hidden">
                <img src={p.img} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              </div>
              <div className="p-9 pt-5 flex flex-col flex-1">
              <h3 className="text-[14px] uppercase tracking-[0.08em] text-[#5C6B7A] font-bold">{p.tag}</h3>
              <div className="text-[21px] font-bold text-[#0C2340] mt-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{p.name}</div>
              <div className="mt-5 mb-1 leading-none">
                <span className={`text-[2.7rem] font-extrabold ${p.featured ? 'text-[#157A43]' : 'text-[#1D6FB8]'}`} style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{p.price}</span>
                {p.price !== 'La cerere' && <span className="text-base font-semibold text-[#5C6B7A] ml-1">RON</span>}
              </div>
              <ul className="mt-6 mb-7 grid gap-3.5 flex-1 list-none">
                {p.items.map((it, j) => (
                  <li key={j} className="flex gap-3 items-start text-[14.8px] text-[#16263A]">
                    <svg className="w-[19px] h-[19px] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#1E9E57" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3.5 rounded-[9px] font-bold transition-all ${p.featured ? 'bg-[#1E9E57] hover:bg-[#157A43] text-white shadow-[0_6px_18px_rgba(30,158,87,0.32)]' : 'bg-[#EAF2FA] hover:bg-[#1D6FB8] hover:text-white text-[#155A98]'}`}>{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#5C6B7A] text-[13.5px] mt-8 text-center max-w-[760px] mx-auto">
          Taxele pentru dosar (fișă medicală, aviz psihologic, cazier, taxa permis 89 RON) nu sunt incluse în prețul cursului și sunt suportate de cursant. Posibilitate de plată în rate — întreabă echipa noastră.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: 'Recomand cu toată încrederea AutoSafe. Instructorul Ștefan Rață a fost foarte calm și a avut o abordare aparte care m-a ajutat să iau permisul din prima.', n: 'Rareș D.' },
    { q: '5 stele pentru Chirilă Alexandru. Cel mai bun, calm și dedicat instructor pe care l-am avut. Recomand!', n: 'Hlihor I.' },
    { q: 'Instruirea practică și teoretică a fost excelentă. Voi recomanda tuturor prietenilor mei AutoSafe Driving.', n: 'Elev verificat Google' },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <section className="py-20 lg:py-[120px] bg-[#1D6FB8] relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(700px 400px at 80% 20%, rgba(30,158,87,0.28), transparent 60%)' }} />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <span className="eyebrow eyebrow-light justify-center" style={{ color: '#BFE9D1' }}>Ce spun elevii</span>
        <div className="text-[#FFD56B] text-lg tracking-[3px] mt-8 mb-2">★★★★★</div>
        <blockquote className="text-white font-semibold leading-tight my-7 min-h-[140px] flex items-center justify-center" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
          „{items[idx].q}"
        </blockquote>
        <div className="text-[#CFE2F2] text-[15px] font-semibold">
          — <b className="text-white">{items[idx].n}</b> · Google Reviews
        </div>
        <div className="flex gap-2.5 justify-center mt-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Recenzie ${i + 1}`} className={`w-9 h-1 rounded-md transition-colors ${idx === i ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4500); };
  return (
    <section id="contact" className="py-20 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHead eyebrow="Contact & înscriere" title="Hai să începem împreună drumul tău" sub="Trimite-ne datele și un coleg te contactează în cel mult o zi lucrătoare." mark="05" />
        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div className="reveal">
            {[
              { k: 'Adresă', v: 'Bulevardul Dacia nr. 29, Iași, România' },
              { k: 'Telefon', v: '0712 XXX XXX' },
              { k: 'Email', v: 'contact@autosafedriving.ro' },
              { k: 'Program', v: 'Luni–Vineri 09:00–19:00\nSâmbătă 09:00–14:00' },
            ].map((b, i, arr) => (
              <div key={i} className={`pb-6 mb-6 ${i < arr.length - 1 ? 'border-b border-[#E0E8F0]' : ''}`}>
                <div className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#157A43]">{b.k}</div>
                <div className="text-[17px] font-semibold text-[#0C2340] mt-1.5 whitespace-pre-line">{b.v}</div>
              </div>
            ))}
            <div className="mt-2 rounded-2xl overflow-hidden border border-[#E0E8F0] h-[230px]">
              <iframe
                title="Hartă AutoSafe Driving"
                src="https://www.google.com/maps?q=Bulevardul+Dacia+29,+Iași,+Romania&output=embed"
                className="w-full h-full"
                style={{ filter: 'grayscale(0.2) contrast(1.02)' }}
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-white rounded-2xl p-10 reveal border border-[#E0E8F0] shadow-[0_1px_2px_rgba(12,35,64,0.04),0_8px_24px_rgba(12,35,64,0.06)]">
            <h3 className="text-2xl font-extrabold text-[#0C2340]" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>Înscriere online</h3>
            <p className="text-[#5C6B7A] text-[14.5px] mt-1.5 mb-7">Răspundem în cel mult o zi lucrătoare.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nume complet"><input required type="text" className="input" placeholder="Numele tău" /></Field>
              <Field label="Telefon"><input required type="tel" className="input" placeholder="07XX XXX XXX" /></Field>
            </div>
            <Field label="Adresă email" className="mt-5"><input required type="email" className="input" placeholder="email@exemplu.ro" /></Field>
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <Field label="Categorie permis">
                <select className="input" defaultValue="">
                  <option value="" disabled>Alege categoria</option>
                  <option>B Manual</option><option>B Automat</option><option>C</option><option>D</option><option>CE</option><option>Nu știu încă</option>
                </select>
              </Field>
              <Field label="Disponibilitate">
                <select className="input" defaultValue="">
                  <option value="" disabled>Când ești disponibil?</option>
                  <option>Dimineața</option><option>Prânz</option><option>Seara</option><option>Weekend</option>
                </select>
              </Field>
            </div>
            <Field label="Mesaj / întrebări" className="mt-5"><textarea rows={4} className="input" placeholder="Scrie-ne orice întrebare..." /></Field>
            <button type="submit" className="w-full mt-6 bg-[#1E9E57] hover:bg-[#157A43] text-white py-4 rounded-[9px] font-bold text-[16.5px] transition-all hover:-translate-y-0.5 shadow-[0_8px_22px_rgba(30,158,87,0.32)] hover:shadow-[0_12px_28px_rgba(30,158,87,0.42)]" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              {sent ? '✓ Cererea a fost trimisă!' : 'Trimite cererea'}
            </button>
            <p className="text-[13px] text-[#5C6B7A] text-center mt-3.5">Datele tale sunt confidențiale și nu vor fi partajate cu terți.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[13px] font-bold text-[#0C2340] mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function FAQ() {
  const items: [string, string][] = [
    ['Ce acte am nevoie pentru înscriere?', 'Fișă medicală auto (valabilă 1 an), aviz psihologic, certificat de cazier judiciar cu mențiunea „examen auto" (valabil 6 luni), copie CI și taxa de permis de 89 RON plătită la CEC Bank sau SelfPay.'],
    ['Cât durează cursul de categoria B?', 'În medie 3–4 luni, în funcție de ritmul tău de programare. Cursul include 30 ore de teorie și minimum 30 ședințe practice.'],
    ['Pot alege instructorul?', 'Da, poți exprima preferința pentru un instructor la momentul înscrierii, sub rezerva disponibilității.'],
    ['Oferiți și cursuri pentru mașini cu cutie automată?', 'Da, avem în flotă autovehicule atât cu transmisie manuală, cât și automată.'],
    ['Pot plăti în rate?', 'Da, avem posibilități de eșalonare a plății. Discutați cu echipa noastră la înscriere.'],
    ['Unde se desfășoară cursurile teoretice?', 'La sediul nostru din Bulevardul Dacia nr. 29, Iași.'],
    ['Cât de repede pot programa prima ședință după înscriere?', 'De regulă în prima săptămână după completarea dosarului și achitarea primei rate.'],
    ['AutoSafe Driving este autorizată ARR?', 'Da, școala este autorizată conform legislației în vigoare pentru toate categoriile de permis oferite.'],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-[120px] bg-[#F5F9FC]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center reveal">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2 className="mt-4 font-extrabold" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Tot ce vrei să știi înainte de înscriere</h2>
        </div>
        <div className="mt-12 border-t border-[#E0E8F0]">
          {items.map(([q, a], i) => (
            <div key={i} className="border-b border-[#E0E8F0]">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-5 py-6 px-1.5 text-left hover:text-[#157A43] transition-colors font-semibold text-[18px] text-[#0C2340]" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                <span>{q}</span>
                <span className="w-[30px] h-[30px] flex-shrink-0 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2.5px] bg-[#1E9E57]" />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.5px] h-[14px] bg-[#1E9E57] transition-transform ${open === i ? 'scale-y-0' : ''}`} />
                </span>
              </button>
              <div className={`grid transition-all duration-400 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-1.5 pb-6 text-[#5C6B7A] text-[15.5px]">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#B08D57]/30 bg-gradient-to-br from-[#FFFDF8] via-[#FBF6EC] to-[#F5EBD7] p-10 lg:p-16 reveal">
          <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-[#B08D57]/12 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#1E9E57]/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-full border-[6px] border-[#B08D57] bg-gradient-to-br from-[#F5DEB3] via-[#D9BA88] to-[#B08D57] flex items-center justify-center shadow-[0_20px_50px_-15px_rgba(176,141,87,0.6)]">
                  <div className="text-center text-[#0C2340]">
                    <div className="text-[11px] font-extrabold tracking-[0.18em] mb-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>PREMIUL</div>
                    <div className="text-[26px] font-black leading-none" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>FIRMA</div>
                    <div className="text-[36px] font-black leading-none my-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>de AUR</div>
                    <div className="text-[11px] font-bold tracking-[0.18em] mt-1">2022 — 2026</div>
                  </div>
                </div>
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#B08D57]/40 animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="eyebrow" style={{ color: '#8B6A3A' }}>Premii și recunoaștere</span>
              <h2 className="mt-4 font-extrabold" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
                5 ani consecutiv <span className="italic font-normal text-[#B08D57]" style={{ fontFamily: "'Public Sans', sans-serif" }}>„Firma de Aur"</span>
              </h2>
              <p className="mt-4 text-[#16263A] text-lg leading-relaxed max-w-2xl">
                AutoSafe Driving a fost premiată cinci ani la rând cu distincția „Firma de Aur" pentru performanță, calitatea serviciilor și încrederea clienților din Iași.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {['2022', '2023', '2024', '2025', '2026'].map((y) => (
                  <span key={y} className="px-4 py-2 rounded-full border border-[#B08D57]/40 bg-[#FBF6EC] text-[#8B6A3A] font-bold text-sm" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{y}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0C2340] text-[#A8BBCF] pt-20 pb-9">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
        <div>
          <a href="#acasa" className="flex items-center gap-3 text-white font-extrabold text-2xl" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            <span className="w-[38px] h-[38px] rounded-[9px] bg-white grid place-items-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]">
                <circle cx="12" cy="12" r="9" stroke="#1E9E57" strokeWidth="2" />
                <circle cx="12" cy="12" r="2.4" fill="#1E9E57" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span>AUTOSAFE</span>
              <small className="text-[10.5px] font-semibold tracking-[0.22em] text-[#1E9E57] mt-[-2px]">DRIVING · IAȘI</small>
            </span>
          </a>
          <p className="mt-5 text-[#92A8C0] text-[14.5px] max-w-[280px]">
            Școală de șoferi premium în Iași. Pregătire completă pentru categoriile B, C, D și CE — cu instructori dedicați și transparență totală.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 border border-[#B08D57]/50 rounded-[10px] py-2.5 px-4">
            <span className="seal-badge">FIRMA<br />DE AUR</span>
            <span className="text-[12.5px] text-[#D9BA88] font-semibold">5 ani consecutiv<br />2022–2026</span>
          </div>
        </div>
        <div>
          <h4 className="text-white text-[13px] tracking-[0.1em] uppercase mb-4 font-bold">Navigare</h4>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="block text-[14.5px] mb-3 text-[#A8BBCF] hover:text-[#7FE3AC] transition-colors">{n.label}</a>
          ))}
        </div>
        <div>
          <h4 className="text-white text-[13px] tracking-[0.1em] uppercase mb-4 font-bold">Contact</h4>
          <p className="text-[14.5px] mb-3">Bd. Dacia nr. 29<br />Iași, România</p>
          <a href="tel:0712000000" className="block text-[14.5px] mb-3 hover:text-[#7FE3AC] transition-colors">0712 XXX XXX</a>
          <a href="mailto:contact@autosafedriving.ro" className="block text-[14.5px] hover:text-[#7FE3AC] transition-colors">contact@autosafedriving.ro</a>
        </div>
        <div>
          <h4 className="text-white text-[13px] tracking-[0.1em] uppercase mb-4 font-bold">Urmărește-ne</h4>
          <a href="https://www.facebook.com/auto.safe.driving/" target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 text-[14.5px] hover:text-[#7FE3AC] transition-colors">
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Icon d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" className="w-4 h-4" />
            </span>
            Facebook
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-7 flex flex-wrap justify-between items-center gap-3 text-[13px] text-[#7589A0]">
        <div>© 2026 AutoSafe Driving SRL · CUI 46299076 · Toate drepturile rezervate</div>
        <div>Iași, România</div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href="https://wa.me/40712000000" target="_blank" rel="noopener"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#1E9E57] shadow-[0_8px_24px_rgba(30,158,87,0.4)] flex items-center justify-center text-white hover:scale-110 transition-transform"
      aria-label="Contactează-ne pe WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.555-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.276l-.999 3.648 3.893-.623zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-white text-[#16263A]">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Categorii />
      <Flota />
      <Instructori />
      <Preturi />
      <Testimonials />
      <Contact />
      <FAQ />
      <Awards />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
