export const CV = () => {
    return (
      <section id="cv" className="min-h-screen flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Sample CV
        </h2>
  
        <div className="w-full max-w-4xl h-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <iframe src="/cv.pdf" className="w-full h-full" title="CV"/>
        </div>
  
        {/* Download Resume Button */}
        <a href="/cv.pdf" download="James_Furaque_CV.pdf" className="mt-6 bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg">
          Download CV
        </a>
      </section>
    );
  };
  