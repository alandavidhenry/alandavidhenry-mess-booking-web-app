import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function POST(request: Request) {
  const body = await request.json()
  const client = await clientPromise
  const db = client.db('Bookings')
  const result = await db.collection('mealBookings').insertOne(body)
  return NextResponse.json(result)
}
