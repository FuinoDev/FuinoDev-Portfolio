import type { CSSProperties } from "react";

function GalaxyBackground() {
  const stars = Array.from({ length: 90 }, (_, index) => {
    const angle = (index / 90) * 360;
    const radius = 20 + ((index * 37) % 80);
    const depth = 0.35 + ((index * 17) % 65) / 100;
    const size = 1 + depth * 2;
    const opacity = 0.25 + depth * 0.65;
    const duration = 35 + ((index * 13) % 45);
    const delay = -((index * 19) % 60);

    return {
      angle: `${angle}deg`,
      radius: `${radius}%`,
      depth,
      size: `${size}px`,
      opacity,
      duration: `${duration}s`,
      delay: `${delay}s`,
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030014]">
      <div className="absolute left-1/2 top-1/2 h-[70vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-purple-900/10 blur-[140px]" />

      <div className="absolute left-[15%] top-[15%] h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-[5%] h-[35rem] w-[35rem] rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="universe">
        <div className="orbit orbit-1">
          {stars.slice(0, 30).map((star, index) => (
            <span
              key={index}
              className="space-star"
              style={
                {
                  "--angle": star.angle,
                  "--radius": star.radius,
                  "--depth": star.depth,
                  "--size": star.size,
                  "--opacity": star.opacity,
                  "--duration": star.duration,
                  "--delay": star.delay,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="orbit orbit-2">
          {stars.slice(30, 60).map((star, index) => (
            <span
              key={index}
              className="space-star"
              style={
                {
                  "--angle": star.angle,
                  "--radius": star.radius,
                  "--depth": star.depth,
                  "--size": star.size,
                  "--opacity": star.opacity,
                  "--duration": star.duration,
                  "--delay": star.delay,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="orbit orbit-3">
          {stars.slice(60, 90).map((star, index) => (
            <span
              key={index}
              className="space-star"
              style={
                {
                  "--angle": star.angle,
                  "--radius": star.radius,
                  "--depth": star.depth,
                  "--size": star.size,
                  "--opacity": star.opacity,
                  "--duration": star.duration,
                  "--delay": star.delay,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="galaxy-core" />

      <div className="meteor meteor-1" />
      <div className="meteor meteor-2" />
      <div className="meteor meteor-3" />
      <div className="meteor meteor-4" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#030014_100%)]" />
    </div>
  );
}

export default GalaxyBackground;