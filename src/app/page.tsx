import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to Room Booking</h1>
      <nav>
        <Link href='/signin'>Sign In</Link>
        <Link href='/book'>Book a Room</Link>
      </nav>
    </main>
  )
}
