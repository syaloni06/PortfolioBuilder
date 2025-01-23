import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import PortfolioTemplate2 from "./components/PortfolioTemplate2";
import PortfolioTemplate3 from "./components/PortfolioTemplate3";
import PortfolioTemplate1 from "./components/PortfolioTemplate1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:templateId" element={<FormPage />} />
        <Route path="/portfolio/template1" element={<PortfolioTemplate1 />} />
        <Route path="/portfolio/template2" element={<PortfolioTemplate2 />} />
        <Route path="/portfolio/template3" element={<PortfolioTemplate3 />} />
      </Routes>
    </Router>
  );
};

export default App;
