import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        const newHeart: Heart = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 3 + 5,
        };

        setHearts(prev => [...prev, newHeart]);

        // Remove heart after animation
        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, (newHeart.duration + 1) * 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.i
            key={heart.id}
            className="fas fa-heart absolute text-pink-400/60"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              bottom: 0,
            }}
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={{
              y: -window.innerHeight - 100,
              rotate: 360,
              opacity: 0,
            }}
            transition={{
              duration: heart.duration,
              ease: "linear",
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
