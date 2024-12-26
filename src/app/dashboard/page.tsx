import { Sidebar } from '@/widget/sidebar/Sidebar'


export default function Dashboard() {
  return (
    <main
      className={`flex justify-start items-end h-screen bg-background overflow-hidden text-white`}>
      <Sidebar />
      <div className={`h-[90%] mt-20 w-full`}>
        Content
      </div>
    </main>
  )
}
