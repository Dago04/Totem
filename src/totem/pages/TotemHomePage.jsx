import { Slider, Benefits } from '../components';
export const TotemHomePage = () => {
  return (
    <main className='w-full mx-auto py-16'>
      <section className='relative'>
        <Slider />
      </section>
      <section className=''>
        <Benefits />
      </section>
    </main>
  );
};
