import Image from 'next/image'
import React from 'react'

interface Props {
    text:string | undefined
}
const SmallOrangeCardPart = ({text}:Props) => {
  return (
    <div className="bg-gradient-to-r mt-10 from-orange-400 to-orange-500 p-5 rounded-[500px] flex justify-between items-center">
    <p className="text-white font-bold">{text}</p>
    <div className="flex">
      <Image
        src="/blogArticleImgs/blogArticleIcons/facebook.svg"
        className="mr-5"
        width={35}
        height={35}
        alt="facebook-icon"
      />
      <Image
        src="/blogArticleImgs/blogArticleIcons/twitter.svg"
        className="mr-5"
        width={35}
        height={35}
        alt="twitter-icon"
      />
      <Image
        src="/blogArticleImgs/blogArticleIcons/linkedIn.svg"
        className="mr-5"
        width={38}
        height={40}
        alt="linkedIn-icon"
      />
    </div>
  </div>
  )
}

export default SmallOrangeCardPart