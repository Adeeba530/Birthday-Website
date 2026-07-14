import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FinalPage({ setPage }) {
  useEffect(() => {
    const shoot = () => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ["#4fb4ff", "#2f6fd6", "#e8f4ff"],
      });

      confetti({
        particleCount: 70,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ["#4fb4ff", "#2f6fd6", "#e8f4ff"],
      });
    };

    shoot();
    const t = setTimeout(shoot, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-3 sm:px-4 md:px-6 py-8 sm:py-10 bg-[#060d1c]">
      {["top-0 right-0", "bottom-0 left-0", "top-0 left-0", "bottom-0 right-0"].map(
        (pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-[70px] sm:w-[120px] md:w-[170px] lg:w-[220px] opacity-60 sm:opacity-80`}
          >
            <svg viewBox="0 0 240 220" width="100%">
              <g transform="translate(140,120)">
                {[0, 51, 102, 153, 204, 255, 306].map((deg, j) => (
                  <ellipse
                    key={j}
                    cx="0"
                    cy="-38"
                    rx="16"
                    ry="38"
                    fill={j % 2 === 0 ? "#2f6fd6" : "#4fa8ff"}
                    transform={`rotate(${deg})`}
                  />
                ))}
                <circle cx="0" cy="0" r="14" fill="#7fd1ff" />
              </g>
            </svg>
          </div>
        )
      )}

      {[
        { emoji: "🎈", pos: "left-2 sm:left-6 top-20 sm:top-24", size: "text-3xl sm:text-5xl md:text-6xl" },
        { emoji: "🏆", pos: "left-3 sm:left-10 bottom-20 sm:bottom-24", size: "text-2xl sm:text-4xl md:text-5xl" },
        { emoji: "🎁", pos: "right-2 sm:right-6 bottom-24 sm:bottom-28", size: "text-2xl sm:text-4xl md:text-5xl" },
        { emoji: "💙", pos: "right-3 sm:right-10 top-32 sm:top-40", size: "text-xl sm:text-3xl md:text-4xl" },
      ].map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.5 }}
          className={`absolute ${item.pos} ${item.size} z-10`}
        >
          {item.emoji}
        </motion.div>
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-sky-100 text-base sm:text-xl md:text-2xl"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i * 7) % 60}%`,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-[96%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-[#0f1f38] border border-[#4fa8ff]/40 shadow-2xl rounded-2xl sm:rounded-xl px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-14 text-center"
      >
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-[9px] sm:text-xs px-3 sm:px-6 py-1 uppercase tracking-widest whitespace-nowrap rounded-full">
          ✦ With Lots Of Love ✦
        </div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-3xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"
        >
          💙
        </motion.div>

        <h1 className="font-bold font-serif text-2xl sm:text-3xl md:text-5xl text-white leading-tight px-1">
          You Are So Loved,
          <br />
          Haseeb
        </h1>

        <div className="flex items-center gap-2 sm:gap-3 my-5 sm:my-6 max-w-xs mx-auto">
          <span className="flex-1 h-px bg-sky-400/50" />
          <span className="text-sky-300 text-sm">✦</span>
          <span className="flex-1 h-px bg-sky-400/50" />
        </div>

        <p className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-slate-300">
          This little surprise was made with love just for you 🎉
          <br />
          <br />
          You deserve happiness every single day.
          <br />
          May your life always shine like today ✨
          <br />
          <br />
          <span className="text-sky-300 font-medium">
            Happy Birthday, legend 🎂
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setPage(1)}
            className="px-5 sm:px-6 py-2 border border-sky-400/50 text-sky-300 text-xs sm:text-sm uppercase tracking-widest rounded-full"
          >
            ← Start Again
          </button>

          <button
            onClick={() =>
              confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 },
                colors: ["#4fb4ff", "#2f6fd6", "#e8f4ff"],
              })
            }
            className="px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-xs sm:text-sm uppercase tracking-widest rounded-full"
          >
            🎉 Celebrate Again
          </button>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 border-t border-sky-400/20">
          <p className="text-sky-300 text-sm sm:text-base italic">
            Made with endless love 💙
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Your brother — Abdullah ✨
          </p>
        </div>
      </motion.div>
    </div>
  );
}