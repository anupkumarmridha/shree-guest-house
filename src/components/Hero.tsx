// Hero.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "/double_bed_1.jpeg",
  "/double_bed_2.jpeg",
  "/single_room_1.jpeg",
  "/single_room_2.jpeg",
  "/inside_hotel.jpeg",
  "/inside_hotel_2.jpeg",
  "/main_entrance.jpeg",
  "/reception.jpeg",
];

const slideHeadings = [
  "Elegant Double Room",
  "Tranquil & Stylish Space",
  "AC Single Room Comfort",
  "Cool & Compact Retreat",
  "Clean Interior Hallways",
  "Brilliant Ambience",
  "Welcome to Shree Guest House",
  "Hospitality Starts Here",
];

const slideDescriptions = [
  "Queen-sized bed and cozy ambiance for your restful escape.",
  "Where peace meets modern convenience.",
  "Perfect for solo travelers seeking comfort and privacy.",
  "A neat setup for quick, quiet stays.",
  "Bright, clean hallways ensure a fresh welcome.",
  "Every detail speaks of cleanliness and care.",
  "Step into comfort, right at our doors.",
  "Warm smiles and smooth check-ins await you.",
];

const roomDescriptions = [
  "Spacious Double Room with queen-sized bed, cozy lighting, and modern amenities.",
  "Elegant Double Room offering peaceful comfort for a relaxing stay.",
  "Single Room (AC) with cool ambiance, ideal for solo travelers or business guests.",
  "Comfortable Single Room (AC) with essential facilities and a peaceful vibe.",
  "A glimpse of our clean and spacious interior corridor for effortless movement.",
  "Well-lit interiors that showcase our attention to hygiene and aesthetics.",
  "Grand main entrance designed to welcome guests with warmth and hospitality.",
  "Reception area crafted for a seamless and professional check-in experience.",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (src: string) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden shadow-lg">
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">
              {slideHeadings[current]}
            </h1>
            <p className="text-lg sm:text-xl max-w-xl mx-auto drop-shadow">
              {slideDescriptions[current]}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          📸 Gallery Highlights
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Experience elegance and hospitality through our rooms and interiors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => openModal(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-sm text-gray-700 font-medium">
                {roomDescriptions[index]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative max-w-4xl w-full rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
              aria-label="Close Modal"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={modalImage}
              alt="Zoom View"
              className="w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
