import Image from 'next/image'


export const User = () => {
  return (
    <div className={`w-full flex flex-col justify-center items-center mt-5`}>
      <div className={`rounded-full w-14 h-14 overflow-hidden`}>
        <Image
          alt={''}
          src={'/images/avatar-placeholder.jpg'}
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}