import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import images from '../data/sliderImages';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Cambia de diapositiva cada segundo

    return () => clearInterval(intervalId);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      <div className='relative max-w-[800px] mx-auto px-3'>
        <div
          style={{ backgroundImage: `url(${images[currentSlide]})` }}
          className='w-full  mx-auto h-[500px] md:h-[500px] lg:h-[500px] rounded-2xl bg-center bg-cover duration-700 ease-in-out'
        ></div>

      </div>

    </>
  );
};
