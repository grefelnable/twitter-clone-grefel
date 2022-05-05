import React from "react"
import tw from "tailwind-styled-components"

const Tweetbox = () => {
  return (
    <TweetboxContainer>
      <form>
        <TweetboxInput>
          <Avatar src="../images/grefel-nable-2.jpg" />
          <TweetInput placeholder="What's happening?" />
        </TweetboxInput>
        <TweetboxBtn type="button" className="btn-medium">
          Tweet
        </TweetboxBtn>
      </form>
    </TweetboxContainer>
  )
}

export default Tweetbox

const TweetboxContainer = tw.div`
p-2 pt-4 px-4 
border-b border-zinc
`

const TweetboxInput = tw.div`
flex gap-3 mb-3
`
const Avatar = tw.img`
w-[50px] h-[50px] rounded-full
`
const TweetInput = tw.input`
bg-black text-xl placeholder:text-zinc-500 flex-1

`
const TweetboxBtn = tw.button`
block ml-auto
`
