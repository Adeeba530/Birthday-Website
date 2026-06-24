import { useState, useRef } from "react";

import WelcomePage from "./Components/WelcomePage";
import GalleryPage from "./Components/GalleryPage";
import CelebrationPage from "./Components/CelebrationPage";
import WishPage from "./Components/WishPage";
import LightUpPage from "./Components/LightUpPage";
import FinalPage from "./Components/FinalPage";

function App() {
  const [page, setPage] = useState(1);

  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;

      audioRef.current.play().catch((err) => {
        console.log("Audio blocked:", err);
      });
    }
  };

  return (
    <>
      {/* AUDIO FILE */}
  <audio ref={audioRef} src="/music/birthday.mp3" preload="auto" />

      {page === 1 && <WelcomePage setPage={setPage} playMusic={playMusic} />}
    {page === 2 && <GalleryPage setPage={setPage} playMusic={playMusic} />}
      {page === 3 && <CelebrationPage setPage={setPage} />}
      {page === 4 && <WishPage setPage={setPage} />}
      {page === 5 && <LightUpPage setPage={setPage} />}
      {page === 6 && <FinalPage setPage={setPage} />}
    </>
  );
}

export default App;