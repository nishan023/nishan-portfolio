import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import FeaturedProject from "../FeaturedProject";

const projects = [
  {
    id: 1,
    imageSrc: "/images/lmdb.png",
    title: "LMDb - Little Movie Database",
    description:
      "Discover movies with little effort using LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses. Stripped of login and favoriting features, LMDB focuses on simplicity, providing cinephiles with a hassle-free and lightweight platform for seamless movie exploration.",
    tools: ["React", "TailwindCSS", "Typescript", "Tanstack Query", "TMDb API"],
    githubUrl: "https://github.com/Daniel-Ezekiel/lmdb-moviebox-v1",
    liveUrl: "https://lmdb-v1.vercel.app/",
  },

  {
    id: 2,
    imageSrc: "/images/lmdb.png",
    title: "LMDb - Little Movie Database",
    description:
      "Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses. Stripped of login and favoriting features, LMDB focuses on simplicity, providing cinephiles with a hassle-free and lightweight platform for seamless movie exploration.",
    tools: ["React", "TailwindCSS", "Typescript", "Tanstack Query", "TMDb API"],
    githubUrl: "https://github.com/Daniel-Ezekiel/lmdb-moviebox-v1",
    liveUrl: "https://lmdb-v1.vercel.app/",
  },
  {
    id: 3,
    imageSrc: "/images/lmdb.png",
    title: "LMDb - Little Movie Database",
    description:
      "Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses. Stripped of login and favoriting features, LMDB focuses on simplicity, providing cinephiles with a hassle-free and lightweight platform for seamless movie exploration.",
    tools: ["React", "TailwindCSS", "Typescript", "Tanstack Query"],
    githubUrl: "https://github.com/Daniel-Ezekiel/lmdb-moviebox-v1",
    liveUrl: "https://lmdb-v1.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className='mt-10 mb-[4rem] max-w-[112rem] mx-auto grid gap-5 items-center sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:mb-[15rem] lg:grid-cols-1'>
      <SectionHeading
        headingText='Featured Projects'
        className='col-span-full'
      />

      {projects.map((project) => (
        <FeaturedProject key={project.id} {...project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
