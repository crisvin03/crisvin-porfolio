import { Link, NavLink } from "react-router-dom";

const linkCls = ({ isActive }) =>
  `text-sm transition-colors ${isActive ? "text-sky-300" : "text-slate-300 hover:text-sky-300"}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#070b15]/70 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-slate-200 tracking-wider">&lt;CH /&gt;</Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/skills" className={linkCls}>Skills</NavLink>
          <NavLink to="/projects" className={linkCls}>Projects</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </nav>
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 transition"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
}
