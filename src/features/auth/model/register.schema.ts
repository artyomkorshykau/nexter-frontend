import { z } from 'zod'


export const registerSchema = z.object( {
  firstname: z.string(),
  lastname: z.string(),
  username: z.string().min( 3, 'Никнейм должен иметь минимум 3 символа' ),
  password: z.string().max( 10, 'Пароль не должен иметь больше 10 символов' ).min( 3, 'Пароль должен иметь минимум 3 символа' )
} )

export type RegisterDataType = z.infer<typeof registerSchema>