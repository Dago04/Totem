import { useNavigate, useParams } from "react-router-dom";
import { getShirtAnimeById } from "../helpers";
import { useMemo } from "react";
export const ShirtDetailPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const animeShirt = useMemo(() => getShirtAnimeById(id), [id]);

    const onReturn = () => {
        navigate(-1);
    }
    if (!animeShirt) {
        return <div>Loading...</div>;
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="Anime"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={animeShirt.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font font-medium text-gray-900 tracking-widest">
                            {animeShirt.category}
                        </h2>
                        <h1 className=" text-3xl title-font  font-extrabold text-blue-600  my-2">
                            {animeShirt.anime}
                        </h1>
                        <p className="leading-relaxed">
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                            seitan poutine tumeric. Gastropub blue bottle austin listicle
                            pour-over, neutra jean shorts keytar banjo tattooed umami
                            cardigan.
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-slate-950/90 mb-5">
                            {/* <div className="flex">
                                <span className="mr-3 font-medium">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div> */}
                            <div className="flex  items-center">
                                <span className="mr-3 text-md title-font font-medium text-gray-900 tracking-widest">Tallas</span>
                                <div className="relative">
                                    <select className="text-white/90 rounded border appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base pl-3 pr-10 bg-slate-900/90">
                                        {animeShirt.size.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-md title-font font-medium text-gray-900 tracking-widest">
                                {animeShirt.price}
                            </span>
                            <button className="flex ml-auto text-white  bg-slate-900/90 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-medium" onClick={onReturn}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
