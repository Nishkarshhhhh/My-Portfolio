"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, FileText, Menu, X, Terminal } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b11]/85 backdrop-blur-md border-b border-white/[0.07] py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
        >
          <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-all">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              {DEVELOPER_PROFILE.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Backend & Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Social & Resume */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={DEVELOPER_PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/60 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 hover:bg-slate-800 transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button
            href={DEVELOPER_PROFILE.resumePath}
            external
            variant="outline"
            size="sm"
            className="font-mono text-xs border-sky-500/30 text-sky-300 hover:bg-sky-500/10"
            icon={<FileText className="h-3.5 w-3.5" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            href={DEVELOPER_PROFILE.resumePath}
            external
            variant="outline"
            size="sm"
            className="font-mono text-xs border-sky-500/30 text-sky-300"
          >
            Resume
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/80 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c101a]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? "bg-sky-500/15 text-sky-300 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={DEVELOPER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1.5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {DEVELOPER_PROFILE.location}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
