import { Link } from "react-router-dom";

const TermsAndPrivacy = () => {
    return (
        <div className="max-w-3xl mx-auto py-10 px-6 text-gray-800">
            <h1 className="text-3xl font-bold text-[#D4A351] mb-6">Termos de Uso e Política de Privacidade</h1>

            <p className="mb-4">
                A <b>Elite Soccer Lab</b> valoriza a sua privacidade e garante que os dados fornecidos serão utilizados exclusivamente para a inscrição no evento "Easter Season".
            </p>

            <h2 className="text-2xl font-semibold text-[#D4A351] mb-3">Uso dos Dados</h2>
            <p className="mb-4">
                Os dados recolhidos através do formulário de inscrição no Microsoft Forms serão utilizados apenas para:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Gerir as inscrições no evento;</li>
                <li>Comunicar informações relevantes aos participantes;</li>
                <li>Garantir uma melhor organização e experiência para os inscritos.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#D4A351] mb-3">Acesso aos Dados</h2>
            <p className="mb-4">
                Apenas a <b>Elite Soccer Lab</b> terá acesso aos dados recolhidos. Nenhuma informação será compartilhada com terceiros.
            </p>

            <h2 className="text-2xl font-semibold text-[#D4A351] mb-3">Eliminação dos Dados</h2>
            <p className="mb-4">
                Todos os dados pessoais recolhidos serão eliminados no prazo máximo de 30 dias após o término do evento.
            </p>

            <h2 className="text-2xl font-semibold text-[#D4A351] mb-3">Aceitação dos Termos</h2>
            <p className="mb-4">
                Ao realizar a inscrição, o participante concorda com os termos aqui estabelecidos.
            </p>

            <Link to="/" className="text-[#D4A351] font-semibold hover:underline">Voltar para a página inicial</Link>
        </div>
    );
};

export default TermsAndPrivacy;