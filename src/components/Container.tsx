import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}

const Container = ({ children, className }: Props) => (
  <div className={`sm:px-[200px] py-[24px] ${className || ''}`}>{children}</div>
)

export default Container
