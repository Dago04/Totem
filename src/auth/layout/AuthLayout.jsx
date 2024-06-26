
export const AuthLayout = ({ children }) => {
    return (
        <div className="text-white/90  ">
            <div className="items-center p-2 min-h-screen flex flex-col justify-center  sm:justify-center  pt-6 sm:pt-0 ">

                <div className=" w-full max-w-md px-6 py-4 bg-white/90 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}
