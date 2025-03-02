import { useState } from "react";
import { useLocation } from "react-router-dom";
import CloseIcon from "../assets/icons/close-icon.svg";
import MenuIcon from "../assets/icons/menu.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-[#D4A351]" : "hover:text-[#D4A351]";
    };

    return (
        <nav className="flex items-center justify-between w-full px-10 py-5 fixed top-0 shadow-md bg-white z-50">
            <img src="/assets/logo.webp" alt="Logo" className="h-20" loading="lazy" />

            {/* Menu Hamburguer */}
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <img src={CloseIcon} alt="Close Icon" className="h-8" />
                ) : (
                    <img src={MenuIcon} alt="Menu Icon" className="h-8" />
                )}
            </div>

            {/* Menu Desktop */}
            <ul className="hidden md:flex space-x-8 text-lg font-medium">
                <a href="/">
                    <li className={`cursor-pointer ${isActive("/")}`}>Início</li>
                </a>
                <a href="/precos">
                    <li className={`cursor-pointer ${isActive("/precos")}`}>Preços</li>
                </a>
                <a href="/nossa-equipa">
                    <li className={`cursor-pointer ${isActive("/nossa-equipa")}`}>A Nossa Equipa</li>
                </a>
                <a href="/contactos">
                    <li className={`cursor-pointer ${isActive("/contactos")}`}>Contactos</li>
                </a>
                <a href="/sobre-nos">
                    <li className={`cursor-pointer ${isActive("/sobre-nos")}`}>Sobre Nós</li>
                </a>
            </ul>

            {/* Menu Mobile */}
            {isOpen && (
                <ul className="absolute top-20 left-0 w-full bg-[#4A7F54] shadow-md flex flex-col items-center space-y-5 py-5 md:hidden text-semibold">
                    <a href="/">
                        <li className={`cursor-pointer ${isActive("/")}`}>Início</li>
                    </a>
                    <a href="/precos">
                        <li className={`cursor-pointer ${isActive("/precos")}`}>Preços</li>
                    </a>
                    <a href="/nossa-equipa">
                        <li className={`cursor-pointer ${isActive("/nossa-equipa")}`}>A Nossa Equipa</li>
                    </a>
                    <a href="/contactos">
                        <li className={`cursor-pointer ${isActive("/contactos")}`}>Contactos</li>
                    </a>
                    <a href="/sobre-nos">
                        <li className={`cursor-pointer ${isActive("/sobre-nos")}`}>Sobre Nós</li>
                    </a>
                </ul>
            )}
        </nav>
    );
}
