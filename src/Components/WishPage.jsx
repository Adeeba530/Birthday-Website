import { motion } from "framer-motion";

const memories = [
  { emoji: "🎂", text: "Har saal cake se zyada tumhari smile important hoti hai" },
  { emoji: "⚡", text: "Tum aao to ghar mein hasi ka tofan aa jata hai" },
  { emoji: "💫", text: "Tumhari bak bak = humari daily entertainment" },
  { emoji: "🤝", text: "Bhai + Bhai = ek dosre ki sabse badi strength" },
];

const wishes = [
  "Tumhara har din shine kare ✨",
  "Stress tumse door rahe 😌",
  "Success tumhare qadam choome 🚀",
  "Tumhari life full action movie jaisi ho 🎬",
  "Har goal easily hit ho 🎯",
];

export default function WishPage({ setPage }) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#060d1c] px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12">
      <div className="absolute w-[180px] sm:w-[260px] md:w-[360px] lg:w-[500px] h-[180px] sm:h-[260px] md:h-[360px] lg:h-[500px] bg-blue-500/20 blur-[90px] rounded-full top-[-60px] left-[-60px]" />
      <div className="absolute w-[180px] sm:w-[240px] md:w-[340px] lg:w-[450px] h-[180px] sm:h-[240px] md:h-[340px] lg:h-[450px] bg-sky-400/20 blur-[90px] rounded-full bottom-[-80px] right-[-60px]" />

      {["🎈", "😂", "🎉", "✨", "🔥", "🕹️"].map((em, i) => {
        const lefts = [5, 80, 10, 85, 45, 70];
        const tops = [15, 35, 75, 65, 5, 80];
        return (
          <motion.div
            key={i}
            className="absolute text-lg sm:text-xl md:text-2xl lg:text-4xl"
            style={{
              left: `${lefts[i]}%`,
              top: `${tops[i]}%`,
            }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity }}
          >
            {em}
          </motion.div>
        );
      })}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-sky-200 text-xs sm:text-sm md:text-base"
            style={{
              left: `${(i * 9) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-[96%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10 rounded-[22px] sm:rounded-[25px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl text-center space-y-4 sm:space-y-5 md:space-y-6"
      >
        <div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            🎉 Birthday Special <br />
            <span className="text-sky-400">Haseeb</span>
          </h1>

          <p className="mt-2 text-white/70 text-xs sm:text-sm md:text-base">
            Aaj ka din full masti + dua + pyar mode 💙🎉
          </p>
        </div>

        <div className="h-px bg-white/15" />

        <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-white/80">
          <p>🧑 Abdullah: "Bhai cake idhar rakh warna scene banega 😤"</p>
          <p>🎂 Haseeb: "Relax bhai, sab handle hai 😎"</p>
          <p>👑 Haseeb: "Aaj ka din mera hai, sab mujhe follow karo 💪"</p>
          <p className="text-sky-300">😂 System: chaos level 99%</p>
        </div>

        <div className="h-px bg-white/15" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { name: "Funny", role: "Vibe 😂", emoji: "😂" },
            { name: "Haseeb", role: "Legend 👑", emoji: "👑" },
            { name: "Caring", role: "Bhai 🤝", emoji: "🤝" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-white/10 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl">{s.emoji}</div>
              <p className="text-white font-bold text-xs sm:text-sm mt-1">
                {s.name}
              </p>
              <p className="text-white/60 text-[10px] sm:text-xs">{s.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 rounded-xl p-3 sm:p-4 text-left"
            >
              <span className="text-lg sm:text-xl">{m.emoji}</span>
              <p className="text-white/80 text-xs sm:text-sm mt-1 leading-6">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        <div className="space-y-2 text-left">
          {wishes.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 bg-sky-500/15 rounded-xl px-3 sm:px-4 py-2"
            >
              <span className="w-2 h-2 bg-sky-400 rounded-full shrink-0" />
              <p className="text-white/90 text-xs sm:text-sm leading-6">
                {w}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-white/15" />

        <p className="text-white/80 italic text-xs sm:text-sm md:text-base">
          "Haseeb = masti + pyar + legend energy 👑💙"
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(5)}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold shadow-lg text-xs sm:text-sm md:text-base mx-auto"
        >
          🎁 Start Surprise 🎁
        </motion.button>
      </motion.div>
    </div>
  );
}