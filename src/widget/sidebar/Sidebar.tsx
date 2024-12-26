import { Logout } from '@/features/sidebar/ui/Logout'
import { Menu } from '@/features/sidebar/ui/Menu'
import { User } from '@/features/sidebar/ui/User'


export const Sidebar = () => {
  return (
    <section
      className={`mt-24 w-24 h-[90%] border-r border-[#C3073F] flex flex-col justify-between slide-in-left bg-background`}>
      <User />
      <Menu />
      <Logout />
    </section>
  )
}