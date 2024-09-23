import { MongoClient } from 'mongodb'

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const uri = process.env.MONGODB_URI
console.log('URI value:', uri)
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri as string, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise as Promise<MongoClient>
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri as string, options)
  clientPromise = client.connect()
}

export default clientPromise
