import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/slices/auth/thunks";

const formData = {
    email: "",
    password: "",
    displayName: "",
};

const formValidations = {
    email: [
        (value) => value.includes("@") && value.length > 1,
        "El correo debe contener @ y no puede estar vacío"
    ],
    password: [
        (value) => value.length >= 6,
        "La contraseña debe tener al menos 6 caracteres",
    ],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const {
        formState,
        displayName,
        email,
        password,
        onInputChange,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    };

    return (
        <AuthLayout>
            <form onSubmit={onSubmit}>
                <div className="py-2">
                    <center>
                        <span className="text-3xl font-semibold text-black/90">Sign Up</span>
                    </center>
                </div>
                <div>
                    <label
                        className={`block font-medium text-sm text-black/90 ${displayNameValid && formSubmitted ? 'text-red-500' : ''}`}
                        htmlFor="fullName"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={onInputChange}
                        autoComplete="off"
                        className={`w-full rounded-md py-2.5 px-4 border text-sm outline-none bg-slate-200 text-black/90 ${displayNameValid && formSubmitted ? 'border-red-500' : ''}`}
                    />
                    {displayNameValid && formSubmitted && (
                        <p className="text-red-500 text-sm mt-1">{displayNameValid}</p>
                    )}
                </div>
                <div className="mt-2">
                    <label
                        className={`block font-medium text-sm text-black/90 ${emailValid && formSubmitted ? 'text-red-500' : ''}`}
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                        className={`w-full rounded-md py-2.5 px-4 border text-sm outline-none bg-slate-200 text-black/90 ${emailValid && formSubmitted ? 'border-red-500' : ''}`}
                    />
                    {emailValid && formSubmitted && (
                        <p className="text-red-500 text-sm mt-1">{emailValid}</p>
                    )}
                </div>
                <div className="mt-4">
                    <label
                        className={`block font-medium text-sm text-black/90 ${passwordValid && formSubmitted ? 'text-red-500' : ''}`}
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            className={`w-full rounded-md py-2.5 px-4 border text-sm outline-none bg-slate-200 text-black/90 ${passwordValid && formSubmitted ? 'border-red-500' : ''}`}
                        />
                        {passwordValid && formSubmitted && (
                            <p className="text-red-500 text-sm mt-1">{passwordValid}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center mt-4 sm:flex-row py-4 text-sm">
                    <button
                        className="w-1/2 inline-flex justify-center items-center px-4 py-2 bg-slate-900/90 border border-transparent rounded-md font-semibold text-white/90 uppercase tracking-widest hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div>
                    <p className="text-black/90 flex items-center justify-end w-full font-medium text-sm tracking-wide">
                        Already have an account?
                        <Link className="ml-1 hover:text-blue-600" to={"/auth/login"}>
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};