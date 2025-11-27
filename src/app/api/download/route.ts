import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const imageUrl = searchParams.get('url');
    const filename = searchParams.get('filename') || 'wallpaper.jpg';

    if (!imageUrl) {
        return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
    }

    try {
        let arrayBuffer: ArrayBuffer;
        let contentType = 'image/jpeg';

        // Check if it's a local file (starts with /)
        if (imageUrl.startsWith('/')) {
            // Local file from public directory
            const filePath = join(process.cwd(), 'public', imageUrl);

            // Determine content type from file extension
            if (imageUrl.endsWith('.png')) {
                contentType = 'image/png';
            } else if (imageUrl.endsWith('.webp')) {
                contentType = 'image/webp';
            } else if (imageUrl.endsWith('.svg')) {
                contentType = 'image/svg+xml';
            }

            const fileBuffer = await readFile(filePath);
            arrayBuffer = fileBuffer.buffer.slice(
                fileBuffer.byteOffset,
                fileBuffer.byteOffset + fileBuffer.byteLength
            );
        } else {
            // Remote URL - fetch it
            const response = await fetch(imageUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            const blob = await response.blob();
            arrayBuffer = await blob.arrayBuffer();
        }

        // Return the image with download headers
        return new NextResponse(arrayBuffer, {
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': `attachment; filename="${filename}"`,
                'Cache-Control': 'public, max-age=31536000',
            },
        });
    } catch (error) {
        console.error('Download error:', error);
        return NextResponse.json({ error: 'Failed to download image' }, { status: 500 });
    }
}
