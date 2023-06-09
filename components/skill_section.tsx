import React from "react";
interface UserProps {
  skill_group: {
    title: String;
    skills: String[];
  };
}
export default function SkillSection({ skill_group }: UserProps) {
  const { title, skills } = skill_group;
  const skillsWithDeliminators = interleave(skills, "•");
  return (
    <div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="pl-6 flex flex-row flex-wrap gap-1">
        {skillsWithDeliminators.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
}

const interleave = (arr: any[], x: any) =>
  arr.flatMap((e) => [e, x]).slice(0, -1);
