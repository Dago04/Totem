import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { FaGoogle } from "react-icons/fa";
import Logo from "/LogoBlack.png";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/slices/auth";
import { useEffect, useMemo } from "react";



export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: "",
        password: "",
    });

    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        dispatch(startGoogleSignIn());
    };



    return (
        <AuthLayout>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <div className="py-2">
                    {/* <img className="w-16 py-0" src={Logo} alt="Logo Totem" /> */}
                    <center >

                        <span className="text-3xl justify-center font-semibold text-black/90">Ingresar</span>
                    </center>
                </div>
                <div className="mt-2">
                    <label
                        className="block font-medium text-sm text-black/90"
                        htmlFor="email"
                    >
                        Correo Electronico
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Escribe tu correo eletronico aquí"
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                        className="w-full rounded-md py-2.5 px-4 border text-sm text-black/90 outline-none bg-slate-200"
                    />
                </div>

                <div className="mt-4">
                    <label
                        className="block font-medium text-sm text-black/90"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Escribe tu contraseña aquí"
                            required
                            value={password}
                            onChange={onInputChange}
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-none bg-slate-200 text-black/90 "
                        />
                    </div>
                </div>

                <div className="mt-4 text-center ">
                    {
                        !!errorMessage && (
                            <h1 className="block font-medium text-sm text-red-500"> {errorMessage} </h1>
                        )
                    }
                </div>


                <div className="flex flex-row gap-3 items-center justify-center mt-4 sm:flex-row py-4 text-sm ">
                    <button
                        className={`w-1/2 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md font-semibold uppercase tracking-widest transition ease-in-out duration-150 ${isAuthenticated
                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                            : 'bg-slate-900/90 text-white/90 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2'
                            }`}
                        type="submit"
                        disabled={isAuthenticated}
                    >
                        Ingresar
                    </button>
                    <button
                        className={`w-1/2 inline-flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-md font-semibold uppercase tracking-widest transition ease-in-out duration-150 ${isAuthenticated
                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                            : 'bg-slate-900/90 text-white/90 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2'
                            }`}
                        onClick={onGoogleSignIn}
                        disabled={isAuthenticated}
                    >
                        <FaGoogle size={15} />
                        Google
                    </button>
                </div>
                <div>
                    <p className="text-black/90 flex items-center justify-end w-full font-medium text-sm tracking-wide ">
                        No tienes una cuenta?
                        <Link className="ml-1  hover:text-blue-600" to={"/auth/register"}>
                            Crear
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};
