import BookingForm from '@/components/BookingForm'

async function getRooms() {
  const res = await fetch('http://localhost:3000/api/rooms', { cache: 'no-store' })
  if (!res.ok) {
    console.error("Failed to fetch rooms:", await res.text())
    throw new Error('Failed to fetch rooms')
  }
  return res.json()
}

export default async function BookPage() {
  const rooms = await getRooms()

  return (
    <div>
      <h1>Book a Room</h1>
      <BookingForm rooms={rooms} />
    </div>
  )
}