import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../assets/Hero.jpg";
import Header from "../components/Header";

const blogdata = [
  {
    id: 1,
    title: "Innovative Farming Techniques",
    date: "26-02-2025",
    timeAgo: "Just now",
    description1:
      "Modern agriculture is evolving rapidly with the adoption of innovative farming techniques. Precision agriculture, one of the key advancements, uses GPS, sensors, and data analytics to optimize farming operations. This method enables farmers to apply the right amount of water, fertilizers, and pesticides at the right time, reducing waste and improving efficiency.",
    description2:
      "Hydroponics is another revolutionary farming technique that allows crops to grow without soil, using nutrient-rich water solutions. This method is especially useful in areas with poor soil quality or limited land availability. Hydroponic farms can be set up in urban areas, reducing transportation costs and ensuring fresh produce year-round.",
    description3:
      "Organic farming, which avoids synthetic pesticides and fertilizers, is gaining popularity due to its environmental and health benefits. By using compost, crop rotation, and biological pest control, organic farmers promote soil health and biodiversity. Consumers increasingly prefer organic products, leading to higher demand and better market prices.",
    description4:
      "Additionally, vertical farming is emerging as a sustainable solution for food production. This method involves growing crops in stacked layers within controlled environments, saving space and using less water. With these advancements, farmers can boost productivity while ensuring environmental sustainability.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/bj7fyluxmeb7alfbxtkc",
  },
  {
    id: 2,
    title: "Government Schemes for Farmers",
    date: "25-02-2025",
    timeAgo: "1 day ago",
    description1:
      "The Indian government has introduced several schemes to support farmers and improve agricultural productivity. Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides direct financial assistance to small and marginal farmers, helping them meet their farming expenses. Under this scheme, eligible farmers receive ₹6,000 annually in three equal installments.",
    description2:
      "Another major initiative is Pradhan Mantri Fasal Bima Yojana (PMFBY), which offers crop insurance against natural calamities, pests, and diseases. This scheme ensures that farmers do not suffer financial losses due to unpredictable weather conditions. It has provided relief to millions of farmers facing challenges due to climate change.",
    description3:
      "To improve irrigation facilities, the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) was launched. This scheme promotes efficient water usage through micro-irrigation techniques such as drip and sprinkler systems. The goal is to ensure that every farm has access to water, increasing overall agricultural output.",
    description4:
      "Apart from these, various state governments also offer subsidies on seeds, fertilizers, and agricultural equipment to reduce the financial burden on farmers. By leveraging these schemes, farmers can improve their income and adopt better farming practices.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/s0nk7ssfugo6g2pn3bis",
  },
  {
    id: 3,
    title: "Success Stories of Progressive Farmers",
    date: "24-02-2025",
    timeAgo: "2 days ago",
    description1:
      "Across India, many farmers have transformed their agricultural practices and achieved remarkable success. One such example is Subhash Palekar, a farmer from Maharashtra who pioneered Zero Budget Natural Farming (ZBNF). His method involves using natural fertilizers and bio-pesticides made from cow dung and urine, eliminating the need for expensive chemical inputs. His success has inspired thousands of farmers to adopt sustainable farming.",
    description2:
      "In Punjab, Jaswinder Singh, a progressive farmer, switched to organic farming and diversified his crops. He grows exotic vegetables and fruits that fetch premium prices in the market. His efforts have not only increased his income but also improved soil fertility and biodiversity on his farm.",
    description3:
      "Another inspiring story is that of Dharampal Singh, a farmer from Haryana, who adopted precision farming techniques using drones and soil testing. By analyzing soil health and applying fertilizers accordingly, he has improved crop yields while reducing input costs. His story showcases the power of technology in modern agriculture.",
    description4:
      "These success stories prove that innovation, sustainability, and smart decision-making can transform the lives of farmers, ensuring profitability and environmental conservation.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/ekl7e5d3uodiwngyg3py",
  },
  {
    id: 4,
    title: "Sustainable Agriculture Practices",
    date: "23-02-2025",
    timeAgo: "3 days ago",
    description1:
      "Sustainable agriculture focuses on long-term environmental health, economic profitability, and social equity. One of the key principles is crop rotation, where different crops are planted in sequential seasons to improve soil health and reduce pest infestations. This practice prevents soil degradation and maintains fertility.",
    description2:
      "Another important practice is agroforestry, where trees and crops are grown together. Trees provide shade, prevent soil erosion, and enhance biodiversity, while crops benefit from improved microclimatic conditions. Agroforestry also helps in carbon sequestration, reducing the impact of climate change.",
    description3:
      "Integrated Pest Management (IPM) is another sustainable approach that reduces reliance on chemical pesticides. It combines biological control methods, such as introducing beneficial insects, with mechanical and cultural pest control techniques. This minimizes the environmental impact of pesticides while keeping crops healthy.",
    description4:
      "Composting and organic fertilizers play a crucial role in sustainable agriculture. By recycling farm waste into nutrient-rich compost, farmers can improve soil structure and fertility naturally. Adopting these practices ensures that agriculture remains productive and environmentally responsible for future generations.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/sjvngmpafaqclcxfjqyo",
  },
  {
    id: 5,
    title: "Market Trends and Crop Pricing",
    date: "22-02-2025",
    timeAgo: "4 days ago",
    description1:
      "Agricultural markets are influenced by various factors, including weather conditions, demand and supply, government policies, and global trade. Understanding market trends helps farmers make informed decisions about which crops to grow and when to sell them.",
    description2:
      "One major trend is the increasing demand for organic and pesticide-free produce. As health-conscious consumers prefer organic food, farmers who switch to organic farming can fetch higher prices for their crops.",
    description3:
      "Technology has also transformed agricultural marketing. With the rise of e-NAM (Electronic National Agriculture Market), farmers can sell their produce directly to buyers across India, ensuring better price realization. This platform eliminates middlemen, providing fair compensation to farmers.",
    description4:
      "Climate change and unpredictable weather patterns affect crop production and pricing. For instance, unseasonal rains or droughts can reduce supply, leading to price hikes. Farmers must stay updated with weather forecasts and adopt risk management strategies to navigate these challenges. By analyzing market trends and leveraging digital platforms, farmers can optimize their production and maximize profits.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/eknk9totspjalle4a4bx",
  },
  {
    id: 6,
    title: "Use of Technology in Agriculture",
    date: "21-02-2025",
    timeAgo: "5 days ago",
    description1:
      "Technology has revolutionized farming, making it more efficient and productive. Drones are now used for crop monitoring, spraying pesticides, and mapping farm fields. These aerial devices provide real-time data, helping farmers detect diseases and nutrient deficiencies early.",
    description2:
      "Internet of Things (IoT) in agriculture involves using sensors to monitor soil moisture, temperature, and humidity. This data helps farmers make precise decisions about irrigation and fertilization, reducing resource wastage and increasing yields.",
    description3:
      "Artificial Intelligence (AI) is also transforming agriculture. AI-powered tools analyze vast amounts of data to predict weather patterns, recommend optimal planting times, and detect pest infestations. This allows farmers to take proactive measures and improve productivity.",
    description4:
      "Blockchain technology is being used to improve supply chain transparency. It ensures that farmers get fair prices and prevents fraud in agricultural transactions. With these technological advancements, farming is becoming smarter and more sustainable.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/b0paiccwwxnci8ae6krs",
  },
  {
    id: 7,
    title: "Soil Health and Fertility Management",
    date: "20-02-2025",
    timeAgo: "6 days ago",
    description1:
      "Healthy soil is the foundation of successful farming. Soil fertility depends on factors such as organic matter, nutrients, pH balance, and microbial activity. To maintain soil health, farmers should regularly conduct soil testing to determine nutrient levels and deficiencies.",
    description2:
      "Crop rotation is an effective technique for preventing nutrient depletion. By growing different crops in a sequence, farmers can restore soil nutrients and reduce pest buildup. For example, legumes fix nitrogen in the soil, benefiting subsequent crops.",
    description3:
      "Adding organic matter such as compost, manure, and green cover crops improves soil structure and fertility. Organic matter increases water retention, making soil more resilient to drought.",
    description4:
      "Avoiding excessive chemical fertilizers and pesticides is crucial. Overuse of chemicals can degrade soil quality and kill beneficial microbes. Instead, adopting organic fertilizers and bio-pesticides promotes soil biodiversity and long-term productivity. By implementing these soil management practices, farmers can ensure sustainable and high-yield farming.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/fytqsozsyq37bhmxpbln",
  },
  {
    id: 8,
    title: "Water Conservation in Farming",
    date: "19-02-2025",
    timeAgo: "1 week ago",
    description1:
      "Water is one of the most essential resources for agriculture, but its availability is increasingly becoming a challenge due to climate change and population growth. Efficient water management is crucial for sustaining crop production while minimizing wastage.",
    description2:
      "One of the most effective techniques for water conservation is drip irrigation, where water is delivered directly to plant roots through a network of pipes. This method significantly reduces water loss due to evaporation and runoff, ensuring that crops receive adequate moisture without excess waste. Sprinkler irrigation is another technique that mimics natural rainfall, providing uniform water distribution over a large area.",
    description3:
      "Farmers can also adopt rainwater harvesting, which involves collecting and storing rainwater for use during dry seasons. This method is particularly useful in arid and semi-arid regions where rainfall is unpredictable. Additionally, mulching—the practice of covering soil with organic or plastic materials—helps retain soil moisture, reduces evaporation, and prevents weed growth.",
    description4:
      "Governments and agricultural organizations are encouraging the use of smart irrigation systems that utilize weather data and soil sensors to optimize water usage. By adopting these conservation techniques, farmers can maintain productivity while preserving this precious resource for future generations.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/chfzlpojfg0ujqqzbfr1",
  },
  {
    id: 9,
    title: "Pest and Disease Management",
    date: "18-02-2025",
    timeAgo: "1 week ago",
    description1:
      "Pests and diseases pose significant threats to crops, leading to reduced yields and financial losses for farmers. Effective pest and disease management involves a combination of preventive and control measures to minimize their impact on agriculture.",
    description2:
      "Integrated Pest Management (IPM) is a widely recommended approach that combines biological, cultural, mechanical, and chemical methods to control pests. Biological control involves introducing natural predators like ladybugs and parasitic wasps that feed on harmful insects. Cultural practices such as crop rotation and companion planting help disrupt pest life cycles and reduce infestations.",
    description3:
      "Farmers can also use organic pesticides made from neem, garlic, and chili extracts as eco-friendly alternatives to chemical pesticides. These natural solutions help control pests while avoiding the harmful effects of synthetic chemicals on soil health and beneficial insects.",
    description4:
      "Regular crop monitoring and early detection are crucial in managing plant diseases. Diseases such as fungal infections, bacterial blights, and viral pathogens can spread rapidly if not controlled in time. Using disease-resistant crop varieties and maintaining proper field hygiene can significantly reduce disease outbreaks. By adopting sustainable pest and disease management strategies, farmers can protect their crops while promoting environmental health and food safety.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/dwlfougxin3pzhopeztj",
  },
  {
    id: 10,
    title: "Post-Harvest Management and Storage",
    date: "17-02-2025",
    timeAgo: "2 weeks ago",
    description1:
      "After months of hard work in the fields, proper post-harvest management is essential to minimize losses and maintain the quality of agricultural produce. Improper handling, storage, and transportation can lead to significant food wastage, affecting both farmers and consumers.",
    description2:
      "One of the key aspects of post-harvest management is proper drying of grains and cereals before storage. Excess moisture can lead to fungal growth and spoilage. Farmers often use solar drying, mechanical dryers, or natural air drying techniques to reduce moisture content in harvested crops.",
    description3:
      "For fruits and vegetables, cold storage plays a crucial role in extending shelf life. Temperature-controlled storage facilities slow down the ripening process and prevent spoilage. Many farmers are now investing in low-cost, solar-powered cold storage units to preserve their produce and reduce post-harvest losses.",
    description4:
      "Packaging is another important factor in maintaining produce quality. Properly designed ventilated crates, biodegradable packaging, and vacuum-sealed containers help prevent bruising and contamination during transportation. Additionally, modern supply chain management systems, such as blockchain technology, help track and monitor produce from farm to market, ensuring transparency and fair pricing. By implementing efficient post-harvest techniques, farmers can enhance the marketability of their produce, increase their earnings, and reduce food wastage, contributing to a more sustainable agricultural system.",
    image:
      "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/yg5jtgqgcmunygbfu5ow",
  },
];

const SingleBlog = () => {
  const { title } = useParams();
  const blog = blogdata.find((b) => b.title === decodeURIComponent(title));

  if (!blog) {
    return (
      <h2 className="text-center text-2xl text-red-500">Blog not found</h2>
    );
  }

  return (
    <div className="bg-[#e7e7e7] w-full h-auto font-[Roboto]">
      <div
        className="relative z-40"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="w-full h-full flex flex-col absolute z-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
            backgroundSize: "100% 100%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <Header />
      </div>
      <div className="p-6 max-w-[80%] mx-auto mt-15">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 md:h-90 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold text-[#663b2d] mt-4">{blog.title}</h1>
        <p className="text-gray-700 text-justify text-lg mt-4">{blog.description1}</p>
        <p className="text-gray-700 text-justify text-lg mt-4">{blog.description2}</p>
        <p className="text-gray-700 text-justify text-lg mt-4">{blog.description3}</p>
        <p className="text-gray-700 text-justify text-lg mt-4">{blog.description4}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
