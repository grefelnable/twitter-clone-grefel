import React from "react"
import tw from "tailwind-styled-components"

const Widgets = () => {
  return <WidgetsContainer>Widgets</WidgetsContainer>
}

export default Widgets

const WidgetsContainer = tw.section`
hidden lg:block flex-[0.3]
`
