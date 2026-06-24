import { motion } from "framer-motion";

const memories = [
  { emoji: "🎂", text: "Har saal cake se zyada tumhari hasi important hoti hai" },
  { emoji: "🌸", text: "Tum aao to normal din bhi festival ban jata hai" },
  { emoji: "💫", text: "Tumhari bak bak = humari daily entertainment" },
  { emoji: "🎀", text: "Arisha + Adeeba + Areeba = perfect chaos combo" },
];

const wishes = [
  "Tumhara har din shine kare ✨",
  "Stress tumse door rahe 😌",
  "Friends hamesha real rahen 💕",
  "Tumhari life full movie jaisi ho 🎬",
  "Har goal easily hit ho 🎯",
];

export default function WishPage({ setPage }) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#0b0b1a] px-3 sm:px-4 md:px-6 py-8">

      {/* BACKGROUND BLOBS */}
      <div className="absolute w-[180px] sm:w-[300px] md:w-[450px] lg:w-[500px] h-[180px] sm:h-[300px] md:h-[450px] bg-pink-500/20 blur-[90px] rounded-full top-[-60px] left-[-60px]" />
      <div className="absolute w-[180px] sm:w-[280px] md:w-[420px] lg:w-[450px] h-[180px] sm:h-[280px] md:h-[420px] bg-purple-500/20 blur-[90px] rounded-full bottom-[-80px] right-[-60px]" />

      {/* FLOATING EMOJIS */}
      {["💖", "😂", "🎈", "✨", "🌸", "💅"].map((em, i) => (
        <motion.div
          key={i}
          className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{
            left: `${[5, 80, 10, 85, 45, 70][i]}%`,
            top: `${[15, 35, 75, 65, 5, 80][i]}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity }}
        >
          {em}
        </motion.div>
      ))}

      {/* SPARKLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-yellow-200 text-sm sm:text-base md:text-lg"
            style={{
              left: `${(i * 9) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10
          w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl
          p-4 sm:p-6 md:p-8 lg:p-10
          rounded-[22px] sm:rounded-[25px]
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-2xl
          text-center
          space-y-5 sm:space-y-6
        "
      >

        {/* HEADER */}
        <div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            🎉 Birthday Special <br />
            <span className="text-pink-400">Areeba</span>
          </h1>

          <p className="mt-2 text-white/70 text-xs sm:text-sm md:text-base">
            Aaj ka din full chaos + love + masti mode 💖😂
          </p>
        </div>

        <div className="h-px bg-white/15" />

        {/* CHAT BOX */}
        <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-white/80">
          <p>👩 Arisha: “Cake idhar rakh warna scene banega 😤”</p>
          <p>👩 Adeeba: “Main sweet hoon… limited edition 😌💕”</p>
          <p>👑 Areeba: “Main queen hoon, follow karo 💅✨”</p>
          <p className="text-pink-300">😂 System: chaos level 99%</p>
        </div>

        <div className="h-px bg-white/15" />

        {/* TRIO */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { name: "Arisha", role: "Drama 😂", emoji: "😂" },
            { name: "Areeba", role: "Queen 👑", emoji: "👑" },
            { name: "Adeeba", role: "Sweet 💕", emoji: "💕" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl sm:rounded-2xl p-2 sm:p-3 bg-white/10 border border-white/10"
            >
              <div className="text-xl sm:text-2xl md:text-3xl">{s.emoji}</div>
              <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm">
                {s.name}
              </p>
              <p className="text-white/60 text-[9px] sm:text-[10px] md:text-xs">
                {s.role}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        {/* MEMORIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 rounded-xl p-3 text-left"
            >
              <span className="text-lg sm:text-xl">{m.emoji}</span>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        {/* WISHES */}
        <div className="space-y-2 text-left">
          {wishes.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 bg-purple-500/20 rounded-xl px-3 sm:px-4 py-2"
            >
              <span className="w-2 h-2 bg-pink-400 rounded-full" />
              <p className="text-white/90 text-xs sm:text-sm">{w}</p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        {/* FINAL LINE */}
        <p className="text-white/80 italic text-xs sm:text-sm md:text-base">
          “Areeba = chaos + love + queen energy 👑💖”
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(5)}
          className="
            px-6 sm:px-8 py-2 sm:py-3
            rounded-full
            bg-gradient-to-r from-pink-500 to-purple-600
            text-white font-semibold
            shadow-lg
            text-xs sm:text-sm md:text-base
          "
        >
          🎁 Start Surprise 🎁
        </motion.button>

      </motion.div>
    </div>
  );
}