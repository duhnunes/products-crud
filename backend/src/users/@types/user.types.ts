import { User } from '@prisma/client'

export type UserWhithoutPassword = Omit<User, 'password'> & {
  password?: string
}
