'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface Meal {
  _id: string;
  name: string;
  capacity: number;
  pricePerNight: number;
}

interface MealBookingFormProps {
  meals: Meal[];
}

export default function MealBookingForm({ meals }: MealBookingFormProps) {
  const [selectedMeal, setSelectedMeal] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/meal-bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mealId: selectedMeal, date }),
    })
    const data = await res.json()
    if (res.ok) {
      alert('Booking successful!')
      setSelectedMeal('')
      setDate('')
    } else {
      setError(data.error || 'Booking failed. Please try again.')
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Book a meal</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select onValueChange={setSelectedMeal} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a meal" />
            </SelectTrigger>
            <SelectContent>
              {meals.map((meal) => (
                <SelectItem key={meal._id} value={meal._id}>
                  {meal.name} - Capacity: {meal.capacity}, Price: ${meal.pricePerNight}/night
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
          <Button type="submit" className="w-full">Book a meal</Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </CardContent>
    </Card>
  )
}