import { Pagination, ShirtMusicList } from "../components"
import { camisasMusica } from "../data/musicShirts";
import { NoResult, Searchbar } from "../../ui";
import { useEffect, useMemo, useState } from "react";
import { getShirtByGroup } from "../helpers";

export const MusicShirtPage = () => {
    const [searchText, setSearchText] = useState("");

    const [filteredShirts, setFilteredShirts] = useState(camisasMusica);

    // Estado para almacenar el número de camisetas por página
    const [currentPage, setCurrentPage] = useState(1);
    const [shirtsPerPage] = useState(12);

    const indexOfLastShirt = currentPage * shirtsPerPage;
    const indexOfFirstShirt = indexOfLastShirt - shirtsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    const group = useMemo(() => filteredShirts, [filteredShirts]);

    const currentShirts = group.slice(indexOfFirstShirt, indexOfLastShirt);

    useEffect(() => {
        if (searchText.trim() === "") {
            setFilteredShirts(camisasMusica);
        } else {
            const filtered = getShirtByGroup(searchText);
            setFilteredShirts(filtered);
        }
    }, [searchText]);

    const handleSearch = (group) => {
        setSearchText(group);
    }
    return (
        <main className="w-full py-16">
            <section className="container mx-auto mb-8 px-5">
                <Searchbar
                    onSearch={handleSearch}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    placeholder={"Busca por banda"}
                />
            </section>
            <section className="container px-5  mx-auto">
                {filteredShirts.length > 0 ? (

                    <>
                        <ShirtMusicList shirts={currentShirts} />
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

    )
}
