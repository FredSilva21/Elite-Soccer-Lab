import Navbar from "../components/navbar";
import Services from "../components/services";
import Team from "../components/team";
import Footer from "../components/footer";
import FAQ from "../components/faq";

export default function LandingPage() {
    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />

            <section
                className="relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-cover bg-center px-4 text-center"
                style={{ backgroundImage: "url('./assets/heroimage1.webp')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4A351]">Elite Soccer Lab</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mt-5">
                        Push your limits, and achieve excellence.
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-[#D4A351] text-white font-semibold rounded-lg shadow-lg hover:bg-[#B38A42] transition"
                        onClick={() => window.location.href = "/Elite-Soccer-Lab/#/contactos"}
                    >
                        Começa Agora
                    </button>
                </div>
            </section>

            <Services />
            <Team />
            <FAQ />
            <Footer />
        </div>
    );
}
