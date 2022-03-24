import React from "react"
import tw from "tailwind-styled-components"
import {useRouter} from "next/router"

const Button = tw.a`
    bg-clarityGold
    hover:bg-buttonGold
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
`

export default function button({ children, src }){
    return(
        <Button href={src}>{ children }</Button>
    )
}