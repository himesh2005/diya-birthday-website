import { motion } from "framer-motion";

interface PhotoGalleryProps {
  onNext: () => void;
}

const photos = [
  {
    src: "/images/IMG_20240707_221128_1751446211743.jpg",
    caption: "Your radiant smile lights up my world 💕",
  },
  {
    src: "/images/new 1_1751446211744.jpg",
    caption: "Elegance personified ✨",
  },
  {
    src: "/images/new 3_1751446211744.jpg",
    caption: "Grace and beauty combined 🌹",
  },
  {
    src: "/images/new 33_1751446211745.jpg",
    caption: "Natural beauty in every moment 💫",
  },
  {
    src: "/images/Screenshot_2022-12-20-20-43-53-20_1751446211745.jpg",
    caption: "Sparkling like the stars ⭐",
  },
  {
    src: "/images/Screenshot_2023-06-28-00-03-07-20_99c04817c0de5652397fc8b56c3b3817_1751446211745.jpg",
    caption: "Cultural elegance at its finest 🌺",
  },
  {
    src: "/images/Screenshot_2023-06-28-00-03-55-72_99c04817c0de5652397fc8b56c3b3817_1751446211746.jpg",
    caption: "Stunning in every way 💖",
  },
];

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  return (
    <div className="min-h-screen flex flex-col py-8 overflow-y-auto">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex-1">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-dancing text-5xl lg:text-7xl gradient-text mb-4">
            Diya's Beautiful Memories for Me ✨
          </h2>
          <p className="text-xl lg:text-2xl font-playfair text-gray-700">
            Every photo tells a story of Diya's amazing spirit
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <motion.i
                className={`fas fa-heart absolute text-3xl z-10 ${
                  index % 4 === 0
                    ? "text-pink-custom -top-4 -left-4"
                    : index % 4 === 1
                    ? "text-rose-custom -top-2 -right-2"
                    : index % 4 === 2
                    ? "text-coral-custom -bottom-2 -left-2"
                    : "text-pink-custom -top-3 -right-1"
                }`}
                animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-3 hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={`Beautiful moment ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-dancing text-gray-600">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-custom to-rose-custom text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read My Heart's Message 💌
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
