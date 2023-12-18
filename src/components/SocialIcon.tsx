import Link from "next/link";
import React from "react";

const SocialIcon = ({
  href,
  title,
  children,
}: {
  href: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target='_blank'
      title={title}
      className='hover:animate-bounce'
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
