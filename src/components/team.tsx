import { team } from "../constants/team";
import TeamCard from "./teamCard";

export default function Team() {
    return (
        <section className="py-20 px-4 sm:px-6 md:px-10 text-center bg-[#F6F6F6] text-white">
            <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">A Nossa Equipa</h2>

            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-center items-center"
                    >
                        <TeamCard member={member} />
                    </div>
                ))}
            </div>
        </section>
    );
}
