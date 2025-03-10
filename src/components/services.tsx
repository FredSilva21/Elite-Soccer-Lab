export default function Services() {
    const servicos = [
        { titulo: "Técnica Individual", descricao: "Foco no desenvolvimento das habilidades específicas do jogador de futebol, como orientação espacial, scan, relação com bola, drible, posicionamento corporal no terreno de jogo e tomada de decisão." },
        { titulo: "Preparação Física", descricao: "Programa de treino especializado para prevenir lesões desportivas, melhorar a performance física e corporal de modo a aprimorar o jogador a nível individual, baseado no treino de força, agilidade e resistência para alto rendimento no futebol." },
        { titulo: "Mental Coaching", descricao: "Dotar o atleta de ferramentas do foro mental para melhorar a concentração, gestão de stress e fortalecer a confiança para otimizar o desempenho em campo." },
        { titulo: "Orientação Nutricional", descricao: "Avaliar o perfil do atleta e sua composição corporal para desenvolver um plano alimentar para otimizar a sua performance desportiva e garantir que tenha sempre energia, resistência e uma boa recuperação." },
        { titulo: "Análise Individual", descricao: "Desenvolvimento de um vídeo de melhores momentos nos jogos em que o atleta participa no seu clube oficial, de modo a potenciar o jogador, realizado por um analista profissional de futebol." }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 md:px-10 text-center bg-[#F6F6F6] text-white">
            <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">Os Nossos Serviços</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {servicos.map((servico, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg p-6 md:p-8 rounded-2xl border-2 border-[#4A7F54] hover:border-[#D4A351] hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <h3 className="text-2xl font-bold text-[#4A7F54] mb-4">
                            {servico.titulo.split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h3>
                        <p className="text-black text-left">{servico.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
