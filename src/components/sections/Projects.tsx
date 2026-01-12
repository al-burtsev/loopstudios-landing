import CREATIONS from '../../constants/creations'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className='py-24 lg:pt-46 lg:pb-32.5'>
      <div className="container lg:grid lg:grid-cols-4 lg:items-start">
        <h2 className='font-accent font-light text-3xl/8 text-center uppercase mb-12.5 lg:mb-20 lg:text-5xl lg:col-span-2 lg:text-left'>
          Our creations
        </h2>
        <ul className='grid gap-6 mb-8 lg:grid-cols-subgrid lg:col-span-4 lg:gap-8'>
          {CREATIONS.map((c) => (
            <li key={c.id}>
              <article className='relative h-full'>
                <picture>
                  <source media="(min-width: 768px)" srcSet={c.src.desktop} />
                  <Image
                    src={c.src.mobile}
                    alt={c.title}
                    className="h-full"
                  />
                </picture>
                <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <h3 className='font-accent font-light text-white text-2xl/8 uppercase whitespace-pre-line absolute left-4 bottom-4 max-w-[50%] lg:max-w-[70%] lg:text-3xl lg:left-8 lg:bottom-8'>{c.title}</h3>
              </article>
            </li>
          ))}
        </ul>

        <button type='button' className='text-sm tracking-[5px] uppercase border border-black p-2.5 mx-auto block w-full max-w-38.75 cursor-pointer lg:mx-0 lg:justify-self-end
 lg:row-start-1 lg:col-start-4 '>see all</button>
      </div>
    </section>
  )
}

export default Projects