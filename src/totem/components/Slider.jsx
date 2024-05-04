import image01 from "../../../public/Slider/image-01.jpeg";
import image02 from "../../../public/Slider/image-02.jpeg";
import image03 from "../../../public/Slider/image-03.jpeg";
import image04 from "../../../public/Slider/image-04.jpeg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export const Slider = () => {
    const slides = [
        {
            url: image01,
        },
        {
            url: image02,
        },
        {
            url: image03,
        },
        {
            url: image04,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    };
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="max-w-[1400px] w-full mx-auto py-16 px-4 relative ">
            <div className="relative max-w-[600px] mx-auto ">
                <div
                    style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                    className="w-full max-w-[650px] mx-auto h-[500px] md:h-[650px] lg:h-[780px] rounded-2xl bg-center bg-cover duration-700 ease-in-out"
                ></div>
                {/* left arrow */}
                <div className=" absolute top-[50%] -translate-y-1/2 left-4 md:left-6  text-2xl rounded-full p-2 bg-black text-white cursor-pointer hover:bg-zinc-600">
                    <BsChevronCompactLeft onClick={prevSlide} size={25} />
                </div>

                {/* right arrow */}
                <div className=" absolute top-[50%] -translate-y-1/2 right-4 md:right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-zinc-600">
                    <BsChevronCompactRight onClick={nextSlide} size={25} />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {slides.map((slide, index) => (
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
