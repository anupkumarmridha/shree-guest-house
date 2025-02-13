import { useState } from "react";
import { Room } from "../types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface RoomModalProps {
  room: Room;
  onClose: () => void;
}

const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Next Image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  // Previous Image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500" onClick={onClose}>
          ✖
        </button>

        {/* Image Slider */}
        <div className="relative w-full h-56">
          <img src={room.images[currentImage]} alt={room.name} className="w-full h-56 object-cover rounded mb-4" />
          
          {/* Prev Button (hide if only 1 image) */}
          {room.images.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
                onClick={prevImage}
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
                onClick={nextImage}
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Room Info */}
        <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
        <p><strong>Type:</strong> {room.isAC ? "AC" : "Non-AC"} | {room.sharingType} Sharing</p>
        <p><strong>Size:</strong> {room.sqFt} SqFt</p>
        <p><strong>Price:</strong> ₹{room.prices.daily} / day | ₹{room.prices.monthly} / month</p>
        <p><strong>Facilities:</strong> {room.facilities.join(", ")}</p>

        {room.isAC && <p className="text-blue-600">❄️ AC Usage: ₹{room.charges.acUsagePerUnit}/unit</p>}

        <h3 className="text-xl font-semibold mt-4">Fixed Monthly Charges:</h3>
        <ul className="list-disc ml-5 text-gray-700">
          {Object.entries(room.charges.fixedMonthlyCharges).map(([item, cost]) => (
            <li key={item}>{item}: ₹{cost}</li>
          ))}
        </ul>

        <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded w-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RoomModal;
