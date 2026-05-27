export const SteeringIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 14v7" />
    <path d="M5 9c2 1.5 4 2 7 2s5-.5 7-2" />
  </svg>
);

export const Icon = ({ d, className = "w-6 h-6" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
