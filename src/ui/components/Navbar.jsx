import { NavLink } from "react-router-dom";
import Logo from "/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-slate-950/90 text-white/90 text-xl">
      <nav className="flex justify-between lg:justify-start items-center container mx-auto py-3 gap-5 lg:flex-row ">
        <img className="w-20" src={Logo} alt="Logo Totem" />
        <GiHamburgerMenu className="mr-5 lg:hidden" onClick={handleOpenMenu} />
        <div className="hidden lg:flex gap-2 relative">
          <NavItems />
        </div>

        {openMenu && <NavItems />}
      </nav>
    </header>
  );
};

const NavItems = () => {
  return (
    <div className="absolute lg:relative lg:top-0 lg:bg-transparent lg:flex lg:flex-row lg:text-xl bg-slate-950 top-24 p-4 w-full flex flex-col items-center text-3xl py-8 gap-3">
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="home"
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:opacity-80  font-bold ${isActive ? "text-blue-500" : "text-white/50"
          } `
        }
        to="/categories"
      >
        Categorias
      </NavLink>
    </div>
  );
};
