import React from "react";

const ToolBox = ({ toolName }: { toolName: string }) => {
  return (
    <div className='w-fit p-3 bg-blue-500 rounded-xl shadow-lg'>{toolName}</div>
  );
};

export default ToolBox;
