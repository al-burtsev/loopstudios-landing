import Logo from './ui/Logo'
import Navigation from './ui/Navigation'
import { SocialLinks } from './ui/SocialLinks'

const Footer = () => {
  return (
    <footer className='py-14 bg-black lg:py-11.5'>
      <div className="container grid justify-items-center lg:grid-cols-2 lg:justify-items-normal lg:gap-4 lg:items-start">
        <Logo className="w-36" />
        <Navigation className="text-white grid gap-4 py-8 mb-4.5 lg:row-start-2 lg:flex lg:gap-8 lg:py-0" />
        <SocialLinks className="flex items-center gap-4 mb-2 lg:justify-self-end" />
        <p className="text-zinc-500 lg:justify-self-end">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer