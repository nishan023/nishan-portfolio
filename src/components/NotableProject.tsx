import React from "react";
import SocialIcon from "./SocialIcon";
import { FaGithub, FaLink } from "react-icons/fa6";
import { projectTypes } from "@/types/project.types";

const NotableProject = ({
  id,
  title,
  description,
  imageSrc,
  tools,
  githubUrl,
  liveUrl,
}: projectTypes) => {
  return (
    <div className='w-full mb-4 p-6 flex flex-col gap-2 bg-blue-500 shadow-lg'>
      <div className='my-2 mb-4 flex justify-between'>
        <SocialIcon href={githubUrl as string} title='Github Repo Link'>
          <FaGithub className='h-12 w-12 hover:animate-bounce' />
        </SocialIcon>
        <SocialIcon href={liveUrl as string} title='Live preview Link'>
          <FaLink className='h-12 w-12 hover:animate-bounce' />
        </SocialIcon>
      </div>
      <h4 className='font-bold text-[2rem] text-blue-400 uppercase'>{title}</h4>
      <p className='font-light'>{description}</p>
      <p className='mt-2 bg-gradient-linear-200 bg-clip-text font-semibold text-transparent'>
        {tools.join(", ")}
      </p>
    </div>
  );
};

export default NotableProject;
