import React from "react";
import SocialIcon from "./SocialIcon";
import { FaBehance, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <aside
      className={`${className} flex justify-start md:flex-col gap-4 h-full place-items-center`}
    >
      <SocialIcon
        href='https://github.com/daniel-ezekiel'
        ariaLabel='Visit my Github'
      >
        <FaGithub className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://www.linkedin.com/in/db-ezekiel'
        ariaLabel='Connect on LinkedIn'
      >
        <FaLinkedin className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://twitter.com/db_ezekiel'
        ariaLabel='Reach out on Twitter'
      >
        <FaTwitter className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://www.behance.net/danielezekiel01'
        ariaLabel='See my work on Behance'
      >
        <FaBehance className='w-12 h-12' />
      </SocialIcon>
    </aside>
  );
};

export default SocialIcons;
