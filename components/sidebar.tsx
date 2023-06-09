import React from "react";
import { achievements } from "@/data/data";
import Achievement from "./achievement";

export default function Sidebar() {
  return (
    <div className="px-4 py-2 mx-4 rounded-xl bg-blue-200">
      <div className="font-bold mb-2 text-xl uppercase">Achievements</div>
      <div className="flex flex-col space-y-4">
        {achievements.map((ach, index) => (
          <Achievement key={index} achievement={ach} />
        ))}
      </div>
      <div>Skills</div>
    </div>
  );
}
