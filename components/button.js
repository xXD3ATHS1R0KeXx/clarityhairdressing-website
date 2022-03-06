import React from "react"
import tw from "tailwind-styled-components"

const Button = tw.button`
    bg-clarityGold
    hover:bg-buttonGold
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
`

export default function button({ children }){
    return(
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{ children }</Button>
    )
}