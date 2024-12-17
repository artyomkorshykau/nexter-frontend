'use client'

import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Eye, EyeOff, TriangleAlert } from 'lucide-react'


type Props = {
  icon?: ReactNode
  register?: UseFormRegisterReturn
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ( { icon, register, error, ...inputProps }: Props ) => {
  
  const [ hide, setHide ] = useState( true )
  
  return (
    
    <div className={ `w-full relative` }>
      
      <div className={ `flex items-center border border-primary h-14 w-full p-2 rounded-[8px] gap-2` }>
        { icon }
        <input
          { ...inputProps }
          { ...register }
          className={ `w-full h-full outline-none` }
          type={ inputProps.type === 'password' && hide ? 'password' : 'text' }
        />
        { inputProps.type === 'password' && <div
          onClick={ () => setHide( !hide ) }
          className={ `hover:cursor-pointer` }
        >
          { !hide
            ? <Eye color="#3c41b8"/>
            : <EyeOff color="#3c41b8"/> }
        </div> }
      
      </div>
      
      { error && <div className={ `flex justify-start items-center gap-1 absolute text-[14px] text-red-600` }>
        <TriangleAlert size={ 14 } color={ '#dc2626' }/>
        { error }
      
      </div> }
    
    </div>
  
  )
}