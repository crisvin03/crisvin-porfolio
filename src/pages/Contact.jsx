// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";

/* ---------------- animations ---------------- */
const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

/* ---------------- CV DATA ---------------- */
const cvData = {
  name: "Crisvin Habitsuela",
  title: "Full-Stack Developer",
  location: "Philippines · Remote",
  email: "crisvin.habitsuela@sorsu.edu.ph",
  phone: "+63 992 455 4873",
  website: "github.com/crisvin03",
  avatarUrl: "",
  summary:
    "Web & Mobile App Developer with 2+ years of experience building responsive applications. Product-minded, performance-focused, and comfortable across the stack (React/Next.js, Node/Express, DBs). I care about DX, accessibility, and maintainable systems.",
  skills: {
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
    Backend: ["Node.js", "Express", "PHP/Laravel", "Auth", "REST/JSON"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "Firestore"],
    Mobile: ["React Native", "Expo", "Flutter (Dart)"],
    Tooling: ["Git/GitHub", "CI/CD (basic)", "Vercel", "Firebase"],
    Languages: ["TypeScript/JavaScript", "PHP", "Dart", "SQL"],
  },
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Open Source",
      period: "2021 — Present",
      bullets: [
        "Built websites, internal tools, and APIs for small businesses.",
        "React/Next.js UIs with Tailwind & motion; accessible, responsive interfaces.",
        "Node/Express back-ends: auth, REST/JSON, integrations; deployments on Vercel.",
        "Prototyped mobile apps using React Native / Expo and Flutter + Firebase.",
      ],
    },
  ],
  educationStrict: [
    { heading: "Bachelor of Science in Information Technology", place: "Sorsogon State University – Bulan Campus", period: "2022 – Present" },
    { heading: "High School", place: "Bulan National High School", period: "2016 – 2022" },
    { heading: "Elementary", place: "Bulan North Central School A", period: "2010 – 2016" },
  ],
  projects: [
    { name: "lms-SorSU-BC", link: "https://github.com/crisvin03/lms-SorSU-BC", summary: "Learning Management System prototype for SorSU-BC.", tech: ["React", "Node", "Express", "MongoDB"] },
    { name: "StoreMe", link: "https://github.com/crisvin03/StoreMe", summary: "Inventory/store management app focused on simplicity.", tech: ["React", "Vite", "Tailwind", "Firebase"] },
    { name: "Storya", link: "https://github.com/crisvin03/Storya", summary: "Lightweight storytelling/blogging playground.", tech: ["React", "Express", "MongoDB"] },
    { name: "bumo", link: "https://github.com/crisvin03/bumo", summary: "Mobile-first experiment / utilities bundle.", tech: ["React Native", "Expo"] },
  ],
  tags: ["Web", "Mobile", "APIs", "Performance", "DX"],
};

/* ---------------- CV TEMPLATE (one-page print) ---------------- */
function buildCVHtml(d) {
  const chip = (t) => `<span class="chip">${t}</span>`;
  const chipGroup = (title, arr) => `
    <div class="skill-group">
      <div class="skill-title">${title}</div>
      <div class="chip-row">${arr.map(chip).join("")}</div>
    </div>`;

  const exp = d.experience.map((e) => `
      <div class="block">
        <div class="block-head">
          <div class="h-left">${e.role} · <span class="muted">${e.company}</span></div>
          <div class="muted">${e.period}</div>
        </div>
        <ul class="bullets">
          ${e.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>`).join("");

  const educationStrict = d.educationStrict.map((e) => `
      <div class="block tight">
        <div class="block-head">
          <div class="h-left">${e.heading}</div>
          <div class="muted">${e.period}</div>
        </div>
        <div class="muted">${e.place}</div>
      </div>`).join("");

  const projects = d.projects?.map((p) => `
      <div class="p-card">
        <div class="p-head">
          <div class="p-title">${p.name}</div>
          ${p.link ? `<a class="p-link" href="${p.link}">${new URL(p.link).host.replace("www.","")}</a>` : ""}
        </div>
        <div class="p-desc">${p.summary}</div>
        <div class="chip-row">${(p.tech || []).map(chip).join("")}</div>
      </div>`).join("");

  return `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8"/>
    <title></title><!-- cleared to avoid header title -->
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <style>
      :root{
        --bg:#0a0f1d; --paper:#0f172a; --ink:#e5e7eb; --muted:#9aa4b2;
        --line:#1e293b; --chip:#0b1220; --grad1:#38bdf8; --grad2:#a78bfa;
      }
      /* IMPORTANT: zero margins so the browser has no header/footer area */
      @page { margin: 0; }
      *{ box-sizing:border-box; }
      html,body{ height:100%; }
      body{
        margin:0; color:var(--ink); background:var(--bg);
        font: 12px/1.45 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
        -webkit-print-color-adjust:exact; print-color-adjust:exact;
      }
      .sheet{ max-width:920px; margin:0 auto; padding:8mm; } /* use inner padding instead of page margin */

      /* Header */
      .cv-head{
        position:relative; overflow:hidden; border:1px solid var(--line); border-radius:14px;
        background:
          radial-gradient(1000px 260px at -10% -40%, rgba(56,189,248,.18), transparent 60%),
          radial-gradient(1000px 260px at 110% -40%, rgba(167,139,250,.18), transparent 60%),
          var(--paper);
        padding:14px 16px;
      }
      .title-line{ display:flex; justify-content:space-between; align-items:flex-end; gap:12px; }
      .name{ font-size:24px; font-weight:800; letter-spacing:.2px; }
      .role{ font-size:13px; font-weight:700; background:linear-gradient(90deg,var(--grad1),var(--grad2)); -webkit-background-clip:text; background-clip:text; color:transparent; }
      .meta{ color:var(--muted); font-size:11.5px; margin-top:2px; }
      .contact a{ color:var(--muted); text-decoration:none; border-bottom:1px dotted var(--muted); }
      .tag-row{ margin-top:6px; display:flex; flex-wrap:wrap; gap:5px; }
      .tag{ font-size:10.5px; border:1px solid var(--line); background:#0b1220; padding:3px 7px; border-radius:999px; color:#e2e8f0; }

      /* Grid */
      .grid{ display:grid; grid-template-columns: 31% 1fr; gap:10px; margin-top:10px; }
      .panel{ border:1px solid var(--line); border-radius:14px; background:var(--paper); padding:12px 14px; }

      /* Sidebar */
      .avatar{ width:76px; height:76px; border-radius:12px; border:1px solid var(--line); background:#0b1220; display:grid; place-items:center; color:#74809a; margin-bottom:8px; font-size:11px; }
      .section-title{ margin:10px 0 6px; font-weight:800; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#c7d2fe; }
      .chip-row{ display:flex; flex-wrap:wrap; gap:5px; }
      .chip{ border:1px solid var(--line); background:var(--chip); padding:3px 7px; border-radius:999px; font-size:10.5px; color:#e2e8f0; }
      .skill-group + .skill-group{ margin-top:6px; }
      .skill-title{ font-weight:700; color:#bae6fd; margin-bottom:3px; font-size:11.5px; }

      /* Main content */
      h3{ margin:0 0 6px; font-size:13px; font-weight:800; color:#c7d2fe; }
      .summary{ color:#d1d5db; }
      .block{ margin-bottom:8px; }
      .block.tight{ margin-bottom:6px; }
      .block-head{ display:flex; justify-content:space-between; gap:10px; }
      .h-left{ font-weight:700; }
      .muted{ color:var(--muted); }
      .bullets{ margin:4px 0 0 16px; padding:0; }
      .bullets li{ margin:2px 0; }

      /* Projects mini-cards */
      .projects{ display:grid; grid-template-columns: 1fr 1fr; gap:8px; }
      .p-card{ border:1px solid var(--line); border-radius:10px; padding:8px 10px; background:#0f172a; }
      .p-head{ display:flex; justify-content:space-between; align-items:center; gap:8px; }
      .p-title{ font-weight:800; color:#e2e8f0; }
      .p-link{ color:#9aa4b2; font-size:11px; text-decoration:none; border-bottom:1px dotted #566; }
      .p-desc{ color:#d1d5db; margin:4px 0 5px; font-size:11.5px; }

      @media print {
        a{ color:inherit; text-decoration:none; }
      }
    </style>
  </head>
  <body>
    <div class="sheet">
      <header class="cv-head">
        <div class="title-line">
          <div>
            <div class="name">${d.name}</div>
            <div class="role">${d.title}</div>
            <div class="meta">${d.location}</div>
          </div>
          <div class="meta contact" style="text-align:right">
            <div>${d.email}</div>
            <div>${d.phone}</div>
            <div><a href="https://${d.website}">${d.website}</a></div>
          </div>
        </div>
        ${d.tags?.length ? `<div class="tag-row">${d.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>` : ""}
      </header>

      <div class="grid">
        <aside class="panel">
          <div class="section-title">Profile</div>
          ${d.avatarUrl
            ? `<div class="avatar"><img src="${d.avatarUrl}" alt="" style="width:100%;height:100%;object-fit:cover"/></div>`
            : `<div class="avatar">No Photo</div>`}
          <div class="section-title">Skills</div>
          ${Object.entries(d.skills).map(([k, arr]) => `
              <div class="skill-group">
                <div class="skill-title">${k}</div>
                <div class="chip-row">${arr.map((x) => `<span class="chip">${x}</span>`).join("")}</div>
              </div>`).join("")}
        </aside>

        <main class="panel">
          <section class="block">
            <h3>Summary</h3>
            <div class="summary">${d.summary}</div>
          </section>

          <section class="block">
            <h3>Experience</h3>
            ${exp}
          </section>

          <section class="block">
            <h3>Education</h3>
            ${educationStrict}
          </section>

          ${d.projects?.length ? `
            <section class="block">
              <h3>Projects</h3>
              <div class="projects">${projects}</div>
            </section>` : ""}
        </main>
      </div>
    </div>

    <script>
      // Try to remove print title completely
      document.title = "";
      window.addEventListener('load', () => {
        const sheet = document.querySelector('.sheet');
        const fit = () => {
          const winH = window.innerHeight * 0.97;
          const h = sheet.scrollHeight;
          let scale = 1;
          if (h > winH) {
            scale = (winH / h) * 0.995;
            sheet.style.transform = 'scale(' + scale + ')';
            sheet.style.transformOrigin = 'top left';
            sheet.style.width = (100 / scale) + '%';
          }
        };
        fit();
        setTimeout(() => { fit(); window.print(); }, 250);
      });
    </script>
  </body>
  </html>`;
}

/* ---------------- Download handler ---------------- */
function handleDownloadCV() {
  const html = buildCVHtml(cvData);
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
}

/* ---------------- Page component ---------------- */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-2 h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"
          />
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-slate-300/90 max-w-2xl mx-auto"
          >
            Let’s build something great together.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-6 items-start"
        >
          {/* Form */}
          <motion.div
            variants={card}
            whileHover={{ y: -4, boxShadow: "0 20px 60px -20px rgba(56,189,248,0.35)" }}
            className="relative rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-500/10 to-fuchsia-500/10 blur-2xl" />
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-1">
                  <span className="text-sm text-slate-300">Name</span>
                  <input className="rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-slate-200 outline-none focus:border-sky-500/60 transition" placeholder="Your name" />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-slate-300">Email</span>
                  <input type="email" className="rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-slate-200 outline-none focus:border-sky-500/60 transition" placeholder="you@example.com" />
                </label>
              </div>
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Message</span>
                <textarea rows={5} className="rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2 text-slate-200 outline-none focus:border-sky-500/60 transition" placeholder="Tell me about your project…" />
              </label>
              <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:opacity-90 transition shadow text-white font-medium">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          </motion.div>

          {/* Contact + CV */}
          <motion.div variants={container} className="grid gap-4">
            {[
              { icon: Mail, label: cvData.email, href: `mailto:${cvData.email}` },
              { icon: Phone, label: cvData.phone },
              { icon: MapPin, label: "Philippines / Bulan Sorsogon" },
            ].map((info) => (
              <motion.div
                key={info.label}
                variants={card}
                whileHover={{ y: -4, boxShadow: "0 20px 60px -20px rgba(56,189,248,0.35)" }}
                className="flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 transition"
              >
                <info.icon className="h-5 w-5 text-sky-300" />
                {info.href ? (
                  <a href={info.href} className="hover:text-sky-300 transition">
                    {info.label}
                  </a>
                ) : (
                  <span className="text-slate-300">{info.label}</span>
                )}
              </motion.div>
            ))}

            <motion.button
              variants={card}
              whileHover={{ y: -3, boxShadow: "0 20px 50px -20px rgba(168,85,247,0.35)" }}
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70 text-slate-200 transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </motion.button>

            {/* Tip for perfect output (users can miss this setting) */}
            <p className="text-xs text-slate-500">
              Download my CV and hire me for your next project </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
