'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'


type Props = {
  icon?: ReactNode
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ( { text, icon, ...buttonProps }: Props ) => {
  return (
    <button
      className={ `flex justify-center items-center gap-4 h-14 bg-gradient-to-tr from-background to-primary rounded-[5px] px-10 py-5 text-white active:opacity-85` }
      { ...buttonProps }
    >
      { icon }
      { text }
    </button>
  )
}