import { redirect } from 'next/navigation'
import { verifyEmail } from '@/server/auth/verifyEmail'

type Props = {
  searchParams: Promise<{
    token?: string
  }>
}

export default async function VerifyEmail({ searchParams }: Props) {
  const params = await searchParams
  const token = params.token

  if (!token) {
    return <div>Invalid verification link</div>
  }

  try {
    await verifyEmail(token)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Verification failed'

    if (message === 'Token expired') {
      return <div>Link has expired. Please request a new one.</div>
    }

    return <div>Verification failed. Invalid link.</div>
  }

  redirect('/login')
}
