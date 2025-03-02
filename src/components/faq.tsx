import { useState } from "react";
import ArrowIcon from "../assets/Icons/arrow-icon.svg"

const faqs = [
    {
        question: "O que é a Elite Soccer Lab?",
        answer: "A Elite Soccer Lab é um centro de treino especializado para jogadores que querem melhorar suas habilidades técnicas, táticas e físicas."
    },
    {
        question: "Quais serviços vocês oferecem?",
        answer: "Oferecemos treinos personalizados, programas de nutrição esportiva e acompanhamento físico especializado."
    },
    {
        question: "Quem pode participar dos treinos?",
        answer: "Os treinos são abertos para jogadores de todas as idades e níveis, desde iniciantes até atletas profissionais."
    },
    {
        question: "Como posso me inscrever?",
        answer: "Você pode se inscrever entrando em contato diretamente pelo Instagram ou WhatsApp."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#4A7F54]">Perguntas Frequentes</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[#4A7F54] pb-4">
                        <button
                            className="w-full text-left flex justify-between items-center text-lg font-bold py-2"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <img
                                src={ArrowIcon}
                                alt="Seta"
                                className={`w-4 h-4 transition-transform transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {openIndex === index && (
                                <p className="text-black mt-2">{faq.answer}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
