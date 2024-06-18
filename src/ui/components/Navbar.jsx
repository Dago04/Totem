import { NavLink, Link } from "react-router-dom";
import Logo from "/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import { startLogout } from "../../store/slices/auth";

export const Navbar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <header className="bg-slate-950/90 text-white/90 text-xl">
      <nav className="flex justify-between lg:justify-start items-center container mx-auto py-2 gap-5 lg:flex-row">
        <Link to="/home">
          <img className="w-20" src={Logo} alt="Logo Totem" />
        </Link>

        <GiHamburgerMenu className="mr-5 lg:hidden" onClick={handleOpenMenu} />

        <NavItems displayName={displayName} handleCloseMenu={handleCloseMenu} onLogout={onLogout} />
        {openMenu && <NavModal displayName={displayName} handleCloseMenu={handleCloseMenu} onLogout={onLogout} />}
      </nav>
    </header>
  );
};

const NavItems = ({ handleCloseMenu, displayName, onLogout }) => {
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
            `hover:opacity-80 font-bold ${isActive ? "text-blue-500" : ""}`
          }
          to={path}
          onClick={handleCloseMenu}
        >
          {label}
        </NavLink>
      ))}
      <div className="flex justify-end items-center w-full gap-8">
        <h2 className="over:opacity-80 font-bold">Bienvenido {displayName}</h2>
        <IconButton color='error' onClick={onLogout}>
          <LoginOutlined />
        </IconButton>
      </div>
    </div>
  );
};

const NavModal = ({ handleCloseMenu, displayName, onLogout }) => {
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
            `hover:opacity-80 font-bold ${isActive ? "text-blue-500" : ""
            }`
          }
          to={path}
          onClick={handleCloseMenu}
        >
          {label}
        </NavLink>
      ))}
      <h2 className="over:opacity-80 font-bold">Bienvenido {displayName}</h2>
      <IconButton color='error' onClick={onLogout}>
        <LoginOutlined />
      </IconButton>
    </div >
  );
};
