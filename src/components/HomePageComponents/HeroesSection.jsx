import { heroesData } from "../../../data.js";

const HeroesSection = () => {
  return (
    <div className="bg-[#e7e7e7] py-10 px-5 md:px-10 lg:px-20 font-[Roboto]">
      {/* Header Section */}
      <div className="text-center flex flex-col gap-1 lg:gap-2">
        <p className="text-[#374836] text-2xl font-semibold">| Heroes |</p>
        <h2 className="text-5xl font-bold text-[#374836]">OUR GREEN HEROES</h2>
      </div>

      {/* Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
        {heroesData.map((hero, index) => (
          <div key={index} className="text-center">
            <img
              src={hero.img}
              alt={hero.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-lg font-bold text-[#374836]">{hero.title}</h3>
            <p className="text-[#374836]">{hero.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesSection;
