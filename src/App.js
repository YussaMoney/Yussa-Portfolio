import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
