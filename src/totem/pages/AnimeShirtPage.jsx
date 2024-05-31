import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { ShirtAnimeList, Pagination } from "../components";
import { NoResult, Searchbar } from "../../ui";
import { getShirtByAnime } from "../helpers";
import { camisasAnime } from "../data/animeShirts";
import { setFilteredShirts, setSearchText, setCurrentPage } from "../../store/slices/anime";
export const AnimeShirtPage = () => {

    const dispatch = useDispatch();
    const { filteredShirts, searchText, currentPage, shirtsPerPage } = useSelector(
        (state) => state.anime
    );

    const indexOfLastShirt = currentPage * shirtsPerPage;
    const indexOfFirstShirt = indexOfLastShirt - shirtsPerPage;

    const paginate = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }
    const nextPage = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const prevPage = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };


    // Memoización de la lista de camisetas filtradas para evitar recálculos innecesarios
    const anime = useMemo(() => filteredShirts, [filteredShirts]);

    const currentShirts = anime.slice(indexOfFirstShirt, indexOfLastShirt);

    // Efecto que se ejecuta cuando cambia el texto de búsqueda
    useEffect(() => {
        if (searchText.trim() === "") {
            // Si el campo de búsqueda está vacío, restablece la lista completa de camisetas

            dispatch(setFilteredShirts(camisasAnime));
        } else {
            // Obtiene la lista de camisetas filtradas por el texto de búsqueda
            const filtered = getShirtByAnime(searchText);
            // Actualiza el estado con la lista de camisetas filtradas
            dispatch(setFilteredShirts(filtered));
        }
    }, [searchText, dispatch]);

    const handleSearch = (anime) => {
        dispatch(setSearchText(anime));
    };

    return (
        <main className="w-full py-16">
            <section className="container mx-auto mb-8 px-5">
                <Searchbar
                    onSearch={handleSearch}
                    searchText={searchText}
                    setSearchText={(text) => dispatch(setSearchText(text))}
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
