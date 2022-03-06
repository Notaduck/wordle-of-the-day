import React, { useEffect, useState } from "react"

export const useSolution = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(false)
      try {
        const res = await fetch("/api/answer")
        const json = await res.json()
        setData(json.solution.split(""))
      } catch (error) {
        setError(true)
      }
      setIsLoading(false)
    }

    
    fetchData()
    console.log('data', data)
  }, [setData])

  return {
    data,
    isLoading,
    error,
  }
}
