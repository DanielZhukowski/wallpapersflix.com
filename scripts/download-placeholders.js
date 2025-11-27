const fs = require('fs');
const path = require('path');
const https = require('https');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Replicating the logic from src/lib/data.ts
const generateWallpapers = (count, category, seedOffset = 0) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

    return Array.from({ length: count }).map((_, i) => {
        const seed = Math.abs((category.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + i + seedOffset) % 1000);
        const width = 1920;
        const height = 1080;

        return {
            id: `${category}-${i}`,
            title: `${category} Wallpaper ${i + 1}`,
            imageUrl: `https://picsum.photos/seed/${seed}${category.replace(/\s+/g, '')}/${width}/${height}`,
            category: category,
            folder: categorySlug,
            filename: `${categorySlug}-${i + 1}.jpg`
        };
    });
};

const categories = [
    '4K', 'Singers', 'Nature', 'Anime', 'Actress',
    'Sport', 'Football', 'Samurai', 'Cars',
    'City',
    'Countries', 'FIFA 2025', 'Naruto', 'PUBG',
    'BMW', 'Cyberpunk',
    'USA', 'Korea', 'Thailand', 'Barcelona', 'Real Madrid'
];

// Gaming and Japan have mixed content in data.ts, but for now let's just download the generated ones for them too if needed, 
// or skip them if they are already local. The user said "keep the images we have now", which implies the Picsum ones for most categories.
// I will include Gaming and Japan generated parts.

const allWallpapers = [];

categories.forEach(cat => {
    // Default count is 8 for main, 4 for sub. Let's just use 8 for main and 4 for others as per data.ts
    // Actually data.ts has specific counts.
    let count = 8;
    if (['FIFA 2025', 'Naruto', 'PUBG', 'BMW', 'Cyberpunk',
        'USA', 'Korea', 'Thailand', 'Barcelona', 'Real Madrid'].includes(cat)) {
        count = 4;
    }

    allWallpapers.push(...generateWallpapers(count, cat));
});

// Add generated parts of Gaming (indices 4-7)
allWallpapers.push(...generateWallpapers(4, 'Gaming', 100));


const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                // Handle redirect (Picsum does this)
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

async function main() {
    console.log(`Starting download of ${allWallpapers.length} images...`);

    for (const wp of allWallpapers) {
        const dir = path.join(PUBLIC_DIR, wp.folder);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const filepath = path.join(dir, wp.filename);
        if (fs.existsSync(filepath)) {
            console.log(`Skipping ${wp.filename} (already exists)`);
            continue;
        }

        console.log(`Downloading ${wp.filename}...`);
        try {
            await downloadImage(wp.imageUrl, filepath);
        } catch (e) {
            console.error(`Failed to download ${wp.filename}:`, e.message);
        }

        // Small delay to be nice to Picsum
        await new Promise(r => setTimeout(r, 100));
    }

    console.log('Done!');
}

main();
