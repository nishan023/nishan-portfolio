import React from "react";
import Link from "next/link";
import { Quicksand } from "next/font/google";
const redHat = Quicksand({ subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <header className='max-h-[10vh] max-w-[144rem] mx-auto p-4 py-3 text-xl border-b-1 border-blue-500 border-opacity-20'>
      <Link
        href='/'
        className={`${redHat.className} w-[15rem] flex flex-col gap-1 uppercase tracking-widest`}
      >
        <span className='leading-8'>Daniel</span>
        {/* <hr className='w-full' /> */}
        <div className='h-[0.1rem] bg-gray-100'></div>
        <span className='w-full leading-8 text-right'>Ezekiel</span>
      </Link>

      <ul className='hidden'>
        <li>
          <span>00.</span>
          <Link href='/'>About</Link>
        </li>

        <li>
          <span>01.</span>
          <Link href='/'>Projects</Link>
        </li>

        <li>
          <span>02.</span>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
