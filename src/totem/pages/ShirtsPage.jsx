import { useParams } from "react-router-dom";
import { AnimeShirtPage, MusicShirtPage } from '../pages';
export const ShirtsPage = () => {

    const { category } = useParams();

    switch (category) {
        case 'anime':
            return <AnimeShirtPage />;
        case 'music':
            return <MusicShirtPage />;
        default:
            // En caso de que no se especifique una categoría válida, puedes manejarlo aquí
            return <p>Categoría inválida</p>;
    }



}
