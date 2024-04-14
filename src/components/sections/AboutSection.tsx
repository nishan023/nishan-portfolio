import React from "react";
import SectionHeading from "../SectionHeading";
import ToolBox from "../ToolBox";

const allTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  // "Figma",
  "Tailwind",
  "Git",
  "GitHub",
  "Noje js",
  "MongoDB",
  "Postgres",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="my-6 max-w-[129rem] mx-auto grid gap-3 items-center md:mb-[15rem] lg:grid-cols-2 xl:pr-4">
      <SectionHeading headingText="About Me" className="col-span-full" />
      <p className="font-light">
        Hello and welcome to my corner of the web! I'm Nishan Dhakal, an
        enthusiastic undergraduate student pursuing a BSc.CSIT degree at
        Tribhuvan University in Nepal at Texas International College. My passion
        lies in the dynamic and ever-evolving world of web development. With a
        keen interest in both front-end and back-end technologies, I aspire to
        become a full-stack developer, bridging the gap between design and
        functionality to create seamless and user-friendly digital experiences.
        <br />
        <br />
        Throughout my academic journey, I've delved into various programming
        languages and frameworks, constantly seeking to expand my skill set and
        stay updated with the latest trends in the tech industry. Beyond the
        codes and algorithms, I believe in the power of innovation, creativity,
        and problem-solving to craft solutions that not only meet but exceed
        user expectations.
        <br />
        <br />
        When I'm not coding or buried in textbooks, you'll find me exploring new
        technologies, attending webinars, or working on personal projects to
        hone my skills and push the boundaries of what's possible in web
        development.
        <br />
        <br />
        Thank you for stopping by, and I invite you to connect with me to
        discuss ideas, collaborate on projects, or simply share our passion for
        all things tech!
      </p>

      <div className="xl:ml-10">
        <h3 className="mt-4 mb-4 font-bold text-lg text-blue-400 text-right">
          My Tools and Technologies
        </h3>
        <div className="flex flex-wrap justify-end gap-3">
          {allTools.map((tool, idx) => (
            <ToolBox key={`tool-${idx}`} toolName={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
