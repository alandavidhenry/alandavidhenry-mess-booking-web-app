import RoomBookingForm from '@/components/RoomBookingForm'

async function getRooms() {
  const res = await fetch('http://localhost:3000/api/rooms', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch rooms')
  }
  return res.json()
}

export default async function BookARoomPage() {
  const rooms = await getRooms()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a room</h1>
      <RoomBookingForm rooms={rooms} />
    </div>
  )
}