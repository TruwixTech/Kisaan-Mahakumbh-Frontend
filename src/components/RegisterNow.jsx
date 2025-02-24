import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const RegisterNow = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 100; // Adjust this value as per your requirement
            setIsVisible(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            {
                isVisible && (
                    <Link to='/registration' className="fixed -right-20 top-1/2 -translate-y-1/2 z-30">
                        <button
                            className="w-[200px] py-2 bg-[#C39337] rounded-xl text-white font-semibold -rotate-90 shadow-lg cursor-pointer"
                        >
                            Register Now
                        </button>
                    </Link>

                )
            }
        </>
    );
};

export default RegisterNow;
