import Navbar from "../components/navbar";
import Services from "../components/services";
import Team from "../components/team";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import TermsModal from "../components/terms";

export default function LandingPage() {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />

            <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 text-center bg-[url('/assets/Fundo.webp')]">
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#D4A351]">
                        Elite Soccer Lab
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/90 mt-5">
                        Push your limits, and achieve excellence.
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-[#D4A351] text-white font-semibold rounded-lg shadow-lg hover:bg-[#B38A42] transition"
                        onClick={() => window.location.href = "/#/contactos"}
                        aria-label="Iniciar a inscrição na Elite Soccer Lab"
                    >
                        Começa Agora
                    </button>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 md:px-10 text-center bg-[#F6F6F6] text-white">
                <h2 className="text-6xl font-bold mb-12 text-[#D4A351] flex items-center justify-center gap-4">
                    <span>🐣</span> Easter Season <span>🐣</span>
                </h2>

                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 text-left">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full md:w-1/3">
                        <h2 className="text-4xl font-bold text-[#D4A351] mb-4 text-center">Treinos</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">✔</span>
                                Treino Técnico-Tático Individual
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">✔</span>
                                Treino Técnica Guarda-Redes
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full md:w-1/3">
                        <h2 className="text-4xl font-bold text-[#D4A351] mb-4 text-center">Datas</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">📅</span>
                                1ª Semana: 7 a 11 de abril
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">📅</span>
                                2ª Semana: 14 a 17 de abril
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full md:w-1/3">
                        <h2 className="text-4xl font-bold text-[#D4A351] mb-4 text-center">Horários</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">⏰</span>
                                09h-10h até Sub12
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">⏰</span>
                                10h-11h de Sub13 a Sub15
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">⏰</span>
                                11h-12h desde Sub16
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full md:w-1/3">
                        <h2 className="text-4xl font-bold text-[#D4A351] mb-4 text-center">Preços</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">💰</span>
                                1ª Semana: <b>75€</b>
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">💰</span>
                                2ª Semana: <b>60€</b>
                            </li>
                            <li className="flex items-center gap-2 text-xl">
                                <span className="text-[#D4A351] text-lg">💰</span>
                                Duas Semanas: <b>130€</b>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-black">
                        Encontramo-nos no&nbsp;
                        <a
                            href="https://www.google.com/maps?q=Sport+Clube+Senhora+da+Hora,+Av.+António+Domingues+dos+Santos+88,+4460-236+Sra.+da+Hora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#D4A351] hover:underline"
                        >
                            Complexo Desportivo da Senhora da Hora
                        </a>, contamos contigo?
                    </h3>
                    <button
                        className="mt-6 px-6 py-3 bg-[#D4A351] text-white font-semibold rounded-lg shadow-lg hover:bg-[#B38A42] transition-all duration-300"
                        onClick={() => location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY3sgelUNjMxVkZHUzZFRFRYUE5USDdGUjJFRUQyUy4u"}
                        aria-label="Iniciar a inscrição na Elite Soccer Lab"
                    >
                        Inscreve-te
                    </button>
                </div>
            </section>

            <Services />
            <Team />
            <FAQ />
            <TermsModal />
            <Footer />
        </div>
    );
}
