import { Link } from "react-router-dom";

export const AnimeShirt = ({ id, size, price, category, anime, image }) => {
    return (
        <div className="w-full border shadow-lg rounded-x rounded ease-in-out transition  hover:scale-105">
            <div className=" rounded overflow-hidden">
                <img alt={anime} className="" src={image} />
            </div>
            <div className="mt-1 p-4 text-black/90">
                <h3 className="mt-1">Category - {category}</h3>
                <h2 className="mt-1">Anime - {anime}</h2>
                <p className="mt-1">Prize - {price}</p>
                <p className="mt-1">Size - {size.join(', ')}</p>
            </div>
            <div className=" p-4">
                <Link
                    className=" ml-auto text-white  bg-slate-900/90 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                    to={`/shirts/${category.toLowerCase()}/${id}`}
                >
                    More...
                </Link>
            </div>

        </div>
    );
};
