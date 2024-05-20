import { ShirtAnimeList } from "../components";
import { NoResult, Searchbar } from "../../ui";
import { getShirtByAnime } from "../helpers";
import { useEffect, useMemo, useState } from "react";
import { camisasAnime } from "../data/animeShirts";

export const AnimeShirtPage = () => {
    // Estado para almacenar la lista de camisetas filtradas
    const [filteredShirts, setFilteredShirts] = useState(camisasAnime);
    // Estado para almacenar el texto de búsqueda
    const [searchText, setSearchText] = useState("");

    // Memoización de la lista de camisetas filtradas para evitar recálculos innecesarios
    const anime = useMemo(() => filteredShirts, [filteredShirts]);

    // Efecto que se ejecuta cuando cambia el texto de búsqueda
    useEffect(() => {
        if (searchText.trim() === "") {
            // Si el campo de búsqueda está vacío, restablece la lista completa de camisetas

            setFilteredShirts(camisasAnime);
        } else {
            // Obtiene la lista de camisetas filtradas por el texto de búsqueda
            const filtered = getShirtByAnime(searchText);
            console.log('a')
            // Actualiza el estado con la lista de camisetas filtradas
            setFilteredShirts(filtered);
        }
    }, [searchText]);

    const handleSearch = (anime) => {
        setSearchText(anime);
    };

    return (
        <main className="w-full py-16">
            <section className="container mx-auto mb-8 px-5">
                <Searchbar
                    onSearch={handleSearch}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    placeholder={"Busca por anime"}
                />
            </section>
            <section className="container px-5 mx-auto">
                {filteredShirts.length > 0 ? (
                    <ShirtAnimeList shirts={anime} />
                ) : (
                    <NoResult result={'There are no results related to that search.'} />
                )}
            </section>
        </main>
    );
};
