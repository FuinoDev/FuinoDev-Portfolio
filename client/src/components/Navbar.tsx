import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const [logoText, setLogoText] = useState("FuinoDev");
  const [isGreeting, setIsGreeting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const typingTimer = useRef<number | null>(null);
  const timeoutTimers = useRef<number[]>([]);
  const autoGreetingTimer = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  /* =========================================================
     CLEAR LOGO ANIMATION
     ========================================================= */

  const clearLogoAnimation = () => {
    if (typingTimer.current !== null) {
      window.clearInterval(typingTimer.current);
      typingTimer.current = null;
    }

    timeoutTimers.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    timeoutTimers.current = [];

    if (autoGreetingTimer.current !== null) {
      window.clearTimeout(autoGreetingTimer.current);
      autoGreetingTimer.current = null;
    }
  };

  /* =========================================================
     RESTORE LOGO
     ========================================================= */

  const restoreLogo = () => {
    clearLogoAnimation();

    if (!isMountedRef.current) return;

    setIsAnimating(false);
    setIsGreeting(false);
    setLogoText("FuinoDev");
  };

  /* =========================================================
     TYPE TEXT
     ========================================================= */

  const typeText = (
    text: string,
    onComplete: () => void
  ) => {
    if (typingTimer.current !== null) {
      window.clearInterval(typingTimer.current);
    }

    let index = 0;

    setLogoText("");

    typingTimer.current = window.setInterval(() => {
      if (!isMountedRef.current) {
        if (typingTimer.current !== null) {
          window.clearInterval(typingTimer.current);
          typingTimer.current = null;
        }

        return;
      }

      index += 1;

      setLogoText(text.slice(0, index));

      if (index >= text.length) {
        if (typingTimer.current !== null) {
          window.clearInterval(typingTimer.current);
          typingTimer.current = null;
        }

        onComplete();
      }
    }, 90);
  };

  /* =========================================================
     START GREETING
     ========================================================= */

  const startGreeting = () => {
    clearLogoAnimation();

    if (!isMountedRef.current) return;

    setIsAnimating(true);
    setIsGreeting(true);

    typeText("Hi, There !", () => {
      const firstDelay = window.setTimeout(() => {
        if (!isMountedRef.current) return;

        typeText("I'm FuinoDev", () => {
          const secondDelay = window.setTimeout(() => {
            restoreLogo();
          }, 1800);

          timeoutTimers.current.push(secondDelay);
        });
      }, 500);

      timeoutTimers.current.push(firstDelay);
    });
  };

  /* =========================================================
     AUTOMATIC GREETING
     ========================================================= */

  const scheduleAutomaticGreeting = () => {
    if (autoGreetingTimer.current !== null) {
      window.clearTimeout(autoGreetingTimer.current);
    }

    autoGreetingTimer.current = window.setTimeout(() => {
      if (!isMountedRef.current) return;

      if (activeLink === "#home" && !isAnimating) {
        startGreeting();
      }
    }, 7000);
  };

  /* =========================================================
     INITIAL SETUP
     ========================================================= */

  useEffect(() => {
    isMountedRef.current = true;

    scheduleAutomaticGreeting();

    return () => {
      isMountedRef.current = false;
      clearLogoAnimation();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* =========================================================
     AUTOMATIC ACTIVE SECTION DETECTION
     ========================================================= */

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is Element =>
          section !== null
      );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length === 0) return;

        const activeSection =
          visibleSections[0].target;

        setActiveLink(
          `#${activeSection.id}`
        );
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [
          0.1,
          0.25,
          0.5,
          0.75,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     LOGO CLICK

     IMPORTANT:
     Clicking the logo NO LONGER:
     - scrolls to #home
     - changes active navigation
     - sends the user back to Home

     It only controls the logo animation.
     ========================================================= */

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (isAnimating) {
      restoreLogo();
      return;
    }

    startGreeting();
    setIsOpen(false);
  };

  /* =========================================================
     NAVIGATION
     ========================================================= */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setActiveLink(href);
    setIsOpen(false);

    if (autoGreetingTimer.current !== null) {
      window.clearTimeout(
        autoGreetingTimer.current
      );

      autoGreetingTimer.current = null;
    }

    if (href === "#home") {
      if (!isAnimating) {
        scheduleAutomaticGreeting();
      }
    }

    const target =
      document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');

          /* =====================================================
             LOGO GRADIENT
             ===================================================== */

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

          /* =====================================================
             LOGO GLOW
             ===================================================== */

          @keyframes logoGlow {
            0%,
            100% {
              filter: drop-shadow(
                0 0 5px rgba(168, 85, 247, 0.15)
              );
            }

            50% {
              filter: drop-shadow(
                0 0 17px rgba(139, 92, 246, 0.38)
              );
            }
          }

          /* =====================================================
             GREETING
             ===================================================== */

          @keyframes greetingIn {
            from {
              opacity: 0;
              transform: translateY(5px);
              filter: blur(4px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          /* =====================================================
             MOBILE MENU
             ===================================================== */

          @keyframes mobileMenuIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* =====================================================
             MOBILE ACTIVE TEXT GLOW
             ===================================================== */

          @keyframes mobileActiveGlow {
            0%,
            100% {
              text-shadow:
                0 0 8px rgba(168, 85, 247, 0.35),
                0 0 18px rgba(139, 92, 246, 0.12);
            }

            50% {
              text-shadow:
                0 0 10px rgba(168, 85, 247, 0.55),
                0 0 24px rgba(139, 92, 246, 0.2);
            }
          }

          /* =====================================================
             LOGO
             ===================================================== */

          .fuino-logo {
            font-family: "Space Grotesk", sans-serif;
            font-weight: 700;

            background: linear-gradient(
              90deg,
              #ffffff 0%,
              #c084fc 35%,
              #818cf8 65%,
              #ffffff 100%
            );

            background-size: 200% auto;

            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;

            animation:
              logoGradient 5s ease infinite,
              logoGlow 3s ease-in-out infinite;
          }

          .fuino-greeting {
            font-family: "Space Grotesk", sans-serif;
            font-weight: 600;
            color: white;
            animation: greetingIn 0.35s ease-out;
          }

          /* =====================================================
             NAV BUTTON
             ===================================================== */

          .nav-btn {
            transition:
              transform 0.25s ease,
              background-color 0.25s ease,
              color 0.25s ease,
              box-shadow 0.25s ease,
              text-shadow 0.25s ease;
          }

          /* =====================================================
             NAV ICON
             ===================================================== */

          .nav-icon-btn {
            transition:
              transform 0.25s ease,
              background-color 0.25s ease,
              color 0.25s ease,
              box-shadow 0.25s ease;
          }

          /* =====================================================
             MOBILE MENU ANIMATION
             ===================================================== */

          .mobile-menu-animation {
            animation: mobileMenuIn 0.2s ease-out;
          }

          /* =====================================================
             MOBILE NAV LINKS
             ===================================================== */

          .mobile-nav-link {
            font-family: "Space Grotesk", sans-serif;

            transition:
              color 0.25s ease,
              text-shadow 0.25s ease,
              transform 0.25s ease;

            -webkit-tap-highlight-color: transparent;
          }

          .mobile-nav-link:active {
            transform: scale(0.97);
          }

          .mobile-nav-link-active {
            animation:
              mobileActiveGlow
              2.4s
              ease-in-out
              infinite;
          }

          /* =====================================================
             REDUCED MOTION
             ===================================================== */

          @media (prefers-reduced-motion: reduce) {
            .fuino-logo,
            .fuino-greeting,
            .mobile-menu-animation,
            .mobile-nav-link-active,
            .nav-btn,
            .nav-icon-btn {
              animation: none;
              transition: none;
            }
          }
        `}
      </style>

      {/* =======================================================
          HEADER
          ======================================================= */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          w-full
        "
        style={{
          paddingTop:
            "env(safe-area-inset-top)",
        }}
      >
        <nav
          className="
            w-full
            border-b
            border-white/[0.06]
            bg-[#030014]/80
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-[#030014]/65
          "
        >
          {/* =================================================
              NAVBAR CONTAINER
              ================================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              h-[72px]
              w-full
              max-w-7xl
              items-center
              px-4

              sm:h-[78px]
              sm:px-6

              md:px-8

              lg:h-[82px]
              lg:px-10

              xl:px-12
            "
          >
            {/* =================================================
                LOGO
                ================================================= */}

            <a
              href="#home"
              onClick={handleLogoClick}
              aria-label="FuinoDev"
              className="
                group
                flex
                min-w-0
                shrink-0
                select-none
                items-center
              "
              style={{
                minWidth: "min(48vw, 200px)",
              }}
            >
              {isGreeting ? (
                <span
                  className="
                    fuino-greeting
                    whitespace-nowrap
                    text-lg
                    tracking-[-0.03em]

                    sm:text-2xl

                    lg:text-3xl
                  "
                >
                  {logoText}

                  {isAnimating && (
                    <span
                      className="
                        ml-0.5
                        animate-pulse
                        text-purple-400
                      "
                    >
                      |
                    </span>
                  )}
                </span>
              ) : (
                <span
                  className="
                    fuino-logo
                    whitespace-nowrap
                    text-2xl
                    leading-none
                    tracking-[-0.05em]
                    transition-transform
                    duration-300

                    group-hover:scale-[1.035]

                    sm:text-3xl

                    lg:text-4xl
                  "
                >
                  FuinoDev
                </span>
              )}
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
                ================================================= */}

            <div
              className="
                hidden
                flex-1
                items-center
                justify-center
                gap-1.5

                md:flex

                lg:gap-2

                xl:gap-3
              "
            >
              {links.map((link) => {
                const isActive =
                  activeLink === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        link.href
                      )
                    }
                    className={`
                      nav-btn
                      flex
                      h-10
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-xl
                      px-3
                      text-sm
                      font-medium

                      lg:h-11
                      lg:px-4

                      xl:px-5

                      ${
                        isActive
                          ? "scale-105 bg-white/[0.055] text-white shadow-[0_0_28px_rgba(139,92,246,0.18)]"
                          : "text-gray-400 hover:scale-105 hover:bg-white/[0.04] hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.16)]"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP RIGHT ACTIONS
                ================================================= */}

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-1.5

                md:flex

                lg:gap-2
              "
            >
              {/* GitHub */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  nav-icon-btn
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-gray-500

                  hover:scale-110
                  hover:bg-white/[0.05]
                  hover:text-white
                  hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]
                "
              >
                <FaGithub
                  className="
                    h-4
                    w-4

                    lg:h-[18px]
                    lg:w-[18px]
                  "
                />
              </a>

              {/* Instagram */}

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  nav-icon-btn
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-gray-500

                  hover:scale-110
                  hover:bg-white/[0.05]
                  hover:text-white
                  hover:shadow-[0_0_24px_rgba(168,85,247,0.2)]
                "
              >
                <FaInstagram
                  className="
                    h-4
                    w-4

                    lg:h-[18px]
                    lg:w-[18px]
                  "
                />
              </a>

              {/* Divider */}

              <div
                className="
                  mx-1
                  h-5
                  w-px
                  shrink-0
                  bg-white/[0.08]

                  lg:mx-2
                "
              />

              {/* Let's Talk */}

              <a
                href="#contact"
                onClick={(e) =>
                  handleNavigation(
                    e,
                    "#contact"
                  )
                }
                className="
                  nav-btn
                  group
                  inline-flex
                  h-10
                  shrink-0
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  rounded-xl
                  bg-white
                  px-4
                  text-xs
                  font-semibold
                  text-black

                  hover:scale-105
                  hover:bg-gray-200
                  hover:shadow-[0_0_32px_rgba(255,255,255,0.18)]

                  lg:h-11
                  lg:px-5
                  lg:text-sm
                "
              >
                Let's Talk

                <ArrowUpRight
                  className="
                    h-3
                    w-3
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5

                    lg:h-3.5
                    lg:w-3.5
                  "
                />
              </a>
            </div>

            {/* =================================================
                MOBILE BURGER
                ================================================= */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isOpen}
              className="
                nav-icon-btn
                ml-auto
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-gray-300

                hover:scale-105
                hover:bg-white/[0.08]
                hover:text-white

                md:hidden
              "
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
              =================================================== */}

          {isOpen && (
            <div
              className="
                mobile-menu-animation
                border-t
                border-white/[0.06]
                bg-[#030014]/90
                backdrop-blur-2xl

                md:hidden
              "
            >
              <div
                className="
                  mx-auto
                  w-full
                  max-w-7xl
                  px-4
                  pb-5
                  pt-2

                  sm:px-6
                "
              >
                {/* =================================================
                    MOBILE NAV LINKS

                    No cards.
                    No active background.
                    Equal vertical spacing.
                    ================================================= */}

                <div
                  className="
                    flex
                    flex-col
                    gap-0
                  "
                >
                  {links.map((link) => {
                    const isActive =
                      activeLink ===
                      link.href;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) =>
                          handleNavigation(
                            e,
                            link.href
                          )
                        }
                        className={`
                          mobile-nav-link
                          flex
                          min-h-[46px]
                          w-full
                          items-center
                          px-2
                          text-base
                          font-medium

                          sm:min-h-[48px]
                          sm:text-[17px]

                          ${
                            isActive
                              ? "mobile-nav-link-active text-white"
                              : "text-gray-400 hover:text-white"
                          }
                        `}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>

                {/* =================================================
                    MOBILE BOTTOM ACTIONS
                    ================================================= */}

                <div
                  className="
                    mt-2
                    border-t
                    border-white/[0.06]
                    pt-3
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    {/* Social Icons */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      {/* GitHub */}

                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                          nav-icon-btn
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-white/[0.04]
                          text-gray-400

                          hover:scale-110
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>

                      {/* Instagram */}

                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="
                          nav-icon-btn
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-white/[0.04]
                          text-gray-400

                          hover:scale-110
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Let's Talk */}

                    <a
                      href="#contact"
                      onClick={(e) =>
                        handleNavigation(
                          e,
                          "#contact"
                        )
                      }
                      className="
                        nav-btn
                        group
                        inline-flex
                        min-h-[42px]
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-xl
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-black

                        hover:scale-105
                        hover:bg-gray-200
                        hover:shadow-[0_0_30px_rgba(255,255,255,0.16)]
                      "
                    >
                      Let's Talk

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;