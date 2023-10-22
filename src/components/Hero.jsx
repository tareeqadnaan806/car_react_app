import React from 'react'

const Hero = () => {
    return (
        <div className='mt-5 flex hero-main '>
            <div className="left-hero w-1/2 p-5">
                <h1 className='text-4xl mb-3'>Find, book, rent a car-quick and super easy!</h1>
                <p>Streamline your car rentals experience with our effortless booking process.</p>
                <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4
                mt-5 rounded">Explore Cars</button>
            </div>
            <div className="right-hero w-1/2 p-5">
                <div className='z-86'>
                    <img src="../hero.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero