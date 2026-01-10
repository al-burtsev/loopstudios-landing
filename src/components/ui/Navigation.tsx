import { navList } from '@/src/constants/navigation'

const Navigation = () => {
  return (
    <nav className='hidden md:flex'>
      <ul className='flex gap-4 md:gap-8'>
        {navList.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation