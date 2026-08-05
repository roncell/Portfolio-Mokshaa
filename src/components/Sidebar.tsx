"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { n: "01", label: "Home", href: "/" },
  { n: "02", label: "About", href: "/about" },
  { n: "03", label: "Portfolio", href: "/portfolio" },
  { n: "04", label: "Writing", href: "/writing" },
  { n: "05", label: "CV", href: "/cv" },
  { n: "06", label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function Brand() {
  return (
    <Link href="/" className="block">
      <span className="font-display text-[1.7rem] italic leading-[1.05] text-ink">
        Mokshaa
        <br />
        Shivlani
      </span>
      <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
        Journalist
      </span>
    </Link>
  );
}

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`group flex items-baseline gap-3 rounded-sm px-1 py-2 text-[0.95rem] transition-colors ${
              active ? "text-accent" : "text-ink-soft hover:text-ink"
            }`}
          >
            <span
              className={`font-mono text-[11px] tabular-nums ${
                active ? "text-accent" : "text-ink-faint group-hover:text-ink-soft"
              }`}
            >
              {item.n}
            </span>
            <span className={active ? "underline-accent" : ""}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col justify-between border-r border-line px-8 py-10 md:flex">
        <div>
          <Brand />
          <div className="mt-10 h-px w-10 bg-accent" />
          <div className="mt-10">
            <NavList pathname={pathname} />
          </div>
        </div>
        <p className="text-[11px] leading-relaxed text-ink-faint">
          Fashion, health &amp; beauty,
          <br />
          art &amp; culture, food &amp; travel.
        </p>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur md:hidden">
        <Link href="/" className="font-display text-xl italic text-ink">
          Mokshaa Shivlani
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay nav */}
      {open && (
        <div className="fixed inset-0 z-30 flex flex-col bg-paper px-6 pb-10 pt-24 md:hidden">
          <NavList pathname={pathname} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
