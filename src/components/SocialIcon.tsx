import Link from "next/link";
import React from "react";

const SocialIcon = ({
  href,
  title,
  ariaLabel,
  children,
}: {
  href: string;
  title?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target='_blank'
      title={title}
      aria-label={ariaLabel}
      className='hover:animate-bounce'
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
