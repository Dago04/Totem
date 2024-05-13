import { ShirtAnimeList } from "../components"
import { Searchbar } from "../../ui"
import { getShirtByAnime } from "../helpers"
import { useMemo, useState } from "react"

export const AnimeShirtPage = () => {
    const [filteredShirts, setFilteredShirts] = useState([]);

    const anime = useMemo(() => filteredShirts, [filteredShirts]);

    const handleSearch = (searchText) => {
        const filtered = getShirtByAnime(searchText);

        setFilteredShirts(filtered);
    }
    return (
        <main className="w-full py-16">
            <Searchbar onSearch={handleSearch} />
            <ShirtAnimeList shirts={anime} />
        </main>

    )
}
