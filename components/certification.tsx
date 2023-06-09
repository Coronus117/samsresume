import React from "react";

interface UserProps {
  certification: {
    date: string;
    title: string;
    link: string;
  };
}

export default function Certification({ certification }: UserProps) {
  const { date, title, link } = certification;
  return (
    <div className="mb-4 flex flex-col">
      <a
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold text-lg"
      >
        {title}
      </a>
      <div className="italic">{date}</div>
    </div>
  );
}
