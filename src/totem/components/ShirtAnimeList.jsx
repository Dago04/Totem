import { camisasAnime } from "../data/camisasAnime"
import { AnimeShirt } from "./"
export const ShirtAnimeList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {
                camisasAnime.map(shirt => (
                    <AnimeShirt key={shirt.id} {...shirt} />
                ))
            }
        </div>
    )
}
