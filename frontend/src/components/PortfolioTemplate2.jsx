import { useLocation } from "react-router-dom";

const PortfolioTemplate2 = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="w-full h-16 bg-gray-900 flex justify-between items-center px-6 shadow-lg">
        <h1 className="text-2xl font-bold text-cyan-500">
          {formData.name || "Your Name"}
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-cyan-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="w-full h-screen bg-gradient-to-b from-cyan-500 to-gray-900 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-extrabold">{formData.name || "Your Name"}</h1>
        <p className="mt-4 text-lg max-w-xl">
          {formData.about || "I am a passionate developer. Let me help you bring your ideas to life."}
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
        >
          View My Work
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-cyan-500">
          About Me
        </h2>
        <p className="mt-8 text-lg text-center max-w-3xl mx-auto">
          {formData.educationExperience ||
            "Write about your education, experience, or journey here. Highlight your skills and achievements."}
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-950 px-8">
        <h2 className="text-4xl font-bold text-center text-cyan-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {formData.projects
            ? formData.projects.split(",").map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-500 p-6 text-center"
                >
                  <h3 className="text-xl font-bold">{project.trim()}</h3>
                  <p className="mt-2 text-sm">
                    A brief description of this project can go here.
                  </p>
                </div>
              ))
            : "No projects listed."}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-cyan-500">
          Contact Me
        </h2>
        <div className="mt-8 text-center">
          <p>
            <strong>Email:</strong> {formData.contact || "your.email@example.com"}
          </p>
          <p className="mt-4">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-14 bg-gray-900 flex justify-center items-center">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} {formData.name || "Your Name"}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PortfolioTemplate2;
