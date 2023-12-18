import Link from "next/link";
import React from "react";

const Button = ({
  text,
  href,
  hasHover,
  className,
}: {
  text: string;
  href: string;
  hasHover: boolean;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-2xl ${
        !hasHover
          ? "bg-gradient-linear-300 border-1 border-transparent font-bold uppercase"
          : "border-gray-200 border-1 hover:border-0 hover:bg-gradient-linear-300"
      } hover:scale-110 hover:shadow-lg hover:shadow-black/30 transition-all ease-in-out duration-300 xl:py-3 ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
