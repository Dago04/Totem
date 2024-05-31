import { camisasMusica } from "../data/musicShirts";
export const getShirtMusicById = (id) => {
    const idNumber = parseInt(id);

    // Buscar la camisa por id
    return camisasMusica.find(camisa => camisa.id === idNumber);
}