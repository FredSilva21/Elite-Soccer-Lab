import Instagram from '../assets/icons/instagram.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';
import { instagramLink, contacts } from '../constants/contacts';

export default function Footer() {
    return (
        <footer className="bg-[#4A7F54] text-white py-10">
            <div className="container mx-auto flex flex-wrap justify-between items-start px-10">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="/assets/logo.webp" alt="Logo" className='h-20' />
                        <h1 className='text-2xl font-extrabold text-[#D4A351]'>Elite Soccer Lab</h1>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/elitesoccerlab/" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Instagram" className='h-10' loading='lazy' />
                        </a>
                        <a href={`https://wa.me/${contacts[0].contacto}`} target="_blank" rel="noreferrer">
                            <img src={WhatsApp} alt="WhatsApp" className='h-10' loading='lazy' />
                        </a>
                    </div>
                </div>

                {/* Empresa */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-semibold mb-3 text-[#D4A351] text-2xl">Empresa</h4>
                    <ul className="space-y-2">
                        <li><a href="/sobre-nos" className="hover:text-[#D4A351] text-lg">Sobre Nós</a></li>
                        <li><a href="/contactos" className="hover:text-[#D4A351] text-lg">Contactos</a></li>
                        <li><a href="/nossa-equipa" className="hover:text-[#D4A351] text-lg">Nossa Equipa</a></li>
                    </ul>
                </div>

                {/* Mapa */}
                <div className="w-full md:w-2/5 mb-6 md:mb-0">
                    <h4 className="font-semibold mb-3 text-[#D4A351] text-2xl">Onde nos encontrar?</h4>
                    <div className="w-full h-64">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.532711689931!2d-8.6586801!3d41.1868505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465f9c0e1e0f5%3A0xafcc07a799902353!2sSport%20Clube%20Senhora%20da%20Hora!5e0!3m2!1sen!2spt!4v1700000000000"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Elite Soccer Lab"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="px-10 text-left text-sm">© 2025 Elite Soccer Lab. Todos os direitos reservados.</div>
        </footer>
    );
}
