import React from "react"
import DOMPurify from 'isomorphic-dompurify';
import Image from "next/image"



export default function businessLayout(props) {
    return (
        <div className="p-4 mb-5">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-shrink-0 rounded-lg  object-cover object-center sm:mb-0 mb-4">
                    <Image src={props.src} width={285} height={200} priority />
                </div>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-4xl text-gray-900 font-italianno tracking-wider">{props.heading}</h2>
                    <h3 className="mb-3 font-gayathri">{props.heading2}</h3>
                    <p className="mb-4 text-justify font-gayathri" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }}></p>
                    <span className="inline-flex">
                        <a className="button--svg" href={props.instalink} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="instagram-icon">
                                <title id="instagram-icon">Instagram</title>
                                <path fill="#d5bfa4" d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}