import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

type Props = {
  children: React.ReactNode
}

export default async function AccountLayout({ children }: Props) {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  return <div>{children}</div>
}
