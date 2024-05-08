import { categorias } from '../data/categories';
import { CategoryCard } from '../components';

export const CategoriesPage = () => {
  return (
    <>
      <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center my-12'>
        Actualizados en los{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-red-400 '>
          temas principales
        </span>
      </h1>

      <section className='flex flex-wrap gap-4 mb-16 justify-evenly lg:px-16'>
        {categorias.map((categoria) => (
          <CategoryCard
            key={categoria.id}
            id={categoria.id}
            categoria={categoria.categoria}
            urls={categoria.urls}
          />
        ))}
      </section>
    </>
  );
};
