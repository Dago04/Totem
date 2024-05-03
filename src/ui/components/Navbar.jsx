
import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Navbar = () => {

    return (
        <header className='text-white/90 body-font'>
            <nav className="bg-black/90 flex flex-col items-center  p-7 gap-5 lg:flex-row">

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
                        to="/camisas-mago"
                    >
                        Camisas
                    </NavLink>
                </div>


            </nav>
        </header>

    )
}