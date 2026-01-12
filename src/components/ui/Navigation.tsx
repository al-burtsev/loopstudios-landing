import Link from 'next/link'
import { NAV_LINKS } from '@/src/constants/navigation'

const Navigation = ({ className, linkStyles }: { className: string, linkStyles?: string }) => {

  const linkBaseStyle = "relative text-white after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-8px] after:left-0 after:bg-(--link-under-color) after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-1 focus-visible:outline-fuchsia-300 focus-visible:outline-offset-4"
  const linkAnimation = "animate-fadeIn"
  
  return (
    <nav className={className}>
      {NAV_LINKS.map((link,i) => (
        <Link key={link.id}
          href={link.href}
          draggable={false}
          className={`${linkBaseStyle} ${linkStyles} ${linkAnimation}`}
          style={{ animationDelay: `${(i + 1) * 100}ms` }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation