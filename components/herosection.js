import React from "react"
import Image from 'next/image'
import wings from "../public/Wings.jpeg"
import Button from "./button"

export default function HeroSection() {
	return (
		<div className="flex justify-center items-center text-center z-0 animate-fade-in-down pt-24 md:pt-0">
        <Image src={wings} width={800} height={800} priority />
        <div className="absolute">
          <h1 className=" text-gray-900 text-7xl md:text-8xl font-italianno mt-80 md:mt-96">
            Clarity
          </h1>
          <h2 className=" text-gray-900 md:text-4xl text-3xl font-italianno tracking-wider">
            By James Henderson Hairdressing
          </h2>
          { /*
          <div>
            <p className="mt-3 px-5 text-justifty font-gayathri text-gray-500 md:mt-5 md:text-lg md:max-w-xl md:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-down">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat tempus sem sit amet sodales. 
            Praesent aliquet molestie augue nec laoreet. Cras at dui ac neque eleifend condimentum. 
            </p>
          </div>
          */}
          <div className="mt-7">
            <Button src="https://bookings.gettimely.com/jameshendersonhairdressing/bb/book">Book now</Button>
          </div>
          <div className="mt-5 font-gayathri text-gray-500">
            <p className="tracking-wider"> Please note some services are only available through booking on Instagram at @clarity_by_jameshenderson </p>
          </div>
      </div>
    </div>
	);
}