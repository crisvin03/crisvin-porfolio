export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 shadow-[0_0_60px_-25px_rgba(56,189,248,0.3)] ${className}`}>
      {children}
    </div>
  );
}
