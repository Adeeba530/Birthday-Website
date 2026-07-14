import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaGift,
  FaStar,
  FaRocket,
  FaCrown,
  FaArrowRight,
} from "react-icons/fa";
import confetti from "canvas-confetti";
import mainImg from "../assets/images/2.jpeg";

function WelcomePage({ setPage }) {
  useEffect(() => {
    confetti({
      particleCount: 220,
      spread: 120,
      origin: { y: 0.55 },
      colors: ["#3B82F6", "#60A5FA", "#38BDF8", "#ffffff"],
    });
  }, []);

  const handleStart = () => {
    setPage(2);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030712] flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-8">
      <div className="absolute -top-24 -left-24 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[70px] sm:blur-[110px] md:blur-[140px]" />
      <div className="absolute -bottom-24 -right-24 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[70px] sm:blur-[110px] md:blur-[140px]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px] md:bg-[size:40px_40px]" />

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-4 left-4 sm:top-16 sm:left-10 md:top-24 md:left-20 text-yellow-300 text-lg sm:text-xl md:text-2xl"
      >
        <FaStar />
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-8 right-4 sm:top-20 sm:right-10 md:top-32 md:right-20 text-blue-300 text-base sm:text-lg md:text-xl"
      >
        <FaStar />
      </motion.div>

      <div className="hidden lg:flex absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 flex-col gap-6 xl:gap-8">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl xl:text-4xl">🎈</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [8, -8, 8] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <FaBirthdayCake className="text-3xl xl:text-4xl text-cyan-300" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <FaGift className="text-3xl xl:text-4xl text-blue-400" />
        </motion.div>
      </div>

      <div className="hidden lg:flex absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 flex-col gap-6 xl:gap-8">
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [8, -8, 8] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl xl:text-4xl">🎉</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <FaRocket className="text-3xl xl:text-4xl text-cyan-300" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="w-16 h-16 xl:w-20 xl:h-20 rounded-3xl bg-white/5 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center shadow-lg"
        >
          <FaCrown className="text-3xl xl:text-4xl text-yellow-400" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-6xl rounded-[22px] sm:rounded-[28px] md:rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,.25)] p-4 sm:p-6 md:p-10 lg:p-14"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] sm:text-sm tracking-widest uppercase">
              🎂 Birthday Celebration
            </span>

            <h1 className="mt-5 sm:mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Happy Birthday
            </h1>

            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Haseeb ✨
            </h2>

            <p className="mt-5 sm:mt-7 max-w-xl mx-auto lg:mx-0 text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
              Every year brings a new chapter, new memories and new victories.
              Today is all about celebrating you. Wishing you endless happiness,
              success and unforgettable moments.
            </p>

            <button
              onClick={handleStart}
              className="mt-8 sm:mt-10 mx-auto lg:mx-0 flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm sm:text-base font-semibold hover:scale-105 duration-300 shadow-[0_0_30px_rgba(59,130,246,.45)]"
            >
              Open Your Surprise
              <FaArrowRight />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center items-center py-6 sm:py-8 lg:py-0">
            <div className="absolute w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-blue-500/20 blur-[50px] sm:blur-[65px] md:blur-[80px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] rounded-full border-2 border-dashed border-cyan-400/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[205px] h-[205px] sm:w-[290px] sm:h-[290px] md:w-[370px] md:h-[370px] rounded-full border border-blue-400/20"
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-3 right-2 sm:right-6 md:right-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full shadow-xl z-30 text-xs sm:text-sm whitespace-nowrap"
            >
              🎉 Birthday Boy
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative z-20"
            >
              <div className="w-[170px] h-[230px] sm:w-[230px] sm:h-[310px] md:w-[290px] md:h-[390px] lg:w-[340px] lg:h-[460px] rounded-[22px] sm:rounded-[28px] md:rounded-[35px] overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,.35)]">
                <img
                  src={mainImg}
                  alt="Birthday Boy"
                  className="w-full h-full object-cover hover:scale-110 duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-0 sm:left-0 top-6 sm:top-12 md:top-16 text-2xl sm:text-4xl md:text-5xl"
            >
              🎈
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute right-0 bottom-10 sm:bottom-16 md:bottom-20 text-2xl sm:text-4xl md:text-5xl"
            >
              🎁
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-2 left-2 sm:bottom-5 sm:left-8 text-xl sm:text-3xl md:text-4xl"
            >
              ✨
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[120px] sm:h-[170px] md:h-[220px] bg-blue-500/10 blur-[90px] sm:blur-[120px] md:blur-[140px] rounded-full" />
    </section>
  );
}

export default WelcomePage;