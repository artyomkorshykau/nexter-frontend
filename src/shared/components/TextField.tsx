'use client'

import { InputHTMLAttributes, ReactNode } from 'react'


type Props = {
  icon?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ( { icon, ...inputProps }: Props ) => {
  return (
    <div className={ `flex items-center border border-text h-14 w-full p-2 rounded-[8px] gap-2` }>
      { icon }
      <input
        { ...inputProps }
        className={ `w-full h-full outline-none` }
      />
    </div>
  )
}