import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import Logo from '/Logo.png';
export const Footer = () => {
  return (
    <footer className='bg-slate-950/90 text-white/90 text-xl'>
      <div className='container px-5 py-3 flex mx-auto items-center sm:flex-row flex-col '>
        <img className='w-20 ' src={Logo} alt='Logo Totem' />
        <span className='ml-3 text-lg '>© 2024 Totem Art & Design</span>

        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3'>
          <BiLogoFacebook size={25} />

          <FaInstagram size={25} />
        </span>
      </div>
    </footer>
  );
};
