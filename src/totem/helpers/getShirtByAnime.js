import { camisasAnime } from '../data/animeShirts';

export const getShirtByAnime = (anime) => {
    anime = anime.toLowerCase();
    if (anime.length === 0) return [];
    return camisasAnime.filter(camisa => {
        const animeName = camisa.anime.toLowerCase();
        return animeName.includes(anime);
    });
}