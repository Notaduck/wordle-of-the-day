import React, { FC, useRef } from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"

export const Card = ({ character, id }) => {
  const ref = useRef()

  return (
    <Flippy
      flipOnClick={true}
      flipDirection="vertical"
      ref={ref}
      className="w-24 h-24 flex justify-center items-center text-gray-200"
      onClick={() => ref.current.toggle()}
    >
      <FrontSide className="bg-gray-800 flex justify-center items-center text-3xl">
        ?
      </FrontSide>
      <BackSide className="bg-[#6aaa64] flex justify-center items-center text-3xl">
        {character}
      </BackSide>
    </Flippy>
  )
}
