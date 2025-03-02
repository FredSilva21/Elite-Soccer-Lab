import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { email, contacts } from "../constants/contacts";

export default function Contactos() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const subject = (event.target as any).subject.value;
        const message = (event.target as any).message.value;

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    };

    const formatPhoneNumber = (phoneNumber: string) => {
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`;
    }

    return (
        <div className="flex flex-col w-full bg-gray-100">
            <Navbar />

            <section className="container mx-auto py-20 mt-20">
                <h1 className="text-4xl font-extrabold text-[#D4A351] text-center">Contactos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-10">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-3xl font-semibold text-[#D4A351]">Email</h2>
                            <p className="mt-2">
                                <a href={`mailto:${email}`} className="hover:text-[#D4A351] text-lg">
                                    {email}
                                </a>
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-[#D4A351]">Telemóveis</h2>
                            {contacts.map((contact, index) => (
                                <p key={index} className="mt-2">
                                    <a href={`https://wa.me/${contact.contacto}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#D4A351] text-lg">
                                        {contact.nome}: {formatPhoneNumber(contact.contacto)} (Chamada móvel nacional)
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-2xl font-semibold text-[#D4A351]">Envie-nos uma mensagem</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Assunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#D4A351] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#B58F3E]"
                            >
                                Contacte-nos
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
