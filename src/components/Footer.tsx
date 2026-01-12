import Logo from './ui/Logo'
import Navigation from './ui/Navigation'
import Reveal from './ui/Reveal'
import { SocialLinks } from './ui/SocialLinks'

const Footer = () => {
  return (
    <Reveal
      from={'translate-y-10 opacity-0'}
      to={'translate-y-0 opacity-100'}
    >
      <footer className='py-14 bg-black md:py-11.5'>
        <div className="container grid justify-items-center md:grid-cols-2 md:justify-items-normal md:gap-4 md:items-start">
          <Logo className="w-36" />
          <Navigation className="text-second grid gap-4 py-8 mb-4.5 md:row-start-2 md:flex md:gap-8 md:py-0" />
          <SocialLinks className="flex items-center gap-4 mb-2 md:justify-self-end" />
          <p className="text-zinc-500 md:justify-self-end">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    </Reveal>
  )
}

export default Footer