// import React from "react";
// const currentYear= new Date().getFullYear();
// const Footer = () => {
//   return (
//     <footer>
//       <p className='border-t-1 border-blue-500 p-4 font-light text-center'>
//         Designed and Developed by{" "}
//         <span className='font-normal bg-gradient-linear-100 bg-clip-text text-transparent underline'>
//           Nishan Dhakal
//         </span> {" "}
//          Copyright © {currentYear} | All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center px-4 py-2">
      <p className='font-light text-center'>
        Copyright © {currentYear} | All rights reserved.
      </p>
      <p className='font-light text-center'>
        Designed and Developed by{" "}
        <span className='font-normal bg-gradient-linear-100 bg-clip-text text-transparent underline'>
          Nishan Dhakal
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;

