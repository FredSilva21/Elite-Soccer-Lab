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
                <div className="flex flex-wrap justify-center gap-10 p-10">
                    {team.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
