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
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
      aria-label="To the main page"
    >
      <Image
        src={logo}
        alt="Логотип компании"
        className="w-full h-auto"
      />
    </Link>
  );
};


export default Logo