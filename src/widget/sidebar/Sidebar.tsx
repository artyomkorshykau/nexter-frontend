import { User } from '@/features/sidebar/ui/User'
import { Menu } from '@/features/sidebar/ui/Menu'
import { Logout } from '@/features/sidebar/ui/Logout'


export const Sidebar = () => {
  return (
    <section
      className={ `w-80 h-screen border-r border-[#C3073F] flex flex-col items-center` }>
      <User/>
      <Menu/>
      <Logout/>
    </section>
  )
}