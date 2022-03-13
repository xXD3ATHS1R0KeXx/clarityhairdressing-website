import React from "react"
import Link from "next/link"

export default function instafeed({ instagramPosts }) {
  return (
    <>
      <ul>
        {instagramPosts.map(({ node }, i) => {
          return (
            <li>
              <a href={`https://www.instagram.com/p/${node.shortcode}`} key={i} aria-label="view image on Instagram">
                <img src={node.thumbnail_src} alt={node.edge_media_to_caption.edges[0].node.text.replace(/(#\w+)+/g, "").trim()}/>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}