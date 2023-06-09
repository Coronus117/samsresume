import "tailwindcss/tailwind.css";
import { experiences, certifications } from "@/data/data";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Experience from "@/components/experience";
import Certification from "@/components/certification";

export default function Home() {
  return (
    <div className="flex">
      <div className="container mx-auto mb-32">
        <Header />
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase mb-2 mt-2">
              Summary
            </div>
            <div className="pl-2 text-base mb-4">
              AWS Certified Solutions Architect Associate with 12 years of
              transferable experience in Web Development, Video Game
              Development, and Technical Support sectors. Adept in bringing
              forth expertise in design, development, installation, testing and
              maintenance of software systems. Equipped with diverse and
              promising skill-sets including various platforms and programming
              languages. Experienced with the latest cutting-edge development
              tools and procedures. Effectively self-managed during independent
              projects and collaborated as part of a productive team.
            </div>
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase mb-2">
              Experiences
            </div>
            <div className="pl-2">
              {experiences.map((exp, index) => (
                <Experience key={index} experience={exp} />
              ))}
            </div>
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase mb-2">
              Certifications
            </div>
            <div className="pl-2">
              {certifications.map((cert, index) => (
                <Certification key={index} certification={cert} />
              ))}
            </div>
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase mb-2">
              Education
            </div>
            <div className="pl-2 flex flex-col">
              <div className="font-semibold text-lg">
                Wake Technical Community College
              </div>
              <div className="font-semibold text-lg pl-4">
                Associates Degree – Simulation and Game Development
              </div>
              <div className="italic pl-4">2015</div>
            </div>
          </div>

          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
