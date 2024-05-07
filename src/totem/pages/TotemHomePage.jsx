import { Slider, Benefits } from '../components';
export const TotemHomePage = () => {
  return (
    <main className='w-full  mx-auto  py-16'>
      <section>
        <div className='text-center mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 animate__animated animate__backInDown'>
            Totem Art & Design
          </h1>
          <p className=' text-lg  leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
            Somos una tienda virtual que se dedica a la confección de camisetas,
            contamos con variedad de diseños.{' '}
          </p>
          <div className='flex mt-6 justify-center'>
            <div className='w-16 h-1 rounded-full bg-black inline-flex'></div>
          </div>
        </div>
      </section>

      <section className='relative'>
        <Slider />
      </section>
      <section className=''>
        <Benefits />
      </section>
    </main>
  );
};
