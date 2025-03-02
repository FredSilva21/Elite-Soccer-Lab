import { useState, useEffect } from "react";
import { team } from "../constants/team";
import TeamCard from "./teamCard";

export default function Team() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMember = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === team.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevMember = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? team.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextMember();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 px-10 text-center bg-[#F6F6F6] text-white">
            <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">A Nossa Equipa</h2>

            <div className="relative">
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                        }}
                    >
                        {team.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevMember}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#4A7F54] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    &lt;
                </button>
                <button
                    onClick={nextMember}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#4A7F54] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
