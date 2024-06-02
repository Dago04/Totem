import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { FaGoogle } from "react-icons/fa";
import Logo from "/LogoBlack.png";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/slices/auth";
export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: "dagosalas1999@gmail.com",
        password: "123456",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuthentication(email, password));
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout>
            <form onSubmit={onSubmit}>
                <div className="py-2">
                    <img className="w-16 py-0" src={Logo} alt="Logo Totem" />
                    <center >

                        <span className="text-3xl justify-center font-semibold text-black/90">Log In</span>
                    </center>
                </div>
                <div className="mt-2">
                    <label
                        className="block font-medium text-sm text-black/90"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                        className="w-full rounded-md py-2.5 px-4 border text-sm text-black/90 placeholder-inherit outline-none bg-slate-200"
                    />
                </div>

                <div className="mt-4">
                    <label
                        className="block font-medium text-sm text-black/90"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={onInputChange}
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-none bg-slate-200 text-black/90 placeholder-inherit"
                        />
                    </div>
                </div>

                <div className="flex flex-row gap-3 items-center justify-center mt-4 sm:flex-row py-4 text-sm ">
                    <button
                        className="w-1/2  inline-flex justify-center items-center px-4 py-2  bg-slate-900/90 border border-transparent rounded-md font-semibold  text-white/90 uppercase tracking-widest hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                        type="submit"
                    >
                        Login
                    </button>
                    <button
                        className="w-1/2 inline-flex justify-center items-center gap-2 px-4 py-2  bg-slate-900/90 border border-transparent rounded-md font-semibold  text-white/90 uppercase tracking-widest hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                        onClick={onGoogleSignIn}
                    >
                        <FaGoogle size={15} />
                        Google
                    </button>
                </div>
                <div>
                    <p className="text-black/90 flex items-center justify-end w-full font-medium text-sm tracking-wide ">
                        Dont have an account?
                        <Link className="ml-1  hover:text-blue-600" to={"/auth/register"}>
                            Create
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};
