import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { latitude, longitude } = await request.json();

        if (!latitude || !longitude) {
            return NextResponse.json(
                { error: 'Latitude and longitude are required' },
                { status: 400 }
            );
        }

        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'user_locations.json');

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        let locations = [];

        // Read existing data if file exists
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                locations = JSON.parse(fileContent);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                // If file is corrupt, start fresh or handle accordingly. 
                // For now, we'll just start fresh to ensure we can save the new data.
                locations = [];
            }
        }

        // Append new location
        const newLocation = {
            latitude,
            longitude,
            timestamp: new Date().toISOString(),
        };

        locations.push(newLocation);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(locations, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving location:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
