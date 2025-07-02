import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeSlide from "@/components/WelcomeSlide";
import PhotoGallery from "@/components/PhotoGallery";
import FinalMessage from "@/components/FinalMessage";
import FloatingHearts from "@/components/FloatingHearts";
import NavigationDots from "@/components/NavigationDots";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides - 1) {
          // Swipe left - next slide
          goToSlide(currentSlide + 1);
        } else if (diff < 0 && currentSlide > 0) {
          // Swipe right - previous slide
          goToSlide(currentSlide - 1);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const slideTransition = {
    type: "tween",
    ease: [0.25, 0.8, 0.25, 1],
    duration: 0.8,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
      <FloatingHearts />
      
      <NavigationDots 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        onSlideChange={goToSlide} 
      />

      <div className="relative w-full h-screen">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0"
          >
            {currentSlide === 0 && <WelcomeSlide onNext={() => goToSlide(1)} />}
            {currentSlide === 1 && <PhotoGallery onNext={() => goToSlide(2)} />}
            {currentSlide === 2 && <FinalMessage onRestart={() => goToSlide(0)} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
