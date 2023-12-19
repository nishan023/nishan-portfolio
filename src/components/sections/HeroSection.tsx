import React from "react";
import Button from "../Button";
import SocialIcons from "../SocialIcons";

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
        <h2 className='font-bold text-xl text-gray-300 lg:text-2xl'>
          A Frontend Developer building efficient and scalable web solutions.
        </h2>
        <p className='font-light lg:text-lg'>
          As a Software Engineer, I specialize in passionately building (and
          occasionally designing) characteristic web solutions and experiences
          for individuals and organizations with taste.
        </p>

        <div className='mt-6 flex gap-4 lg:text-lg'>
          <Button href='/#projects' text='Projects' hasHover={false} />
          <Button
            href='https://onedrive.live.com/view.aspx?resid=3740BF192DB39BB9!1205&authkey=!AJhihLp34h8U-lY'
            target='_blank'
            text='My Résumé'
            hasHover={true}
          />
        </div>
      </div>

      <SocialIcons className='hidden md:flex md:gap-6' />
    </section>
  );
};

export default HeroSection;
