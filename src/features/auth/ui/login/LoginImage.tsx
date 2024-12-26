'use client'

import Image from 'next/image'


export const LoginImage = () => {
  return (
    <div className={`flex items-end w-[60%] h-full slide-in-right`}>
      <Image
        alt={''}
        src={'/images/login-image.png'}
        priority
        width={1500}
        height={900}
      />
    </div>
  )
}