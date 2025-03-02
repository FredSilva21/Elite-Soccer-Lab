import { useNavigate } from "react-router-dom";

interface TeamCardProps {
    member: {
        id: number;
        foto: string;
        nome: string;
        funcao: string;
        descricao: string;
    };
    index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
    const navigate = useNavigate();
    return (
        <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/3 px-4"
        >
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105" onClick={() => navigate(`/equipa/${member.id}`)}>
                <img
                    src={member.foto}
                    alt={member.nome}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                />
                <h3 className="text-xl font-bold mb-3 text-black text-left">{member.nome}</h3>
                <p className="text-xl font-semibold mb-3 text-[#B38A42] text-left">{member.funcao}</p>

            </div>
        </div>
    )
}