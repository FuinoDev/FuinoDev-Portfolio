import { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "Home";

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = links[index].name;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="w-full border-b border-white/10 bg-[#030014]/80 shadow-[0_8px_40px_rgba(124,58,237,0.08)] backdrop-blur-2xl">
        <div className="relative mx-auto flex h-[68px] w-full max-w-[1600px] items-center px-3 sm:px-5 md:px-8 lg:px-10">

          {/* Logo */}
          <div className="flex min-w-0 flex-1 items-center">
            <a
              href="#home"
              onClick={() => setActive("Home")}
              aria-label="FuinoDev Home"
              className="group relative shrink-0"
            >
              <span
                className="
                  block
                  bg-linear-to-r
                  from-purple-300
                  via-violet-400
                  to-blue-400
                  bg-[length:200%_auto]
                  bg-clip-text
                  font-sans
                  text-xl
                  font-extrabold
                  tracking-[-0.04em]
                  text-transparent
                  transition-transform
                  duration-300
                  group-hover:scale-[1.03]
                  sm:text-2xl
                  md:text-[26px]
                  lg:text-[28px]
                "
                style={{
                  animation: "logoGradient 4s ease infinite",
                }}
              >
                FuinoDev
              </span>

              <span
                className="
                  pointer-events-none
                  absolute
                  -inset-x-3
                  -inset-y-2
                  -z-10
                  rounded-full
                  bg-purple-500/10
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </a>
          </div>

          {/* Center Navigation */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {links.map((link) => {
                const isActive = active === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`
                      relative
                      whitespace-nowrap
                      px-0.5
                      py-2
                      text-[13px]
                      font-medium
                      transition-all
                      duration-300
                      sm:text-xs
                      md:text-sm
                      lg:text-[15px]
                      ${
                        isActive
                          ? "scale-[1.04] text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]"
                          : "text-gray-400 hover:scale-[1.04] hover:text-white hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                      }
                    `}
                  >
                    {link.name}

                    <span
                      className={`
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        -z-10
                        h-8
                        w-12
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-purple-500/20
                        blur-xl
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "scale-125 opacity-100"
                            : "scale-75 opacity-0"
                        }
                      `}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Icons */}
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-gray-400
                transition-all
                duration-300
                hover:scale-110
                hover:border-purple-400/30
                hover:bg-purple-500/10
                hover:text-white
                hover:shadow-[0_0_18px_rgba(168,85,247,0.25)]
                sm:h-8
                sm:w-8
                md:h-9
                md:w-9
              "
            >
              <FaGithub className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[17px] md:w-[17px]" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-gray-400
                transition-all
                duration-300
                hover:scale-110
                hover:border-purple-400/30
                hover:bg-purple-500/10
                hover:text-white
                hover:shadow-[0_0_18px_rgba(168,85,247,0.25)]
                sm:h-8
                sm:w-8
                md:h-9
                md:w-9
              "
            >
              <FaInstagram className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[17px] md:w-[17px]" />
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes logoGradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;