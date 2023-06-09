import "tailwindcss/tailwind.css";
import { experiences } from "@/data/experiences";
import { certifications } from "@/data/certifications";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Certification from "@/components/certification";

export default function Home() {
  return (
    <div className="flex">
      <div className="container mx-auto mb-32">
        <Header />
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase">
              Summary
            </div>
            <div className="pl-2 text-sm">
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
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase">
              Experiences
            </div>
            <div className="pl-2">
              {experiences.map((exp, index) => (
                <Experience key={index} experience={exp} />
              ))}
            </div>
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase">
              Certifications
            </div>
            <div className="pl-2">
              {certifications.map((cert, index) => (
                <Certification key={index} certification={cert} />
              ))}
            </div>
            <div className="border-b-2 border-black font-bold pl-2 text-xl uppercase">
              Education
            </div>
          </div>

          <div className="">
            <div>Achievements</div>
            <div>Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
}
