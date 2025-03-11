import { RevealOnScroll } from "../RevelOnScroll";


export const About = () => {

    // const programmingLanguages =["JavaScript", "Java", "Python", "C#"];
    const backendSkills = [
        { name: "Python", link: "https://docs.python.org/3/" },
        { name: "Java", link: "https://docs.oracle.com/en/java/" },
        { name: "Node.js", link: "https://nodejs.org/en/docs/" },
        { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "Spring Boot", link: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" },
        { name: "ASP.NET Core MVC", link: "https://learn.microsoft.com/en-us/aspnet/core/mvc/" },
        { name: "Kafka", link: "https://kafka.apache.org/documentation/"},
        { name: "Object-Oriented Programming", link: "https://docs.oracle.com/javase/tutorial/java/concepts/"},
        { name: "Data Structures & Algorithms", link: "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/"},
        { name: "Cors", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},
        { name: "JWT", link: "https://jwt.io/introduction"},
        { name: "MongoDB", link: "https://www.mongodb.com/docs/"},
        { name: "Flask", link: "https://flask.palletsprojects.com/en/stable/"},
        { name: "Axios", link: "https://axios-http.com/docs/intro"},
    ];
    const frontendSkills = [
        { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", link: "https://react.dev/" },
        { name: "Angular", link: "https://angular.io/docs" },
        { name: "Next.js", link: "https://nextjs.org/docs" },
        { name: "HTML/CSS", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
        { name: "Tailwind", link: "https://tailwindcss.com/docs" },
        { name: "Vue", link: "https://vuejs.org/guide/introduction.html" }
    ];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Recognized for strong communication skills, adaptability, and a proactive approach to problem-solving.
                            Committed to continuous learning and contributing to organizational success through technical proficiency, teamwork, and a strong work ethic.
                        </p>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <a
                                            key={key}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                                        >
                                            {tech.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <a
                                                key={key}
                                                href={tech.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                                            >
                                                {tech.name}
                                            </a>
                                        ))}
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <p className="text-lg font-semibold text-white">Advanced Diploma in Computer Programming & Analysis</p>
                        <p className="text-gray-400 mb-4">George Brown College (2025)</p>
                        <p className="text-gray-300 font-medium">Relevant Coursework:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                            <li>Full Stack Development</li>
                            <li>Applied Data Science</li>
                            <li>Applied Machine Learning</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Mobile Application Development</li>
                            <li>Advanced Object-Oriented Programming</li>
                            <li>System Analysis & Design</li>
                        </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Junior Technical Associate at KNNX Corp. (06/2024 - 09/2024) </h4>
                                    <p className="text-s"> Assisted on developing an OCR-based logistics system that automated Bill of Lading data extraction, reducing manual processing time by 40%, using React for UI, Node.js for backend API handling, and Python for image processing.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold"> Sales Associate at Winners, TJX Canada (10/2019 - 06/2024) </h4>
                                    <p className="text-s"> Demonstrated strong team communication and collaborative skills to effectively contribute in a fast-paced environment while taking initiative to address challenges which streamlines store operations to improve efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}