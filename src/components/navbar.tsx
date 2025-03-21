import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CloseIcon from "/Icons/close-icon.svg";
import MenuIcon from "/Icons/menu.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-[#D4A351]" : "hover:text-[#D4A351]";
    };

    return (
        <nav className="flex items-center justify-between w-full px-10 py-5 fixed top-0 shadow-md bg-white z-50">
            <img src="./assets/logo.webp" alt="Logo" className="h-20" loading="lazy" />

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
                <Link to="/">
                    <li className={`cursor-pointer ${isActive("/")}`}>Início</li>
                </Link>
                <Link to="/precos">
                    <li className={`cursor-pointer ${isActive("/precos")}`}>Preços</li>
                </Link>
                <Link to="/nossa-equipa">
                    <li className={`cursor-pointer ${isActive("/nossa-equipa")}`}>A Nossa Equipa</li>
                </Link>
                <Link to="/contactos">
                    <li className={`cursor-pointer ${isActive("/contactos")}`}>Contactos</li>
                </Link>
                <Link to="/sobre-nos">
                    <li className={`cursor-pointer ${isActive("/sobre-nos")}`}>Sobre Nós</li>
                </Link>
            </ul>

            {/* Menu Mobile */}
            {isOpen && (
                <ul className="absolute top-20 left-0 w-full bg-[#4A7F54] shadow-md flex flex-col items-center space-y-7 py-8 md:hidden text-semibold text-xl">
                    <Link to="/">
                        <li className={`cursor-pointer ${isActive("/")}`}>Início</li>
                    </Link>
                    <Link to="/precos">
                        <li className={`cursor-pointer ${isActive("/precos")}`}>Preços</li>
                    </Link>
                    <Link to="/nossa-equipa">
                        <li className={`cursor-pointer ${isActive("/nossa-equipa")}`}>A Nossa Equipa</li>
                    </Link>
                    <Link to="/contactos">
                        <li className={`cursor-pointer ${isActive("/contactos")}`}>Contactos</li>
                    </Link>
                    <Link to="/sobre-nos">
                        <li className={`cursor-pointer ${isActive("/sobre-nos")}`}>Sobre Nós</li>
                    </Link>
                </ul>
            )}
        </nav>
    );
}
