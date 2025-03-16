import { RevealOnScroll } from "../RevelOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Daycare Buddy 👦👧</h3>
                        <p className="text-gray-400 mb-4">An on-going team project developed for our Capstone to provide an automated attendance and notification system for daycare centers. The system tracks student check-ins and check-outs and sends real-time SMS notifications to parents via Twilio, ensuring they stay informed. Built using React.js, Node.js, Express, and MongoDB, it features a secure role-based authentication system, a user-friendly dashboard for administrators and teachers, and CORS handling for seamless API communication. 🚀📲</p>
                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind", "Twilio", "JWT", "Cors"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamdazai/Daycare-Buddy/tree/main" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors" 
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Bill of Lading Automation System📦</h3>
                        <p className="text-gray-400 mb-4">This project is an OCR-powered logistics system developed during my internship to automate Bill of Lading data extraction, significantly reducing manual processing time by 40%. It improves data accuracy by implementing advanced text parsing techniques, ensuring structured and reliable logistics information. To enhance efficiency, the system optimizes performance through scalable API design, reducing data retrieval time by 25%.</p>
                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "Python", "React", "Node.js", "Express", "Axios", "HTML/CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamdazai/OCR_Project" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">JCC Travel App ✈️🏨🚗</h3>
                        <p className="text-gray-400 mb-4"> A web-based travel booking system developed as part of our Web Application Development course. Built with ASP.NET Core MVC and Entity Framework, the application allows users to manage bookings for flights, hotels, and car rentals with full CRUD functionality and dynamic search capabilities. The project follows MVC best practices, integrates database interactions, and ensures a user-friendly experience for managing travel reservations efficiently.</p>
                            <div className="flex flex-wrap gap-2">
                                {["ASP.NET Core MVC", "C#", "Object-Oriented Programming","HTML/CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamdazai/WebAppDev" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Tic Tac Toe 2.0 🎮</h3>
                        <p className="text-gray-400 mb-4">Tic Tac Toe 2.0 is a web-based multiplayer game built with React.js (frontend) and Flask (Python) (backend), featuring Best of 3 / Best of 5 game modes, real-time score tracking, and dynamic UI animations. I developed this as a web-based version because my previous Tic Tac Toe game was only running locally through Tkinter, and I didn't create an executable file for it; the frontend is deployed on Vercel, while the backend runs on Render, enabling seamless API communication using Axios. 🎯🔥</p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Flask", "JavaScript", "React", "Axios", "HTML/CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://tictactoe-jam.vercel.app/" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Flights Reservation 🛫🌍</h3>
                        <p className="text-gray-400 mb-4">A project written in C# that allows adding and managing customers, flights, and bookings, ensuring data integrity with unique constraints and validation rules. This system features a user-friendly menu for making bookings, viewing customer and flight details, and enforcing business rules such as seat availability and booking restrictions. 🚀</p>
                            <div className="flex flex-wrap gap-2">
                                {["C#", "Object-Oriented Programming", "Data Structures & Algorithms"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamesfuraque/Object-Oriented-Programming/tree/main/Flights%20Reservation%20System" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Connect Four 🔴🟡</h3>
                        <p className="text-gray-400 mb-4">A game that was built with my team as part of our Data Structures & Algorithms course. This is focused on efficient board management using a 2D array and optimized AI decision-making. Implemented the Minimax algorithm with Alpha-Beta Pruning to enhance AI performance, reducing unnecessary computations and ensuring strategic move selection. The game has a real-time move validation system, dynamic win detection, and an interactive game loop for smooth gameplay. This project strengthened my skills in algorithm optimization, data structures, and problem-solving in Java. 🎯</p>
                            <div className="flex flex-wrap gap-2">
                                {["Java", "Data Structures & Algorithms"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamesfuraque/Java/tree/main/Connect%20Four" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Retail Employee Discount System 🛍️💳</h3>
                        <p className="text-gray-400 mb-4">A Discount Management System that calculates employee purchase discounts based on years worked and job role, with a cap on total discounts received. The system features a menu-driven interface for managing employees, items, and purchases, incorporating real-time validation, structured data storage using 2D lists, and automated employee summary generation. 🛍️💻</p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Data Structures & Algorithms", "Object-Oriented Programming"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="https://github.com/jamesfuraque/Python/tree/main/Retail%20Employee%20Discounts" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"> Private Project → </a>
                            </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}