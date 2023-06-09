import React from "react";
import { achievements, skills } from "@/data/data";
import Achievement from "./achievement";
import SkillSection from "./skill_section";

export default function Sidebar() {
  return (
    <div className="px-4 py-2 mx-4 rounded-xl bg-blue-200">
      <div className="font-bold mb-2 text-xl uppercase">Achievements</div>
      <div className="flex flex-col space-y-4 mb-8">
        {achievements.map((ach, index) => (
          <Achievement key={index} achievement={ach} />
        ))}
      </div>
      <div className="font-bold mb-2 text-xl uppercase">Skills</div>
      <div className="flex flex-col space-y-4">
        {skills.map((skill_group, index) => (
          <SkillSection key={index} skill_group={skill_group} />
        ))}
      </div>
    </div>
  );
}
