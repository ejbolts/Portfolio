import React from "react";
export default function IntroductionImage() {
  const [sliderX, setSliderX] = React.useState(0.63);
  const containerRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const IntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/Ethan-intro.webp";

  const CartoonIntroIMG =
    "https://portfolio-images-123498767765.s3.ap-southeast-2.amazonaws.com/Ethan-intro-cartoon.webp";
  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let x = (clientX - rect.left) / rect.width;
    x = Math.max(0, Math.min(1, x));
    setSliderX(x);
  };
  return (
    <div className="flex-1 max-w-lg mx-5">
      <div
        ref={containerRef}
        className="group relative rounded-3xl overflow-hidden shadow-2xl select-none"
        style={{ aspectRatio: "1/1.4", minHeight: 750 }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={dragging ? handleDrag : undefined}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        onTouchCancel={() => setDragging(false)}
        onTouchMove={dragging ? handleDrag : undefined}
      >
        <img
          className="w-full h-full  absolute inset-0"
          src={CartoonIntroIMG}
          alt="Blurred Ethan Bolton"
          draggable={false}
          style={{ userSelect: "none" }}
        />
        <img
          className="w-full h-full -cover absolute inset-0"
          src={IntroIMG}
          alt="Ethan Bolton"
          draggable={false}
          style={{
            userSelect: "none",
            clipPath: `inset(0 ${100 - sliderX * 100}% 0 0)`,
            transition: dragging ? "none" : "clip-path 0.2s",
          }}
        />
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: `${sliderX * 100}%`,
            width: "3px",
            background: "rgba(255,255,255,0.7)",
            boxShadow: "0 0 8px 2px rgba(0,0,0,0.15)",
            cursor: "ew-resize",
            zIndex: 20,
            transition: dragging ? "none" : "left 0.2s",
          }}
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
        >
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 rounded-full border border-zinc-300 shadow" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-4 text-white z-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none -z-10 rounded-3xl" />
          <div className="flex items-center text-sm sm:text-base">
            <svg
              className="w-5 h-5 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Binna Burra, QLD</span>
            <span className="mx-2">•</span>
            <svg
              className="w-5 h-5 mr-1.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}
