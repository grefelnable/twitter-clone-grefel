import React from "react"
import tw from "tailwind-styled-components"
import Tweetbox from "./Tweetbox"

const Feed = () => {
  return (
    <FeedContainer>
      {/* Header */}
      <FeedHeader>
        <FeedTitle>Home</FeedTitle>
      </FeedHeader>
      {/* tweet box */}
      <Tweetbox />
      {/* post */}
      {/* post */}
      {/* post */}
    </FeedContainer>
  )
}

export default Feed

const FeedContainer = tw.section`
flex-[0.86] md:flex-[0.5] md:border-r md:border-zinc-500
min-w-fit overflow-y-scroll
hide-scrollbar
`
const FeedHeader = tw.div`
p-2 sticky top-0 z-30 
`
const FeedTitle = tw.h2`
text-[1.25rem] font-medium
`
