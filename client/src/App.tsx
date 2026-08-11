import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/portfolio/Home";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030014] text-white">
      <GalaxyBackground />

      <div className="relative z-10">
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
    </div>
  );
}

export default App;