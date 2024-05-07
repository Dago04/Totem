import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryCard = ({ id, categoria, urls }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [currentImage, setCurrentImage] = useState(urls[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setMouseIn(true);
  };
  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(urls[currentIndex]);
      setCurrentIndex((currentIndex + 1) % urls.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, urls]);

  return (
    <article
      key={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl pb-8 w-[18rem] max-w-full mx-auto mt-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 h-[30rem] shadow-2xl pl-8'
    >
      <img
        src={currentImage.url}
        alt='Category Image'
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 ease-in-out transition-all duration-300 ${
          mouseIn ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <h3
        className={`z-10 mt-3 text-3xl font-bold text-white transition-all duration-300 ${
          mouseIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {categoria}
      </h3>
      <div
        className={`z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ${
          mouseIn ? 'block delay-150' : 'invisible delay-150'
        }`}
      >
        <span className='capitalize'>{currentImage.name}</span>
      </div>
    </article>
  );
};

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
