import { motion } from "framer-motion";

interface NavigationDotsProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slideIndex: number) => void;
}

export default function NavigationDots({ currentSlide, totalSlides, onSlideChange }: NavigationDotsProps) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onSlideChange(index)}
          className="w-4 h-4 rounded-full bg-pink-custom transition-all duration-300 hover:scale-110"
          animate={{
            opacity: index === currentSlide ? 1 : 0.5,
            scale: index === currentSlide ? 1.2 : 1,
          }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
}
