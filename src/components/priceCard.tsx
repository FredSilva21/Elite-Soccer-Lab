import PlusIcon from "../assets/Icons/plus.svg"

interface ExtrasProps {
    name: string;
    price: string;
}

interface FeaturesProps {
    name: string;
    quantity: number;
}

interface PriceCardProps {
    name: string;
    price: string;
    extras: ExtrasProps[];
    features: FeaturesProps[];
}

export default function PriceCard({ name, price, extras, features }: PriceCardProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#4A7F54] text-left">{name}</h3>
            <p className="text-4xl font-extrabold text-[#D4A351] mt-2 text-left">{price}</p>
            <p className="text-md text-gray-500 mt-5 text-left">O que inclui:</p>
            <ul className="mt-2 text-gray-600 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 py-1">
                        {feature.quantity}x {feature.name}
                    </li>
                ))}
            </ul>
            {extras.length > 0 && (
                <div className="mt-4">
                    <p className="text-md text-gray-500 text-left">Extras:</p>
                    <ul className="text-gray-600 text-left">
                        {extras.map((extra, index) => (
                            <li key={index} className="flex items-center gap-2 py-1">
                                <img src={PlusIcon} alt="Like" className='h-5' /> {extra.name} - {extra.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {
                name === "Pack Premium" && (
                    <button className="text-[#D4A351] border-2 border-[#D4A351] rounded-lg px-4 py-2 font-semibold mx-auto flex items-center justify-center mt-5">
                        Melhor Escolha
                    </button>
                )
            }
        </div>
    );
};