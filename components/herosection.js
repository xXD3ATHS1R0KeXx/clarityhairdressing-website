import React from "react"
import Image from 'next/image'
import wings from "../public/Wings.jpeg"
import Button from "./button"

export default function HeroSection() {
	return (
		<div className="flex justify-center items-center text-center pt-40 sm:pt-10 z-0">
			<Image src={wings} width={800} height={800} priority />
      <div className="absolute">
        <h1 className=" text-gray-900 text-7xl md:text-8xl font-italianno ">
          Clarity
        </h1>
        <h2 className=" text-gray-900 text-2xl md:text-3xl font-dancingscript">
          By James Henderson Hairdressing
        </h2>
        <div>
          <p className="mt-3  text-justifty font-gayathri text-gray-500 md:mt-5 md:text-lg md:max-w-xl md:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat tempus sem sit amet sodales. 
          Praesent aliquet molestie augue nec laoreet. Cras at dui ac neque eleifend condimentum. 
          </p>
        </div>
        <Button>Book now</Button>
      </div>
		</div>
	);
}