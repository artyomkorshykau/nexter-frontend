'use client'

import Image from 'next/image'


export const RegisterImage = () => {
  return (
    <div className={ `flex items-end w-[60%] h-full slide-in-left` }>
      <Image
        alt={ '' }
        src={ '/images/register-image.png' }
        priority
        width={ 4000 }
        height={ 3000 }
      />
    </div>
  )
}