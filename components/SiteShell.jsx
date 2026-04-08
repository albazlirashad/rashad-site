"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function useMousePosition() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pos;
}

function CustomCursor() {
  const { x, y } = useMousePosition();
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        animate={{ x: x - 18, y: y - 18 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        <div className="h-9 w-9 rounded-full border border-green-400/60 bg-green-400/10 shadow-[0_0_30px_rgba(74,222,128,0.24)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: "spring", stiffness: 480, damping: 25 }}
      >
        <div className="h-2 w-2 rounded-full bg-green-300 shadow-[0_0_14px_rgba(134,239,172,0.9)]" />
      </motion.div>
    </>
  );
}

function LoadingScreen({ done }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (done) {
      setProgress(100);
      return;
    }
    const id = setInterval(() => {
      setProgress((p) => (p < 95 ? p + (p < 50 ? 9 : p < 80 ? 4 : 1) : p));
    }, 85);
    return () => clearInterval(id);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        >
          <div className="w-full max-w-xl px-6 text-center">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="mb-3 text-xs uppercase tracking-[0.45em] text-gray-500">
                Premium Experience
              </div>
              <h2 className="text-4xl font-semibold md:text-6xl">Rashad Albazli</h2>
              <p className="mt-4 text-gray-400">
                Preparing a cinematic personal brand experience...
              </p>
            </motion.div>
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.18 }}
              />
            </div>
            <div className="mt-3 text-sm text-gray-500">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const links = useMemo(
    () => [
      { href: "/", label: "الرئيسية" },
      { href: "/about", label: "نبذة" },
      { href: "/projects", label: "المشاريع" },
      { href: "/services", label: "الخدمات" },
      { href: "/contact", label: "تواصل" },
      { href: "/admin", label: "الإدارة" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-400/30 selection:text-white">
      <LoadingScreen done={loaded} />
      <CustomCursor />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-wide md:text-xl">
            Rashad Albazli
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "rounded-full px-4 py-2 text-sm transition " +
                    (active ? "bg-white text-black" : "text-gray-300 hover:bg-white/10")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm lg:hidden"
          >
            {menuOpen ? "إغلاق" : "القائمة"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 bg-black/90 px-6 py-4 lg:hidden"
            >
              <div className="grid gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24">{children}</main>
    </div>
  );
}
