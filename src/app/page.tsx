const socialLinks = [
  { label: "GitHub", href: "https://github.com/omrylo-labs" },
  { label: "X", href: "https://x.com/omrylolabs" },
  { label: "YouTube", href: "https://www.youtube.com/@omrylolabs" },
  { label: "Hugging Face", href: "https://huggingface.co/omrylo" },
  { label: "Reddit", href: "https://www.reddit.com/user/omrylo/" },
  { label: "Instagram", href: "https://www.instagram.com/omrylolabs/" },
];

const buildItems = [
  {
    title: "Conversational Worlds",
    body: "Explore stories through natural conversation.",
  },
  {
    title: "Living Characters",
    body: "Characters can remember context, react to choices, and grow over time.",
  },
  {
    title: "Interactive Fiction",
    body: "Every decision can open a different path.",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050814] text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_34rem),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.18),transparent_26rem)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-6">
          <a className="flex items-center gap-3" href="/" aria-label="Omrylo home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_32px_rgba(34,211,238,0.18)]">
              <img
                alt=""
                className="h-7 w-7 rounded-full object-cover"
                src="/logo.png"
              />
            </span>
            <span className="text-sm font-medium tracking-wide text-slate-200">
              Omrylo
            </span>
          </a>
          <nav aria-label="Social links" className="hidden items-center gap-4 sm:flex">
            {socialLinks.slice(0, 3).map((link) => (
              <ExternalLink
                className="text-sm text-slate-400 transition hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </header>

        <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center">
          <div className="mb-8 grid h-28 w-28 place-items-center rounded-full border border-cyan-200/20 bg-[#0B1020] shadow-[0_0_80px_rgba(139,92,246,0.28)]">
            <img
              alt="Omrylo portal logo"
              className="h-20 w-20 rounded-full object-cover"
              src="/logo.png"
            />
          </div>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            AI-powered story worlds
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Omrylo
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug text-slate-100 sm:text-3xl">
            Every conversation opens a new world.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            AI-powered story worlds where characters remember, worlds evolve,
            and choices matter.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <span className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-slate-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              Coming Soon
            </span>
            <div className="flex max-w-2xl flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <ExternalLink
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-200/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Stories should not be static.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Omrylo is building living story worlds powered by AI. Characters
              should remember. Worlds should evolve. Choices should matter.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {buildItems.map((item) => (
              <article
                className="rounded-lg border border-white/10 bg-[#0B1020]/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
                key={item.title}
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Contact
          </p>
          <a
            className="mt-4 inline-block text-lg font-medium text-cyan-200 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            href="mailto:hi@omrylo.com"
          >
            hi@omrylo.com
          </a>
        </section>

        <footer className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Omrylo</p>
          <nav aria-label="Footer social links" className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <ExternalLink
                className="transition hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </footer>
      </div>
    </main>
  );
}
