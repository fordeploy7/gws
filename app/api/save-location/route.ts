import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Location from '@/models/Location';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const { latitude, longitude } = await request.json();

        if (!latitude || !longitude) {
            return NextResponse.json(
                { error: 'Latitude and longitude are required' },
                { status: 400 }
            );
        }

        const newLocation = await Location.create({
            latitude,
            longitude,
        });

        return NextResponse.json({ success: true, data: newLocation });
    } catch (error) {
        console.error('Error saving location:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
