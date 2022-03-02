import React from "react"

export const CardRow = ({ children }) => (
  <div className="flex md:flex-row lg: flex-col justify-center align-middle  gap-8 overflow-auto">
    {children}
  </div>
)
