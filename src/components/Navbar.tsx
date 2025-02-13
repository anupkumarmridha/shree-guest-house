const Navbar = () => {
  return (
    <nav className="bg-[#0a1f44] text-white py-4 px-6 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          🏨 SHREE GUEST HOUSE
        </a>
        <a
          href="#contact"
          className="bg-white text-[#0a1f44] px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
