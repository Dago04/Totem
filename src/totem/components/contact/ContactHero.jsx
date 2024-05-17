import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "/Logo.png";

export const ContactHero = () => {
    const socialLinks = [
        {
            url: "https://www.facebook.com/totemartdesign",
            icon: <RiFacebookCircleLine size={20} className="sm:size-25" />,
            label: "Totem Art & Design",
        },
        {
            url: "https://www.instagram.com/totemartdesign",
            icon: <FaInstagram size={20} className="sm:size-25" />,
            label: "totemartdesign",
        },
    ];

    const contactInfo = [
        {
            icon: <FaWhatsapp size={20} className="sm:size-25" />,
            label: "+506 8857 8381",
        },
        {
            icon: <MdOutlineEmail size={20} className="sm:size-25" />,
            label: "totemartcr@gmail.com",
        },
    ];

    return (
        <section className="py-10 sm:py-20 w-full bg-slate-950/85 text-white/90 text-sm sm:text-md">
            <article className="container mx-auto px-3 flex flex-col sm:flex-row items-center justify-center sm:gap-20 lg:gap-80 lg:px-0 ">
                <div className="mb-8 sm:mb-0 animate__animated animate__fadeInLeft">
                    <p className="text-lg font-normal text-pretty">
                        How can we help you?
                    </p>
                    <h2 className="my-8 text-3xl sm:text-6xl sm:my-8 font-extrabold text-blue-600">
                        Contact us
                    </h2>
                    <p className="text-lg font-normal text-pretty">
                        We&apos;re here to help and answer any questions you
                        <br className="hidden lg:block" />
                        might have. We look forward to hearing from you!
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.url}
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <div className="flex items-center gap-1 mt-4 sm:mt-8 sm:gap-3 lg:gap-1">
                                    {link.icon}
                                    <p>{link.label}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 mt-4 sm:mt-8 sm:gap-3 lg:gap-1"
                            >
                                {info.icon}
                                <p>{info.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:flex animate__animated animate__fadeInRight">
                    <figure className="w-full max-w-[500px]">
                        <img src={Logo} alt="Logo Totem" />
                    </figure>
                </div>
            </article>
        </section>
    );
};
