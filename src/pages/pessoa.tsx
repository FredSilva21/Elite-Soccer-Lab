import { useParams } from "react-router-dom";
import { team } from "../constants/team";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Pessoa() {
    const { id } = useParams();

    if (!id) return <div>Por favor, forneça um ID</div>;

    const member = team.find((member) => member.id === parseInt(id));

    if (!member) return <div>Membro não encontrado</div>;

    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />
            <div className="flex flex-col items-center justify-start w-full bg-gray-100 pt-40 pb-10">
                <div className="flex flex-col items-center justify-start w-full max-w-4xl mx-auto">
                    <img
                        src={member.foto}
                        alt={member.nome}
                        className="w-64 h-64 object-cover rounded-full mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-3 text-black text-left">{member.nome}</h3>
                    <p className="text-xl font-semibold mb-3 text-[#B38A42] text-left">{member.funcao}</p>
                    <p className="text-lg text-left px-10" dangerouslySetInnerHTML={{ __html: member.descricao }}></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}