import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ViewAllUsers() {
  return (
    <div className='container mx-auto p-4'>
      <Card className='w-[350px] mx-auto'>
        <CardHeader>
          <CardTitle>View all users</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'></CardContent>
      </Card>
    </div>
  )
}
