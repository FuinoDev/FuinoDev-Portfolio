import Navbar from "./components/Navbar";
import Home from "./pages/portfolio/Home";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030014] text-white">
      <Navbar />

      <main>
        <Home />

        <section
          id="about"
          className="min-h-screen px-6 py-32"
        />

        <section
          id="projects"
          className="min-h-screen px-6 py-32"
        />

        <section
          id="contact"
          className="min-h-screen px-6 py-32"
        />
      </main>
    </div>
  );
}

export default App;