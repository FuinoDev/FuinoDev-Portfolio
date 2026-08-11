import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "14%", size: 2, opacity: 0.55, delay: 0.2 },
  { left: "18%", top: "31%", size: 1, opacity: 0.4, delay: 1.4 },
  { left: "27%", top: "11%", size: 2, opacity: 0.5, delay: 2.1 },
  { left: "38%", top: "24%", size: 1, opacity: 0.35, delay: 0.8 },
  { left: "48%", top: "10%", size: 2, opacity: 0.5, delay: 2.8 },
  { left: "61%", top: "27%", size: 1, opacity: 0.4, delay: 1.7 },
  { left: "72%", top: "13%", size: 2, opacity: 0.55, delay: 0.6 },
  { left: "84%", top: "28%", size: 1, opacity: 0.35, delay: 2.5 },

  { left: "12%", top: "52%", size: 1, opacity: 0.4, delay: 1.2 },
  { left: "24%", top: "68%", size: 2, opacity: 0.5, delay: 2.2 },
  { left: "35%", top: "48%", size: 1, opacity: 0.35, delay: 0.4 },
  { left: "51%", top: "63%", size: 2, opacity: 0.45, delay: 1.8 },
  { left: "67%", top: "51%", size: 1, opacity: 0.4, delay: 2.7 },
  { left: "79%", top: "69%", size: 2, opacity: 0.5, delay: 1.1 },
  { left: "91%", top: "55%", size: 1, opacity: 0.35, delay: 2.4 },

  { left: "7%", top: "82%", size: 2, opacity: 0.45, delay: 0.9 },
  { left: "31%", top: "88%", size: 1, opacity: 0.35, delay: 2.6 },
  { left: "56%", top: "84%", size: 2, opacity: 0.45, delay: 1.5 },
  { left: "74%", top: "91%", size: 1, opacity: 0.35, delay: 0.7 },
  { left: "94%", top: "83%", size: 2, opacity: 0.45, delay: 2.9 },
];

const meteors = [
  {
    top: "12%",
    left: "86%",
    delay: 2,
    duration: 5.5,
  },
  {
    top: "28%",
    left: "70%",
    delay: 10,
    duration: 6,
  },
  {
    top: "8%",
    left: "48%",
    delay: 18,
    duration: 5.5,
  },
];

function GalaxyBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030014]">
      {/* Purple nebula */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[18%]
          -top-[25%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-purple-700/15
          blur-[150px]
        "
      />

      {/* Violet nebula */}

      <motion.div
        animate={{
          scale: [1, 1.07, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[18%]
          top-[8%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-600/15
          blur-[150px]
        "
      />

      {/* Blue nebula */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-[30%]
          left-[15%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-700/12
          blur-[160px]
        "
      />

      {/* Central galaxy */}

      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),rgba(59,130,246,0.05),transparent_70%)]
          blur-[80px]
        "
      />

      {/* Minimal stars */}

      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `star-twinkle 4s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Meteors */}

      {meteors.map((meteor, index) => (
        <span
          key={index}
          className="
            absolute
            h-[2px]
            w-[130px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-purple-300
            to-white
            shadow-[0_0_12px_rgba(167,139,250,0.8)]
          "
          style={{
            top: meteor.top,
            left: meteor.left,
            opacity: 0,
            animation: `meteor-fall ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}

      {/* Subtle vignette */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(3,0,20,0.25)_60%,#030014_100%)]
        "
      />

      <style>{`
        @keyframes star-twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.35);
          }
        }

        @keyframes meteor-fall {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) rotate(-35deg);
          }

          5% {
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          28% {
            opacity: 0;
            transform: translate3d(-420px, 300px, 0) rotate(-35deg);
          }

          100% {
            opacity: 0;
            transform: translate3d(-420px, 300px, 0) rotate(-35deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default GalaxyBackground;