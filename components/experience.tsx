import React from "react";

interface UserProps {
  experience: {
    company?: string;
    date?: string;
    title: string;
    summary: string;
    bulletPoints?: string[];
  };
}

export default function Experience({ experience }: UserProps) {
  const { company, date, title, summary, bulletPoints } = experience;
  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-xl">{company}</div>
        <div className="font-semibold">{date}</div>
      </div>
      <div className="pl-4 font-semibold italic text-xl text-yellow-600">
        {title}
      </div>
      <div className="pl-8">
        <div>{summary}</div>
        {bulletPoints && (
          <ul>
            {bulletPoints.map((bp, index) => (
              <li key={index} className="list-disc list-inside">
                {bp}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
