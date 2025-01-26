const Certifications = () => (
    <section id="certifications" className="py-12">
      <h2 className="text-center text-4xl font-bold">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8">
        {["HTML", "CSS", "JavaScript", "Java", "SQL"].map((cert, index) => (
          <div key={index} className="p-4 bg-slate-800 rounded-lg shadow-md text-white">
            <h3 className="text-center font-bold">{cert}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  export default Certifications;