import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
const FormPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    educationExperience: "",
    projects: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/portfolio/${templateId}`, { state: { templateId, formData } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Fill in Your Details</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">About:</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Education/Experience:</label>
          <textarea
            name="educationExperience"
            value={formData.educationExperience}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Projects:</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
