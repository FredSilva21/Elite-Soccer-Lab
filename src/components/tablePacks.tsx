import { packages, features } from "../constants/packs";
import CheckIcon from "../assets/icons/check.svg"
import CrossIcon from "../assets/icons/cross.svg"

export default function TablePacks() {
    return (
        <div className="shadow-lg rounded-lg p-6 w-full">
            {/* Compare features for each pack */}
            <div className="flex gap-4">
                <table className="w-full px-10 py-4 border-gray-200 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-[#D4A351] text-white text-lg">
                            <th></th>
                            {packages.map((pack, index) => (
                                <th key={index} className="text-center py-3 px-4 font-bold uppercase">{pack.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="text-left py-2 px-4 text-xl font-semibold">{feature}</td>
                                {packages.map((pack, packIndex) => (
                                    <td key={packIndex} className="text-center py-2 px-4">
                                        <div className="flex justify-center">
                                            {pack.features.find(f => f.name === feature) ? (
                                                <img src={CheckIcon} alt="Like" className="h-8 my-5" />
                                            ) : (
                                                <img src={CrossIcon} alt="Dislike" className="h-8 my-5" />
                                            )}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}