import { useState } from "react";
import { womenSizeData, menSizeData } from "../../totem/data/WomenSizeData";
export const SizeGuide = ({ isOpen, onClose }) => {
    const [isMenSize, setIsMenSize] = useState(true);
    if (!isOpen) return null;

    const currentSizeData = isMenSize ? menSizeData : womenSizeData;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-blue-600 ">Guía de tallas</h2>
                    <button onClick={onClose} className="text-gray-600 text-xl">✖</button>
                </div>
                <div className="flex justify-center mb-4">
                    <button className={`px-4 py-2 ${isMenSize ? ' text-white/90  bg-slate-900/90' : 'bg-gray-200'} rounded-md mr-2`} onClick={() => setIsMenSize(true)}>Hombre</button>
                    <button className={`px-4 py-2 ${!isMenSize ? ' text-white/90  bg-slate-900/90' : 'bg-gray-200'} rounded-md`} onClick={() => setIsMenSize(false)}>Mujer</button>
                </div>
                <table className="w-full text-left border-separate border-spacing-1">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-white/90  bg-slate-900/90">Talla</th>
                            <th className="py-2 px-4 text-white/90  bg-slate-900/90">Ancho</th>
                            <th className="py-2 px-4 text-white/90  bg-slate-900/90">Alto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSizeData.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{item.shirtType}</td>
                                <td className="py-2 px-4 border-b">{item.width}</td>
                                <td className="py-2 px-4 border-b">{item.height}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
