import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className=" px-10 py-4 flex flex-col justify-center border-b-2 align-middle items-center">
    <h1 className="md:text-2xl lg:text-3xl font-bold tracking-wider text-black">
      WORDLE OF THE DAY
    </h1>
    <p className="text-gray-500 font-light text-sm">( Unofficial )</p>
  </header>
)

export default Header
