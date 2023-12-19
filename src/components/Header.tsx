"use client";
import React from "react";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { IoClose, IoMenuOutline } from "react-icons/io5";
const redHat = Quicksand({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  return (
    <header>
      <nav className='max-h-[10vh] max-w-[144rem] mx-auto p-4 py-3 border-b-1 border-blue-500 border-opacity-20 flex items-center justify-between'>
        <Link
          href='/'
          className={`${redHat.className} max-w-fit flex flex-col gap-1 text-xl uppercase tracking-widest`}
        >
          <span className='block bg-gradient-linear-100 bg-clip-text leading-8 font-semibold text-transparent'>
            D. B.
          </span>
          {/* <hr className='w-full' /> */}
          <div className='h-[0.1rem] bg-gradient-linear-100'></div>
          <span className='block bg-gradient-linear-100 bg-clip-text leading-8 text-transparent font-semibold text-center'>
            E.
          </span>
        </Link>

        <ul
          className={`fixed h-screen w-screen top-0 ${
            !isOpen ? "-right-[100vw]" : "right-0"
          } flex flex-col justify-center items-center gap-8 bg-[rgba(255,255,255,0.04)] backdrop-blur-[4rem] transition-all ease-in-out duration-500 md:h-fit md:w-fit md:static md:bg-transparent md:flex-row md:gap-4`}
        >
          <li className='w-[9rem] flex items-end gap-1 font-semibold'>
            <span className='text-sm text-gray-400'>00.</span>
            <Link
              href='/#about'
              className='hover:bg-gradient-linear-100 hover:bg-clip-text hover:text-transparent'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          <li className='w-[9rem] flex items-end gap-1 font-semibold'>
            <span className='text-sm text-gray-400'>01.</span>
            <Link
              href='/#projects'
              className='hover:bg-gradient-linear-100 hover:bg-clip-text hover:text-transparent'
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li className='w-[9rem] flex items-end gap-1 font-semibold'>
            <span className='text-sm text-gray-400'>02.</span>
            <Link
              href='/#contact'
              className='hover:bg-gradient-linear-100 hover:bg-clip-text hover:text-transparent'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className='relative w-fit md:hidden z-1'
          aria-label='Toggle menu'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoClose className='text-[3.5rem] text-blue-300' />
          ) : (
            <IoMenuOutline className='text-[3.5rem] text-blue-300' />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
