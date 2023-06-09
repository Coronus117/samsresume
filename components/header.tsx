import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 text-center mb-2">
      <div className="col-span-3 font-bold text-4xl uppercase">
        Samuel Kushner
      </div>
      <div className="col-span-3 font-light text-2xl uppercase md:mb-0 mb-4">
        Software Engineer
      </div>
      <div className="flex flex-row justify-center space-x-1">
        <div>Portfolio:</div>
        <a
          target="_blank"
          href={"https://www.samscloudkingdom.com"}
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold"
        >
          SamsCloudKingdom.com
        </a>
      </div>
      <a
        target="_blank"
        href={"mailto:samkushner919@gmail.com"}
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold"
      >
        SamKushner919@gmail.com
      </a>
      <a
        target="_blank"
        href={"https://www.LinkedIn.com/in/SamuelKushner"}
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold"
      >
        LinkedIn.com/in/SamuelKushner
      </a>
    </div>
  );
}
