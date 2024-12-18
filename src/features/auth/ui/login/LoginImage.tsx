'use client'

import Image from 'next/image'


export const LoginImage = () => {
  return (
    <div className={ `flex items-end w-[60%] h-full slide-in-right` }>
      <Image
        alt={ '' }
        src={ '/images/login-image.png' }
        priority
        width={ 4000 }
        height={ 3000 }
      />
    </div>
  )
}