import { useMemo } from "react";
import { camisasAnime } from "../data/animeShirts";
import { AnimeShirt } from "./";
export const ShirtAnimeList = ({ shirts }) => {
    const animeShirts = useMemo(() => shirts, [shirts]);

    return (
        <section className="container px-5 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {
                    // Verifica si la lista de camisas está vacía
                    animeShirts.length === 0
                        ? // Si está vacía, renderiza todas las camisas disponibles
                        camisasAnime.map((shirt) => (
                            <AnimeShirt key={shirt.id} {...shirt} />
                        ))
                        : // Si no está vacía, renderiza las camisas filtradas
                        animeShirts.map((shirt) => <AnimeShirt key={shirt.id} {...shirt} />)
                }
            </div>
        </section>
    );
};
