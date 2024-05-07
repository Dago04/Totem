import { benefits } from '../data/benefits';
import 'animate.css';
export const Benefits = () => {
  return (
    <>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-row flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 animate__animated animate__fadeInUp gap-4 justify-evenly'>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className='p-6 flex w-1/4 flex-col text-center items-center bg-slate-100 shadow-xl rounded-lg hover:bg-white transition delay-100 ease-in-out'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center  text-black mb-5 flex-shrink-0'>
                <benefit.icon size={30} />
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-2xl title-font mb-3 font-bold'>
                  {benefit.title}
                </h2>
                <p className='leading-relaxed text-base'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
