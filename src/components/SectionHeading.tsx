import React from "react";

const SectionHeading = ({
  headingText,
  className,
}: {
  headingText: string;
  className?: string;
}) => {
  return (
    <h2
      className={`relative w-fit mb-4 font-bold text-3xl after:absolute after:h-1 after:w-[8rem] after:left-0 after:-bottom-1 after:bg-blue-400 after:rounded-full ${className}`}
    >
      {headingText}
    </h2>
  );
};

export default SectionHeading;
