import React from "react"
import tw from "tailwind-styled-components"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Widgets from "./components/Widgets"

function App() {
  return (
    <AppContainer>
      {/* Side Bar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </AppContainer>
  )
}

export default App
//Style
const AppContainer = tw.div` h-screen
mx-auto md:w-11/12 max-w-screen-xl
flex
`
