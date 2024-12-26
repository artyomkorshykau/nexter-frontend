import { Header } from '@/widget/header/Header'
import { ReactNode } from 'react'


export default function Layout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>

  )
}