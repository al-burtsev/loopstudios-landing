import CREATIONS from '../../constants/creations'
import Image from 'next/image'
import Reveal from '../ui/Reveal'

const Projects = () => {
  return (
    <Reveal
      from={'translate-y-10 opacity-0'}
      to={'translate-y-0 opacity-100'}
    >
      <section className='py-24 lg:pt-46 lg:pb-39.5'>
        <div className="container lg:grid lg:grid-cols-4 lg:items-start">
          <h2 className='font-accent font-light text-3xl/8 text-center uppercase selection:bg-fuchsia-300 selection:text-fuchsia-900 mb-12.5 lg:mb-20 lg:text-5xl lg:col-span-2 lg:text-left'>
            Our creations
          </h2>
          <div className='grid gap-6 mb-8 md:grid-cols-2 md:auto-rows-[50vh] lg:auto-rows-auto lg:grid-cols-4 lg:col-span-4 lg:gap-8'>
            {CREATIONS.map((c, index) => (
              <Reveal
                key={c.id}
                delay={index === 0 ? 0 : index * 150}
                from="opacity-0 translate-y-20"
                to="opacity-100 translate-y-0"
              >

                <article className='group relative cursor-pointer overflow-hidden h-full bg-second'>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={c.src.desktop} />
                    <Image
                      src={c.src.mobile}
                      alt=''
                      aria-hidden
                      className="h-full select-none object-cover object-top"
                      draggable={false}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:bg-white/70 group-hover:from-white/70 dark:group-hover:bg-black/70 dark:group-hover:from-black/70" />

                  <h3 className='font-accent font-light text-white transition-colors duration-300 group-hover:text-black dark:group-hover:text-white/80 text-2xl/8 uppercase whitespace-pre-line absolute left-4 bottom-4 max-w-[50%] lg:max-w-[70%] lg:text-3xl lg:left-8 lg:bottom-8'>{c.title}</h3>
                </article>

              </Reveal>

            ))}
          </div>

          <button type='button'
            className='text-sm tracking-[5px] uppercase border bg-main text-second border-second p-2.5 mx-auto block w-full
             max-w-38.75 cursor-pointer lg:mx-0 lg:justify-self-end lg:row-start-1 lg:col-start-4 transition-colors duration-300 hover:text-white hover:bg-black hover:border-transparent focus:outline-0 focus-visible:border-fuchsia-300 dark:focus-visible:border-fuchsia-900'>see all</button>
        </div>
      </section>
    </Reveal>

  )
}

export default Projects