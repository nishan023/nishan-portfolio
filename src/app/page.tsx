import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import {
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className='p-4'>
        <section className='min-h-[85vh] max-w-[128rem] mx-auto grid items-center md:w-[85vw] md:flex md:justify-between xl:w-[50vw]'>
          <div className='flex flex-col gap-2 justify-center items-start md:max-w-[45rem] lg:max-w-[58rem] xl:max-w-[62rem]'>
            <span className='lg:text-lg'>Hi there!</span>
            <h1 className='font-bold leading-[1.1] text-3xl md:text-4xl lg:text-5xl xl:text-[6.4rem]'>
              I am{" "}
              <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
                Daniel Ezekiel
              </span>
              .
            </h1>
            <h3 className='font-bold text-xl text-gray-300 lg:text-2xl'>
              A Frontend Developer building efficient and scalable web
              solutions.
            </h3>
            <p className='lg:text-lg'>
              As a Software Engineer, I specialize in passionately building (and
              occasionally designing) characteristic web solutions and
              experiences for individuals and organizations with taste.
            </p>

            <div className='mt-6 flex gap-4 lg:text-lg'>
              <Button href='' text='reach out' hasHover={false} />
              <Button href='' text='My Résumé' hasHover={true} />
            </div>
          </div>

          <aside className='h-full grid place-items-center gap-6'>
            <Link href='https://github.com/daniel-ezekiel' target='_blank'>
              <FaGithub className='w-12 h-12' />
            </Link>
            <Link href='https://www.linkedin.com/in/db-ezekiel' target='_blank'>
              <FaLinkedin className='w-12 h-12' />
            </Link>
            <Link href='https://twitter.com/db_ezekiel' target='_blank'>
              <FaTwitter className='w-12 h-12' />
            </Link>
            <Link
              href='https://www.behance.net/danielezekiel01'
              target='_blank'
            >
              <FaBehance className='w-12 h-12' />
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

