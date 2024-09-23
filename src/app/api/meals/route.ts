import { NextResponse } from 'next/server'

export async function GET() {
  const meals = [
    { id: 1, name: 'Breakfast' },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' }
  ]
  return NextResponse.json(meals)
}
