import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
    return (
        <form className="w-full mb-12 mt-12 lg:mt-0 lg:max-w-[500px]">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email
                </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    First name
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Last name
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <textarea
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    required
                ></textarea>
                <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Message
                </label>
            </div>

            <button
                type="submit"
                className="text-white bg-slate-950 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                Submit
            </button>
        </form>
    );
};
