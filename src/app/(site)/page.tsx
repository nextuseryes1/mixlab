import Link from 'next/link'

export default function Home() {
  return (
    <header className="container py-4">
      <nav className="flex items-center gap-10">
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
      </nav>
    </header>
  )
}
