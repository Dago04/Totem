
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState, useEffect } from "react";
import images from '../data/sliderImages';

export const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlide = (action) => {
        setCurrentSlide((prevSlide) => {
            switch (action) {
                case "prev":
                    return prevSlide === 0 ? images.length - 1 : prevSlide - 1;
                case "next":
                    return prevSlide === images.length - 1 ? 0 : prevSlide + 1;
                default:
                    return action;
            }
        })
    }

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 2000); // Cambia de diapositiva cada segundo

        return () => clearInterval(intervalId);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <div className="max-w-[1400px] w-full mx-auto py-16 px-4 relative ">
            <div className="relative max-w-[600px] mx-auto ">
                <div
                    style={{ backgroundImage: `url(${images[currentSlide]})` }}
                    className="w-full  mx-auto h-[500px] md:h-[800px] lg:h-[780px] rounded-2xl bg-center bg-cover duration-700 ease-in-out"
                ></div>
                {/* left arrow */}
                <div className=" absolute top-[50%] -translate-y-1/2 left-4 md:left-6  text-2xl rounded-full p-2 bg-black text-white cursor-pointer hover:bg-zinc-600">
                    <BsChevronCompactLeft onClick={() => handleSlide("prev")} size={25} />
                </div>

                {/* right arrow */}
                <div className=" absolute top-[50%] -translate-y-1/2 right-4 md:right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-zinc-600">
                    <BsChevronCompactRight onClick={() => handleSlide("next")} size={25} />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {images.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};
