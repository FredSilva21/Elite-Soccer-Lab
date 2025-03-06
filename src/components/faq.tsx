import { useState } from "react";
import ArrowIcon from "/Icons/arrow-icon.svg"

const faqs = [
    {
        question: "Quem é a Elite Soccer Lab?",
        answer: "A Elite Soccer Lab é uma academia de futebol especializada para jogadores que querem melhorar suas habilidades técnicas, físicas, mentais e metabólicas"
    },
    {
        question: "Quais serviços vocês oferecem?",
        answer: "Na Elite Soccer Lab oferecemos vários packs treinos personalizados, incluindo treinos de técnica individual, programas de nutrição desportiva, acompanhamento na preparação física e mental coaching vocacionado para o desporto de alto rendimento."
    },
    {
        question: "Quem pode participar na Elite Soccer Lab?",
        answer: "Os treinos são destinados a todos os jogadores e praticantes da modalidade de futebol, desde idades mais jovens até atletas profissionais"
    },
    {
        question: "Como posso inscrever-me?",
        answer: "Podes-te inscrever entrando em contacto diretamente por e-mail, instagram ou whatsapp"
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
