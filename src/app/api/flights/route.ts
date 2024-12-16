import { NextResponse } from 'next/server';
import FlightService from "@/services/fligths/service";

export async function GET() {
  try {
    const flights = await FlightService.getFlights();
    return NextResponse.json(flights);
  } catch (error) {
    console.error('Error fetching flights:', error);
    return NextResponse.json({ error: 'Failed to fetch flights' }, { status: 500 });
  }
}