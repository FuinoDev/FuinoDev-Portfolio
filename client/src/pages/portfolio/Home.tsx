import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030014]"
    >
      <div className="pointer-events-none absolute right-[-12%] top-1/2 z-0 h-[900px] w-[900px] -translate-y-1/2 lg:h-[1100px] lg:w-[1100px]">
        <Spline
          scene="https://prod.spline.design/QVbT5GGqd-0qZj2B/scene.splinecode"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#030014_0%,rgba(3,0,20,0.92)_30%,rgba(3,0,20,0.35)_60%,transparent_100%)]" />

      <div className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
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
              className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl"
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
              className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg"
            >
              I design and develop modern full-stack applications with clean
              architecture, responsive interfaces, and reliable backend
              systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <Code2 className="h-4 w-4" />
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500"
            >
              <span>Building with</span>
              <span>React</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Node.js</span>
              <span>•</span>
              <span>PostgreSQL</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;