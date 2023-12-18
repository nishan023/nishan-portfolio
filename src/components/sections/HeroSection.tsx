import React from "react";
import SocialIcon from "../SocialIcon";
import { FaBehance, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section className='min-h-[85vh] max-w-[128rem] mx-auto grid items-center md:w-[85vw] md:flex md:justify-between xl:w-[50vw]'>
      <div className='flex flex-col gap-2 justify-center items-start md:max-w-[45rem] lg:max-w-[58rem] xl:max-w-[62rem]'>
        <span className='lg:text-lg'>Hi there!</span>
        <h1 className='font-bold leading-[1.1] text-3xl md:text-4xl lg:text-5xl xl:text-[6.4rem]'>
          I am{" "}
          <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
            Daniel Ezekiel
          </span>
          .
        </h1>
        <h3 className='font-bold text-xl text-gray-300 lg:text-2xl'>
          A Frontend Developer building efficient and scalable web solutions.
        </h3>
        <p className='lg:text-lg'>
          As a Software Engineer, I specialize in passionately building (and
          occasionally designing) characteristic web solutions and experiences
          for individuals and organizations with taste.
        </p>

        <div className='mt-6 flex gap-4 lg:text-lg'>
          <Button href='' text='Projects' hasHover={false} />
          <Button href='' text='My Résumé' hasHover={true} />
        </div>
      </div>

      <aside className='hidden h-full md:grid place-items-center gap-6'>
        <SocialIcon href='https://github.com/daniel-ezekiel'>
          <FaGithub className='w-12 h-12' />
        </SocialIcon>
        <SocialIcon href='https://www.linkedin.com/in/db-ezekiel'>
          <FaLinkedin className='w-12 h-12' />
        </SocialIcon>
        <SocialIcon href='https://twitter.com/db_ezekiel'>
          <FaTwitter className='w-12 h-12' />
        </SocialIcon>
        <SocialIcon href='https://www.behance.net/danielezekiel01'>
          <FaBehance className='w-12 h-12' />
        </SocialIcon>
      </aside>
    </section>
  );
};

export default HeroSection;
