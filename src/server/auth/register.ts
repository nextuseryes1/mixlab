'use server'

import { randomUUID } from 'crypto'
import { DOMAIN_URL } from '@/lib/config'
import { hashPassword } from '@/lib/password'
import prisma from '@/lib/prisma'
import { sendVerificationEmail } from './sendVerificationEmail'

type RegisterProps = {
  name: string
  email: string
  password: string
}

export async function register(data: RegisterProps) {
  const hashedPassword = await hashPassword(data.password)

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
    }
  })

  const token = randomUUID()

  await prisma.verificationToken.create({
    data: {
      identifier: user.email,
      token,
      expires: new Date(Date.now() + 1000 * 60 * 60)
    }
  })

  const url = `${DOMAIN_URL}/verify-email?token=${token}`

  await sendVerificationEmail(user.email, url)

  return user
}
