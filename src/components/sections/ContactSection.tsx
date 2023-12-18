import React from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import SocialIcons from "../SocialIcons";

const ContactSection = () => {
  return (
    <section className='relative my-[10rem] max-w-[50rem] mx-auto grid gap-5 items-center text-center md:grid-cols-[1fr_auto] md:mb-[15rem]'>
      <div className='grid gap-3'>
        <span className='font-semibold text-lg text-blue-400'>Next steps?</span>
        <SectionHeading
          headingText="Don't be a Stranger."
          className='col-span-full mx-auto after:h-0'
        />
        <p className='font-light'>
          Shoot me an email if you would like to work with me and let&apos;s
          have a great time while we&apos;re at it. You can also reach me on
          social media using the social icons.
        </p>
        <Button
          href='mailto:dbezekiel77@gmail.com'
          text='Contact me'
          hasHover={false}
          className='w-fit mx-auto mt-4'
        />
      </div>

      <SocialIcons className='w-[25rem] mt-4 mx-auto justify-center md:self-start md:w-fit md:mt-[2rem] md:max-h' />
    </section>
  );
};

export default ContactSection;
