import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
const whatever_you_want = useStaticQuery(
    graphql`query {
        site {
          metadata {
            name author
          }
        }
      }`
)
  return (
    <div>
      <Link to="/about">{whatever_you_want.site.metadata.author} {whatever_you_want.site.metadata.name} 🥾 </Link>
      <Link to="/about">a boot 🥾 </Link>
      <Link to="/about">a boot 🥾 </Link>
      <Link to="/about">a boot 🥾 </Link>
      <Link to="/about">a boot 🥾 </Link>
    </div>
  )
}

export default Header