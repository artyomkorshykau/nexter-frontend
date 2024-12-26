'use client'

import Image from 'next/image'


export const RegisterImage = () => {
  return (
    <div className={`flex items-end w-[60%] h-full slide-in-left`}>
      <Image
        alt={''}
        src={'/images/register-image.png'}
        priority
        width={1500}
        height={900}
      />
    </div>
  )
}