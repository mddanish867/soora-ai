import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AuthForm from "./Components/AuthForm";
import PricingPage from "./Components/PricingPage";
import ServicePage from "./Components/ServicePage";
import AboutPage from "./Components/AboutPage";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dasboard" element={<Dashboard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
