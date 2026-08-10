import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Github,
  Instagram,
  Sparkles,
} from "lucide-react";

function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Welcome to FuinoDev.",
    "I'm a Full-Stack Developer.",
    "I build modern Web Applications.",
    "I turn ideas into digital experiences.",
  ];

  const currentWord = words[wordIndex];

  /*
   * Typing animation
   */
  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, currentWord]);

  /*
   * Technology icons
   */
  const technologies = [
    {
      name: "React",
      short: "⚛",
      position:
        "left-1/2 top-0 -translate-x-1/2",
    },
    {
      name: "JavaScript",
      short: "JS",
      position:
        "right-[8%] top-[15%]",
    },
    {
      name: "TypeScript",
      short: "TS",
      position:
        "right-[8%] top-[55%]",
    },
    {
      name: "Node.js",
      short: "N",
      position:
        "bottom-[12%] right-[25%]",
    },
    {
      name: "GitHub",
      short: "GH",
      position:
        "bottom-[2%] left-1/2 -translate-x-1/2",
    },
    {
      name: "PostgreSQL",
      short: "PG",
      position:
        "bottom-[12%] left-[20%]",
    },
    {
      name: "HTML",
      short: "</>",
      position:
        "left-[7%] top-[55%]",
    },
    {
      name: "Tailwind",
      short: "TW",
      position:
        "left-[8%] top-[15%]",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Purple ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-600/10
            blur-[140px]
          "
        />
      </div>

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-[20%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-[15%] top-[65%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[28%] top-[12%] h-1 w-1 rounded-full bg-white/50" />
        <div className="absolute left-[42%] top-[72%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[58%] top-[18%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-[72%] top-[75%] h-1 w-1 rounded-full bg-white/50" />
        <div className="absolute left-[84%] top-[25%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[92%] top-[60%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-[65%] top-[45%] h-1 w-1 rounded-full bg-white/40" />
      </div>

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16 xl:px-24">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT SIDE — HERO CONTENT
          ===================================================== */}

          <div className="relative z-20">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-500/40
                bg-purple-500/10
                px-4
                py-2
                text-sm
                text-purple-200
                backdrop-blur-md
              "
            >
              <Sparkles className="h-4 w-4 text-purple-400" />

              <span>
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Typing introduction */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 min-h-[32px]"
            >
              <p className="text-xl font-medium text-gray-300 sm:text-2xl">
                {text}
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-purple-400" />
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                max-w-3xl
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
                xl:text-[5.5rem]
              "
            >
              Building
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-400
                  via-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Modern Web
              </span>

              <span className="block">
                Experiences.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              I build responsive and scalable web applications
              using modern technologies, clean architecture, and
              thoughtful user experiences.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >

              {/* Primary */}
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-purple-600
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-purple-600/20
                  transition
                  duration-300
                  hover:bg-purple-500
                  hover:shadow-purple-500/30
                "
              >
                Explore My Work

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Secondary */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/15
                  bg-white/5
                  px-6
                  py-3.5
                  font-semibold
                  text-gray-200
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:border-purple-400/40
                  hover:bg-purple-500/10
                  hover:text-white
                "
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Technology summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-600">
                Building with
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
                <span>React</span>
                <span className="text-gray-700">•</span>
                <span>TypeScript</span>
                <span className="text-gray-700">•</span>
                <span>Node.js</span>
                <span className="text-gray-700">•</span>
                <span>PostgreSQL</span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — TECHNOLOGY ORBIT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              mx-auto
              hidden
              h-[520px]
              w-[520px]
              lg:block
            "
          >

            {/* Main purple glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-56
                w-56
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/20
                blur-[90px]
              "
            />

            {/* Outer orbit */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[440px]
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.08]
              "
            />

            {/* Middle orbit */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-purple-400/[0.12]
              "
            />

            {/* Inner orbit */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[200px]
                w-[200px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-purple-400/[0.12]
              "
            />

            {/* Cross lines */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[440px]
                w-px
                -translate-x-1/2
                -translate-y-1/2
                bg-white/[0.06]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-px
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2
                bg-white/[0.06]
              "
            />

            {/* Center */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(139,92,246,0.15)",
                  "0 0 70px rgba(139,92,246,0.35)",
                  "0 0 30px rgba(139,92,246,0.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-28
                w-28
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-3xl
                border
                border-purple-400/30
                bg-white/[0.06]
                backdrop-blur-xl
              "
            >
              <Code2 className="h-12 w-12 text-purple-300" />
            </motion.div>

            {/* Technology Cards */}
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                className={`absolute ${technology.position}`}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    text-sm
                    font-bold
                    text-white/80
                    shadow-xl
                    shadow-black/20
                    backdrop-blur-xl
                    transition
                    duration-300
                    hover:border-purple-400/40
                    hover:bg-purple-500/10
                    hover:text-white
                  "
                  title={technology.name}
                >
                  {technology.short}
                </div>
              </motion.div>
            ))}

            {/* Orbit particles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[440px]
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/70" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL / BOTTOM INDICATOR
      ========================================================= */}

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-4 sm:left-10 lg:left-16 xl:left-24">

        <a
          href="#"
          aria-label="GitHub"
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            p-2.5
            text-gray-400
            transition
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-white
          "
        >
          <Github className="h-4 w-4" />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            p-2.5
            text-gray-400
            transition
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-white
          "
        >
          <Instagram className="h-4 w-4" />
        </a>

        <span className="ml-2 hidden text-xs text-gray-600 sm:block">
          Scroll to explore
        </span>
      </div>

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#030014]
          to-transparent
        "
      />
    </main>
  );
}

export default Home;