/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";

const PortfolioTemplate1 = () => {
  const location = useLocation();
  const { templateId, formData } = location.state || {};

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="w-full h-14 bg-slate-800 flex justify-between items-center px-5 shadow-lg shadow-cyan-500">
        <div className="flex">
          <span className="font-bold text-2xl bg-cyan-500 text-slate-800 rounded-lg px-2">
            {formData.name?.split(" ")[0] || "Your"}
          </span>
          <span className="font-bold text-2xl text-cyan-500 mx-2">
            {formData.name?.split(" ")[1] || "Portfolio"}
          </span>
        </div>
      </nav>

      {/* Header Section */}
      <header className="w-full py-20 flex flex-col md:flex-row justify-evenly items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="w-40 md:w-60 rounded-full shadow-3xl shadow-cyan-500"
        />
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-xl font-bold">Hello, I&apos;m</h2>
          <h1 className="text-4xl font-extrabold text-cyan-500">
            {formData.name || "Your Name"}
          </h1>
          <p className="mt-4 text-lg">{formData.about || "About me content..."}</p>
        </div>
      </header>

      {/* Education/Experience Section */}
      <section id="education" className="py-12">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
          Education & Experience
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800 p-6 rounded-lg shadow-lg shadow-cyan-500">
          <p>{formData.educationExperience || "Details about your education or experience go here..."}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-6">
          {formData.projects
            ? formData.projects.split(",").map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg shadow-lg shadow-cyan-500"
                >
                  <h3 className="text-xl font-bold">{project.trim()}</h3>
                </div>
              ))
            : "No projects listed."}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
          Contact
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800 p-6 rounded-lg shadow-lg shadow-cyan-500">
          <p>
            <strong>Email:</strong> {formData.contact || "Your email goes here..."}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-14 bg-slate-800 flex justify-center items-center shadow-t shadow-cyan-500">
        <p className="text-white">© {new Date().getFullYear()} {formData.name || "Your Name"}</p>
      </footer>
    </div>
  );
};

export default PortfolioTemplate1;
