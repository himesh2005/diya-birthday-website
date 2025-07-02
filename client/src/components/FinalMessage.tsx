import { motion } from "framer-motion";

interface FinalMessageProps {
  onRestart: () => void;
}

export default function FinalMessage({ onRestart }: FinalMessageProps) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center relative z-10">
          {/* Surrounding hearts */}
          <motion.i
            className="fas fa-heart absolute -top-16 -left-16 text-5xl text-pink-300"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.i
            className="fas fa-heart absolute -top-12 -right-12 text-4xl text-rose-custom"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.i
            className="fas fa-heart absolute -bottom-12 -left-10 text-6xl text-coral-custom"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          />
          <motion.i
            className="fas fa-heart absolute -bottom-16 -right-16 text-5xl text-pink-300"
            animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          />

          <motion.h2
            className="font-dancing text-5xl lg:text-7xl gradient-text mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            You Are My Everything 💖
          </motion.h2>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-pink-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl lg:text-2xl font-playfair text-gray-800 leading-relaxed mb-8">
              As I create this little corner of the internet just for you, I want you to know that{" "}
              <span className="gradient-text font-semibold">you are my greatest support</span>, my
              inspiration, and my joy.
            </p>

            <p className="text-lg lg:text-xl font-inter text-gray-700 leading-relaxed mb-8">
              Every photo here tells a story of your beauty, inside and out. Your smile, your
              grace, your kind heart - they all make my world brighter. I am always waiting for
              you, always here for you, and always grateful for your presence in my life.
            </p>

            <motion.div
              className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl font-dancing gradient-text mb-4">
                "Distance means nothing when someone means everything"
              </p>
              <p className="text-lg font-inter text-gray-700">
                Happy Birthday to the most amazing person I know! 🎂✨
              </p>
            </motion.div>

            <div className="flex justify-center space-x-4 mb-6">
              {[0, 0.2, 0.4, 0.6, 0.8].map((delay, index) => (
                <motion.i
                  key={index}
                  className={`fas fa-heart text-3xl ${
                    index % 3 === 0
                      ? "text-pink-custom"
                      : index % 3 === 1
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

            <p className="text-lg font-dancing text-gray-600">
              With all my love and best wishes for your special day! 💕🎉
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={onRestart}
              className="bg-gradient-to-r from-pink-custom to-rose-custom text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↻ Relive This Beautiful Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
