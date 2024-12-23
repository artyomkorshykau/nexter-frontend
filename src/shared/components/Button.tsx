'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'


type Props = {
  icon?: ReactNode
  text: string
  className: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ( { text, icon, className, ...buttonProps }: Props ) => {
  return (
    <button
      className={ `flex justify-center items-center gap-4 h-14 bg-gradient-to-tr from-background to-primary rounded-[5px] px-10 py-5 text-white active:opacity-85 ${ buttonProps.disabled ? 'opacity-20 cursor-not-allowed active:opacity-20' : '' } ${ className }` }
      { ...buttonProps }
    >
      { icon }
      { text }
    </button>
  )
}