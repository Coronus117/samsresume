import React from "react";
interface UserProps {
  achievement: {
    title: String;
    location: String;
    summary: String;
  };
}
export default function Achievement({ achievement }: UserProps) {
  const { title, location, summary } = achievement;
  return (
    <div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="font-bold text-sm pl-3">{location}</div>
      <div className="pl-6">{summary}</div>
    </div>
  );
}
