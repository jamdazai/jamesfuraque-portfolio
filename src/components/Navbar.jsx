import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-8xl mx-auto px-8 flex justify-between items-center h-16">
                {/* Logo aligned to the left */}
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    jam<span className="text-blue-500">.furaque</span>
                </a>

                {/* Mobile Menu Icon (Hidden on Desktop) */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                     onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                {/* Navigation aligned more to the right */}
                <div className="hidden md:flex items-center space-x-8 ml-auto pl-100">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    <a href="#resume" className="text-gray-300 hover:text-white transition-colors">Resume</a>
                </div>
            </div>
        </nav>
    );
};
