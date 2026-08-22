import React from "react";
import { Code2, Server, Database, Wrench, Binary, Lightbulb } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export function SkillGroup() {
  const iconMap: Record<string, React.ElementType> = {
    Languages: Code2,
    "Backend & Queues": Server,
    "Databases & ORM": Database,
    "Tools & DevOps": Wrench,
    "Computer Science": Binary,
    Concepts: Lightbulb,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {SKILL_CATEGORIES.map((cat) => {
        const Icon = iconMap[cat.title] || Code2;
        return (
          <div
            key={cat.title}
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md hover:border-slate-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-sky-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                  <p className="text-[11px] text-slate-400">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
