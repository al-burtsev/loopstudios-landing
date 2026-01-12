import Link from 'next/link'
import { NAV_LINKS } from '@/src/constants/navigation'

const Navigation = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      {NAV_LINKS.map(link => (
        <Link key={link.id}
          href={link.href}
          draggable={false}
          className='transition-opacity hover:opacity-80 focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-4'
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation