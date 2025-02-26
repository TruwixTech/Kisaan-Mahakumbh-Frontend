import { useState, useEffect, useRef } from "react";
import { FaUsers, FaUserTie, FaLeaf, FaMicrophone, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { id: 1, value: 10000, label: "Visitors", icon: <FaUsers />, color: "from-blue-500 to-cyan-500" },
  { id: 2, value: 500, label: "Delegates", icon: <FaUserTie />, color: "from-green-500 to-emerald-500" },
  { id: 3, value: 200, label: "Green Heroes", icon: <FaLeaf />, color: "from-emerald-500 to-teal-500" },
  { id: 4, value: 20, label: "Speakers", icon: <FaMicrophone />, color: "from-red-500 to-pink-500" },
  { id: 5, value: 100, label: "Startups", icon: <FaRocket />, color: "from-purple-500 to-indigo-500" },
];

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="pt-20 pb-5 bg-[#01210f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold flex flex-col gap-2 text-gray-900 relative"
          >
            <span className="text-white font-[Roboto] font-bold text-xl lg:text-3xl">
              | Highlights |
            </span>
            <span className="text-white font-[Roboto] font-bold text-3xl lg:text-5xl 2xl:text-6xl">
              Event Highlights
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-[#d9d9d9] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${stat.color}`} />
              <div className="flex flex-col items-center">
                <div className={`mb-4 p-4 rounded-full bg-gradient-to-br bg-[#146a3a] text-white text-3xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {visible ? <AnimatedCounter end={stat.value} /> : "0"}+
                </h3>
                <p className="text-gray-600 font-medium text-lg font-[Roboto] md:text-2xl">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.span 
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export default StatsSection;