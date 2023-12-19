import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import Link from "next/link";
import { projectTypes } from "@/types/project.types";

const FeaturedProject = ({
  id,
  title,
  description,
  imageSrc,
  tools,
  githubUrl,
  liveUrl,
}: projectTypes) => {
  return (
    <div
      className={`mb-5 bg-blue-500 rounded-xl overflow-hidden shadow-lg lg:relative lg:h-[40rem] lg:mb-10 lg:bg-transparent lg:shadow-none lg:grid lg:grid-cols-2 lg:gap-3`}
    >
      <Link
        href={liveUrl as string}
        target='_blank'
        className={`lg:h-full ${
          id % 2 ? "trapezoid-odd-left" : "trapezoid-even-right"
        } lg:shadow-2xl ${!(id % 2) && "col-start-2"}`}
      >
        <Image
          src={imageSrc as string}
          width={1280}
          height={720}
          alt={title}
          className='w-full object-cover hover:scale-105 transition-transform ease-in-out duration-300 lg:h-full'
        />
      </Link>

      <div
        className={`p-4 lg:p-0 lg:absolute lg:top-0 lg:w-[50%] ${
          id % 2 ? "lg:right-0" : "lg:left-0"
        }`}
      >
        <div
          className={`flex flex-col gap-2 ${
            id % 2
              ? "trapezoid-odd-right lg:pl-6 lg:text-right xl:pl-8 xl:pr-6"
              : "trapezoid-even-left lg:pr-6 lg:text-left xl:pl-6 xl:pr-8"
          } lg:py-6 lg:p-3 lg:bg-blue-500 lg:shadow-2xl`}
        >
          <span className='font-light uppercase'>Project #{id}</span>
          <Link href={liveUrl as string} target='_blank'>
            <h4 className='font-bold uppercase text-[2rem] text-transparent bg-gradient-linear-100 bg-clip-text'>
              {title}
            </h4>
          </Link>
          <p className='font-light'>{description}</p>
          <div className={`mt-2 flex gap-5 ${id % 2 && "lg:justify-end"}`}>
            <SocialIcon href={githubUrl as string} title='Github Repo Link'>
              <FaGithub className='h-12 w-12 hover:animate-bounce' />
            </SocialIcon>
            <SocialIcon href={liveUrl as string} title='Live preview Link'>
              <FaLink className='h-12 w-12 hover:animate-bounce' />
            </SocialIcon>
          </div>
        </div>
        <p
          className={`w-fit mt-4 font-semibold text-transparent bg-gradient-linear-200 bg-clip-text lg:mt-2 lg:w-[82%] ${
            id % 2 && "lg:ml-auto lg:text-right"
          }`}
        >
          {tools.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default FeaturedProject;
