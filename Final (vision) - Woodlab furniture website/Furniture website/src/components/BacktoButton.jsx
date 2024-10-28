import React, { useEffect, useState } from 'react'
import { FaArrowTurnUp } from "react-icons/fa6";

function BacktoButton() {
    const [backbutton, setBackbutton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackbutton(true)
            } else {
                setBackbutton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {
                backbutton && (
                    <button
                        className='scrolltoUp' onClick={scrollUp}>

                        <FaArrowTurnUp /></button>
                )
            }
        </div>
    );
};



export default BacktoButton