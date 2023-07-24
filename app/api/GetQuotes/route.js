import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://quote-garden.onrender.com/api/v3/quotes',{cache:'no-store'})
  const {data} = await res.json()

  return NextResponse.json({ data })
}