import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TeamCard from "../components/teamCard";
import { team } from "../constants/team";

export default function NossaEquipa() {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />

            <div className="py-20 px-10 text-center mt-20">
                <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">A Nossa Equipa</h2>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
