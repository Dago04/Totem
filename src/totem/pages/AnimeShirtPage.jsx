import { ShirtAnimeList, Pagination } from "../components";
import { NoResult, Searchbar } from "../../ui";
import { getShirtByAnime } from "../helpers";
import { useEffect, useMemo, useState } from "react";
import { camisasAnime } from "../data/animeShirts";

export const AnimeShirtPage = () => {
    // Estado para almacenar la lista de camisetas filtradas
    const [filteredShirts, setFilteredShirts] = useState(camisasAnime);
    // Estado para almacenar el texto de búsqueda
    const [searchText, setSearchText] = useState("");

    // Estado para almacenar el número de camisetas por página
    const [currentPage, setCurrentPage] = useState(1);
    const [shirtsPerPage] = useState(12);

    const indexOfLastShirt = currentPage * shirtsPerPage;
    const indexOfFirstShirt = indexOfLastShirt - shirtsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    // Memoización de la lista de camisetas filtradas para evitar recálculos innecesarios
    const anime = useMemo(() => filteredShirts, [filteredShirts]);

    const currentShirts = anime.slice(indexOfFirstShirt, indexOfLastShirt);

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
                    <>
                        <ShirtAnimeList shirts={currentShirts} />
                        <Pagination
                            shirtsPerPage={shirtsPerPage}
                            totalShirts={filteredShirts.length}
                            paginate={paginate}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            currentPage={currentPage}
                        />
                    </>

                ) : (
                    <NoResult result={'No hay resultados relacionados con esa busqueda.'} />
                )}
            </section>
        </main>
    );
};
