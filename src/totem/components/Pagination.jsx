
export const Pagination = ({ shirtsPerPage, totalShirts, paginate, nextPage, prevPage, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalShirts / shirtsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="mt-8 flex justify-center">
            <ul className="flex flex-wrap items-center">
                <li className="mr-2 mb-2 md:mb-0">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Anterior
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className="mr-2 mb-2 md:mb-0">
                        <button
                            onClick={() => paginate(number)}
                            className={`${currentPage === number
                                ? "bg-slate-900/90 text-white/90"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                                } font-bold py-2 px-4 rounded`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className="ml-2 mb-2 md:mb-0">
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(totalShirts / shirtsPerPage)}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r ${currentPage === Math.ceil(totalShirts / shirtsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    )
}
