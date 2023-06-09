import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="flex">
      <div className="container mx-auto mb-32">
        <div className="grid grid-cols-3 text-center">
          <div className="col-span-3">Samuel Kushner</div>
          <div className="col-span-3">Software Engineer</div>
          <div className="">Portfolio: SamsCloudKingdom.com</div>
          <div className="">SamKushner919@gmail.com</div>
          <div className="">LinkedIn.com/in/SamuelKushner</div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div className="">Summary</div>
            <div className="">
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
            <div className="">Experiences</div>
            <div className="">Certifications</div>
            <div className="">Education</div>
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
