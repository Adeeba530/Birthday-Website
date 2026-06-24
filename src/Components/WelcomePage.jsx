import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGift, FaBirthdayCake, FaStar } from "react-icons/fa";
import confetti from "canvas-confetti";

function WelcomePage({ setPage, playMusic }) {

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#c07070", "#e0a0a0", "#ffffff", "#a05050"],
    });
  }, []);

const handleStart = () => {
  setPage(2);
};

  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{ background: "#d4888f" }}
    >

      {/* FLOATING HEARTS */}
      <motion.div
        animate={{ y: [-20, -600] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-0 left-4 sm:left-10 md:left-20 text-xl sm:text-2xl md:text-3xl text-[#7a3030]"
      >
        <FaHeart />
      </motion.div>

      <motion.div
        animate={{ y: [-20, -700] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-0 right-4 sm:right-16 md:right-32 text-2xl sm:text-3xl md:text-4xl text-[#5a2020]"
      >
        <FaHeart />
      </motion.div>

      {/* STARS */}
      <FaStar className="absolute top-16 left-4 sm:left-16 md:left-32 text-yellow-200 text-lg sm:text-xl md:text-2xl animate-pulse" />
      <FaStar className="absolute top-28 right-4 sm:right-10 md:right-20 text-yellow-100 text-xl sm:text-2xl md:text-3xl animate-pulse" />

      {/* GIFTS */}
      <FaGift className="absolute bottom-6 left-3 sm:left-6 md:left-10 text-3xl sm:text-4xl md:text-5xl text-[#7a3030] animate-bounce" />
      <FaGift className="absolute bottom-6 right-3 sm:right-6 md:right-10 text-3xl sm:text-4xl md:text-5xl text-[#5a2020] animate-bounce" />

      {/* CAKE */}
      <FaBirthdayCake className="absolute top-6 md:top-10 text-3xl sm:text-4xl md:text-5xl text-[#7a3030] animate-bounce" />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-[90%]
          sm:max-w-lg
          md:max-w-2xl
          text-center
          p-6 sm:p-8 md:p-12
          rounded-2xl sm:rounded-3xl md:rounded-[40px]
          backdrop-blur-xl
          border
          shadow-2xl
        "
        style={{
          background: "rgba(255,255,255,0.2)",
          borderColor: "rgba(255,255,255,0.4)",
        }}
      >

        {/* TITLE */}
        <motion.h1
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          style={{
            color: "#5a2020",
            fontFamily: "Georgia, serif",
          }}
        >
          Happy Birthday Areeba! 💖
        </motion.h1>

        {/* TEXT */}
        <p
          className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-lg md:text-xl leading-6 sm:leading-8 md:leading-9"
          style={{ color: "#6a3030" }}
        >
          To the most amazing sister in the world ✨
          <br />
          Today is all about celebrating you and creating beautiful memories 🎂💕🎀
        </p>

        {/* BUTTON */}
        <button
          onClick={handleStart}
          className="
            mt-6 md:mt-8
            px-5 sm:px-6 md:px-8
            py-3 md:py-4
            rounded-full
            text-white
            font-bold
            text-sm sm:text-base md:text-lg
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
          "
          style={{ background: "#7a3030" }}
        >
          Begin Your Surprise 🎀
        </button>
      </motion.div>
    </div>
  );
}

export default WelcomePage;