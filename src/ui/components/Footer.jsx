import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
    return (
        <footer className="bg-black/90 text-white/90 ">

            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-# rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-lg text-white">© 2024 Totem Art & Design</span>
                </a>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">

                    <BiLogoFacebook size={25} />


                    <FaInstagram size={25} />

                </span>
            </div>

        </footer>
    )
}
