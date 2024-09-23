import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminDashboard() {
  return (
    <div className='container mx-auto p-4'>
      <Card className='w-[350px] mx-auto'>
        <CardHeader>
          <CardTitle>Admin dashboard</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Link href="/add-a-new-user">
            <Button className="w-full">Add a new user</Button>
          </Link>
          <Link href="/view-all-users">
            <Button className="w-full">View all users</Button>
          </Link>
          <p>Room bookings</p>
          <p>Meal bookings</p>
        </CardContent>
      </Card>
    </div>
  )
}
