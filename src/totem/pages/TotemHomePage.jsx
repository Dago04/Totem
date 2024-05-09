import { Slider, Benefits } from '../components';
export const TotemHomePage = () => {
  return (
    <main className='w-full mx-auto p-4 lg:py-16 lg:px-32'>
      <section className='flex flex-col lg:flex-row gap-12'>
        <article className='text-center lg:mb-20 w-full lg:w-1/2 lg:mt-24 animate__animated animate__fadeInLeft'>
          <h1 className='mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-pretty'>
            Experimenta <span className='text-blue-600'>la mejor calidad</span>{' '}
            en serigrafía.
          </h1>
          <p className='text-lg font-normal text-gray-500 lg:text-2xl text-pretty'>
            En nuestra empresa, nos enorgullecemos de ofrecer los productos de
            serigrafía de más alta calidad en Costa Rica. Nuestro compromiso con
            la excelencia y la atención al detalle nos distingue de la
            competencia. Confía en nosotros para obtener resultados impecables
            en cada proyecto.
          </p>

          <div className='flex mt-6 justify-center'>
            <div className='w-16 h-1 rounded-full bg-black inline-flex'></div>
          </div>
        </article>

        <section className='relative w-full lg:w-1/2 animate__animated animate__fadeInRight'>
          <Slider />
        </section>
      </section>

      <Benefits />
    </main>
  );
};
