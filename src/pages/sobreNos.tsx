import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function SobreNos() {
    return (
        <div className="flex flex-col w-full bg-gray-100 min-h-screen">
            <Navbar />

            <div className="flex flex-col w-full px-5 md:px-20">
                <div className="py-20 px-5 md:px-10 text-center bg-[#F6F6F6] mt-20">

                    {/* Seção "Sobre Nós" */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img
                            src="/assets/about-1.webp"
                            alt="Foto 1"
                            className="w-full max-w-[400px] h-auto rounded-lg"
                            loading="lazy"
                        />
                        <div className="flex flex-col gap-5">
                            <h2 className="text-4xl font-bold text-[#4A7F54] text-left">
                                Sobre Nós
                            </h2>
                            <p className="text-lg text-[#000000] text-left">
                                A Elite Football Lab é uma academia de futebol dedicada ao
                                desenvolvimento individual do atleta, desde a formação até ao escalão
                                sénior. <br /><br />
                                Com base na convicção de que cada jogador possui um potencial único, a
                                nossa missão é proporcionar um acompanhamento especializado e
                                abrangente, integrando as vertentes técnico-tática, metabólica, física e
                                mental. Através de uma abordagem estruturada e personalizada,
                                procuramos maximizar o desempenho e a performance de cada atleta,
                                preparando-o para os mais elevados desafios do futebol.
                            </p>
                        </div>
                    </div>

                    {/* Seção "A Nossa História" */}
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-16">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-4xl font-bold text-[#4A7F54] text-left">
                                A Nossa História
                            </h2>
                            <p className="text-lg text-[#000000] text-left">
                                Fundada em 2025, a nossa academia surgiu com a missão de formar
                                jogadores altamente preparados para os desafios do futebol de alto
                                rendimento. Acreditamos que o talento, quando aliado a uma metodologia
                                de treino estruturada e exigente, pode transformar potencial em
                                excelência. <br /><br />

                                Guiados pela paixão pelo desporto e pelo compromisso com o
                                desenvolvimento dos nossos atletas, estruturamos o nosso trabalho com
                                base em quatro pilares fundamentais: físico-motor, técnico-tático,
                                psicológico e metabólico. Esta abordagem integrada permite uma
                                preparação completa, dotando os jogadores das competências essenciais
                                para evoluírem e se destacarem no cenário competitivo. <br /><br />

                                Na nossa academia, cada atleta é incentivado a superar desafios, a
                                desenvolver todo o seu potencial e a perseguir os seus objetivos com
                                dedicação e disciplina. Porque no futebol, como em qualquer grande
                                trajetória, o sucesso resulta da combinação entre talento,
                                trabalho e resiliência.
                            </p>
                        </div>
                        <img
                            src="/assets/football.webp"
                            alt="Foto 2"
                            className="w-full max-w-[400px] h-auto rounded-lg"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
