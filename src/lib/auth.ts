import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { verifyPassword } from './password'
import prisma from './prisma'

class InvalidCredentials extends CredentialsSignin {
  code = 'invalid_credentials'
}

class EmailNotVerified extends CredentialsSignin {
  code = 'email_not_verified'
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          throw new InvalidCredentials()
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          }
        })

        if (!user || !user.password) {
          throw new InvalidCredentials()
        }

        if (!user.emailVerified) {
          throw new EmailNotVerified()
        }

        const isValid = await verifyPassword(credentials.password as string, user.password)

        if (!isValid) {
          throw new InvalidCredentials()
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  }
})
