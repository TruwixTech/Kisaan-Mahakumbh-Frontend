import React from 'react';

function Section3() {
    const cards = [
        {
            image: "https://picsum.photos/200/300",
        },
        {
            image: "https://picsum.photos/201/300",
        },
        {
            image: "https://picsum.photos/202/300",
        },
        {
            image: "https://picsum.photos/202/300",
        },
    ];

    return (
        <div className='w-full h-auto py-10 px-5 md:px-10 lg:px-20 bg-[#e7e7e7] gap-8 xl:gap-10'>
            <div className='font-[Roboto] flex flex-col justify-center items-center'>
                <p className="text-[#374836] text-xl font-bold sm:text-2xl font-[Roboto] lg:text-3xl">| Reels |</p>
                <h1 className="text-[#374836] w-full text-[25px] text-center sm:text-4xl md:text-[52px] font-[Roboto] font-bold lg:text-5xl">
                    Our Presence on Social
                </h1>
            </div>

            {/* Grid for Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-10'>
                {cards.map((card, index) => (
                    <div key={index} className="bg-[#7a7a7a]  rounded-4xl overflow-hidden w-full md:w-[300px] h-[513.15px] ">
                        {/* <img src={card.image} alt={`Card ${index + 1}`} className='w-[280px] h-[513.15px] ' /> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section3;
