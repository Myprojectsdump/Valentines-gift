import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Heart, Lock, Unlock, Music, Zap, WifiOff, Sun, CloudRain, Flower, 
  ArrowRight, ArrowLeft, Video, Gamepad2, Pizza, Monitor, Star, Play, Pause, 
  Hand, Mic, User, Gift, Ticket, Calendar, MapPin, Delete
} from 'lucide-react';

// --- CONFIGURATION ---
const CONFIG = {
  correctPin: "1211", 
  couplePhoto: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop", 
  
  // Music Config (Different song for EVERY page!)
  music: {
    rose: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
    propose: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
    chocolate: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
    teddy: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
    promise: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", 
    hug: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", 
    kiss: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", 
    finale: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
  },

  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Main apology VN
  kissAudioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // kiss VN
  chompAudioUrl: "https://www.soundjay.com/human/sounds/apple-crunch-1.mp3", // Added chomp sound
  reasons: [
    "Your laugh is my favorite sound",
    "You're smarter than me (and I love it)",
    "The way you look at me",
    "Your marah-marah is actually kinda cute",
    "You make me want to be better",
    "I miss you every second we aren't talking",
    "You are my home",
    "Best cuddler award goes to you",
  ]
};

// --- HELPER COMPONENTS ---

// Animated Kneeling Proposal
const KneelingAnimation = () => (
  <div className="relative h-48 w-48 flex items-end justify-center">
    <motion.div 
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: 20, rotate: -10 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center z-10"
    >
      <div className="w-12 h-12 bg-blue-500 rounded-full mb-1 relative">
        <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full" />
      </div>
      <div className="w-16 h-20 bg-blue-600 rounded-2xl" />
      <div className="flex gap-1">
        <div className="w-4 h-16 bg-blue-800 rounded-full -rotate-12 origin-top" />
        <div className="w-4 h-16 bg-blue-800 rounded-full rotate-90 origin-top translate-y-4" />
      </div>
    </motion.div>
    <motion.div
      initial={{ scale: 0, opacity: 0, x: -20, y: -20 }}
      animate={{ scale: 1, opacity: 1, x: 0, y: -40 }}
      transition={{ delay: 0.6, type: "spring" }}
      className="absolute right-6 bottom-16 z-20"
    >
      <Flower size={48} className="text-red-500 fill-red-500" />
    </motion.div>
  </div>
);

// --- MAIN COMPONENTS ---

const ConnectionScreen = ({ onComplete }) => {
  const constraintsRef = useRef(null);
  const controls = useAnimation();
  
  const handleDragEnd = (_, info) => {
    if (info.offset.y < -150) {
      if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
      onComplete();
    } else {
      controls.start({ y: 0 });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="h-full w-full bg-slate-900 text-white flex flex-col items-center justify-between p-8 relative overflow-hidden"
    >
      <div className="mt-12 text-center z-10 space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 backdrop-blur-md rounded-full border border-slate-700 mb-4 animate-pulse">
          <WifiOff size={40} className="text-red-400" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-200 to-red-400 bg-clip-text text-transparent">
          Connection Interrupted
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xs mx-auto">
          "Untuk pacarku yang lagi <span className="text-red-400 font-semibold italic">marah marah</span>... 
          maafin cowokmu yang sibuk ini ya?"
        </p>
      </div>

      <div className="w-full h-[400px] relative flex flex-col items-center justify-end pb-10" ref={constraintsRef}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
           <div className="w-24 h-24 bg-slate-800 rounded-2xl border-2 border-slate-700 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center">
             <Zap size={40} className="text-slate-600" />
           </div>
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-slate-700 to-transparent opacity-20" />
        </div>

        <motion.div
          drag="y"
          dragConstraints={{ top: -220, bottom: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="relative z-20 cursor-grab active:cursor-grabbing touch-none"
        >
          <div className="flex flex-col items-center gap-4">
             <div className="w-20 h-32 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-xl shadow-[0_0_50px_rgba(79,70,229,0.5)] flex flex-col items-center justify-start pt-4 border border-indigo-400/30">
                <div className="w-4 h-12 bg-indigo-300 rounded-full mb-2 shadow-inner" />
                <div className="w-4 h-12 bg-indigo-300 rounded-full shadow-inner" />
             </div>
             <div className="w-1 h-screen bg-indigo-500/50 absolute top-30 left-1/2 -translate-x-1/2 -z-10" />
             <div className="bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700 text-sm font-medium animate-bounce mt-4">
               Geser ke atas untuk baikan 🔌
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ScratchScreen = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.fillStyle = '#cbd5e1'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';
    ctx.fillText('Gosok di sini ✨', canvas.width / 2, canvas.height / 2);
    
    let isDrawing = false;
    
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { 
        x: clientX - rect.left, 
        y: clientY - rect.top 
      };
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      e.preventDefault(); 
      const { x, y } = getPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, 2 * Math.PI);
      ctx.fill();
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparent = 0;
      for (let i = 3; i < pixels.length; i += 4) if (pixels[i] === 0) transparent++;
      if ((transparent / (pixels.length / 4)) * 100 > 40) setIsScratched(true);
    };

    const startDraw = () => isDrawing = true;
    const endDraw = () => isDrawing = false;

    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchend', endDraw);
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('mousedown', startDraw);
    window.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', scratch);

    return () => {
      window.removeEventListener('mouseup', endDraw);
      canvas.removeEventListener('touchend', endDraw);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchstart', startDraw);
      canvas.removeEventListener('mousedown', startDraw);
      canvas.removeEventListener('mousemove', scratch);
    };
  }, []); 

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-rose-50 flex flex-col items-center justify-center p-6 relative">
      <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-white border-8 border-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-rose-100 p-6 text-center">
            <img src={CONFIG.couplePhoto} alt="Us" className="w-full h-2/3 object-cover rounded-xl mb-4 shadow-md" />
            <p className="font-handwriting text-lg text-rose-800 leading-tight">"Selamat Hari Valentine, Sayang."</p>
        </div>
        <div ref={containerRef} className={`absolute inset-0 transition-opacity duration-1000 touch-none ${isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
           <canvas ref={canvasRef} className="touch-none w-full h-full" />
        </div>
      </div>
      <AnimatePresence>
        {isScratched && (
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={onComplete} className="mt-8 px-8 py-4 bg-rose-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2">
                Buka Kunci Hati <Lock size={18} />
            </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VaultScreen = ({ onComplete }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const handleNum = (num) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        if (newPin === CONFIG.correctPin) { if(navigator.vibrate) navigator.vibrate(200); onComplete(); }
        else { setError(true); setTimeout(() => { setPin(""); setError(false); }, 400); }
      }
    }
  };
  const handleDelete = () => {
      setPin(prev => prev.slice(0, -1));
      if(navigator.vibrate) navigator.vibrate(50);
  };

  return (
    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} className="h-full w-full bg-slate-900 text-white flex flex-col items-center pt-20 px-6">
      <div className="mb-8 text-center"><Lock className="mx-auto mb-4" /><h2 className="text-xl">Masukan Kode Rahasia</h2></div>
      <div className="flex gap-4 mb-12">{[...Array(4)].map((_, i) => <div key={i} className={`w-4 h-4 rounded-full ${i < pin.length ? 'bg-white' : 'bg-slate-700'} ${error ? 'bg-red-500' : ''}`} />)}</div>
      <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNum(num.toString())} className="w-20 h-20 rounded-full bg-slate-800/50 text-2xl hover:bg-slate-700 transition-colors">{num}</button>
          ))}
          <div className="w-20 h-20"></div> {/* Empty space */}
          <button onClick={() => handleNum("0")} className="w-20 h-20 rounded-full bg-slate-800/50 text-2xl hover:bg-slate-700 transition-colors">0</button>
          <button onClick={handleDelete} className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-slate-700 transition-colors">
              <Delete size={24} />
          </button>
      </div>
    </motion.div>
  );
};

const ApologyFinaleScreen = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [hearts, setHearts] = useState([]);
  const [popup, setPopup] = useState(null); // For popup message

  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 80 + 10;
      setHearts(prev => [...prev, { id, left, text: CONFIG.reasons[Math.floor(Math.random() * CONFIG.reasons.length)] }]);
      setTimeout(() => setHearts(prev => prev.filter(h => h.id !== id)), 8000);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const popHeart = (id, text) => {
    setHearts(prev => prev.filter(h => h.id !== id));
    if (navigator.vibrate) navigator.vibrate(50);
    setPopup(text); // Show popup
    setTimeout(() => setPopup(null), 2500); // Hide after 2.5s
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-gradient-to-b from-rose-400 to-pink-600 text-white flex flex-col items-center p-6 relative overflow-hidden">
      <audio ref={audioRef} src={CONFIG.audioUrl} loop />
      <div className="z-20 w-full max-w-md flex flex-col items-center gap-6 mt-10">
        <h1 className="text-3xl font-bold text-center drop-shadow-md">Connection Restored 💖</h1>
        <div className="w-full bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-xl">
           <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-md"><Music size={24} /></div>
             <div><h3 className="font-bold text-lg">Voice Note untuk Kamu</h3><p className="text-xs opacity-80">Listen to this first...</p></div>
           </div>
           <button onClick={toggleAudio} className="w-full py-4 bg-white text-rose-600 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
             {isPlaying ? "Pause Voice Note" : "Play Apology 🎙️"}
           </button>
        </div>
        
        <motion.button 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 3, type: "spring" }} 
            onClick={onComplete} 
            className="mt-8 w-full py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 text-xl border-4 border-yellow-200"
        >
            Wait! There's MORE! 🤩 <ArrowRight />
        </motion.button>
      </div>

      <AnimatePresence>
        {popup && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: 50 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-rose-600 p-6 rounded-2xl shadow-2xl text-center max-w-xs border-4 border-rose-300"
            >
                <Heart className="mx-auto mb-2 fill-rose-500" />
                <p className="font-bold text-lg">{popup}</p>
            </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none">
        {hearts.map(heart => (
          <motion.div key={heart.id} initial={{ y: "110vh", x: heart.left + "%" }} animate={{ y: "-10vh" }} transition={{ duration: 8 }} className="absolute pointer-events-auto cursor-pointer" onClick={() => popHeart(heart.id, heart.text)}>
            <Heart size={40} className="text-white fill-white/50" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SunshineScreen = ({ onComplete }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-yellow-50 text-yellow-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1 }} className="mb-8">
        <Sun size={120} className="text-yellow-500 fill-yellow-300 drop-shadow-2xl" />
      </motion.div>
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-center mb-4">You are my Sunshine</motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="text-center text-yellow-700 text-lg mb-12 max-w-xs">Even when days are cloudy (or busy), you make my world bright. 💛</motion.p>
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} onClick={onComplete} className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"><ArrowRight size={32} className="text-white" /></motion.button>
    </motion.div>
  );
};

const InstructionScreen = ({ onComplete }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-slate-900 text-white flex flex-col items-center justify-center p-8 text-center">
      <Star size={80} className="text-yellow-400 mb-6 mx-auto animate-pulse" />
      <h2 className="text-3xl font-bold mb-6">Just one thing...</h2>
      <p className="text-xl text-slate-300 leading-relaxed mb-8">
        "Tho I wanted to do all these with you, the busy schedule didn't let it... 
        <br/><br/><span className="text-white font-bold">So let's do it together now! 💖</span>"
      </p>
      <motion.button whileTap={{ scale: 0.95 }} onClick={onComplete} className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">Let's Rewind Time ⏳ <ArrowRight /></motion.button>
    </motion.div>
  );
};

const ValentinesWeekScreen = ({ dayIndex, onNextDay, onComplete }) => {
  const [interacted, setInteracted] = useState(false);
  const [teddyColor, setTeddyColor] = useState("brown"); 
  const [eatenCount, setEatenCount] = useState(0); 
  const [promiseOpen, setPromiseOpen] = useState(false);
  const [hugState, setHugState] = useState("idle"); 
  const [kissCount, setKissCount] = useState(0);
  const [boatloadTeddies, setBoatloadTeddies] = useState([]);

  // Animation states
  const [roses, setRoses] = useState([]);
  const [kisses, setKisses] = useState([]); // Falling kisses

  const days = [
    { title: "Rose Day 🌹", date: "Feb 7", color: "bg-red-50 text-red-900", accent: "bg-red-500", track: "rose" },
    { title: "Propose Day 💍", date: "Feb 8", color: "bg-blue-50 text-blue-900", accent: "bg-blue-500", track: "propose" },
    { title: "Chocolate Day 🍫", date: "Feb 9", color: "bg-amber-50 text-amber-900", accent: "bg-amber-600", track: "chocolate" },
    { title: "Teddy Day 🧸", date: "Feb 10", color: "bg-pink-50 text-pink-900", accent: "bg-pink-500", track: "teddy" },
    { title: "Promise Day 🤝", date: "Feb 11", color: "bg-purple-50 text-purple-900", accent: "bg-purple-600", track: "promise" },
    { title: "Hug Day 🤗", date: "Feb 12", color: "bg-orange-50 text-orange-900", accent: "bg-orange-500", track: "hug" },
    { title: "Kiss Day 💋", date: "Feb 13", color: "bg-rose-50 text-rose-900", accent: "bg-rose-500", track: "kiss" }
  ];

  const currentDay = days[dayIndex];
  const bgMusicRef = useRef(null);

  // Play music for the current day
  useEffect(() => {
    const musicUrl = CONFIG.music[currentDay.track];
    bgMusicRef.current = new Audio(musicUrl);
    bgMusicRef.current.loop = true;
    bgMusicRef.current.play().catch(e => console.log("Bg Music blocked (user interaction needed)", e));

    return () => {
       bgMusicRef.current.pause();
    };
  }, []); // Logic relies on component remounting via key in App.jsx

  const nextDay = () => {
    if (dayIndex < days.length - 1) onNextDay();
    else onComplete();
  };

  const handleRoseTap = () => { 
    setInteracted(true); 
    // Trigger Rose Rain
    const newRoses = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3
    }));
    setRoses(newRoses);
  };

  const handlePropose = () => { setInteracted(true); confetti({ colors: ['#3b82f6', '#ffffff'] }); };
  
  const handleEatChocolate = (index) => {
    if(eatenCount < 4) {
        const audio = new Audio(CONFIG.chompAudioUrl);
        audio.play().catch(e => console.log(e));
        setEatenCount(prev => prev + 1);
        if(navigator.vibrate) navigator.vibrate(100);
        if(eatenCount === 3) setInteracted(true);
    }
  };

  const handlePromiseOpen = () => { 
      setPromiseOpen(true); 
      setTimeout(() => setInteracted(true), 1000); 
  };
  
  const handleHug = () => { 
      setHugState("hugging"); 
      setTimeout(() => setInteracted(true), 1500); 
  };
  
  const handleKiss = () => { 
    setKissCount(p => p + 1); 
    setInteracted(true); 
    
    // Trigger Kiss Splash UP
    const newKisses = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1 + Math.random() * 2
    }));
    setKisses(newKisses);

    document.getElementById("kissAudio")?.play().catch(e => console.log("Audio err", e)); 
  };
  
  const handleTeddyHug = () => {
    setInteracted(true);
    const count = 35;
    const teddies = Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        emoji: teddyColor === "brown" ? "🧸" : teddyColor === "panda" ? "🐼" : "🐨"
    }));
    setBoatloadTeddies(teddies);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className={`h-full w-full ${currentDay.color} flex flex-col p-6 relative overflow-hidden`}
    >
      <div className="flex justify-between items-center opacity-50 mb-2 z-10">
        <span className="font-bold">REWINDING...</span>
        <span className="font-bold">{currentDay.date}</span>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-4 z-10">{currentDay.title}</h2>

      {/* Render Falling Teddies */}
      {boatloadTeddies.map(t => (
        <motion.div
            key={t.id}
            initial={{ y: -100, opacity: 1 }}
            animate={{ y: "110vh" }}
            transition={{ duration: t.duration, delay: t.delay, ease: "linear" }}
            className="absolute text-5xl z-50 pointer-events-none"
            style={{ left: `${t.left}%` }}
        >
            {t.emoji}
        </motion.div>
      ))}

      {/* Render Falling Roses */}
      {roses.map(r => (
          <motion.div
            key={r.id}
            initial={{ y: -50, opacity: 1 }}
            animate={{ y: "110vh", rotate: 360 }}
            transition={{ duration: r.duration, delay: r.delay, ease: "linear" }}
            className="absolute text-3xl z-50 pointer-events-none"
            style={{ left: `${r.left}%` }}
          >
              🌹
          </motion.div>
      ))}

      {/* Render SPLASHING UP Kisses */}
      {kisses.map(k => (
          <motion.div
            key={k.id}
            initial={{ y: "100vh", opacity: 0, scale: 0.5 }}
            animate={{ y: "-10vh", opacity: 1, scale: 1.2 }}
            transition={{ duration: k.duration, delay: k.delay, ease: "easeOut" }}
            className="absolute text-4xl z-50 pointer-events-none"
            style={{ left: `${k.left}%` }}
          >
              💋
          </motion.div>
      ))}

      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden w-full">
      {/* --- ROSE DAY --- */}
      {dayIndex === 0 && (
        <div className="flex flex-col items-center">
          <KneelingAnimation />
          <motion.button whileTap={{ scale: 0.9 }} onClick={handleRoseTap} className="mt-8 px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-xl z-20">Accept Rose 🌹</motion.button>
        </div>
      )}

      {/* --- PROPOSE DAY (REVAMPED) --- */}
      {dayIndex === 1 && (
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="relative w-40 h-40">
              {/* Ring Box Animation */}
              <motion.div 
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: -110 }}
                  transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
                  className="absolute top-0 w-full h-1/2 bg-blue-800 rounded-t-xl origin-bottom z-20 border-b-2 border-yellow-500"
                  style={{ transformStyle: "preserve-3d" }}
              />
              <div className="absolute bottom-0 w-full h-1/2 bg-blue-900 rounded-b-xl shadow-2xl flex items-center justify-center pt-2">
                  <motion.div 
                    initial={{ scale: 0, y: 20 }} 
                    animate={{ scale: 1, y: -20 }} 
                    transition={{ delay: 1, type: "spring" }}
                    className="text-6xl drop-shadow-lg"
                  >
                      💍
                  </motion.div>
              </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2 }}
            className="bg-white/80 p-6 rounded-xl text-center shadow-lg"
          >
              <h3 className="text-xl font-bold text-blue-900 mb-2">Will you be mine?</h3>
              <p className="text-sm text-blue-700 mb-4">Forever and always?</p>
              <div className="flex gap-4 justify-center">
                <motion.button whileTap={{ scale: 0.9 }} onClick={handlePropose} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg">YES! 💖</motion.button>
              </div>
          </motion.div>
        </div>
      )}

      {/* --- CHOCOLATE DAY (4 CHOCOLATES) --- */}
      {dayIndex === 2 && (
        <div className="flex flex-col items-center w-full">
           <h3 className="mb-8 font-bold text-amber-900 text-lg">Eat all the chocolates!</h3>
           <div className="grid grid-cols-2 gap-6">
                {[0, 1, 2, 3].map((i) => (
                    <motion.button 
                        key={i}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => handleEatChocolate(i)}
                        disabled={i < eatenCount}
                        className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-amber-700 transition-all ${i < eatenCount ? 'bg-amber-100 opacity-50 scale-90' : 'bg-amber-800'}`}
                    >
                        {i < eatenCount ? "😋" : "🍫"}
                    </motion.button>
                ))}
           </div>
        </div>
      )}

      {/* --- TEDDY DAY (UPDATED TEXT) --- */}
      {dayIndex === 3 && (
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-sm">
          <div className="relative flex items-center justify-center h-40">
             <motion.div key={teddyColor} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-[100px] drop-shadow-2xl">
               {teddyColor === "brown" ? "🧸" : teddyColor === "panda" ? "🐼" : "🐨"}
             </motion.div>
             <div className="absolute bottom-4 w-32 h-4 bg-black/10 rounded-full blur-lg" />
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full">
             <div className="flex justify-center gap-3">
                {["brown", "panda", "koala"].map(t => (
                    <button key={t} onClick={() => setTeddyColor(t)} className={`p-3 text-3xl rounded-xl border-2 transition-all bg-white/50 ${teddyColor === t ? 'border-pink-500 scale-110 shadow-md' : 'border-transparent'}`}>
                        {t === "brown" ? "🧸" : t === "panda" ? "🐼" : "🐨"}
                    </button>
                ))}
             </div>
             
             {!interacted && (
               <motion.button 
                 whileTap={{ scale: 0.95 }}
                 onClick={handleTeddyHug} 
                 className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold shadow-lg mt-2 text-lg"
               >
                 Hug This Teddy 🧸
               </motion.button>
             )}
          </div>
        </div>
      )}

      {/* --- PROMISE DAY (GIFT BOX + HANDS) --- */}
      {dayIndex === 4 && (
        <div className="flex flex-col items-center justify-center w-full">
           {!promiseOpen ? (
               <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePromiseOpen}
                    className="relative"
               >
                   <motion.div 
                        animate={{ rotate: [-2, 2, -2] }} 
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="w-40 h-40 bg-purple-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-purple-300"
                   >
                        <Gift size={60} className="text-white" />
                   </motion.div>
                   <div className="mt-4 text-center font-bold text-purple-800 animate-pulse">Tap to Open Gift 🎁</div>
               </motion.button>
           ) : (
               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                    <div className="relative w-64 h-40 flex items-center justify-center mb-6">
                        <motion.div initial={{ x: -50 }} animate={{ x: -20 }} className="absolute"><Hand size={80} className="text-purple-500 rotate-90 fill-purple-200" /></motion.div>
                        <motion.div initial={{ x: 50 }} animate={{ x: 20 }} className="absolute"><Hand size={80} className="text-purple-500 -rotate-90 fill-purple-200 scale-x-[-1]" /></motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [0, 10, -10, 0] }} transition={{ delay: 0.5 }} className="z-10 bg-white p-3 rounded-full shadow-lg border-2 border-purple-200">
                            <Lock size={30} className="text-purple-600" />
                        </motion.div>
                    </div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-xl max-w-xs text-center border-l-4 border-purple-500">
                        <p className="font-handwriting text-xl text-purple-900">"I promise to always be your safe place, your biggest fan, and your home."</p>
                    </motion.div>
               </motion.div>
           )}
        </div>
      )}

      {/* --- HUG DAY (REVAMPED - COUPLE HUGGING) --- */}
      {dayIndex === 5 && (
        <div className="flex flex-col items-center justify-center flex-1">
           <div className="relative w-64 h-48 flex items-center justify-center">
             {/* Left Person */}
             <motion.div 
                animate={hugState === "hugging" ? { x: 30, rotate: 10 } : { x: -60 }} 
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute z-10 flex flex-col items-center"
             >
                <div className="w-16 h-16 bg-blue-200 rounded-full border-4 border-blue-400 flex items-center justify-center">
                    <div className="flex gap-2"><div className="w-2 h-2 bg-blue-600 rounded-full"/><div className="w-2 h-2 bg-blue-600 rounded-full"/></div>
                </div>
                <div className="w-20 h-24 bg-blue-500 rounded-t-3xl mt-[-5px]" />
             </motion.div>
             
             {/* Right Person */}
             <motion.div 
                animate={hugState === "hugging" ? { x: -30, rotate: -10 } : { x: 60 }} 
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute z-20 flex flex-col items-center"
             >
                 <div className="w-16 h-16 bg-pink-200 rounded-full border-4 border-pink-400 flex items-center justify-center">
                    <div className="flex gap-2"><div className="w-2 h-2 bg-pink-600 rounded-full"/><div className="w-2 h-2 bg-pink-600 rounded-full"/></div>
                 </div>
                 <div className="w-20 h-24 bg-pink-500 rounded-t-3xl mt-[-5px]" />
             </motion.div>
             
             {/* Heart Pop */}
             <AnimatePresence>
                 {hugState === "hugging" && (
                     <motion.div 
                        initial={{ scale: 0, y: 0 }} 
                        animate={{ scale: 1.5, y: -60 }} 
                        className="absolute z-30"
                     >
                         <Heart size={50} className="text-red-500 fill-red-500 drop-shadow-lg" />
                     </motion.div>
                 )}
             </AnimatePresence>
           </div>
           
           <button 
                onClick={handleHug} 
                className="mt-12 px-10 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-full text-lg font-bold shadow-xl active:scale-95 transition-transform flex items-center gap-2"
           >
                Bring them together! 🤗
           </button>
        </div>
      )}

      {/* --- KISS DAY (CONSOLIDATED) --- */}
      {dayIndex === 6 && (
        <div className="flex flex-col items-center w-full justify-center flex-1">
           <audio id="kissAudio" src={CONFIG.kissAudioUrl} />
           <div className="h-40 flex items-center gap-4 mb-8">
             <motion.div animate={{ x: kissCount % 2 === 0 ? 0 : 30 }}><User size={80} className="text-rose-400" /></motion.div>
             <motion.div 
                animate={kissCount > 0 ? { scale: [1, 1.5, 1], opacity: [0, 1, 0] } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
             >
                 <Heart size={50} className="text-red-600 fill-red-600" />
             </motion.div>
             <motion.div animate={{ x: kissCount % 2 === 0 ? 0 : -30 }}><User size={80} className="text-rose-400 scale-x-[-1]" /></motion.div>
           </div>
           
           <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={handleKiss} 
                className="w-full max-w-xs py-5 bg-rose-500 text-white rounded-2xl flex flex-col items-center shadow-xl border-b-4 border-rose-700 active:border-b-0 active:translate-y-1 transition-all"
           >
                <div className="flex items-center gap-2">
                    <span className="text-4xl">💋</span>
                    <span className="text-xl font-bold">Receive Kiss</span>
                </div>
                <span className="text-xs opacity-80 mt-1">(Plays Voice Note & Rains Kisses)</span>
           </motion.button>
        </div>
      )}
      </div>

      {/* NEXT BUTTON (Unified position) */}
      <div className="mt-auto pt-4 z-[60] h-[64px] flex items-center justify-center">
        <AnimatePresence>
          {interacted && (
            <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={nextDay} className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg ${currentDay.accent} flex items-center justify-center gap-2`}>
              Next <ArrowRight />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const GardenScreen = ({ onComplete }) => {
  const [growth, setGrowth] = useState(0);
  const intervalRef = useRef(null);
  const startGrowing = () => {
    intervalRef.current = setInterval(() => {
      setGrowth(prev => { if (prev >= 100) { clearInterval(intervalRef.current); return 100; } return prev + 1; });
    }, 20);
  };
  const stopGrowing = () => clearInterval(intervalRef.current);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-sky-100 flex flex-col items-center justify-between pb-10 relative overflow-hidden">
      <div className="absolute top-10 right-10 animate-pulse"><Sun size={60} className="text-yellow-400 fill-yellow-200" /></div>
      <div className="mt-20 text-center px-6 z-10"><h2 className="text-2xl font-bold text-sky-800">Tumbuhkan Cintaku 🌱</h2><p className="text-sky-600 text-sm">Hold the water button!</p></div>
      <div className="relative flex-1 w-full flex items-end justify-center pb-8">
        {/* Stem */}
        <motion.div style={{ height: `${growth * 2.5}px` }} className="w-4 bg-green-600 absolute bottom-0 rounded-t-full origin-bottom" />
        
        {/* Leaves - Added as requested */}
        <motion.div style={{ bottom: `${growth * 1.0}px`, scale: growth / 100 }} className="absolute left-[52%] w-8 h-4 bg-green-500 rounded-tr-full rounded-bl-full origin-bottom-left" />
        <motion.div style={{ bottom: `${growth * 1.5}px`, scale: growth / 100 }} className="absolute right-[52%] w-8 h-4 bg-green-500 rounded-tl-full rounded-br-full origin-bottom-right" />

        {/* Flower Head */}
        <motion.div style={{ bottom: `${growth * 2.5}px`, scale: growth / 100 }} className="absolute mb-[-15px] z-10">
            <div className="relative">
                <Flower size={100} className="text-yellow-500 fill-yellow-400 animate-[spin_10s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-700 rounded-full grid grid-cols-6 gap-1 p-2 overflow-hidden">
                    {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-amber-900 rounded-full" />)}
                </div>
            </div>
        </motion.div>
      </div>
      <div className="z-20 flex flex-col items-center h-20">
        {growth < 100 ? (
          <button onMouseDown={startGrowing} onMouseUp={stopGrowing} onMouseLeave={stopGrowing} onTouchStart={startGrowing} onTouchEnd={stopGrowing} className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-transform"><CloudRain size={32} className="text-white" /></button>
        ) : (
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} onClick={onComplete} className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-lg">One Last Thing... 🌻</motion.button>
        )}
      </div>
    </motion.div>
  );
};

const DateScreen = ({ onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [showTicket, setShowTicket] = useState(false);
  
  const dates = [{ id: 1, icon: <Video />, title: "Sleep Call 💤", desc: "Until we fall asleep" }, { id: 2, icon: <Monitor />, title: "Movie Date 🎬", desc: "Netflix & Chill (literally)" }, { id: 3, icon: <Pizza />, title: "Virtual Dinner 🍕", desc: "Ordering same food!" }, { id: 4, icon: <Gamepad2 />, title: "Gaming Night 🎮", desc: "Roblox/Valo/ML time" }];
  
  const handleGenerate = () => {
      setShowTicket(true);
  };

  if (showTicket) {
      return (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-2xl font-bold mb-6 animate-pulse">Ticket Generated! 🎟️</h2>
            <div className="bg-white w-full max-w-sm rounded-xl overflow-hidden shadow-2xl relative">
                <div className="bg-rose-500 p-4 text-white text-center border-b-2 border-dashed border-rose-700">
                    <h1 className="text-2xl font-black tracking-widest uppercase">Love Ticket</h1>
                    <p className="text-xs opacity-80">OFFICIAL ADMISSION</p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-slate-800">
                    <div className="flex items-center gap-3">
                        <Calendar className="text-rose-500" />
                        <div><p className="text-xs text-slate-500">DATE</p><p className="font-bold">Tonight / Whenever</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="text-rose-500" />
                        <div><p className="text-xs text-slate-500">LOCATION</p><p className="font-bold">Discord / Video Call</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Ticket className="text-rose-500" />
                        <div><p className="text-xs text-slate-500">EVENT</p><p className="font-bold text-xl">{dates.find(d => d.id === selected)?.title}</p></div>
                    </div>
                </div>
                <div className="bg-slate-100 p-4 border-t-2 border-dashed border-slate-300 flex justify-between items-center">
                    <div className="text-xs text-slate-400 font-mono">ID: LOV-2025-UBB</div>
                    <div className="text-2xl">❤️</div>
                </div>
                {/* Cutout circles */}
                <div className="absolute top-[88px] -left-3 w-6 h-6 bg-slate-900 rounded-full" />
                <div className="absolute top-[88px] -right-3 w-6 h-6 bg-slate-900 rounded-full" />
            </div>
            <button onClick={onComplete} className="mt-8 px-8 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg flex items-center gap-2">Proceed to Finale <ArrowRight size={16} /></button>
        </motion.div>
      );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-yellow-50 p-6 flex flex-col">
      <div className="text-center mb-6 mt-4"><h2 className="text-2xl font-bold text-yellow-800">Virtual Date? 💛</h2></div>
      <div className="flex-1 grid grid-cols-1 gap-3 overflow-y-auto pb-24">
        {dates.map((date) => (
          <button key={date.id} onClick={() => setSelected(date.id)} className={`p-4 rounded-xl flex items-center gap-4 transition-all border ${selected === date.id ? 'bg-yellow-500 text-white border-yellow-600 scale-105 shadow-md' : 'bg-white text-yellow-900 border-yellow-100 shadow-sm'}`}>
            <div className="text-2xl">{date.icon}</div>
            <div className="text-left">
                <span className="font-bold block">{date.title}</span>
                <span className="text-xs opacity-80">{date.desc}</span>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
          {selected && (
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 left-0 w-full p-6 bg-yellow-50/90 backdrop-blur-sm">
                <button onClick={handleGenerate} className="w-full py-4 bg-yellow-600 text-white font-bold rounded-xl shadow-xl">Let's do this! 📸</button>
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>
  );
};

const GrandFinale = () => {
  // Finale Music
  useEffect(() => {
    const audio = new Audio(CONFIG.music.finale);
    audio.loop = true;
    audio.play().catch(e => console.log("Finale music blocked", e));
    return () => audio.pause();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full bg-gradient-to-br from-pink-400 via-rose-400 to-yellow-400 text-white flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 2 }} className="relative z-10 mb-8">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300">
              <Heart size={80} className="text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-dashed border-white/50" />
      </motion.div>

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="z-10 space-y-6 max-w-sm">
        <h1 className="text-4xl font-black drop-shadow-md">HAPPY VALENTINE'S DAY!</h1>
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl">
            <p className="text-lg font-medium mb-4">"No distance can keep us apart."</p>
            <div className="w-full h-1 bg-white/30 rounded-full mb-4" />
            <p className="font-handwriting text-2xl text-yellow-100">You are my everything &lt;3</p>
        </div>
        <p className="text-sm opacity-80">See you on our date! 😉</p>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute text-2xl"
            initial={{ y: "110vh", x: Math.random() * 100 + "%" }}
            animate={{ y: "-10vh", rotate: 360 }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          >
              {['❤️', '💖', '✨', '🌹'][Math.floor(Math.random() * 4)]}
          </motion.div>
      ))}
    </motion.div>
  );
};

export default function App() {
  const [stage, setStage] = useState(0);
  const [valentineDay, setValentineDay] = useState(0);

  const handleBack = () => {
    if (stage === 0) return;
    if (stage === 6 && valentineDay > 0) {
      setValentineDay(prev => prev - 1);
    } else {
      setStage(prev => prev - 1);
    }
  };

  return (
    <div className="w-full h-[100dvh] bg-black overflow-hidden font-sans select-none relative">
      {/* Back Button */}
      {stage > 0 && (
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 z-50 p-2 bg-white/20 backdrop-blur-md rounded-full text-white/80 hover:bg-white/40 transition-all border border-white/10"
        >
          <ArrowLeft size={24} />
        </button>
      )}

      <AnimatePresence mode="wait">
        {stage === 0 && <ConnectionScreen key="0" onComplete={() => setStage(1)} />}
        {stage === 1 && <ScratchScreen key="1" onComplete={() => setStage(2)} />}
        {stage === 2 && <VaultScreen key="2" onComplete={() => setStage(3)} />}
        {stage === 3 && <ApologyFinaleScreen key="3" onComplete={() => setStage(4)} />}
        {stage === 4 && <SunshineScreen key="4" onComplete={() => setStage(5)} />}
        {stage === 5 && <InstructionScreen key="5" onComplete={() => setStage(6)} />}
        {stage === 6 && (
          <ValentinesWeekScreen 
             key={`valentines-week-${valentineDay}`} 
             dayIndex={valentineDay} 
             onNextDay={() => setValentineDay(p => p + 1)}
             onComplete={() => setStage(7)} 
          />
        )}
        {stage === 7 && <GardenScreen key="7" onComplete={() => setStage(8)} />}
        {stage === 8 && <DateScreen key="8" onComplete={() => setStage(9)} />}
        {stage === 9 && <GrandFinale key="9" />}
      </AnimatePresence>
    </div>
  );
}