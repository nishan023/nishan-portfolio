// import React from "react";
// import SocialIcon from "./SocialIcon";
// import { FaBehance, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

// const SocialIcons = ({ className }: { className?: string }) => {
//   return (
//     <aside
//       className={`${className} flex justify-start md:flex-col gap-4 h-full place-items-center`}
//     >
//       <SocialIcon
//         href='https://github.com/nishan023'
//         ariaLabel='Visit my Github'
//       >
//         <FaGithub className='w-12 h-12' />
//       </SocialIcon>
//       <SocialIcon
//         href='https://www.linkedin.com/in/nishandhakal023'
//         ariaLabel='Connect on LinkedIn'
//       >
//         <FaLinkedin className='w-12 h-12' />
//       </SocialIcon>
//       <SocialIcon
//         href='https://twitter.com/nissandhakal11'
//         ariaLabel='Reach out on Twitter'
//       >
//         <FaTwitter className='w-12 h-12' />
//       </SocialIcon>
//       <SocialIcon
//         href='https://www.behance.net/danielezekiel01'
//         ariaLabel='See my work on Behance'
//       >
//         <FaBehance className='w-12 h-12' />
//       </SocialIcon>
//     </aside>
//   );
// };

// export default SocialIcons;

import React from "react";
import SocialIcon from "./SocialIcon";
import { FaBehance, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa6";

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <aside
      className={`${className} flex justify-start md:flex-col gap-4 h-full place-items-center`}
    >
      <SocialIcon
        href='https://github.com/nishan023'
        ariaLabel='Visit my Github'
      >
        <FaGithub className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://www.linkedin.com/in/nishandhakal023'
        ariaLabel='Connect on LinkedIn'
      >
        <FaLinkedin className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://twitter.com/nissandhakal11'
        ariaLabel='Reach out on Twitter'
      >
        <FaTwitter className='w-12 h-12' />
      </SocialIcon>
      {/* <SocialIcon
        href='https://www.behance.net/danielezekiel01'
        ariaLabel='See my work on Behance'
      >
        <FaBehance className='w-12 h-12' />
      </SocialIcon> */}
      <SocialIcon
        href='https://www.instagram.com/nissan_dhakal/'
        ariaLabel='Follow me on Instagram'
      >
        <FaInstagram className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://www.facebook.com/nissan.dhakal.23'
        ariaLabel='Connect on Facebook'
      >
        <FaFacebook className='w-12 h-12' />
      </SocialIcon>
      <SocialIcon
        href='https://discord.gg/kkUPSTzn'
        ariaLabel='Chat with me on Discord'
      >
        <FaDiscord className='w-12 h-12' />
      </SocialIcon>
    </aside>
  );
};

export default SocialIcons;
