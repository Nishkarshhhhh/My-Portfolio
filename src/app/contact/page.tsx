"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Terminal, ArrowUpRight } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${DEVELOPER_PROFILE.email}?subject=${encodeURIComponent(
      subject || "Software Developer Opportunity / Inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <SectionHeading
        label="Direct Communication"
        title="Get in Touch"
        description="Whether you have an engineering role, a technical inquiry, or want to discuss distributed backend systems, feel free to reach out."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Information & Channels */}
        <div className="md:col-span-2 space-y-4">
          {/* Email Card */}
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Email Address</span>
                <p className="text-sm font-semibold text-white truncate max-w-[180px]">
                  {DEVELOPER_PROFILE.email}
                </p>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={copyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-mono py-2 px-3 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="inline-flex items-center justify-center text-xs font-mono py-2 px-3 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors"
              >
                Open Mail
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href={DEVELOPER_PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-md hover:border-slate-600 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">GitHub Profile</span>
                <p className="text-sm font-semibold text-white group-hover:text-sky-300">
                  @Nishkarshhhhh
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={DEVELOPER_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-md hover:border-sky-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-sky-950/40 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">LinkedIn Profile</span>
                <p className="text-sm font-semibold text-white group-hover:text-sky-300">
                  /in/nishkarshvarshney18
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
          </a>

          {/* Location */}
          <div className="p-4 rounded-xl border border-white/[0.04] bg-slate-950/40 flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>{DEVELOPER_PROFILE.location}</span>
          </div>
        </div>

        {/* Direct Email Draft Composer */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleComposeMail}
            className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-md space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-sky-400" />
                <h3 className="text-sm font-bold text-white">Draft an Email</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Launches your default client
              </span>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Software Engineering Role / Technical Discussion"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                Message Preview
              </label>
              <textarea
                id="message"
                rows={5}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Hi Nishkarsh, I came across your portfolio and wanted to discuss an opportunity..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none font-sans"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={<Send className="h-4 w-4" />}
            >
              Compose & Send via Email
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
