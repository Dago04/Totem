import { Link, NavLink } from 'react-router-dom';
import Logo from '/Logo.png';

export const Navbar = () => {
  return (
    <header className='bg-slate-950/90 text-white/90 '>
      <nav className=' flex flex-col items-center container mx-auto  py-3 gap-5 lg:flex-row '>
        <img className='w-20 ' src={Logo} alt='Logo Totem' />
        <Link className=' hover:opacity-80' to='/'>
          Inicio
        </Link>

        <div className='flex justify-end w-full mr-16 gap-8'>
          <NavLink
            className={({ isActive }) =>
              `hover:opacity-80 text-md font-bold text-white/50 ${
                isActive ? 'text-red-500' : ''
              } `
            }
            to='/categories'
          >
            Categorias
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:opacity-80 text-md font-bold text-white/50 ${
                isActive ? 'text-red-500 underline' : ''
              } `
            }
            to='/shirts-anime'
          >
            Anime
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:opacity-80 text-md font-bold text-white/50 ${
                isActive ? 'text-red-500 underline' : ''
              } `
            }
            to='/shirts-music'
          >
            Música
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
