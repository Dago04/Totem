import { useState } from "react";

export const Searchbar = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchText);
    }
    return (
        <section className="container mx-auto mb-8 px-5">
            <form className="w-full max-w-[500px] " onSubmit={handleSubmit}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="searchText"
                        autoComplete="off"
                        className="  w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                        placeholder="Search for anime"
                        value={searchText}
                        onChange={handleInputChange}

                    />
                    <button className="text-white absolute end-2.5 bottom-2.5 bg-slate-900/90 hover:bg-blue-600  focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 ">
                        Search
                    </button>
                </div>
            </form>
        </section>
    )
}
