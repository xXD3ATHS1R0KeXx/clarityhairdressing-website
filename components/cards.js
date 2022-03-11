import React from "react"
import Image from "next/image"


export default function cards(props){
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{ props.title }</div>
                <p class="text-gray-700 text-base"> { props.desc } </p>
            </div>
        </div>
    )
}