import React from "react";
import Button from "../Button";
import SocialIcons from "../SocialIcons";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] max-w-[128rem] mx-auto grid items-center md:w-[85vw] md:flex md:justify-between xl:w-[50vw]">
      <div className="flex flex-col gap-2 justify-center items-start md:max-w-[45rem] lg:max-w-[58rem] xl:max-w-[62rem]">
        <span className="lg:text-lg">Namaste!🙏</span>
        <h1 className="font-bold leading-[1.1] text-3xl md:text-4xl lg:text-5xl xl:text-[6.4rem]">
          I am{" "}
          <span className="bg-gradient-linear-100 bg-clip-text text-transparent">
            Nishan Dhakal
          </span>
          .
        </h1>
        <h2 className="font-bold text-xl text-gray-300 lg:text-2xl">
          A Software Developer building efficient and scalable web solutions.
        </h2>
        <p className="font-light lg:text-lg">
          As a Software Developer, I specialize in passionately building (and
          occasionally designing) characteristic web solutions and experiences
          for individuals and organizations with taste.
        </p>

        <div className="mt-4 flex gap-4 lg:text-lg ">
         
        <Button href="/#projects" text="BSc.CSIT" hasHover={false} />

          <Button
            //add link of rusume here #
            href="#contact"
           // target="_blank"
            text="Contact Me"
            hasHover={true}
          />
        </div>
      </div>

      <SocialIcons className="hidden md:flex md:gap-6" />
    </section>
    
  );
};

export default HeroSection;
