/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

// import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col container mx-auto">
      <Header className="h-14" />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
      <footer className="py-4 px-6 font-sans text-center text-sm border-t-2">
        {" "}
        WORDLE of the day is not assosiated with New York Times WORDLE game.
        WORDLE of the day is only a small side project which I made as a proof
        of concept.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
