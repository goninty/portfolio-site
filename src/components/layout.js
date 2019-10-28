/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header home="/" github="https://github.com/goninty" linkedin="https://www.linkedin.com/in/andrew-morton-325b45187"/>   
      <div>
        <main
          style={{
            margin: `0rem auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
        {children}
        </main>
      </div>
      <Footer>
          a
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
