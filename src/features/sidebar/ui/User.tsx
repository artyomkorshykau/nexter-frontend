import Image from 'next/image'


export const User = () => {
  return (
    <div className={ `w-full flex flex-col justify-center items-center mt-24 gap-2` }>
      <div className={ `rounded-full w-32 h-32 overflow-hidden` }>
        <Image
          alt={ '' }
          src={ '/images/avatar-placeholder.jpg' }
          priority
          width={ 500 }
          height={ 500 }
        />
      </div>
      <div className={ ` flex flex-col items-center` }>
        <p>Artyom Korshykau</p>
      </div>
    </div>
  )
}