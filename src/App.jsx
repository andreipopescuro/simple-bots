import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Please from "./pages/Please";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/please" element={<Please />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
