import { BicepsFlexed, CalendarDays, Rss, SunMoon } from 'lucide-react'
import { Rubik_Mono_One } from 'next/font/google'


const rubik = Rubik_Mono_One( {
  subsets: [ 'latin' ],
  weight: [ '400' ]
  
} )

export const Header = () => {
  return (
    <header
      className={ `flex justify-between items-center w-full h-24 bg-gradient-to-tr from-secondary to-primary fixed top-0 shadow-gray-300 shadow-xl` }>
      <div
        className={ ` w-[33%] ml-20 ${ rubik.className } text-white text-4xl flex justify-start items-center gap-2` }>
        <BicepsFlexed size={ 40 } color={ '#f8f8f8' }/>
        <p>Nexter</p>
      </div>
      <div className={ `mr-20 w-[33%] flex justify-end items-center gap-8` }>
        <SunMoon color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
        <CalendarDays color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
        <Rss color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
      </div>
    </header>
  )
}