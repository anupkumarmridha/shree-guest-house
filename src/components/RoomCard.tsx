import { useState} from "react";
import { Room } from "../types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {

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
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
        {/* Image Slider */}
        <div className="relative w-full h-48">
          <img src={room.images[currentImage]} alt={room.name} className="w-full h-48 object-cover" />
          
          {/* Prev Button */}
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
        </div>

        {/* Room Info */}
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{room.name}</h2>
          <p className="text-gray-600">{room.isAC ? "AC" : "Non-AC"} | {room.sharingType} Sharing</p>
          <p className="text-gray-600">Facilities: {room.facilities.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
