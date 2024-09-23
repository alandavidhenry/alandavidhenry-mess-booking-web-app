import { NextResponse } from 'next/server'

export async function GET() {
  const meals = ['breakfast', 'lunch', 'dinner']
  return NextResponse.json(meals)
}
