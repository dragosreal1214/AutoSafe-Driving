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
  { id: 'categorii', label: 'Categorii Permis' },
  { id: 'flota', label: 'Flota Auto' },
  { id: 'instructori', label: 'Instructori' },
  { id: 'preturi', label: 'Prețuri' },
  { id: 'contact', label: 'Contact' },
  { id: 'faq', label: 'FAQ' },
];

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <a href="#acasa" className="flex items-center gap-2.5 text-white">
          <span className="text-[#1E6FFF]"><SteeringIcon className="w-8 h-8" /></span>
          <span className="font-extrabold text-lg tracking-tight">AutoSafe<span className="text-[#FF6B00]"> Driving</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-white/75 hover:text-white transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex btn-orange px-5 py-2.5 rounded-full text-sm">Înscrie-te Acum</a>
          <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Meniu">
            <Icon d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-white/10 px-5 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-white/80 py-1">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 road-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F2C]/60 to-[#0A0F2C]" />
      {/* Speedometer SVG */}
      <svg className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[700px] opacity-20 hidden lg:block" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#1E6FFF" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="#1E6FFF" strokeWidth="1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 1.5 - Math.PI * 0.75;
          const x1 = 100 + Math.cos(a) * 70;
          const y1 = 100 + Math.sin(a) * 70;
          const x2 = 100 + Math.cos(a) * (i % 3 === 0 ? 84 : 78);
          const y2 = 100 + Math.sin(a) * (i % 3 === 0 ? 84 : 78);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A8BFF" strokeWidth={i % 3 === 0 ? 2 : 1} />;
        })}
        <line x1="100" y1="100" x2="155" y2="70" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="100" r="6" fill="#FF6B00" />
      </svg>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs uppercase tracking-widest text-white/80 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            Școală de șoferi · Iași
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight reveal">
            Conduce cu Încredere.<br />
            <span className="gradient-text">Pornește de Aici.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl reveal">
            AutoSafe Driving — Școala de șoferi din Iași cu <strong className="text-white">4.7★</strong> pe Google și premiul <strong className="text-white">Firma de Aur</strong> 5 ani consecutiv.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 reveal">
            <a href="#contact" className="btn-orange px-7 py-3.5 rounded-full">Înscrie-te Online</a>
            <a href="#preturi" className="btn-outline px-7 py-3.5 rounded-full">Descoperă Pachetele</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/60 reveal">
            <div className="flex items-center gap-2"><span className="text-yellow-400">★★★★★</span> 4.7 · 104 recenzii</div>
            <div className="hidden sm:block">·</div>
            <div className="hidden sm:flex items-center gap-2"><span className="text-[#FF6B00]">●</span> ARR Autorizat</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const r3 = useRef<HTMLSpanElement>(null);
  const r4 = useRef<HTMLSpanElement>(null);
  useCounter(4.7, r1);
  useCounter(104, r2);
  useCounter(5, r3);
  useCounter(9, r4);
  const items = [
    { ref: r1, label: 'Rating Google', suffix: '★' },
    { ref: r2, label: 'Recenzii pozitive', suffix: '+' },
    { ref: r3, label: 'Firma de Aur', suffix: '×' },
    { ref: r4, label: 'Instructori & personal', suffix: '' },
  ];
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="glass border border-white/10 rounded-3xl p-6 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                <span ref={s.ref}>0</span><span className="text-[#FF6B00]">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-white/60 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { t: 'Instructori Certificați', d: 'Răbdători, calmi, dedicați rezultatelor tale.', i: 'M16 11a4 4 0 10-8 0 4 4 0 008 0zM3 21a9 9 0 0118 0' },
    { t: 'Flotă Modernă', d: 'Autovehicule bine întreținute, manuală și automată.', i: 'M3 13l2-5a3 3 0 013-2h8a3 3 0 013 2l2 5M5 17h14M7 17v2M17 17v2M5 13h14' },
    { t: 'Transparență Totală', d: 'Prețuri clare, fără costuri ascunse.', i: 'M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { t: 'Programări Flexibile', d: 'Adaptate programului tău, inclusiv weekend.', i: 'M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z' },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">De ce AutoSafe?</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Pregătire premium pentru drumul tău</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {feats.map((f, i) => (
            <div key={i} className="card-lift glass border border-white/10 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 rounded-xl bg-[#1E6FFF]/15 text-[#4A8BFF] flex items-center justify-center mb-5">
                <Icon d={f.i} />
              </div>
              <h3 className="text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: 'Recomand cu toată încrederea AutoSafe. Instructor: Ștefan Rață — foarte calm și cu o abordare aparte.', n: 'Rareș D.' },
    { q: '5 stele pentru Chirilă Alexandru. Cel mai bun, calm și dedicat instructor!', n: 'Hlihor I.' },
    { q: 'Instruirea practică și teoretică a fost excelentă. Voi recomanda tuturor.', n: 'Elev verificat Google' },
  ];
  return (
    <section className="py-24 bg-[#0F1638]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 reveal">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Ce spun elevii</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Recenzii reale de pe Google</h2>
          </div>
          <div className="text-white/60 text-sm">★★★★★ 4.7 / 5 · 104 recenzii</div>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="card-lift glass border border-white/10 rounded-2xl p-7 reveal">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-white/85 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E6FFF] to-[#FF6B00] flex items-center justify-center font-bold text-sm">{t.n[0]}</div>
                <div>
                  <div className="font-semibold text-sm">{t.n}</div>
                  <div className="text-xs text-white/50">Google Reviews</div>
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#FF6B00]/30 bg-gradient-to-br from-[#0F1638] via-[#0A0F2C] to-[#0A0F2C] p-10 lg:p-16 reveal">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#FF6B00]/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFB45A] to-[#FF6B00] flex items-center justify-center shadow-[0_20px_60px_-20px_rgba(255,107,0,0.6)]">
                  <div className="text-center text-[#0A0F2C]">
                    <div className="text-3xl font-black leading-none">FIRMA</div>
                    <div className="text-5xl font-black leading-none my-1">de AUR</div>
                    <div className="text-xs font-bold tracking-widest">2022 — 2026</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Premii & recunoaștere</div>
              <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">5 ani consecutiv "Firma de Aur"</h2>
              <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-2xl">AutoSafe Driving a fost premiată cinci ani la rând cu distincția "Firma de Aur" pentru performanță, calitatea serviciilor și încrederea clienților din Iași.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['2022', '2023', '2024', '2025', '2026'].map((y) => (
                  <span key={y} className="px-4 py-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF8A33] font-semibold text-sm">{y}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categorii() {
  const cats = [
    {
      code: 'B', name: 'Autoturism', color: '#1E6FFF',
      rows: [
        ['Vârsta minimă', '18 ani'],
        ['Ore teorie', '30 ore (legislație + cunoașterea vehiculului + condus preventiv)'],
        ['Ore practică', 'minimum 30 ședințe (50 min/ședință)'],
        ['Durată curs', '3–4 luni'],
        ['Acte necesare', 'CI (copie), fișă medicală (1 an), aviz psihologic, cazier "examen auto" (6 luni), taxă permis 89 RON'],
        ['Disponibil', 'cutie manuală sau automată'],
      ],
    },
    {
      code: 'B-Auto', name: 'Automată', color: '#4A8BFF',
      rows: [
        ['Condiții', 'aceleași ca pentru categoria B'],
        ['Recomandat pentru', 'traficul urban din Iași'],
        ['Ideal pentru', 'cei care vor să se concentreze pe trafic, nu pe ambreiaj'],
      ],
    },
    {
      code: 'C', name: 'Autocamion', color: '#FF6B00',
      rows: [
        ['Vârsta minimă', '21 ani (sau 18 ani cu calificare profesională CPC)'],
        ['Condiție prealabilă', 'deținerea categoriei B'],
        ['Ore teorie', '140 ore (conform legislație)'],
        ['Ore practică', 'minimum 30 ședințe'],
        ['Acte necesare', 'CI, fișă medicală, aviz psihologic, cazier, copie permis B'],
      ],
    },
    {
      code: 'D', name: 'Autocar / Autobuz', color: '#FF8A33',
      rows: [
        ['Vârsta minimă', '24 ani'],
        ['Condiție prealabilă', 'deținerea categoriei B'],
        ['Ore teorie', '140 ore'],
        ['Ore practică', 'minimum 30 ședințe'],
      ],
    },
    {
      code: 'CE', name: 'Autotren (cap tractor + semiremorcă)', color: '#1E6FFF',
      rows: [
        ['Condiție prealabilă', 'deținerea categoriei C'],
        ['Specializare', 'transport profesional'],
      ],
    },
  ];
  return (
    <section id="categorii" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Categorii Permis</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Pregătire completă pentru fiecare categorie</h2>
          <p className="mt-4 text-white/70 text-lg">La AutoSafe Driving oferim pregătire completă pentru mai multe categorii de permis, cu instructori specializați și vehicule adecvate fiecărui tip de curs.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {cats.map((c, i) => (
            <div key={i} className="card-lift glass border border-white/10 rounded-2xl p-7 reveal">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl" style={{ background: `${c.color}25`, color: c.color, border: `1px solid ${c.color}55` }}>{c.code}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Categoria {c.code} <span className="text-white/55 font-medium">— {c.name}</span></h3>
                  <dl className="mt-4 divide-y divide-white/5">
                    {c.rows.map(([k, v], j) => (
                      <div key={j} className="py-2.5 grid grid-cols-3 gap-3 text-sm">
                        <dt className="text-white/55">{k}</dt>
                        <dd className="col-span-2 text-white/90">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href="#contact" className="mt-5 inline-flex btn-outline px-5 py-2 rounded-full text-sm">Solicită Detalii</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flota() {
  const cars = [
    { name: 'Dacia Logan', brand: 'Dacia', model: 'Logan', year: '2022', gear: 'Manuală', engine: '1.0 TCe', fuel: 'Benzină' },
    { name: 'Dacia Sandero', brand: 'Dacia', model: 'Sandero', year: '2023', gear: 'Manuală', engine: '1.0 SCe', fuel: 'Benzină' },
    { name: 'Skoda Octavia', brand: 'Skoda', model: 'Octavia', year: '2021', gear: 'Automată', engine: '1.5 TSI', fuel: 'Benzină' },
    { name: 'Ford Transit / Iveco Daily', brand: 'Ford / Iveco', model: 'Transit / Daily', year: '—', gear: 'Manuală', engine: '—', fuel: 'Diesel', note: 'pentru categoriile C/D' },
  ];
  const tags = ['Frâne ABS', 'Airbag-uri', 'Duble comenzi', 'Aer condiționat', 'Centuri de siguranță'];
  return (
    <section id="flota" className="py-24 lg:py-32 bg-[#0F1638]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Flota Auto</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Vehicule moderne, sigure, întreținute</h2>
          <p className="mt-4 text-white/70 text-lg">Parcul nostru auto este modern, bine întreținut și pregătit pentru a-ți oferi o experiență de conducere sigură și confortabilă. Transparența față de viitorii elevi include și prezentarea vehiculelor cu care vor învăța.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cars.map((c, i) => (
            <div key={i} className="card-lift glass border border-white/10 rounded-2xl overflow-hidden reveal">
              <div className="relative h-52 bg-gradient-to-br from-[#1a2350] via-[#0F1638] to-[#0A0F2C] flex items-center justify-center">
                <svg viewBox="0 0 200 100" className="w-2/3 opacity-60" fill="none" stroke="#4A8BFF" strokeWidth="1.5">
                  <path d="M20 70 L40 50 L70 45 L130 45 L160 50 L180 70 L180 80 L20 80 Z" fill="#1E6FFF" fillOpacity="0.15" />
                  <circle cx="55" cy="80" r="10" fill="#0A0F2C" />
                  <circle cx="145" cy="80" r="10" fill="#0A0F2C" />
                  <path d="M50 55 L70 50 L130 50 L150 55" />
                </svg>
                <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-white/40 bg-black/40 px-2 py-1 rounded">[photo placeholder]</div>
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold">{c.name}</div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                  <div><span className="text-white/50">Marcă:</span> <span className="text-white/95 font-medium">{c.brand}</span></div>
                  <div><span className="text-white/50">Model:</span> <span className="text-white/95 font-medium">{c.model}</span></div>
                  <div><span className="text-white/50">An:</span> <span className="text-white/95 font-medium">{c.year}</span></div>
                  <div><span className="text-white/50">Cutie viteze:</span> <span className="text-white/95 font-medium">{c.gear}</span></div>
                  <div><span className="text-white/50">Motor:</span> <span className="text-white/95 font-medium">{c.engine}</span></div>
                  <div><span className="text-white/50">Combustibil:</span> <span className="text-white/95 font-medium">{c.fuel}</span></div>
                </div>
                {c.note && <div className="mt-3 text-xs text-[#FF8A33]">{c.note}</div>}
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-[#1E6FFF]/10 text-[#4A8BFF] border border-[#1E6FFF]/20">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-white/55 text-center reveal">
          <span className="text-[#FF8A33]">*</span> exemplu — urmează a fi completat cu flotă reală. Flota noastră este actualizată periodic. Contactați-ne pentru detalii actualizate despre vehiculele disponibile.
        </div>
      </div>
    </section>
  );
}

function Instructori() {
  const team = [
    { n: 'Alexandru Chirilă', i: 'AC', spec: 'Categoria B (manual & automat)', exp: 'Instructor certificat, atestat ARR', style: 'Calm, dedicat și atent la fiecare elev. Pune accent pe tehnica corectă și pe siguranța în trafic.', q: 'Cel mai bun, calm și dedicat instructor!', by: 'elev verificat Google' },
    { n: 'Cătălin Mămăligă', i: 'CM', spec: 'Categoria B', exp: 'Instructor certificat', style: 'Direct și eficient. Te ajută să înțelegi traficul real din Iași, nu doar teoria.', q: 'Recomand cu încredere pe dl. Mămăligă — garantat iei permisul.', by: 'elev verificat' },
    { n: 'Ștefan Rață', i: 'ȘR', spec: 'Categoria B', exp: 'Instructor certificat', style: 'Abordare aparte, relaxat și profesionist. Creează o atmosferă liniștitoare în mașină.', q: 'Foarte calm, cu o abordare aparte. Recomand!', by: 'Rareș D.' },
  ];
  return (
    <section id="instructori" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Instructori</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Ghizi răbdători, încredere pas cu pas</h2>
          <p className="mt-4 text-white/70 text-lg">La AutoSafe Driving, instructorii noștri sunt mai mult decât profesori — sunt ghizi răbdători care îți construiesc încrederea pas cu pas, indiferent de nivelul tău de experiență.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <div key={i} className="card-lift glass border border-white/10 rounded-2xl p-7 reveal">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E6FFF] to-[#FF6B00] flex items-center justify-center text-3xl font-black mb-5">{m.i}</div>
              <h3 className="text-xl font-bold">{m.n}</h3>
              <div className="mt-1 text-sm text-[#4A8BFF]">{m.spec}</div>
              <div className="mt-1 text-xs text-white/55">{m.exp}</div>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">{m.style}</p>
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="text-yellow-400 text-sm mb-1.5">★★★★★</div>
                <p className="text-sm italic text-white/80">"{m.q}"</p>
                <div className="mt-1.5 text-xs text-white/50">— {m.by}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/55 text-center reveal">Echipa noastră include instructori pentru categoriile B, C și D. Contactați-ne pentru a afla disponibilitatea instructorilor specializați.</p>
      </div>
    </section>
  );
}

function Preturi() {
  const plans = [
    {
      name: 'Pachet Standard', sub: 'Categoria B Manual', price: '2.800', badge: 'Cel mai ales',
      items: ['30 ore teorie (legislație, cunoașterea vehiculului, condus preventiv)', '30 ședințe practică (50 min/ședință)', 'Acces platformă teste online', 'Suport complet pentru dosar (îndrumări acte)', 'Programare examen'],
      cta: 'Înscrie-te Acum', featured: true,
    },
    {
      name: 'Pachet Automată', sub: 'Categoria B Automat', price: '3.100',
      items: ['Toate beneficiile pachetului Standard', 'Vehicul cu transmisie automată', 'Recomandat pentru traficul urban din Iași'],
      cta: 'Înscrie-te Acum',
    },
    {
      name: 'Pachet Profesional', sub: 'Categoria C / D', price: 'La cerere',
      items: ['Pregătire completă conform legislației', 'CPC inițial / periodic', 'Instructori specializați transport profesional'],
      cta: 'Solicită Ofertă',
    },
  ];
  return (
    <section id="preturi" className="py-24 lg:py-32 bg-[#0F1638]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Prețuri & Pachete</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Transparență totală, fără surprize</h2>
          <p className="mt-4 text-white/70 text-lg">Credem în transparență totală. Toate prețurile incluse mai jos acoperă integral pregătirea pentru examen, fără taxe ascunse.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <div key={i} className={`card-lift relative rounded-2xl p-8 reveal flex flex-col ${p.featured ? 'border-2 border-[#FF6B00] bg-gradient-to-b from-[#1E6FFF]/10 to-transparent' : 'border border-white/10 glass'}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-orange text-xs">{p.badge}</div>
              )}
              <div className="text-sm text-white/60">{p.sub}</div>
              <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black">{p.price}</span>
                {p.price !== 'La cerere' && <span className="text-white/60 font-medium">RON</span>}
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {p.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-sm text-white/80">
                    <span className="text-[#FF6B00] shrink-0 mt-0.5">✓</span><span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 text-center px-6 py-3 rounded-full ${p.featured ? 'btn-orange' : 'btn-outline'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-4xl mx-auto text-sm text-white/60 space-y-2 reveal">
          <p><span className="text-[#FF8A33]">*</span> Taxele pentru dosar (fișă medicală, aviz psihologic, cazier, taxa permis 89 RON) nu sunt incluse în prețul cursului și sunt suportate de cursant. Prețurile pot varia — contactați-ne pentru tariful actualizat.</p>
          <p className="text-white/75">💳 <strong>Posibilitate de plată în rate.</strong> Discutați cu echipa noastră.</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4500); };
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">Contact & Înscriere</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Hai să începem împreună drumul tău</h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6 reveal">
            <div className="glass border border-white/10 rounded-2xl p-7 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 text-[#FF8A33] flex items-center justify-center"><Icon d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13zM12 11a2 2 0 100-4 2 2 0 000 4z" className="w-5 h-5" /></div>
                <div><div className="text-xs uppercase tracking-wider text-white/50">Adresă</div><div className="font-semibold">Bulevardul Dacia nr. 29, Iași, România</div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1E6FFF]/15 text-[#4A8BFF] flex items-center justify-center"><Icon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" className="w-5 h-5" /></div>
                <div><div className="text-xs uppercase tracking-wider text-white/50">Telefon</div><div className="font-semibold">0712 XXX XXX</div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1E6FFF]/15 text-[#4A8BFF] flex items-center justify-center"><Icon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" className="w-5 h-5" /></div>
                <div><div className="text-xs uppercase tracking-wider text-white/50">Email</div><div className="font-semibold">contact@autosafedriving.ro</div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 text-[#FF8A33] flex items-center justify-center"><Icon d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5" /></div>
                <div><div className="text-xs uppercase tracking-wider text-white/50">Program</div><div className="font-semibold">Luni–Vineri 09:00–19:00<br />Sâmbătă 09:00–14:00</div></div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
              <iframe
                title="Hartă AutoSafe Driving"
                src="https://www.google.com/maps?q=Bulevardul+Dacia+29,+Iași,+Romania&output=embed"
                className="w-full h-full grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="glass border border-white/10 rounded-2xl p-7 space-y-4 reveal">
            <h3 className="text-xl font-bold">Înscriere Online</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nume complet"><input required type="text" className="input" placeholder="Numele tău" /></Field>
              <Field label="Număr de telefon"><input required type="tel" className="input" placeholder="07XX XXX XXX" /></Field>
            </div>
            <Field label="Adresă email"><input required type="email" className="input" placeholder="email@exemplu.ro" /></Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Categorie permis dorită">
                <select className="input" defaultValue="">
                  <option value="" disabled>Alege categoria</option>
                  <option>B Manual</option><option>B Automat</option><option>C</option><option>D</option><option>CE</option><option>Nu știu încă</option>
                </select>
              </Field>
              <Field label="Instructor preferat">
                <select className="input" defaultValue="">
                  <option value="" disabled>Alege instructorul</option>
                  <option>Alexandru Chirilă</option><option>Cătălin Mămăligă</option><option>Ștefan Rață</option><option>Fără preferință</option>
                </select>
              </Field>
            </div>
            <Field label="Disponibilitate preferată">
              <select className="input" defaultValue="">
                <option value="" disabled>Când ești disponibil?</option>
                <option>Dimineața</option><option>Prânz</option><option>Seara</option><option>Weekend</option>
              </select>
            </Field>
            <Field label="Mesaj / Întrebări"><textarea rows={4} className="input" placeholder="Scrie-ne orice întrebare..." /></Field>
            <button type="submit" className="btn-orange w-full py-3.5 rounded-full">{sent ? '✓ Cererea a fost trimisă!' : 'Trimite Cererea'}</button>
            <p className="text-xs text-white/50 text-center">Datele tale sunt confidențiale și nu vor fi partajate cu terți.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/55 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function FAQ() {
  const items = [
    ['Ce acte am nevoie pentru înscriere?', 'Fișă medicală auto (valabilă 1 an), aviz psihologic, certificat de cazier judiciar cu mențiunea "examen auto" (valabil 6 luni), copie CI și taxa de permis de 89 RON plătită la CEC Bank sau SelfPay.'],
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
    <section id="faq" className="py-24 lg:py-32 bg-[#0F1638]/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center reveal">
          <div className="text-xs uppercase tracking-widest text-[#FF6B00] font-semibold">FAQ</div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight">Întrebări frecvente</h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map(([q, a], i) => (
            <div key={i} className="glass border border-white/10 rounded-xl overflow-hidden reveal">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-white/5 transition-colors">
                <span className="font-semibold">{q}</span>
                <span className={`text-[#FF6B00] text-2xl transition-transform shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-white/75 leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B22]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 text-white">
            <span className="text-[#1E6FFF]"><SteeringIcon className="w-8 h-8" /></span>
            <span className="font-extrabold text-lg tracking-tight">AutoSafe<span className="text-[#FF6B00]"> Driving</span></span>
          </div>
          <p className="mt-4 text-white/60 text-sm max-w-md">Școală de șoferi premium în Iași. Pregătire completă pentru categoriile B, C, D și CE — cu instructori dedicați și transparență totală.</p>
          <a href="https://www.facebook.com/auto.safe.driving/" target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <span className="w-9 h-9 rounded-full bg-[#1E6FFF]/15 flex items-center justify-center text-[#4A8BFF]"><Icon d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" className="w-4 h-4" /></span>
            Facebook
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Navigare</div>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="text-white/70 hover:text-white">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Bd. Dacia nr. 29, Iași</li>
            <li>0712 XXX XXX</li>
            <li>contact@autosafedriving.ro</li>
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF8A33] text-xs font-bold">
            🏆 Firma de Aur 2022–2026
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 px-5 lg:px-8 text-xs text-white/50 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div>© 2025 AutoSafe Driving SRL · CUI 46299076 · Toate drepturile rezervate</div>
        <div>Design premium · Iași, România</div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href="https://wa.me/40712000000" target="_blank" rel="noopener"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center text-white hover:scale-110 transition-transform"
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
    <div className="min-h-screen bg-[#0A0F2C] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Awards />
      <Categorii />
      <Flota />
      <Instructori />
      <Preturi />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppFab />
      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.95rem;
          transition: all .2s;
        }
        .input:focus { outline: none; border-color: #1E6FFF; background: rgba(30,111,255,0.06); box-shadow: 0 0 0 4px rgba(30,111,255,0.12); }
        .input::placeholder { color: rgba(255,255,255,0.35); }
        select.input { appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff80' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
        select.input option { background: #0F1638; color: white; }
      `}</style>
    </div>
  );
}
