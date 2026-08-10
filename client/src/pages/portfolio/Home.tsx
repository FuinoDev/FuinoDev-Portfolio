import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
        
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Full-Stack Developer
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Building
              <span className="block text-purple-400">
                Digital Experiences
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I design and develop modern, responsive, and scalable web
              applications with a focus on clean code, thoughtful user
              experiences, and reliable backend systems.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            {/* Technologies */}
            <div className="mt-12">
              <p className="mb-4 text-sm text-gray-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/5 sm:h-96 sm:w-96">
              
              {/* Decorative circles */}
              <div className="absolute inset-8 rounded-full border border-purple-500/20" />
              <div className="absolute inset-16 rounded-full border border-purple-500/20" />

              {/* Main content */}
              <div className="relative text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  FuinoDev
                </p>

                <p className="mt-3 text-4xl font-bold text-white">
                  Code.
                </p>

                <p className="text-4xl font-bold text-purple-400">
                  Create.
                </p>

                <p className="text-4xl font-bold text-white">
                  Build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;