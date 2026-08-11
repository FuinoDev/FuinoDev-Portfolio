import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import GalaxyBackground from "../../components/GalaxyBackground";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030014]"
    >
      <GalaxyBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              Full-Stack Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Building digital
              <span className="block bg-linear-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
            >
              I build modern full-stack applications with thoughtful
              interfaces, scalable architecture, and reliable backend
              systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
              >
                View Projects

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-purple-500/10"
              >
                <Code2 className="h-4 w-4" />
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex max-w-4xl flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500"
            >
              <span className="text-gray-600">Building with</span>

              <span>React</span>
              <span className="text-gray-700">•</span>

              <span>TypeScript</span>
              <span className="text-gray-700">•</span>

              <span>Tailwind CSS</span>
              <span className="text-gray-700">•</span>

              <span>React Router</span>
              <span className="text-gray-700">•</span>

              <span>TanStack Query</span>
              <span className="text-gray-700">•</span>

              <span>Zustand</span>
              <span className="text-gray-700">•</span>

              <span>Node.js</span>
              <span className="text-gray-700">•</span>

              <span>Express.js</span>
              <span className="text-gray-700">•</span>

              <span>Prisma</span>
              <span className="text-gray-700">•</span>

              <span>PostgreSQL</span>
              <span className="text-gray-700">•</span>

              <span>JWT</span>
              <span className="text-gray-700">•</span>

              <span>bcrypt</span>
              <span className="text-gray-700">•</span>

              <span>Zod</span>
              <span className="text-gray-700">•</span>

              <span>Socket.IO</span>
              <span className="text-gray-700">•</span>

              <span>Git</span>
              <span className="text-gray-700">•</span>

              <span>GitHub</span>
              <span className="text-gray-700">•</span>

              <span>VS Code</span>
              <span className="text-gray-700">•</span>

              <span>npm</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;