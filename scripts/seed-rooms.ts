import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

console.log('MONGODB_URI in seed-rooms.ts:', process.env.MONGODB_URI)

import clientPromise from '../src/lib/db'

async function seedRooms() {
  const client = await clientPromise
  const db = client.db('roomBooking')

  const rooms = [
    { name: 'Single Room', capacity: 1, pricePerNight: 10 },
    { name: 'Family Room', capacity: 4, pricePerNight: 20 }
  ]

  try {
    await db.collection('rooms').deleteMany({}) // Clear existing rooms
    const result = await db.collection('rooms').insertMany(rooms)
    console.log(`${result.insertedCount} rooms added to the database`)
  } catch (error) {
    console.error('Error seeding rooms:', error)
  } finally {
    await client.close()
  }
}

seedRooms().catch(console.error)
