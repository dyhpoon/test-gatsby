import React from "react"
import { StaticQuery, graphql } from "gatsby";

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
    >
    </StaticQuery>
  )
}

const layout = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default layout