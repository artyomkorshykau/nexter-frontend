import { Button } from '@/shared/components/Button'
import { LayoutDashboard, ListChecks, Settings } from 'lucide-react'


export const Menu = () => {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <Button className={`bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0`}
        icon={<LayoutDashboard color="#ffffff" strokeWidth={1.25} />}
      />
      <Button className={`bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0`}
        icon={<ListChecks color="#ffffff" strokeWidth={1.25} />}
      />
      <Button className={`bg-none uppercase tracking-widest hover:text-[#C3073F] hover:font-bold !px-0`}
        icon={<Settings color="#ffffff" strokeWidth={1.25} />}
      />
    </div>
  )
}