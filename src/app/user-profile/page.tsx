import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UserProfile() {
  return (
    <div className='container mx-auto p-4'>
      <Card className='w-[350px] mx-auto'>
        <CardHeader>
          <CardTitle>User profile</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'></CardContent>
      </Card>
    </div>
  )
}
