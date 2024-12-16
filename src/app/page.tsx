import Image from 'next/image'
import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound, UserRoundPen } from 'lucide-react'


export default function Home() {
  return (
    <main
      className={ `flex justify-center items-center h-screen bg-cover bg-center bg-gradient-to-tr from-background to-primary overflow-hidden` }>
      <div className={ `flex justify-center items-center w-3/4 h-3/4 bg-white rounded-2xl p-12 slide-top-animation` }>
        <div className={ `flex items-end w-[60%] h-full` }>
          <Image
            alt={ '' }
            src={ '/images/stock.png' }
            width={ 4000 }
            height={ 3000 }
          />
        </div>
        <div className={ `w-[40%] h-full flex justify-around items-start flex-col` }>
          <h1 className={ `text-4xl` }>Регистрация</h1>
          <TextField icon={ <UserRoundPen color="#3c41b8"/> }/>
          <TextField icon={ <UserRoundPen color="#3c41b8"/> }/>
          <TextField icon={ <UserRound color="#3c41b8"/> }/>
          <TextField icon={ <KeyRound color="#3c41b8"/> }/>
          <div>Зарегистрироваться</div>
          <div className={ `flex` }>
            <p>У меня есть аккаунт</p>
            <div>Войти</div>
          </div>
        </div>
      </div>
    </main>
  )
}
