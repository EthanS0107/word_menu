"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";

const AUTH_DISABLED = true;

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const effectiveSession =
    AUTH_DISABLED || session
      ? {
          user: {
            isActive: true,
            isAdmin: false,
          },
        }
      : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    {
      href:
        effectiveSession?.user?.isActive || effectiveSession?.user?.isAdmin
          ? "/menu"
          : "/",
      label: "Accueil",
    },
    { href: "/about", label: "A propos" },
  ];

  // Check if we're on a dark page (country menu pages)
  const isDarkPage = pathname?.startsWith("/menu/");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 24 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDarkPage
              ? "bg-[#1a1a2e]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
              : "bg-white/80 backdrop-blur-xl border-b border-[#E07A5F]/[0.08] shadow-[0_4px_30px_rgba(224,122,95,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="group relative">
            <motion.span
              className={`font-display text-xl font-bold tracking-tight md:text-2xl ${isDarkPage ? "text-white" : "text-[#2D3047]"}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              World{" "}
              <span className="gradient-text">Menu</span>
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                currentPath={pathname}
                isDark={isDarkPage}
              >
                {link.label}
              </NavLink>
            ))}

            {effectiveSession && (
              <NavLink href="/profile" currentPath={pathname} isDark={isDarkPage}>
                Mon Profil
              </NavLink>
            )}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/propose"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(224,122,95,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(224,122,95,0.4)] hover:translate-y-[-1px]"
              >
                Proposer une idee
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors md:hidden ${
              isDarkPage
                ? "border-white/[0.08] bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
                : "border-[#2D3047]/10 bg-[#2D3047]/5 text-[#2D3047]/70 hover:bg-[#2D3047]/10"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FFFBF5]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`font-display text-3xl font-bold transition-colors ${
                      pathname === link.href
                        ? "gradient-text"
                        : "text-[#2D3047]/50 hover:text-[#2D3047]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {effectiveSession && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.31 }}
                >
                  <Link
                    href="/profile"
                    onClick={closeMobile}
                    className={`font-display text-3xl font-bold transition-colors ${
                      pathname === "/profile"
                        ? "gradient-text"
                        : "text-[#2D3047]/50 hover:text-[#2D3047]"
                    }`}
                  >
                    Mon Profil
                  </Link>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/propose"
                  onClick={closeMobile}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-8 py-3 text-lg font-semibold text-white shadow-[0_4px_15px_rgba(224,122,95,0.3)] transition-all hover:shadow-[0_8px_25px_rgba(224,122,95,0.4)]"
                >
                  Proposer une idee
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({
  href,
  currentPath,
  children,
  isDark,
}: {
  href: string;
  currentPath: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  const isActive = currentPath === href;

  return (
    <Link href={href} className="group relative py-2">
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          isDark
            ? isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
            : isActive ? "text-[#2D3047]" : "text-[#2D3047]/50 group-hover:text-[#2D3047]/80"
        }`}
      >
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#E07A5F] to-[#F4A261]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
