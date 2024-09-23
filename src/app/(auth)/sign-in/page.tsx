import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignIn() {
  return (
    <div className='container mx-auto p-4'>
      <Card className='w-[350px] mx-auto'>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'></CardContent>
      </Card>
    </div>
  )
}
