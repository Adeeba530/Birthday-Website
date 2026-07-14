import { useState } from "react";
import { motion } from "framer-motion";

export default function LightUpPage({ setPage }) {
  const [on, setOn] = useState(false);

  const handleLight = () => {
    setOn(true);

    setTimeout(() => {
      setPage(6);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-10 sm:py-12"
      style={{
        background: on
          ? "radial-gradient(circle at center, #4fb4ff, #061229)"
          : "#060d1c",
      }}
    >
      <div className="absolute w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[160px] sm:h-[220px] md:h-[280px] lg:h-[320px] bg-sky-500 blur-3xl opacity-25 rounded-full" />

      <motion.div
        className="absolute w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] bg-sky-400/20 blur-[70px] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2 leading-tight max-w-2xl"
      >
        Turn On The Lights ✨
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLight}
        className="mt-8 z-10 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold shadow-xl text-sm sm:text-base md:text-lg"
      >
        💡 Light Up
      </motion.button>
    </div>
  );
}