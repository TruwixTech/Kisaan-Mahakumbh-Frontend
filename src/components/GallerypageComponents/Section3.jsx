import React, { useRef, useEffect, useState } from "react";

function LazyVideo({ src, poster, className }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
    >
      Your browser does not support the video tag.
    </video>
  );
}

function Section3() {
  const cards = [
    {
      image: "https://res.cloudinary.com/daqtq6xns/video/upload/f_auto:video,q_auto/nmmnqfyhgdmd4y2oshrp",
      // Optionally, add a poster URL if available:
      poster: "https://res.cloudinary.com/daqtq6xns/image/upload/f_auto,q_auto/nmmnqfyhgdmd4y2oshrp.jpg"
    },
    {
      image: "https://res.cloudinary.com/daqtq6xns/video/upload/f_auto:video,q_auto/zblmhimfzk9ioglk85we",
      poster: "https://res.cloudinary.com/daqtq6xns/image/upload/f_auto,q_auto/zblmhimfzk9ioglk85we.jpg"
    },
    {
      image: "https://res.cloudinary.com/daqtq6xns/video/upload/f_auto:video,q_auto/o0bkqpegppztgitqipof",
      poster: "https://res.cloudinary.com/daqtq6xns/image/upload/f_auto,q_auto/o0bkqpegppztgitqipof.jpg"
    },
    {
      image: "https://res.cloudinary.com/dj0xlbz42/video/upload/v1740744529/oq7lprkwgktlxdquwget.mp4",
      poster: "https://res.cloudinary.com/dj0xlbz42/image/upload/v1740744529/oq7lprkwgktlxdquwget.jpg"
    },
  ];

  return (
    <div className="w-full h-auto py-10 px-5 md:px-10 lg:px-20 bg-[#e7e7e7] gap-8 xl:gap-10">
      <div className="font-[Roboto] flex flex-col justify-center items-center">
        <p className="text-[#374836] text-xl font-bold sm:text-2xl font-[Roboto] lg:text-3xl">
          | Reels |
        </p>
        <h1 className="text-[#374836] w-full text-[25px] text-center sm:text-4xl md:text-[52px] font-[Roboto] font-bold lg:text-5xl">
          Our Presence on Social
        </h1>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#7a7a7a] rounded-4xl overflow-hidden w-full md:w-[300px] h-[513.15px]"
          >
            <LazyVideo
              src={card.image}
              poster={card.poster}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
