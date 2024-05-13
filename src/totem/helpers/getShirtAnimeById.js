import { camisasAnime } from '../data/animeShirts';

export const getShirtAnimeById = (id) => {
    const idNumber = parseInt(id);

    // Buscar la camisa por id
    return camisasAnime.find(camisa => camisa.id === idNumber);
}