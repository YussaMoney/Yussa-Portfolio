import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
