
import { useLocation } from "react-router-dom";

const PortfolioTemplate3 = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-500">
            {formData.name || "Alexa"}
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-gray-600 hover:text-purple-500">
                <a href="#about">About</a>
              </li>
              <li className="text-gray-600 hover:text-purple-500">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-gray-600 hover:text-purple-500">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="text-gray-600 hover:text-purple-500">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center container mx-auto px-6 py-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-purple-500">
              {formData.name || "Alexa"}
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {formData.about ||
              "High level experience in web design and development knowledge, producing quality work."}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
          >
            Contact Me
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-full border-4 border-purple-500 overflow-hidden w-56 h-56">
            <img
              src="https://via.placeholder.com/200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-purple-500">About Me</h2>
          <p className="text-lg text-gray-600">
            {formData.educationExperience ||
              "Write about your education, experience, and background here."}
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-purple-500">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formData.projects
              ? formData.projects.split(",").map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.trim()}</h3>
                    <p className="text-sm text-gray-600">
                      Brief description about this project.
                    </p>
                  </div>
                ))
              : "No projects to display."}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-purple-500">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {formData.contact || "your.email@example.com"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white text-center py-4 shadow-md">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          {formData.name || "Alexa"}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PortfolioTemplate3;
