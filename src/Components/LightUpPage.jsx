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
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-4 transition-all duration-700"
      style={{
        background: on
          ? "radial-gradient(circle at center, #ffb6c1, #2a0f1f)"
          : "#0b0b10",
      }}
    >
      {/* GLOW EFFECT (responsive) */}
      <div className="absolute w-[180px] sm:w-[250px] md:w-[300px] h-[180px] sm:h-[250px] md:h-[300px] bg-pink-500 blur-3xl opacity-30 rounded-full" />

      {/* MAIN TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          z-10
          text-white
          text-center
          font-bold
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          px-2
        "
      >
        Turn On The Lights ✨
      </motion.h1>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLight}
        className="
          mt-8
          px-5 sm:px-6 md:px-8
          py-2 sm:py-3
          rounded-full
          bg-gradient-to-r from-pink-500 to-purple-500
          text-white
          font-semibold
          shadow-xl
          text-sm sm:text-base md:text-lg
          z-10
        "
      >
        💡 Light Up
      </motion.button>

      {/* subtle floating glow animation */}
      <motion.div
        className="absolute w-[120px] sm:w-[180px] md:w-[220px] h-[120px] sm:h-[180px] md:h-[220px] bg-pink-400/20 blur-[80px] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}