import Header from '@/src/components/Header';
import Hero from '@/src/components/sections/Hero';
import Description from '@/src/components/sections/Interactive';
import Projects from '@/src/components/sections/Projects';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Projects />
      <Footer />
    </>
  );
}
