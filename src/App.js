import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobremi from "./pages/Sobremi";
import Opinion from "./pages/Opinion";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremi" element={<Sobremi />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
