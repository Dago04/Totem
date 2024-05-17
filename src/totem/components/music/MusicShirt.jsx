export const MusicShirt = ({ id, size, price, category, group, image }) => {
    return (
        <div className="w-full border shadow-lg rounded-x rounded ease-in-out transition hover:scale-105">
            <div className=" rounded overflow-hidden">
                <img alt={group} className="" src={image} />
            </div>
            <div className="mt-2 p-4">
                <h3 className="mt-1">Categoria - {category}</h3>
                <h2 className="mt-1">Banda - {group}</h2>
                <p className="mt-1">Precio - {price}</p>
                <p className="mt-1">Tallas - {size.join(', ')}</p>
            </div>
        </div>
    )
}
