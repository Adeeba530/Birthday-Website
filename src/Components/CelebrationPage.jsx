import { motion } from "framer-motion";
import image from "../assets/images/17.jpeg";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const hearts = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: random(5, 95),
  size: random(14, 26),
  duration: random(6, 12),
  delay: random(0, 5),
}));

const sparkles = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  top: random(10, 90),
  left: random(5, 95),
  duration: random(2, 5),
}));

export default function CelebrationPage({ setPage }) {
  return (
    <div
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-12 lg:py-14 gap-8 sm:gap-10 md:gap-12 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #10233f 0%, #060d1c 60%, #030712 100%)",
      }}
    >
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-sky-300 pointer-events-none"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
          }}
          animate={{
            y: ["100vh", "-10vh"],
            x: [0, random(-25, 25)],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
          }}
        >
          🎈
        </motion.div>
      ))}

      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-sky-100 pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
          }}
          animate={{
            scale: [0.5, 1.4, 0.5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center items-center z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow-xl p-2.5 sm:p-3 md:p-4"
          style={{
            background: "#0f1f38",
            border: "1px solid rgba(79,168,255,0.35)",
            transform: "rotate(-3deg)",
            borderRadius: "6px",
            width: "clamp(210px, 55vw, 340px)",
          }}
        >
          <img
            src={image}
            alt="Haseeb"
            className="w-full h-[clamp(250px,60vw,390px)] object-cover rounded-[4px]"
            style={{
              objectPosition: "center 20%",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Haseeb&apos;s <br /> Birthday 🎉
        </h1>

        <p className="mt-3 italic font-semibold text-sky-300 text-xs sm:text-sm md:text-base">
          Save the Date!
        </p>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-[280px] sm:max-w-sm md:max-w-md leading-6 sm:leading-7">
          Celebrating the most amazing guy in the world. May this day bring
          endless happiness 💙
        </p>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-6 flex items-center gap-2 sm:gap-3 md:gap-4 font-extrabold text-white flex-wrap justify-center md:justify-start"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.3rem, 5vw, 2.8rem)",
          }}
        >
          <span className="tracking-wider">JULY</span>
          <span className="px-2.5 sm:px-4 md:px-5 border-x-2 border-sky-400/60 text-sky-300">
            15
          </span>
          <span className="tracking-wider">2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 px-4 sm:px-6 py-4 sm:py-5 max-w-[300px] sm:max-w-sm md:max-w-md backdrop-blur-sm"
          style={{
            borderRadius: "16px",
            background: "rgba(79,168,255,0.10)",
            border: "1px solid rgba(79,168,255,0.30)",
          }}
        >
          <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-6 sm:leading-7 font-medium">
            Happy Birthday Haseeb! 🎂 Wishing you a year full of laughter,
            success, and every good thing you deserve. Stay blessed, stay
            awesome, and may all your dreams come true. 🎈✨
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(4)}
          className="mt-7 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-bold shadow-lg"
          style={{
            background: "linear-gradient(90deg,#2f7dff,#4fb4ff)",
            borderRadius: "50px",
          }}
        >
          More 💌
        </motion.button>
      </motion.div>
    </div>
  );
}