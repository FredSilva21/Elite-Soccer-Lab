import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { packages } from "../constants/packs";
import PriceCard from "../components/priceCard";
import TablePacks from "../components/tablePacks";

export default function Precos() {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />

            {/* Content Section */}
            <div className="py-20 px-10 text-center bg-[#F6F6F6] text-white mt-20">
                <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">Packs</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {packages.map((pack, index) => (
                        <PriceCard key={index} name={pack.name} price={pack.price} features={pack.features} extras={pack.extras} />
                    ))}
                </div>
            </div>

            {/* Table to compare plans */}
            <TablePacks />

            {/* Footer */}
            <Footer />
        </div>
    );
}
