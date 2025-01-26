const Skills = () => (
    <section id="skills" className="py-12 bg-slate-800">
      <h2 className="text-center text-4xl font-bold text-white">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8">
        {["HTML", "CSS/Tailwind CSS", "JavaScript", "Java", "SQL"].map((skill, index) => (
          <div key={index} className="p-4 bg-cyan-500 rounded-lg shadow-md">
            <h3 className="text-center font-bold text-lg">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
export default Skills;  