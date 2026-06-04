import {NextRequest, NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'freezer', 'items.json');

export async function GET() {
    try {
        const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading freezer data:', error);
        return NextResponse.json({ error: 'Failed to read items' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, amount, unit } = body;

        if (!id || !amount || !unit) {
            return NextResponse.json({ error: 'id, amount and unit are required' }, { status: 400 });
        }

        const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);

        const existingIndex = data.items.findIndex((item: { id: string }) => item.id === id);
        if (existingIndex >= 0) {
            data.items[existingIndex] = { id, amount: String(amount), unit };
        } else {
            data.items.push({ id, amount: String(amount), unit });
        }

        data.lastModified = new Date().toISOString();

        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');

        return NextResponse.json({ success: true, items: data.items });
    } catch (error) {
        console.error('Error writing freezer data:', error);
        return NextResponse.json({ error: 'Failed to save item' }, { status: 500 });
    }
}

