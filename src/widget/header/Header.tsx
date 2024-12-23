import {  CalendarDays, Rss, SunMoon } from 'lucide-react'
import { Rubik_Mono_One } from 'next/font/google'


const rubik = Rubik_Mono_One( {
  subsets: [ 'latin' ],
  weight: [ '400' ]
  
} )

export const Header = () => {
  return (
    <header
      className={ `flex justify-between items-center bg-background w-full h-20 border-b border-[#C3073F] fixed top-0` }>
      <div
        className={ ` w-[33%] h-full ml-20 ${ rubik.className } flex justify-start items-center gap-2` }>
        <div className={ `h-0 text-white text-3xl flex items-center tracking-widest` }>Nexter</div>
      </div>
      <div className={ `mr-16 w-[33%] flex justify-end items-center gap-8` }>
        <SunMoon color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
        <CalendarDays color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
        <Rss color={ '#f8f8f8' } size={ 28 } strokeWidth={ 1.1 }/>
      </div>
    </header>
  )
}