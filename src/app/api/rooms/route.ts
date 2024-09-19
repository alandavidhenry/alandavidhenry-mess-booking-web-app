import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('roomBooking')
    const rooms = await db.collection('rooms').find({}).toArray()
    return NextResponse.json(rooms)
  } catch (error) {
    console.error('Error fetching rooms:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rooms' },
      { status: 500 }
    )
  }
}
