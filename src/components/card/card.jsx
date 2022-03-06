import React, { FC, useRef } from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"

export const Card = ({ character, id }) => {
  const ref = useRef()

  return (
    <Flippy
      flipOnClick={true}
      flipDirection="vertical"
      ref={ref}
      className="w-24 h-24 flex justify-center items-center hover:cursor-pointer"
      onClick={() => ref.current.toggle()}
    >
      <FrontSide
        style={{ background: "rgb(31 41 55)" }}
        className="flex justify-center items-center text-3xl uppercase text-gray-200"
      >
        ?
      </FrontSide>
      <BackSide
        style={{ background: "#6aaa64" }}
        className="flex justify-center items-center text-3xl uppercase text-gray-100"
      >
        {character}
      </BackSide>
    </Flippy>
  )
}
