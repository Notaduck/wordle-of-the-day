import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="px-10 py-4 flex justify-center border-b-2 align-middle ">
    <h1 className="text-3xl font-bold tracking-wider text-black">
      WORDLE OF THE DAY
    </h1>
  </header>
)

export default Header
