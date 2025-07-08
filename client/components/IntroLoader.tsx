import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [stage, setStage] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // Double-check if intro should run
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("anonymiketech_intro_seen");
    if (hasSeenIntro) {
      // If intro was already seen, immediately complete
      onComplete();
      return;
    }
  }, [onComplete]);

  const hackingSequence = [
    "INITIALIZING SYSTEM...",
    "LOADING SECURITY PROTOCOLS...",
    "ESTABLISHING SECURE CONNECTION...",
    "VERIFYING CREDENTIALS...",
    "OPTIMIZING PERFORMANCE...",
    "CONFIGURING SERVICES...",
    "ANONYMIKETECH SYSTEMS ONLINE",
    "WELCOME TO ANONYMIKETECH WORLD",
  ];

  const matrixChars = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";

  // Generate random matrix characters
  const generateMatrixString = (length: number) => {
    return Array.from(
      { length },
      () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
    ).join("");
  };

  useEffect(() => {
    // Detect if device is mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    // Only play sound on desktop devices
    if (!isMobile) {
      const playTypingSounds = () => {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();

        // Main typing sound
        const playKeyPress = (frequency = 800, duration = 0.08) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.setValueAtTime(
            frequency,
            audioContext.currentTime,
          );
          gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + duration,
          );

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + duration);
        };

        // Typing sound with random variations
        const playRandomKeyPress = () => {
          const frequencies = [700, 750, 800, 850, 900, 950];
          const frequency =
            frequencies[Math.floor(Math.random() * frequencies.length)];
          const duration = 0.06 + Math.random() * 0.04; // 0.06 to 0.1 seconds
          playKeyPress(frequency, duration);
        };

        // Space bar sound (longer, lower frequency)
        const playSpaceBar = () => {
          playKeyPress(400, 0.12);
        };

        // Enter key sound (distinctive)
        const playEnterKey = () => {
          playKeyPress(600, 0.15);
        };

        try {
          // Continuous typing sounds during the intro
          const typingPattern = () => {
            // Fast typing burst
            for (let i = 0; i < 3 + Math.random() * 4; i++) {
              setTimeout(
                () => playRandomKeyPress(),
                i * (60 + Math.random() * 40),
              );
            }

            // Occasional space or enter
            if (Math.random() > 0.7) {
              setTimeout(
                () => {
                  if (Math.random() > 0.5) {
                    playSpaceBar();
                  } else {
                    playEnterKey();
                  }
                },
                300 + Math.random() * 200,
              );
            }
          };

          // Start typing sounds immediately
          typingPattern();

          // Continue typing throughout the loading sequence
          const typingInterval = setInterval(
            () => {
              if (stage < hackingSequence.length) {
                typingPattern();
              } else {
                clearInterval(typingInterval);
              }
            },
            400 + Math.random() * 300,
          );

          // Final enter key at completion
          setTimeout(() => {
            playEnterKey();
            setTimeout(() => playEnterKey(), 200); // Double enter for completion
          }, 2400);
        } catch (error) {
          console.log("Audio playback failed:", error);
        }
      };

      playTypingSounds();
    }
  }, []);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < hackingSequence.length; i++) {
        setStage(i);

        // Type out each character
        const text = hackingSequence[i];
        for (let j = 0; j <= text.length; j++) {
          setLoadingText(text.substring(0, j));
          await new Promise((resolve) => setTimeout(resolve, 30));
        }

        // Wait before next stage
        await new Promise((resolve) => setTimeout(resolve, 250));
      }

      // Wait a bit then start exit animation
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 600); // Wait for exit animation
      }, 500);
    };

    sequence();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Matrix Background */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 50 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: "100vh", opacity: [0, 1, 0] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute text-hacker-green font-tech text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {generateMatrixString(20)}
              </motion.div>
            ))}
          </div>

          {/* Glitch Effect Overlay */}
          <motion.div
            animate={{
              opacity: [0, 0.1, 0],
              scaleX: [1, 1.02, 1],
              skewX: [0, 0.5, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-hacker-green to-transparent mix-blend-screen"
          />

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl px-8">
            {/* Logo/Title */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="mb-12"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-tech font-bold glow-text mb-4"
                animate={{
                  textShadow: [
                    "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00",
                    "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00",
                    "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ANONYMIKETECH
              </motion.h1>

              {/* Rotating Triangle Logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <div
                  className="w-full h-full border-4 border-hacker-green"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    boxShadow: "0 0 20px hsl(var(--hacker-green))",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Loading Terminal */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-black/80 border border-hacker-green rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm"
              style={{
                boxShadow: "0 0 30px hsl(var(--hacker-green-dim))",
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-hacker-green/30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-hacker-green-dim font-tech text-sm">
                  SYSTEM_INIT.exe
                </span>
              </div>

              {/* Loading Text */}
              <div className="font-tech text-hacker-green text-left">
                {hackingSequence.slice(0, stage + 1).map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-1 ${index === stage ? "text-hacker-green-bright" : "text-hacker-green-dim"}`}
                  >
                    {index === stage ? (
                      <>
                        {"> "}
                        {loadingText}
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="ml-1"
                        >
                          █
                        </motion.span>
                      </>
                    ) : (
                      `> ${text} ✓`
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-hacker-terminal rounded-full h-2 border border-hacker-green/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((stage + 1) / hackingSequence.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-hacker-green to-hacker-green-bright rounded-full"
                    style={{
                      boxShadow: "0 0 10px hsl(var(--hacker-green))",
                    }}
                  />
                </div>
                <div className="text-center mt-2 text-hacker-green-dim font-tech text-sm">
                  {Math.round(((stage + 1) / hackingSequence.length) * 100)}%
                  COMPLETE
                </div>
              </div>
            </motion.div>

            {/* Scan Lines Effect */}
            <motion.div
              animate={{ y: ["-100vh", "100vh"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-hacker-green to-transparent opacity-10 h-4"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
