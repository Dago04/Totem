import { useNavigate, useParams } from "react-router-dom";
import { getShirtAnimeById } from "../helpers";
import { SizeGuide } from "../../ui";
import { useMemo, useState } from "react";
export const ShirtDetailPage = () => {
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
    const openSizeGuide = () => setIsSizeGuideOpen(true);
    const closeSizeGuide = () => setIsSizeGuideOpen(false);

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
                            <div className="flex flex-col sm:flex-row sm:items-center w-full space-y-2 sm:space-y-0 sm:space-x-3">
                                <span className="text-md title-font font-medium text-gray-900 tracking-widest">Tallas</span>
                                <div className="relative w-full sm:w-auto">
                                    <select className="text-white/90 text-center rounded border appearance-none py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base pl-3 pr-10 bg-slate-900/90 w-full sm:w-auto">
                                        {animeShirt.size.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-8 sm:w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
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
                                <div className="w-full  sm:items-end flex justify-end " onClick={openSizeGuide}>
                                    <button className="text-white/90 bg-slate-900/90 border-0 py-1 sm:py-2 px-4 sm:px-6 focus:outline-none hover:bg-blue-600 rounded font-medium w-full sm:w-auto">
                                        Ver guía de tallas
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="text-md title-font font-medium text-gray-900 tracking-widest">
                                {animeShirt.price}
                            </span>
                            <button className="flex ml-auto text-white/90  bg-slate-900/90 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-medium mt-2 sm:mt-0" onClick={onReturn}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SizeGuide isOpen={isSizeGuideOpen} onClose={closeSizeGuide} />
        </section>
    );
};
