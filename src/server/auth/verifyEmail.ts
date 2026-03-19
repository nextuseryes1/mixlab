'use server'

import prisma from '@/lib/prisma'

export async function verifyEmail(token: string) {
  const verification = await prisma.verificationToken.findUnique({
    where: { token }
  })

  if (!verification) {
    throw new Error('Invalid token')
  }

  if (verification.expires < new Date()) {
    await prisma.verificationToken.delete({ where: { token } })
    throw new Error('Token expired')
  }

  await prisma.user.update({
    where: { email: verification.identifier },
    data: { emailVerified: new Date() }
  })

  await prisma.verificationToken.delete({ where: { token } })
}
