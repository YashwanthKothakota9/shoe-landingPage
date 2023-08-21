import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-10 absolute w-full z-10 '>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <div className='flex justify-start'>
                <img
                    src={headerLogo}
                    alt='Logo'
                    width={90}
                    height={29}
                    className='px-3'
                />
                <span className='text-green-900 text-[50px] font-sans italic font-extrabold'>Paduka</span>
                </div>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt='hamburger'
                    width={24}
                    height={24}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav