'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface Room {
  _id: string;
  name: string;
  capacity: number;
  pricePerNight: number;
}

interface RoomBookingFormProps {
  rooms: Room[];
}

export default function RoomBookingForm({ rooms }: RoomBookingFormProps) {
  const [selectedRoom, setSelectedRoom] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/room-bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomId: selectedRoom, date }),
    })
    const data = await res.json()
    if (res.ok) {
      alert('Booking successful!')
      setSelectedRoom('')
      setDate('')
    } else {
      setError(data.error || 'Booking failed. Please try again.')
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Book a room</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select onValueChange={setSelectedRoom} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a room" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((room) => (
                <SelectItem key={room._id} value={room._id}>
                  {room.name} - Capacity: {room.capacity}, Price: ${room.pricePerNight}/night
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Book a room</Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </CardContent>
    </Card>
  )
}