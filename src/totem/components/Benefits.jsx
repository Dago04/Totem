import { benefits } from '../data/benefits'
import 'animate.css';
export const Benefits = () => {
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 animate__animated animate__backInDown">Totem Art & Design</h1>
                    <p className=" text-lg  leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Somos una tienda virtual que se dedica a la confección de camisetas, contamos con variedad de diseños.   </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 animate__animated animate__fadeInUp">
                    {
                        benefits.map((benefit) => (
                            <div key={benefit.id} className="p-4 md:w-1/3 flex flex-col text-center items-center ">
                                <div className="w-20 h-20 inline-flex items-center justify-center  text-black mb-5 flex-shrink-0">
                                    <benefit.icon size={30} />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 ">{benefit.title}</h2>
                                    <p className="leading-relaxed text-base">{benefit.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
