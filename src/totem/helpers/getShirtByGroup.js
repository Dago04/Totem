import { camisasMusica } from '../data/musicShirts';

// function to filter the list of shirts by the search text || Music Shirts ||
export const getShirtByGroup = (group) => {
    group = group.toLowerCase();
    if (group.length === 0) return [];
    return camisasMusica.filter(camisa => {
        const groupName = camisa.group.toLowerCase();
        return groupName.includes(group);
    });
}