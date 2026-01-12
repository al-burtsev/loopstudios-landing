import Image from 'next/image'
import logo from '@/public/logo.svg'

import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-32" }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`inline-block transition-opacity hover:opacity-80 focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-8 ${className}`}
      aria-label="To the main page"
      draggable={false}
    >
      <Image
        src={logo}
        alt="The Logo of the Loopstudios"
        className="w-full h-auto"
        draggable={false}
      />
    </Link>
  );
};


export default Logo