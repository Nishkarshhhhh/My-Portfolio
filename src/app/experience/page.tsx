import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata = {
  title: "Experience & Education | Nishkarsh Varshney",
  description:
    "AI/ML research experience at SRM IST, professional software development internship at Labmentix, and academic record at S.R.M. Institute of Science and Technology.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        label="Background"
        title="Experience & Education"
        description="A timeline of research exploration, software development contributions, and academic foundations."
      />

      <ExperienceTimeline />
    </div>
  );
}
