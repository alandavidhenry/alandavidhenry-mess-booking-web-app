import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function POST(request: Request) {
  const body = await request.json()
  const client = await clientPromise
  const db = client.db('roomBooking')
  const result = await db.collection('bookings').insertOne(body)
  return NextResponse.json(result)
}
