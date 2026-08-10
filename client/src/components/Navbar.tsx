import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black pl-5 pr-10 py-5 text-white">
      <Link to="/" className="text-2xl font-bold">
        FuinoDev
      </Link>

      <div className="flex items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;