import { Button } from '@/shared/components/Button'
import { LogOut } from 'lucide-react'


export const Logout = () => {
  return (
    <div className={ `w-2/4  h-full flex items-end justify-start mb-10 px-0` }>
      <Button className={ `bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0` }
              text={ 'Logout' }
              icon={ <LogOut color="#ffffff" strokeWidth={ 1.25 }/> }/>
    </div>
  )
}