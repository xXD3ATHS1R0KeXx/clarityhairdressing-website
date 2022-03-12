import React from "react"
import Image from "next/image"
import wings from "../public/Wings.jpeg"


export default function cards(props){
    return(
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <Image src={"/"+props.src} layout="fill" objectFit="contain"/>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>                
                </div>
            </div>
        </div>
    )
}