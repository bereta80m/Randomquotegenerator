import { NextResponse } from 'next/server'
import cors from 'cors';

const corsHandler = cors({
  origin: 'https://randomquotegenerator-loa9d1myh-bereta80m.vercel.app/api/GetQuotes', // Replace with your actual client domain
  methods: ['GET'], // Specify the allowed HTTP methods
});

export async function GET(req) {
  await corsHandler(req, null);
  const res = await fetch('https://quote-garden.onrender.com/api/v3/quotes',{cache:'no-store'})
  const {data} = await res.json()

  return NextResponse.json({ data })
}