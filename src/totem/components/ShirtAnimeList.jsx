import { useMemo } from 'react';
import { camisasAnime } from "../data/animeShirts"
import { AnimeShirt } from "./"
export const ShirtAnimeList = () => {
    const animeShirts = useMemo(() => {
        return camisasAnime;
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {
                animeShirts.map(shirt => (
                    <AnimeShirt key={shirt.id} {...shirt} />
                ))
            }
        </div>
    )
}
