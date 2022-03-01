import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ serverData }) => {
  return (
    <Layout>
      <pre> {JSON.stringify(serverData)}</pre>
    </Layout>
  )
}

export default IndexPage
