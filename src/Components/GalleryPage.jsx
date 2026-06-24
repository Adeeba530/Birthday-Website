import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { useMemo, useEffect } from "react";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";

function GalleryPage({ setPage, playMusic }) {
  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
  ];

  const hearts = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: (i * 8) % 100,
      duration: 6 + (i % 3),
      delay: (i % 4) * 0.4,
    }));
  }, []);

    useEffect(() => {
    if (playMusic) playMusic();
  }, []);

  

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center px-3 sm:px-5 py-8 overflow-hidden"
      style={{ background: "#d4888f" }}
    >
      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{ duration: h.duration, repeat: Infinity, delay: h.delay }}
            className="absolute text-white text-lg sm:text-xl md:text-2xl"
            style={{ left: `${h.left}%` }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          mb-6
          sm:mb-8
          text-center
          z-10
          px-2
        "
        style={{ color: "#5a2020", fontFamily: "Georgia, serif" }}
      >
        Areeba's Royal Memories 👑💖
      </motion.h1>

      {/* SWIPER */}
      <div className="w-full max-w-6xl z-10 px-2 sm:px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="py-4 sm:py-6"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  bg-white
                  p-2 sm:p-3
                  rounded-2xl sm:rounded-3xl
                  shadow-xl sm:shadow-2xl
                  aspect-[3/4]
                  overflow-hidden
                  border border-[#c07070]
                "
              >
                <img
                  src={img}
                  alt={`memory-${i}`}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 w-full max-w-6xl mt-8 sm:mt-10 px-2 z-10">
        <button
          onClick={() => setPage(1)}
          className="
            w-full sm:w-auto
            px-5 sm:px-6
            py-3
            rounded-full
            font-bold
            shadow-lg
            hover:scale-105
            transition
            bg-white
            text-[#7a3030]
          "
        >
          ← Back
        </button>

        <button
          onClick={() => setPage(3)}
          className="
            w-full sm:w-auto
            px-5 sm:px-6
            py-3
            rounded-full
            font-bold
            shadow-lg
            hover:scale-105
            transition
            animate-pulse
            bg-[#7a3030]
            text-white
          "
        >
          Next 🎀
        </button>
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] blur-3xl opacity-20 rounded-full top-10 left-10 bg-[#c06070]" />
      <div className="absolute w-[180px] sm:w-[250px] md:w-[250px] h-[180px] sm:h-[250px] md:h-[250px] blur-3xl opacity-20 rounded-full bottom-10 right-10 bg-[#a05060]" />
    </div>
  );
}

export default GalleryPage;