'use client'

import { useState } from 'react'

export default function BookingForm({ rooms }: any) {
  const [selectedRoom, setSelectedRoom] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ room: selectedRoom, date })
    })
    if (res.ok) {
      alert('Booking successful!')
      setSelectedRoom('')
      setDate('')
    } else {
      alert('Booking failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
        required
      >
        <option value=''>Select a room</option>
        {rooms.map((room: any) => (
          <option key={room._id} value={room._id}>
            {room.name}
          </option>
        ))}
      </select>
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type='submit'>Book Room</button>
    </form>
  )
}
