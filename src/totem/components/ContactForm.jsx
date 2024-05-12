import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mbjnjbdy")
    if (state.succeeded) {
        return <p>Gracias por contactarnos, en breve nos pondremos en contacto contigo</p>
    }
    return (
        <form className="w-full mb-12 mt-12 lg:mt-0 lg:max-w-[500px]" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="email"
                    id="email"

                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none  focus:outline-none  focus:border-blue-500 peer"
                    placeholder=""
                    autoComplete="off"
                    required
                />
                <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 ion-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-2/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    autoComplete="off"
                    required
                />
                <label
                    htmlFor="first_name"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    First name
                </label>
                <ValidationError
                    prefix="First name"
                    field="first_name"
                    errors={state.errors}
                />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    autoComplete="off"
                />
                <label
                    htmlFor="last_name"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Last name
                </label>
                <ValidationError
                    prefix="Last name"
                    field="last_name"
                    errors={state.errors}
                />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <textarea
                    name="message"
                    id="message"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-950 appearance-none 00 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    placeholder=" "
                    autoComplete="off"
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-2xl text-gray-500 ion-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Message
                </label>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button
                type="submit" disabled={state.submitting}
                className="text-white bg-slate-950 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                Submit
            </button>
        </form>
    );
};
