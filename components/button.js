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
        <Button>{ children }</Button>
    )
}