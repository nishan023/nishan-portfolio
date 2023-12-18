import Link from "next/link";
import React from "react";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} target='_blank' className='hover:animate-bounce'>
      {children}
    </Link>
  );
};

export default SocialIcon;
