import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a0f] text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">
                Focused on Backend Systems & Architecture
              </span>
            </div>
            <h3 className="text-base font-semibold text-white">
              {DEVELOPER_PROFILE.name}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              {DEVELOPER_PROFILE.title} &middot; {DEVELOPER_PROFILE.focus}.
              Building high-reliability software, scalable queues, and clean data architectures.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a
                href={DEVELOPER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 opacity-50" />
              </a>
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{DEVELOPER_PROFILE.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {DEVELOPER_PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Next.js &middot; TypeScript &middot; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
