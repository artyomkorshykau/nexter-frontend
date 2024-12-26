import { Button } from '@/shared/components/Button'
import { LogOut } from 'lucide-react'


export const Logout = () => {
  return (
    <div className={` w-full flex items-end justify-center`}>
      <Button className={`bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0`}
        icon={<LogOut color="#ffffff" strokeWidth={1.25} />} />
    </div>
  )
}