import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const blogdata = [
    {
      id: 1,
      title: "Innovative Farming Techniques",
      date: "26-02-2025",
      timeAgo: "Just now",
      description:
        "Exploring modern methods such as precision agriculture, and organic farming to enhance crop yield and sustainability.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/bj7fyluxmeb7alfbxtkc",
    },
    {
      id: 2,
      title: "Government Schemes for Farmers",
      date: "25-02-2025",
      timeAgo: "1 day ago",
      description:
        "A comprehensive guide to various government initiatives and subsidies available to support farmers in India.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/s0nk7ssfugo6g2pn3bis",
    },
    {
      id: 3,
      title: "Success Stories of Progressive Farmers",
      date: "24-02-2025",
      timeAgo: "2 days ago",
      description:
        "Highlighting the journeys of farmers who have adopted innovative practices and achieved remarkable success.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/ekl7e5d3uodiwngyg3py",
    },
    {
      id: 4,
      title: "Sustainable Agriculture Practices",
      date: "23-02-2025",
      timeAgo: "3 days ago",
      description:
        "Discussing eco-friendly farming methods that conserve resources and promote environmental health.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/sjvngmpafaqclcxfjqyo",
    },
    {
      id: 5,
      title: "Market Trends and Crop Pricing",
      date: "22-02-2025",
      timeAgo: "4 days ago",
      description:
        "Analyzing current market trends, crop prices, and providing insights to help farmers make informed decisions.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/eknk9totspjalle4a4bx",
    },
    {
      id: 6,
      title: "Use of Technology in Agriculture",
      date: "21-02-2025",
      timeAgo: "5 days ago",
      description:
        "Examining how advancements like drones, IoT, and AI are revolutionizing farming practices.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/b0paiccwwxnci8ae6krs",
    },
    {
      id: 7,
      title: "Soil Health and Fertility Management",
      date: "20-02-2025",
      timeAgo: "6 days ago",
      description:
        "Tips and techniques for maintaining soil health to ensure long-term agricultural productivity.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/fytqsozsyq37bhmxpbln",
    },
    {
      id: 8,
      title: "Water Conservation in Farming",
      date: "19-02-2025",
      timeAgo: "1 week ago",
      description:
        "Strategies for efficient water use, including drip irrigation and rainwater harvesting.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/chfzlpojfg0ujqqzbfr1",
    },
    {
      id: 9,
      title: "Pest and Disease Management",
      date: "18-02-2025",
      timeAgo: "1 week ago",
      description:
        "Identifying common crop pests and diseases, and effective ways to manage them.",
      image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/dwlfougxin3pzhopeztj",
    },
    // {
    //   id: 10,
    //   title: "Post-Harvest Management and Storage",
    //   date: "17-02-2025",
    //   timeAgo: "2 weeks ago",
    //   description:
    //     "Best practices for handling, storing, and transporting produce to minimize losses.",
    //   image: "https://res.cloudinary.com/dsxne7kta/image/upload/f_auto,q_auto/yg5jtgqgcmunygbfu5ow",
    // },
  ];

function Blogs() {
  return (
    <div className="bg-black w-full h-auto font-[Roboto]" >
      <div className="w-full px-5 md:px-10 lg:px-20 py-15 md:py-10 bg-[#e7e7e7] h-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#01210f] mb-4">
          Latest Blogs
        </h2>
        <div className="w-full h-auto flex items-center justify-center mb-10 md:mb-20">
          <span className="flex items-center justify-center text-black gap-1">
            <FaHome size={20} />
            Home
          </span>
          <span className="text-[#0000004D]"> - Pages - Latest Blogs</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogdata.map((blog) => (
            <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/blog/${encodeURIComponent(blog.title)}`} className="block">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
