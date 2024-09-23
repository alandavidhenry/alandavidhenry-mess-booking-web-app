import MealBookingForm from '@/components/MealBookingForm'

async function getMeals() {
  const res = await fetch('http://localhost:3000/api/meals', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch meals')
  }
  return res.json()
}

export default async function BookAMealPage() {
  const meals = await getMeals()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a meal</h1>
      <MealBookingForm meals={meals} />
    </div>
  )
}