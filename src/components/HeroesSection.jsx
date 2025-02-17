import { heroesData } from "../../data.js";

const HeroesSection = () => {
  return (
    <div className="bg-gray-100 py-10px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-gray-600 text-lg">| Heroes |</p>
        <h2 className="text-3xl font-bold text-gray-800">OUR GREEN HEROES</h2>
      </div>

      {/* Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {heroesData.map((hero, index) => (
          <div key={index} className="text-center">
            <img
              src={hero.img}
              alt={hero.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-800">{hero.title}</h3>
            <p className="text-gray-600">{hero.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesSection;
