export const AnimeShirt = ({ id, size, price, category, anime, image }) => {
    return (
        <div className="w-full border shadow-lg rounded-x rounded ">
            <div className=" rounded overflow-hidden">
                <img alt={anime} className="" src={image} />
            </div>
            <div className="mt-2 p-4">
                <h3 className="mt-1">Category - {category}</h3>
                <h2 className="mt-1">Anime - {anime}</h2>
                <p className="mt-1">Prize - {price}</p>
                <p className="mt-1">Size - {size}</p>
            </div>
        </div>
    );
};
