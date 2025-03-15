import { RevealOnScroll } from "../RevelOnScroll";



export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
           <div className="text-center z-10 px-4">
           <div className="flex justify-center">
           <img className="w-72 h-72 rounded-full object-cover" src="/profile.jpeg" alt="Profile Image" />
           </div>
           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    James Furaque
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Software Developer with a strong emphasis on Backend Development. Proficient in designing and implementing scalable server-side applications and RESTful APIs.
                </p>
                
                <div className="flex justify-center space-x-4">
                    <a href="#projects" 
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View Projects
                                </a>
                    <a href="#contact" 
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Contact Me
                                </a>
                </div>

                <div className="inline-flex justify-center space-x-6 bg-blue-500 py-1 px-3 rounded mt-6 w-fit mx-auto">
                    <a href="https://github.com/jamdazai" target="_blank" rel="noopener noreferrer">
                        <img src="/github.ico" alt="GitHub 1" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    </a>
                    <a href="https://linkedin.com/in/james-nicole-furaque-3934682a6" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.ico" alt="LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>

           </div>
        </RevealOnScroll>
    </section>;
}