import { Button } from '@/shared/components/Button'
import { LayoutDashboard, ListChecks, Settings } from 'lucide-react'


export const Menu = () => {
  return (
    <div className={ `w-2/4 mt-24 flex flex-col items-start ` }>
      <Button className={ `bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0` }
              text={ 'Dashboard' }
              icon={ <LayoutDashboard color="#ffffff" strokeWidth={ 1.25 }/> }/>
      <Button className={ `bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0` }
              text={ 'Todo lists' }
              icon={ <ListChecks color="#ffffff" strokeWidth={ 1.25 }/> }/>
      <Button className={ `bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0` }
              text={ 'Settings' }
              icon={ <Settings color="#ffffff" strokeWidth={ 1.25 }/> }/>
    </div>
  )
}