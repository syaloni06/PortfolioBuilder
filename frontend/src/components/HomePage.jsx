import { useNavigate } from "react-router-dom";

const templates = [
  { id: "template1", name: "Classic", component: "PortfolioTempalte1", preview: "template1-preview.jpg" },
  { id: "template2", name: "Modern", component: "PortfolioTemplate2", preview: "template2-preview.jpg" },
  { id: "template3", name: "Card Layout", component: "PortfolioTemplate3", preview: "template3-preview.jpg" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId) => {
    navigate(`/form/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-8">Choose a Portfolio Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={template.preview}
              alt={`${template.name} Preview`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{template.name}</h2>
              <button
                onClick={() => handleSelectTemplate(template.id)}
                className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
              >
                Choose Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
