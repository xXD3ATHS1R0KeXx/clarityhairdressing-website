import React from "react"
import tw from "tailwind-styled-components"
import Link from "next/link"

const Button = tw.a`
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
        <Link href="www.google.com">
            <Button>{ children }</Button>
        </Link>
    )
}