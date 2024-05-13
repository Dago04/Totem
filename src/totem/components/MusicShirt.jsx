import { Link } from "react-router-dom"
export const MusicShirt = ({ id, size, price, category, group, image }) => {
    return (
        <div className="w-full border shadow-lg rounded-x rounded ease-in-out transition hover:scale-105">
            <div className=" rounded overflow-hidden">
                <img alt={group} className="" src={image} />
            </div>
            <div className="mt-2 p-4">
                <h3 className="mt-1">Category - {category}</h3>
                <h2 className="mt-1">Group - {group}</h2>
                <p className="mt-1">Prize - {price}</p>
                <p className="mt-1">Size - {size.join(', ')}</p>
            </div>
        </div>
    )
}
