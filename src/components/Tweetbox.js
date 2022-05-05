import { PhotographIcon } from "@heroicons/react/outline"
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
        <div className="flex items-center justify-between gap-4">
          <ImageUpload for="imageUpload">
            <input
              id="imageUpload"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
            />
            <PhotographIcon className="h-6 w-6" />
          </ImageUpload>
          <TweetboxBtn type="button" className="btn-medium">
            Tweet
          </TweetboxBtn>
        </div>
      </form>
    </TweetboxContainer>
  )
}

export default Tweetbox

const TweetboxContainer = tw.div`
p-2 pt-4 px-4 
border-b border-zinc-500
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
const ImageUpload = tw.label`
cursor-pointer ml-auto ease-out duration-200 hover:bg-zinc-800 rounded-full p-1
`
const TweetboxBtn = tw.button`
block 
`
