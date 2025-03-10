import { useNavigate } from "react-router-dom";

interface TeamCardProps {
    member: {
        id: number;
        foto: string;
        nome: string;
        funcao: string;
        descricao: string;
    };
}

export default function TeamCard({ member }: TeamCardProps) {
    const navigate = useNavigate();

    return (
        <div className="flex-shrink-0 w-full px-4">
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => {
                    window.scrollTo(0, 0)
                    navigate(`/equipa/${member.id}`)
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/equipa/${member.id}`)}
            >
                <img
                    src={member.foto}
                    alt={`Foto de ${member.nome}, ${member.funcao} da Elite Soccer Lab`}
                    className="w-full h-64 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg mb-4 mx-auto block"
                    style={{ objectPosition: "top" }}
                    loading="lazy"
                />
                <h3 className="text-xl font-bold mb-3 text-black text-left">{member.nome}</h3>
                <p className="text-xl font-semibold mb-3 text-[#B38A42] text-left">{member.funcao}</p>
            </div>
        </div>
    );
}
