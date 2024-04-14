import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import FeaturedProject from "../FeaturedProject";
import NotableProject from "../NotableProject";
import { featuredProjects } from "@/src/data/featuredProjects";
import { notableProjects } from "@/src/data/notableProjects";

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='my-10 mb-[4rem] max-w-[120rem] mx-auto grid gap-5 items-center sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:mb-[15rem] lg:grid-cols-1'
    >
      <SectionHeading
        headingText='Featured Projects'
        className='col-span-full'
      />

      {featuredProjects.map((project) => (
        <FeaturedProject key={project.id} {...project} />
      ))}

      {/* <section className='col-span-full grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3'>
        <h3 className='col-span-full mb-4 font-bold text-xl text-center uppercase'>
          Noteworthy mentions
        </h3>

        {notableProjects.map((project) => (
          <NotableProject key={project.id} {...project} />
        ))}
      </section> */}
      
    </section>
  );
};

export default ProjectsSection;
