import Burger from './ui/Burger'
import Logo from './ui/Logo'
import Navigation from './ui/Navigation'

const Header = () => {
  return (
    <header className='absolute w-full top-10 md:top-16'>
      <div className='container flex justify-between items-center'>
        <Logo className="w-36 md:w-50" />
        <Navigation />
        <Burger />
      </div>
    </header>
  )
}

export default Header