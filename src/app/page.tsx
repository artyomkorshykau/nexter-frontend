import { AuthWidget } from '@/widget/auth/AuthWidget'


export default function Home() {
  return (
    <main
      className={ `flex justify-center items-center h-screen bg-cover bg-center bg-gradient-to-tr from-secondary to-primary overflow-hidden` }>
      <AuthWidget/>
    </main>
  )
}
