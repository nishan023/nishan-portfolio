import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main className='p-4'>
        <section className='min-h-[85vh] max-w-[128rem] mx-auto flex flex-col gap-2 justify-center items-start'>
          <span>Hi there!</span>
          <h1 className='font-bold leading-[1.1] text-4xl'>
            I am{" "}
            <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
              Daniel Ezekiel.
            </span>
          </h1>
          <h3 className='font-bold text-xl'>
            A Frontend Developer, building efficient and scalable web solutions.
          </h3>
          <p>
            As a Software Engineer, I specialize in passionately building (and
            occasionally designing) characteristic web solutions and experiences
            for individuals and organizations with taste.
          </p>

          <div className='mt-6 flex gap-4'>
            <Button href='' text='reach out' hasHover={false} />
            <Button href='' text='My Résumé' hasHover={true} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

