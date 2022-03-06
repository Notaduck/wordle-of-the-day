import React from "react"
import { Card } from "../components/card/card"
import { CardRow } from "../components/card/cardRow"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useSolution } from "../hooks/useSolution"

const IndexPage = () => {
  const { data, isLoading, error } = useSolution()

  if (error) <> {JSON.stringify(error)}</>

  return (
    <Layout>
      <Seo title="Using SSR" />
      <CardRow>
        {isLoading ? (
          <p> loading</p>
        ) : (
          data?.map((letter, index) => (
            <Card
            isLoading={isLoading}
              letter={letter}
              key={`letter-${letter}`}
              id={`letter-${letter}`}
            />
          ))
        )}
      </CardRow>
    </Layout>
  )
}

export default IndexPage
