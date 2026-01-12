import Image from 'next/image';
import Reveal from '../ui/Reveal';
import desktop from '../../assets/images/desktop/image-hero.jpg'
import mobile from '../../assets/images/mobile/image-hero.jpg'

const Hero = () => {
  return (
    <section className="relative py-56.5 md:pb-36 bg-[#121212] overflow-hidden">
      <div className='md:hidden'>
        <Image
          src={mobile}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover will-change-transform animate-hero-fade-in"
        />
      </div>

      <div className="hidden md:block"
      >
        <Image
          src={desktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover will-change-transform animate-hero-fade-in"
        />
      </div>
      <div className="container">
        <Reveal
          from="opacity-0 translate-y-8 scale-95 blur-sm"
          to="opacity-100 translate-y-0 scale-100"
          delay={400}
        >
          <h1 className="font-accent font-light uppercase text-[clamp(2rem,10.75vw,4.5rem)] leading-[0.95] md:leading-none border-3 border-solid border-white text-white px-6 md:px-8.5 py-6 pb-4 md:py-7 md:max-w-162.5">
            Immersive experiences that deliver
          </h1>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero