import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nirali Gupta, Full Stack Python Developer" },
      {
        name: "description",
        content:
          "Portfolio of Nirali Gupta, Full Stack Python Developer building scalable APIs, data visualization dashboards and modern web apps with Django, FastAPI and React.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  Backend: ["Django", "FastAPI", "Django REST Framework", "REST APIs"],
  Frontend: ["React.js", "Next.js", "jQuery", "Tailwind", "Bootstrap"],
  Data: ["PostgreSQL", "MySQL", "Pandas", "NumPy", "Power BI"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const experience = [
  {
    role: "Project Assistant",
    company: "IIT Delhi",
    period: "Nov 2025 — Present",
    points: [
      "Building transportation data visualization dashboards.",
      "Developing REST APIs and web applications with Next.js + PostgreSQL.",
    ],
  },
  {
    role: "Python Developer",
    company: "Blue Brain Technology Pvt. Ltd.",
    period: "Nov 2024 — Nov 2025",
    points: [
      "Developed and deployed multiple FastAPI microservices.",
      "Integrated services with databases and authentication systems.",
    ],
  },
  {
    role: "Consultant (IT)",
    company: "Indian Council of Medical Research (ICMR)",
    period: "Jan 2024 — Nov 2024",
    points: [
      "Managed research websites and built data visualization tools.",
      "Implemented data cleaning pipelines and seamless database integration.",
    ],
  },
  {
    role: "Web Developer",
    company: "Raygain Technology (Outsourced to ICMR)",
    period: "Jun 2023 — Nov 2023",
    points: ["Developed Django web applications and designed relational databases."],
  },
  {
    role: "Junior ReactJS Developer",
    company: "Search Education Pvt. Ltd.",
    period: "Nov 2022 — May 2023",
    points: [
      "Built interactive UIs with React.js.",
      "Developed online exam portals and study material platforms.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Annova Solutions Pvt. Ltd.",
    period: "Mar 2022 — Jun 2022",
    points: ["Developed Django APIs and web apps with secure authentication."],
  },
];

const projects = [
  {
    title: "Transportation Network Data Visualization",
    stack: ["Python", "Django", "PostgreSQL", "Next.js"],
    desc: "REST API in Django serving transportation network data, visualized through interactive Next.js dashboards at IIT Delhi.",
  },
  {
  title: "Large-Scale Optimization 2026 Website",
  stack: ["Next.js"],
  desc: "Designed and developed the official website for LSO Summer School 2026 at IIT Delhi using Next.js. Built a responsive, modern interface showcasing event details, speakers, schedule, venue information, and registration with an optimized user experience."
  },
  {
    title: "Piei-Spims",
    stack: ["Python", "FastAPI"],
    desc: "Multiple FastAPI microservices integrated with databases and authentication systems, deployed to production.",
  },
  {
    title: "Glanceme AI",
    stack: ["Next.js", "Python", "REST APIs"],
    desc: "Responsive web interfaces in Next.js integrating backend APIs for real-time data and AI-driven user interaction.",
  },
  {
    title: "AI Screening for Pulmonary TB (ICMR)",
    stack: ["PHP", "JavaScript", "MySQL"],
    desc: "Aggregated chest X-ray data from 18 hospitals with structured cleaning pipelines to support an AI screening tool.",
  },
  {
    title: "Medical Shodhganga",
    stack: ["Django", "Python", "MySQL"],
    desc: "Platform for postgraduate students to submit dissertation topics, abstracts and collaborate on large-scale studies.",
  },
  {
    title: "New Born Screening Program",
    stack: ["Django", "Python", "MySQL"],
    desc: "Clinical data collection system for early diagnosis of metabolic, genetic and congenital newborn disorders.",
  },
  {
    title: "Policy Communication",
    stack: ["Django", "JavaScript", "MySQL"],
    desc: "Feedback system with admin dashboards visualizing scientist inputs to strengthen research policy formulation.",
  },
  {
    title: "Online Exam Portal",
    stack: ["React.js"],
    desc: "Exam platform with timer-based tests, real-time submission, automated results and role-based access.",
  },
  {
    title: "Covid-19 Hospital Management",
    stack: ["Django", "Python", "MySQL"],
    desc: "Centralized system for real-time bed availability, resource allocation and vaccine inventory tracking.",
  },
  {
    title: "Blood Bank Management",
    stack: ["Django", "Python", "MySQL"],
    desc: "Donor registration and urgent blood request notifications for efficient donation and storage management.",
  },
];

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Vikrant University, Gwalior", period: "2023 — 2025", meta: "CGPA 8.0" },
  { degree: "MBA (E-commerce)", school: "Jiwaji University, Gwalior", period: "2020 — 2022", meta: "CGPA 8.1" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "KRG, Jiwaji University, Gwalior", period: "2016 — 2019", meta: "66%" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Masthead />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Masthead() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-foreground">
          Nirali
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:niralig.8269@gmail.com"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-12">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Available for opportunities</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">Delhi, India</span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Full Stack <span className="text-accent">Python Developer</span>{" "}
          Building Scalable and Impactful Software.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {/* I'm Nirali Gupta, I design and build scalable web applications, REST APIs
          and data visualization platforms. Currently at IIT Delhi, previously with
          Blue Brain Technology, ICMR and more. */}
          I'm Nirali Gupta, and I design and build scalable web applications, REST APIs, and data visualization platforms.I am currently working at IIT Delhi and have previously worked with Blue Brain Technology, ICMR, and other organizations.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            ["4+", "Years experience"],
            ["10+", "Shipped projects"],
            ["6", "Companies & orgs"],
            ["3", "Degrees earned"],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="font-display text-4xl font-bold text-foreground md:text-5xl">{k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="01 — About" title="A brief introduction." />
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-2xl font-medium leading-relaxed text-foreground">
              I specialize in Python, Django, FastAPI, React, and Next.js. I enjoy
              solving real-world problems — whether that's a transportation dashboard
              at IIT Delhi, FastAPI microservices in production, or healthcare
              platforms for ICMR that help clinicians and researchers collaborate.
            </p>
            <p>
             I care about clean APIs, intuitive user interfaces, and maintainable code that remains reliable long after deployment. Always learning, always shipping.
            </p>
          </div>
          <aside className="paper h-fit p-6">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
              Currently
            </h3>
            <p className="mt-2 text-lg font-semibold text-foreground">
              Project Assistant, IIT Delhi
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Developing transportation network data visualization platforms and REST APIs.
            </p>
            <div className="my-5 rule" />
            <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
              Based in
            </h3>
            <p className="mt-2 text-foreground">Delhi, India</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="02 — Toolkit" title="Technologies I work with." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="paper p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
                {group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full bg-surface-2 px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="03 — Career" title="Where I've worked." />
        <ol className="space-y-8">
          {experience.map((e) => (
            <li
              key={e.company + e.period}
              className="grid gap-4 border-b border-border pb-8 last:border-b-0 md:grid-cols-[180px_1fr]"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {e.period}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{e.role}</h3>
                <p className="mt-1 font-medium text-accent">{e.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  const [feature, ...rest] = projects;
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="04 — Selected work" title="Projects & case studies." />

        <article className="paper mb-10 p-8">
          <div className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            Featured
          </div>
          <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            {feature.title}
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {feature.desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {feature.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.title} className="paper group p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    · {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="05 — Education" title="Academic background." />
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((e) => (
            <div key={e.degree} className="paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {e.period}
              </p>
              <h3 className="mt-3 text-lg font-bold text-foreground">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <p className="mt-4 inline-block rounded-full bg-surface-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground">
                {e.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          06 — Correspondence
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Let's build something <span className="text-accent">together</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
         Open to full-time opportunities, freelance projects, and exciting collaborations in full-stack development, API development, and data visualization.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:niralig.8269@gmail.com"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            niralig.8269@gmail.com
          </a>
          <a
            href="tel:+918269504267"
            className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            +91 82695 04267
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Nirali Gupta</p>
        <p>Designed & built with care</p>
      </div>
    </footer>
  );
}
