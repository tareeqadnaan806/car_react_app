"use client"

import React from "react";
import Image from "next/image";

const CarCard = ({ cars }) => {
    const { model, cylinders, transmission, year, drive, fuel_type, make, max_hwy_mpg } = cars
    return (
        <div className="card-container flex">
            {model}, {cylinders},
            {transmission},
            {drive},
            {make},
            
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" height={200} width={200} alt="car Image" priority className="object-contain"/>
            </div>
            {year},
            {max_hwy_mpg},
        </div>
    )
}

export default CarCard;
