import { useParams } from "react-router-dom";
import { AnimeShirtPage, MusicShirtPage } from '../pages';
export const ShirtsPage = () => {

    const { category } = useParams();

    const categories = {
        'anime': <AnimeShirtPage />,
        'music': <MusicShirtPage />,
        'games': <p>Games</p>,
        'movies': <p>Movies</p>,
    }

    return (
        <>
            {categories[category] || <p>Categoría inválida</p>}
        </>
    );

}
