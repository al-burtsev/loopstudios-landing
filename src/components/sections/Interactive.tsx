import Image from 'next/image'
import interactive from '../../assets/images/desktop/image-interactive.jpg'

const Interactive = () => {
  return (
    <section className='pt-24 lg:pt-40.5'>
      <div className="container xl:relative">
        <Image
          src={interactive}
          alt='A man is playing a VR game'
          draggable={false}
          className="mx-auto xl:mx-0"
        />
        <div className="pt-12 bg-white xl:absolute xl:bottom-0 xl:right-0 xl:w-152 xl:pl-25 xl:pt-25.5">
          <h2 className='font-accent font-light text-3xl/8 text-center uppercase mb-5 lg:text-5xl xl:text-left'>
            The leader in interactive VR
          </h2>
          <p className='text-[15px] text-zinc-500 leading-relaxed max-w-[86%] mx-auto text-center xl:text-left xl:mx-0'>
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Interactive