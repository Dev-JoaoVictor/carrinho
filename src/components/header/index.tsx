import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export function Header() {
  return (
    <header className='w-full px-1 bg-slate-600'>
      <nav className='w-full max-w-7xl h-20 flex items-center justify-between px-8 mx-auto '>
        <Link to="/" className='font-bold text-2xl text-white'>
          Tech Shop
        </Link>
        <Link to='' className='relative text-white'>
          <FiShoppingCart size={26} />
          <span className='absolute -right-5 -top-3 px-2.5 bg-sky-500 w-6 h-6 flex items-center justify-center rounded-full font-bold'>
            2
          </span>
        </Link>
      </nav>
    </header>
  )
}