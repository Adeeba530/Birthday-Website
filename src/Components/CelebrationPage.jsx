import { motion } from "framer-motion";
import image from "../assets/images/2.jpeg";

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
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-10 gap-10 overflow-hidden"
      style={{ background: "#d4888f" }}
    >

      {/* 💖 FLOATING HEARTS */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-pink-200 pointer-events-none"
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
          💖
        </motion.div>
      ))}

      {/* ✨ SPARKLES */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-yellow-100 pointer-events-none"
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

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          md:w-1/2
          flex
          justify-center
          items-center
          z-10
        "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            bg-white
            shadow-xl
            p-3
          "
          style={{
            transform: "rotate(-3deg)",
            borderRadius: "6px",
            width: "clamp(220px, 40vw, 320px)",
          }}
        >
          <img
            src={image}
            alt="Areeba"
            className="w-full object-cover"
            style={{
              height: "clamp(260px, 45vw, 380px)",
              objectPosition: "center 20%",
            }}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          md:w-1/2
          flex
          flex-col
          items-center
          md:items-start
          text-center
          md:text-left
          z-10
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-[#5a2020]
            leading-tight
          "
        >
          Areeba's <br /> Birthday 🎉
        </h1>

        {/* SUB TITLE */}
        <p className="mt-3 italic font-semibold text-[#7a3030] text-sm sm:text-base">
          Save the Date!
        </p>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm sm:text-base text-[#8a5050] max-w-xs sm:max-w-sm leading-6 sm:leading-7">
          Celebrating the most special girl in the world.
          May this day bring endless happiness 💖
        </p>

        {/* DATE BLOCK (FIXED SHADOW + CLEAN) */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-6
            flex
            items-center
            gap-3 sm:gap-4
            font-extrabold
            text-[#5a2020]
            flex-wrap
            justify-center
            md:justify-start
          "
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
          }}
        >
          <span className="tracking-wider">JUNE</span>

          <span className="px-3 sm:px-5 border-x-2 border-[#8a5050]">
            25
          </span>

          <span className="tracking-wider">2026</span>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(4)}
          className="
            mt-7
            px-6 sm:px-8
            py-3
            text-white
            font-bold
            shadow-lg
          "
          style={{
            background: "#7a3030",
            borderRadius: "50px",
          }}
        >
          More 💌
        </motion.button>
      </motion.div>
    </div>
  );
}