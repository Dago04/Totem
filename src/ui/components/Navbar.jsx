import { NavLink, Link } from "react-router-dom";
import Logo from "/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="bg-slate-950/90 text-white/90 text-xl">
      <nav className="flex justify-between lg:justify-start items-center container mx-auto py-2 gap-5 lg:flex-row">
        <Link to="/home">
          <img className="w-20" src={Logo} alt="Logo Totem" />
        </Link>
        <GiHamburgerMenu className="mr-5 lg:hidden" onClick={handleOpenMenu} />

        <NavItems handleCloseMenu={handleCloseMenu} />
        {openMenu && <NavModal handleCloseMenu={handleCloseMenu} />}
      </nav>
    </header>
  );
};

const NavItems = ({ handleCloseMenu }) => {
  const navLinks = [
    { path: "/home", label: "Inicio" },
    { path: "/categories", label: "Categorias" },
    { path: "/contact", label: "Contacto" },
  ];

  return (
    <div className="hidden lg:top-0 lg:bg-transparent lg:flex lg:flex-row lg:text-xl bg-slate-950 gap-3 lg:w-full">
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          className={({ isActive }) =>
            `hover:opacity-80 font-bold ${isActive ? "text-blue-500" : ""
            }`
          }
          to={path}
          onClick={handleCloseMenu}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

const NavModal = ({ handleCloseMenu }) => {
  const navLinks = [
    { path: "/home", label: "Inicio" },
    { path: "/categories", label: "Categorias" },
    { path: "/contact", label: "Contacto" },
  ];

  return (
    <div className="absolute z-10 bg-slate-950 top-24 left-0 p-4 w-full flex flex-col items-center text-3xl py-8 gap-3 animate__animated animate__fadeInLeft">
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          className={({ isActive }) =>
            `hover:opacity-80 font-bold ${isActive ? "text-blue-500" : "text-white/50"
            }`
          }
          to={path}
          onClick={handleCloseMenu}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
