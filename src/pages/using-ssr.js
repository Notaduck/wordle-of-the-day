import * as React from "react"
import { Link } from "gatsby"
import { ReactCardFlip } from "react-card-flip"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card } from "../components/card/card"
import { CardRow } from "../components/card/cardRow"

const UsingSSR = ({ serverData }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)
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

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`http://localhost:8000/api/answer`)
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
