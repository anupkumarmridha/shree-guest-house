const Hero = () => {
    return (
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury,hotel')" }}>
        <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Find Your Perfect Stay</h1>
          <p className="mt-2 text-lg">Comfort & Luxury at Affordable Prices</p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  