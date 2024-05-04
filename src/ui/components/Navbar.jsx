
import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {

    return (
        <header className='bg-black/90 text-white/90 body-font '>
            <nav className=" flex flex-col items-center container mx-auto  py-8 gap-5 lg:flex-row ">

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
                        to="/camisas"
                    >
                        Camisas
                    </NavLink>
                </div>


            </nav>
        </header>

    )
}