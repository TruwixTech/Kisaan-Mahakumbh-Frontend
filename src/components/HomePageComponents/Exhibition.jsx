import React from 'react';
import Exhibition1 from '../../assets/exhibition1.jpg';
import Exhibition2 from '../../assets/exhibition2.jpg';
import Exhibition3 from '../../assets/exhibition3.jpg';
import Exhibition4 from '../../assets/exhibition4.jpg';
import Exhibition5 from '../../assets/exhibition5.jpg';
import Exhibition6 from '../../assets/exhibition6.jpg';
import Exhibition7 from '../../assets/exhibition7.jpg';
import Exhibition8 from '../../assets/exhibition8.jpg';
import Exhibition9 from '../../assets/exhibition9.jpg';

const images = [
    { id: 1, src: Exhibition1 },
    { id: 2, src: Exhibition2 },
    { id: 3, src: Exhibition3 },
    { id: 4, src: Exhibition4 },
    { id: 5, src: Exhibition5 },
    { id: 6, src: Exhibition6 },
    { id: 7, src: Exhibition7 },
    { id: 8, src: Exhibition8 },
    { id: 9, src: Exhibition9 }
];

const Exhibition = () => {
    return (
        <div className="w-full h-auto bg-[#01210f] p-4 px-5 md:px-10 lg:px-20 py-10 lg:py-16">
            <h1 className='text-white text-2xl font-bold text-center mb-8 font-[Roboto] xl:text-3xl uppercase'>
                Glimpses of Past Exhibitions Agritech
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {images.map((image) => (
                    <div key={image.id} className="flex justify-center">
                        <img
                            src={image.src}
                            alt={`Exhibition ${image.id}`}
                            className="w-full h-full object-cover rounded-lg shadow-md
                                       transition-transform duration-300 ease-in-out
                                       hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exhibition