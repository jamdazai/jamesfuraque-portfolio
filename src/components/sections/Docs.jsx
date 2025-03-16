export const Docs = () => {
    return (
      <section id="docs" className="min-h-screen flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Capstone Documents
        </h2>
  
        <div className="w-full max-w-4xl h-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <iframe src="/capstone-documents.pdf" className="w-full h-full" title="Docs"/>
        </div>
      </section>
    );
  };
  