const Projects = () => (
    <section id="projects" className="py-12 bg-slate-800 text-white">
      <h2 className="text-center text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8">
        {["Online Shopping", "Hotel Booking", "Chatbot", "AI Project"].map((project, index) => (
          <div key={index} className="p-4 bg-cyan-500 rounded-lg shadow-md">
            <h3 className="text-center font-bold text-lg">{project}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  export default Projects;