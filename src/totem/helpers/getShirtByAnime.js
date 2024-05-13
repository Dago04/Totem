import { camisasAnime } from '../data/animeShirts';

export const getShirtByAnime = (anime) => {
    anime = anime.toLowerCase();
    if (anime.length === 0) return [];
    return camisasAnime.filter(camisa => camisa.anime.toLowerCase().includes(anime));
}