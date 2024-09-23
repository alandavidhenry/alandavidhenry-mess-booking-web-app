import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className='container mx-auto p-4'>
      <Card className='w-[350px] mx-auto'>
        <CardHeader>
          <CardTitle>Welcome to Mess Booking App</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Link href='/(auth)/sign-in'>
            <Button className='w-full'>Sign in</Button>
          </Link>
          <Link href='/book-a-room'>
            <Button className='w-full'>Book a room</Button>
          </Link>
          <Link href='/book-a-meal'>
            <Button className='w-full'>Book a meal</Button>
          </Link>
          <Link href='/user-dashboard'>
            <Button className='w-full'>My bookings</Button>
          </Link>
          <Link href='/user-profile'>
            <Button className='w-full'>My profile</Button>
          </Link>
          <Link href='/admin-dashboard'>
            <Button className='w-full'>Admin dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
