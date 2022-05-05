import React from "react"
import tw from "tailwind-styled-components"
import TwitterLogo from "../assets/twitter-logo.png"
import SidebarOption from "./SidebarOption"
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { GiFeather } from "react-icons/gi"

const Sidebar = () => {
  return (
    <Nav>
      <TwitterIcon src={TwitterLogo} />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={HashtagIcon} text="Explore" />
      <SidebarOption Icon={BellIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ViewListIcon} text="Lists" />
      <SidebarOption Icon={UserIcon} text="Profile" />
      <SidebarOption Icon={DotsCircleHorizontalIcon} text="More" />

      <TweetBtnLgScreen type="button" className="btn-grad">
        Tweet
      </TweetBtnLgScreen>
      {/* btn small screen */}
      <TweetBtnSmScreen type="button" className="btn-grad-sm">
        <GiFeather />
      </TweetBtnSmScreen>
    </Nav>
  )
}

export default Sidebar

//Styles
const Nav = tw.nav`
border-r border-zinc-500 flex-[0.14] md:flex-[0.08] xl:flex-[0.2]
ml-3
`
const TwitterIcon = tw.img`
w-12 cursor-pointer ease-in-out duration-200 hover:bg-slate-900 rounded-full
p-1 mb-3 mt-1
`
const TweetBtnLgScreen = tw.button`
hidden xl:block mt-8
`
const TweetBtnSmScreen = tw.button`
xl:hidden 
`
