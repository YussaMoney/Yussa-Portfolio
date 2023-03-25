import Content from "./pages/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
