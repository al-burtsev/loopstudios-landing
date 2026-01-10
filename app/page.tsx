import Image from "next/image";
import Header from '@/src/components/Header';
import Hero from '@/src/components/sections/Hero';
import Description from '@/src/components/sections/Description';
import Projects from '@/src/components/sections/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Projects />
    </>
  );
}
