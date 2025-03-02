export default function Services() {
    const servicos = [
        { titulo: "Técnica<br>Individual", descricao: "Foco no desenvolvimento das habilidades específicas do jogador de futebol, como orientação espacial, scan, relação com bola, drible, posicionamento corporal no terreno de jogo e tomada de decisão." },
        { titulo: "Preparação<br>Física", descricao: "Programa de treino especializado para prevenir lesões desportivas, melhorar a performance física e corporal de modo a aprimorar o jogador a nível individual, baseado no treino de força, agilidade e resistência para alto rendimento no futebol." },
        { titulo: "Mental<br>Coaching", descricao: "Dotar o atleta de ferramentas do foro mental para melhorar a concentração, gestão de stress e fortalecer a confiança para otimizar o desempenho em campo." },
        { titulo: "Orientação<br>Nutricional", descricao: "Avaliar o perfil do atleta e sua composição corporal para desenvolver um plano alimentar para otimizar a sua performance desportiva e garantir que tenha sempre energia, resistência e uma boa recuperação." },
        { titulo: "Análise<br>Individual", descricao: "Desenvolvimento de um vídeo de melhores momentos nos jogos em que o atleta participa no seu clube oficial, de modo a potenciar o jogador, realizado por um analista profissional de futebol." }
    ];

    return (
        <section className="py-20 px-10 text-center bg-[#F6F6F6] text-white">
            <h2 className="text-4xl font-bold mb-12 text-[#4A7F54]">Os Nossos Serviços</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {servicos.map((servico, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg p-6 md:p-8 rounded-2xl h-full flex flex-col justify-space-around border-2 border-[#4A7F54] 
                                   hover:border-[#D4A351] hover:rotate-1 hover:shadow-xl transition-all duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold text-[#4A7F54] mb-4" dangerouslySetInnerHTML={{ __html: servico.titulo }} />
                        <p className="text-black text-justify">{servico.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
