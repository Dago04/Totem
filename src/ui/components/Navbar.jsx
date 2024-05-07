
import { Link, NavLink } from 'react-router-dom';
import Logo from '/Logo.png'


export const Navbar = () => {

    return (
        <header className='bg-black/90 text-white/90 '>

            <nav className=" flex flex-col items-center container mx-auto  py-3 gap-5 lg:flex-row ">
                <img className='w-20 ' src={Logo} alt='Logo Totem' />
                <Link
                    className=" hover:opacity-80"
                    to="/"
                >
                    Home
                </Link>

                <div className="flex gap-2">

                    <NavLink
                        className={({ isActive }) =>
                            `hover:opacity-80 ${isActive ? 'text-red-500' : ''} `}
                        to="/anime-shirts"
                    >
                        Anime Shirts
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `hover:opacity-80 ${isActive ? 'text-red-500' : ''} `}
                        to="/music-shirts"
                    >
                        Music Shirts
                    </NavLink>
                </div>


            </nav>
        </header>

    )
}