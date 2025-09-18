import Navbar from "../components/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16">{children}</main>
      <footer className="py-10 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Crisvin Habitsuella</span>
        </div>
      </footer>
    </>
  );
}
