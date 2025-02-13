import { useState, useEffect } from "react";
import { Room } from "../types";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetch("/src/data/rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Failed to fetch rooms:", err));
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Available Rooms</h1>

        {rooms.length === 0 ? (
          <p className="text-center text-gray-500">No rooms available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
