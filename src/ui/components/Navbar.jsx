import { Link, NavLink } from 'react-router-dom';
import Logo from '/Logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className='bg-slate-950/90 text-white/90 text-xl'>
      <nav className=' flex flex-col items-center container mx-auto  py-3 gap-5 lg:flex-row '>
        <img className='w-20 ' src={Logo} alt='Logo Totem' />
        <Link className=' hover:opacity-80' to='/'>
          Inicio
        </Link>

        <div className='flex justify-center w-full lg:justify-start'>
          <NavLink
            className={({ isActive }) =>
              `hover:opacity-80 text-md font-bold ${isActive ? 'text-blue-600' : 'text-white/50'
              } `
            }
            to='/categories'
          >
            Categorias
          </NavLink>
        </div>

        <GiHamburgerMenu className=' md:hidden' />

      </nav>
    </header>
  );
};

const

