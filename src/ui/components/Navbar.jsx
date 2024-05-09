import { NavLink } from "react-router-dom";
import Logo from "/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="bg-slate-950/90 text-white/90 text-xl">
      <nav className="flex justify-between lg:justify-start items-center container mx-auto py-3 gap-5 lg:flex-row ">
        <img className="w-20" src={Logo} alt="Logo Totem" />
        <GiHamburgerMenu className="mr-5 lg:hidden" onClick={handleOpenMenu} />

        <NavItems />
        {openMenu && <NavModal handleCloseMenu={handleCloseMenu} openMenu={openMenu} />}
      </nav>
    </header>
  );
};

const NavItems = ({ handleCloseMenu }) => {
  return (
    <div className="hidden lg:top-0 lg:bg-transparent lg:flex lg:flex-row lg:text-xl bg-slate-950 gap-3 lg:w-full">
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="home"
        onClick={handleCloseMenu}
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="/categories"
        onClick={handleCloseMenu}

      >
        Categorias
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="/contact"
        onClick={handleCloseMenu}

      >
        Contacto
      </NavLink>
    </div >
  );
};

const NavModal = ({ handleCloseMenu, openMenu }) => {
  return (
    <div className={`absolute z-10 bg-slate-950 top-24 left-0 p-4 w-full flex flex-col items-center text-3xl py-8 gap-3 animate__animated ${openMenu ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}`}>
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="home"
        onClick={handleCloseMenu}
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="/categories"
        onClick={handleCloseMenu}

      >
        Categorias
      </NavLink>
    </div >
  )
}
