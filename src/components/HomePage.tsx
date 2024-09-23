import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Room Booking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/signin">
            <Button className="w-full">Sign In</Button>
          </Link>
          <Link href="/book">
            <Button className="w-full">Book a Room</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}