import { motion } from "framer-motion";

interface WelcomeSlideProps {
  onNext: () => void;
}

export default function WelcomeSlide({ onNext }: WelcomeSlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center relative z-10">
          {/* Hearts decoration around the message */}
          <motion.i
            className="fas fa-heart absolute -top-20 -left-20 text-6xl text-pink-300"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.i
            className="fas fa-heart absolute -top-10 -right-16 text-4xl text-rose-custom"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.i
            className="fas fa-heart absolute -bottom-16 -left-12 text-5xl text-coral-custom"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.i
            className="fas fa-heart absolute -bottom-20 -right-20 text-6xl text-pink-300"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Main message content */}
          <motion.h1
            className="font-dancing text-6xl lg:text-8xl gradient-text mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Happy Birthday, Beautiful! 🎉
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              className="text-2xl lg:text-3xl font-playfair text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Every day with you feels like a celebration, but today is extra special because it's{" "}
              <span className="gradient-text font-semibold">your day</span> ✨
            </motion.p>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-pink-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl lg:text-2xl font-inter text-gray-800 leading-relaxed mb-6">
                I want you to know that you are my{" "}
                <span className="gradient-text font-semibold">greatest support</span>, my source of
                happiness, and the reason I smile every day. Your presence in my life makes
                everything brighter and more beautiful.
              </p>

              <p className="text-lg lg:text-xl font-inter text-gray-700 leading-relaxed">
                I am always waiting for you, always thinking of you, and always grateful for the
                joy you bring into my world. You deserve all the love and happiness in the
                universe! 💕
              </p>

              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {[0, 0.3, 0.6].map((delay, index) => (
                    <motion.i
                      key={index}
                      className={`fas fa-heart text-2xl ${
                        index === 0
                          ? "text-pink-custom"
                          : index === 1
                          ? "text-rose-custom"
                          : "text-coral-custom"
                      }`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-custom to-rose-custom text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Your Beautiful Memories for Me 📸
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
