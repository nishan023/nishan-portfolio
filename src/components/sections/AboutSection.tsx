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
  "Figma",
  "Tailwind",
  "Git",
  "GitHub",
  "Tanstack Query",
];

const AboutSection = () => {
  return (
    <section className='my-8 max-w-[112rem] mx-auto grid gap-4 items-center md:mb-[15rem] lg:grid-cols-2 '>
      <SectionHeading headingText='About Me' className='col-span-full' />
      <p>
        Hi! My name is Daniel and I enjoy building things on the web. This
        interest in Web development began during the lockdown period after I
        completed by Industrial Training in Aircraft Maintenance Engineering
        when I though about how some processes could be made easier just by
        building solutions on the web for them.
        <br />
        <br />
        Over time, I have had the privilege of working on multiple projects,
        through which the skills I have acquired and my solution-oriented
        personality are used to deliver efficient, accessible, creative
        solutions and experiences to one and all.
        <br />
        <br />
        I have a Bachelor’s degree in Mechanical Engineering and for my final
        thesis, I completed a published research paper during my undergraduate
        program titled ‘Geometrical Attenuation of Shockwaves using rigid
        obstacle matrices’.
        <br />
        <br />
        Outside my regular developer routine, I enjoy listening to music, gaming
        or reading about space and technology.
      </p>

      <div>
        <h3 className='mt-4 mb-4 font-bold text-lg text-blue-400 text-right'>
          My Tools and Technologies
        </h3>
        <div className='flex flex-wrap justify-end gap-3'>
          {allTools.map((tool, idx) => (
            <ToolBox key={`tool-${idx}`} toolName={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
