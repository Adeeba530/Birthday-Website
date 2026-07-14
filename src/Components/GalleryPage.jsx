import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";
import { useMemo, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCrown, FaThumbtack } from "react-icons/fa";

import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/21.jpeg";
import img8 from "../assets/images/8.jpeg";
import img9 from "../assets/images/9.jpeg";
import img10 from "../assets/images/10.jpeg";
import img11 from "../assets/images/11.jpeg";
import img12 from "../assets/images/12.jpeg";
import img13 from "../assets/images/13.jpeg";
import img14 from "../assets/images/14.jpeg";
import img15 from "../assets/images/15.jpeg";
import img16 from "../assets/images/5.jpeg";
import img17 from "../assets/images/17.jpeg";
import img18 from "../assets/images/18.jpeg";
import img19 from "../assets/images/19.jpeg";
import img20 from "../assets/images/20.jpeg";
import img21 from "../assets/images/21.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14,
  img15, img16, img17, img18, img19, img20, img21,
];

const tilts = [-4, 3, -2, 5, -5, 2, 4, -3, 1, -1, 3, -4];

function GalleryPage({ setPage, playMusic }) {
  const stars = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: (i * 6.3) % 100,
      duration: 5 + (i % 5),
      delay: (i % 6) * 0.35,
      size: 6 + (i % 3) * 4,
    }));
  }, []);

  useEffect(() => {
    if (playMusic) playMusic();
  }, [playMusic]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 py-10 sm:py-14 overflow-hidden bg-gradient-to-b from-[#120a24] via-[#1b1030] to-[#0d0818]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px] bg-amber-500/10 rounded-full blur-[90px] sm:blur-[120px] md:blur-[150px]" />
      <div className="absolute -bottom-24 -left-16 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-violet-600/20 rounded-full blur-[80px] sm:blur-[110px] md:blur-[140px]" />
      <div className="absolute -bottom-24 -right-16 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-indigo-600/20 rounded-full blur-[80px] sm:blur-[110px] md:blur-[140px]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((s) => (
          <motion.span
            key={s.id}
            animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.4, 1] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
            className="absolute rounded-full bg-amber-200"
            style={{
              left: `${s.left}%`,
              top: `${(s.id * 13) % 90}%`,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-[11px] sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6"
      >
        <FaCrown /> Royal Album
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-center z-10 px-2 leading-tight bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Haseeb&apos;s Hall of Fame
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center text-violet-200/70 text-xs sm:text-base mb-8 sm:mb-12 max-w-xl px-4"
      >
        Pinned memories from a legend in the making 👑
      </motion.p>

      <div className="w-full max-w-6xl z-10 px-1 sm:px-4">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          navigation
          loop
          grabCursor
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 90,
            modifier: 1.2,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 10 },
            480: { slidesPerView: 1.25, spaceBetween: 12 },
            640: { slidesPerView: 1.6, spaceBetween: 16 },
            768: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 28 },
            1536: { slidesPerView: 4, spaceBetween: 32 },
          }}
          className="py-6 sm:py-10 royal-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.06, rotate: 0 }}
                transition={{ type: "spring", stiffness: 160 }}
                style={{ rotate: `${tilts[i % tilts.length]}deg` }}
                className="relative bg-[#fdf8ec] p-2.5 sm:p-4 pb-8 sm:pb-12 rounded-md shadow-[0_15px_35px_rgba(0,0,0,.45)] aspect-[4/5]"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-amber-300 to-amber-600 shadow-md flex items-center justify-center border border-amber-200/50 z-10">
                  <FaThumbtack className="text-[#3a2410] text-xs sm:text-sm" />
                </div>

                <div className="w-full h-full overflow-hidden rounded-sm">
                  <img
                    src={img}
                    alt={`memory-${i}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p
                  className="absolute bottom-1.5 sm:bottom-3 left-0 right-0 text-center text-[#3a2410]/70 text-[10px] sm:text-xs"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  memory #{i + 1}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 w-full max-w-6xl mt-6 sm:mt-8 px-2 z-10">
        <button
          onClick={() => setPage(1)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition bg-white/5 border border-amber-200/20 backdrop-blur-xl text-amber-100 text-sm sm:text-base"
        >
          <FaArrowLeft /> Back
        </button>

        <button
          onClick={() => setPage(3)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(245,158,11,.35)] hover:scale-105 transition bg-gradient-to-r from-amber-400 to-amber-600 text-[#3a2410] text-sm sm:text-base"
        >
          Next <FaArrowRight />
        </button>
      </div>

      <style>{`
        .royal-swiper .swiper-button-next,
        .royal-swiper .swiper-button-prev {
          color: #fbbf24;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(251,191,36,0.35);
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          backdrop-filter: blur(10px);
        }
        .royal-swiper .swiper-button-next::after,
        .royal-swiper .swiper-button-prev::after {
          font-size: 14px;
        }
        @media (min-width: 640px) {
          .royal-swiper .swiper-button-next,
          .royal-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          .royal-swiper .swiper-button-next::after,
          .royal-swiper .swiper-button-prev::after {
            font-size: 16px;
          }
        }
        @media (min-width: 1024px) {
          .royal-swiper .swiper-button-next,
          .royal-swiper .swiper-button-prev {
            width: 46px;
            height: 46px;
          }
          .royal-swiper .swiper-button-next::after,
          .royal-swiper .swiper-button-prev::after {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default GalleryPage;