import React from "react"
import tw from "tailwind-styled-components"

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <SidebarOptionContainer>
      <SidebarOptionIcon>
        <Icon className="h-7 w-7" />
      </SidebarOptionIcon>
      <SidebarOptionText className={`${active && "font-medium"}`}>
        {text}
      </SidebarOptionText>
    </SidebarOptionContainer>
  )
}

export default SidebarOption

//Styles
const SidebarOptionContainer = tw.div`
duration-200 ease-out py-1 rounded-full max-w-fit
flex items-center cursor-pointer mb-1 hover:bg-zinc-800
`
const SidebarOptionIcon = tw.span`
p-2 px-3 
`

const SidebarOptionText = tw.p`
text-xl pr-6 hidden xl:block
`
