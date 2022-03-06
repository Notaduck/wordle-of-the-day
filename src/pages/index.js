import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Card } from "../components/card/card"
import { CardRow } from "../components/card/cardRow"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ serverData }) => {
  const solution = serverData.solution

  return (
    <Layout>
      <Seo title="Using SSR" />
      <CardRow>
        {solution.split("").map((data, idx) => {
          return (
            <Card
              character={data}
              key={`charcter${idx}`}
              id={`charcter${idx}`}
            />
          )
        })}
      </CardRow>
    </Layout>
  )
}

export async function getServerData() {
  try {
    const res = await fetch(`${process.env.GATSBY_API}/api/answer`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}

export default IndexPage
