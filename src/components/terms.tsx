import { useState, useEffect } from "react";

export default function TermsModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("termsAccepted");
        if (!accepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("termsAccepted", "true");
        setIsOpen(false);
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-bold text-[#D4A351] mb-4">Aceitação de Termos</h2>
                <p className="text-gray-700 mb-4">
                    Para continuar a utilizar o nosso site, precisas de aceitar os nossos
                    <a href="/termos-e-privacidade" className="text-[#D4A351] underline"> Termos de Uso e Política de Privacidade</a>.
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-[#D4A351] text-white px-6 py-2 rounded-lg hover:bg-[#B38A42] transition">
                    Aceitar
                </button>
            </div>
        </div>
    ) : null;
}
