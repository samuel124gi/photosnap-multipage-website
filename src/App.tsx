import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Stories from "./pages/stories";
import Features from "./pages/features";
import Pricing from "./pages/pricing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/feature" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default App;
