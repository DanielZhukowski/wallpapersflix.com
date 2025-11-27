#!/usr/bin/env node

/**
 * Image Sync Script
 * Scans public/ folders and generates data.ts entries for all images found
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'data.ts');

// Category mapping: folder name -> display name
const categoryMap = {
    '4k': '4K',
    'singers': 'Singers',
    'nature': 'Nature',
    'anime': 'Anime',
    'actress': 'Actress',
    'gaming': 'Gaming',
    'sport': 'Sport',
    'football': 'Football',
    'samurai': 'Samurai',
    'cars': 'Cars',
    'space': 'Space',
    'abstract': 'Abstract',
    'animals': 'Animals',
    'city': 'City',
    'movies': 'Movies',
    'trees': 'Trees',
    'countries': 'Countries',
    'fifa-2025': 'FIFA 2025',
    'naruto': 'Naruto',
    'pubg': 'PUBG',
    'btc': 'BTC',
    'cool': 'Cool',
    'bmw': 'BMW',
    'mercedes': 'Mercedes',
    'bugatti': 'Bugatti',
    'cyberpunk': 'Cyberpunk',
    'minimalist': 'Minimalist',
    'galaxy': 'Galaxy',
    'cats': 'Cats',
    'dogs': 'Dogs',
    'marvel': 'Marvel',
    'dc': 'DC',
    'oak-trees': 'Oak Trees',
    'palm-trees': 'Palm Trees',
    'pine-trees': 'Pine Trees',
    'japan': 'Japan',
    'usa': 'USA',
    'korea': 'Korea',
    'thailand': 'Thailand',
    'barcelona': 'Barcelona',
    'real-madrid': 'Real Madrid',
};

// Creative titles for each category
const creativeTitles = {
    '4K': [
        'Majestic Mountain Sunset', 'Neon Cityscape Night', 'Serene Ocean Horizon', 'Tropical Rainforest Mist',
        'Aurora Borealis Sky', 'Golden Desert Dunes', 'Cherry Blossom Spring', 'Snowy Alpine Peaks',
        'Vibrant Coral Reef', 'Urban Skyline Dusk'
    ],
    'Singers': [
        'Concert Spotlight Moment', 'Vintage Microphone Vibe', 'Abstract Sound Waves', 'Festival Crowd Energy',
        'Recording Studio Session', 'Vinyl Record Classic', 'Acoustic Guitar Soul', 'Stage Lights Show',
        'Vocal Performance Art', 'Music Notes Flow'
    ],
    'Nature': [
        'Peaceful Forest Path', 'Autumn Leaves Fall', 'Tropical Beach Paradise', 'Lavender Fields Forever',
        'Mountain Lake Reflection', 'Wildflower Meadow Sun', 'Bamboo Forest Zen', 'Coastal Cliff Waves',
        'Misty Morning Valley', 'Sunset Over Hills'
    ],
    'Anime': [
        'Cherry Blossom Girl', 'Epic Warrior Stance', 'Kyoto Temple Sunset', 'School Days Joy',
        'Floating Islands Fantasy', 'Cyberpunk City Neon', 'Forest Spirit Calm', 'Battle Energy Burst',
        'Magical Girl Sparkle', 'Mecha Robot Hangar'
    ],
    'Actress': [
        'Red Carpet Glamour', 'Vintage Cinema Hall', 'Film Reel Classic', 'Awards Night Gold',
        'Hollywood Studio Lot', 'Camera Lens Focus', 'Broadway Lights Bright', 'Fashion Shoot Style',
        'Elegant Portrait Shot', 'Movie Star Moment'
    ],
    'Gaming': [
        'Cyber Warrior Setup', 'Retro Arcade Glow', 'Esports Arena Live', 'Fantasy RPG World',
        'FPS Battle Station', 'Racing Sim Cockpit', 'Pixel Art Adventure', 'VR Reality Dive',
        'Console Controller Art', 'Strategy Map View'
    ],
    'Sport': [
        'Sprinter Motion Blur', 'Stadium Floodlights', 'Basketball Court Dunk', 'Running Track Dawn',
        'Gym Workout Power', 'Swimming Pool Lane', 'Tennis Match Point', 'Mountain Bike Trail',
        'Soccer Goal Moment', 'Boxing Ring Bell'
    ],
    'Football': [
        'Packed Stadium Roar', 'Perfect Pitch Grass', 'Goal Net Focus', 'Aerial Stadium View',
        'Boots on the Field', 'Corner Flag Kick', 'Mid-Air Volley Shot', 'Empty Arena Calm',
        'Trophy Lift Glory', 'Team Huddle Spirit'
    ],
    'Samurai': [
        'Lone Warrior Sunset', 'Katana Blade Edge', 'Ancient Temple Guard', 'Bamboo Forest Duel',
        'Calligraphy Sword Art', 'Feudal Castle View', 'Zen Garden Meditation', 'Samurai Armor Detail',
        'Ronin Wanderer Path', 'Cherry Blossom Strike'
    ],
    'Cars': [
        'Supercar Speed Blur', 'Classic Muscle Shine', 'Luxury Sedan Interior', 'Drift Smoke Action',
        'Neon Night Drive', 'Vintage Roadster Trip', 'Formula Racing Track', 'Off-Road Adventure',
        'Concept Car Future', 'Garage Mechanic Bay'
    ],
    'City': [
        'New York Skyline', 'Tokyo Neon Streets', 'Paris Eiffel View', 'London Bridge Fog',
        'Dubai Burj Heights', 'Hong Kong Harbor', 'Chicago River Walk', 'Sydney Opera House',
        'Shanghai Tower Lights', 'Singapore Gardens'
    ],
    'Countries': [
        'Swiss Alps Village', 'Italian Amalfi Coast', 'Greek Santorini Blue', 'French Provence Fields',
        'Iceland Waterfall Mist', 'Norwegian Fjord View', 'Canadian Rocky Lake', 'Australian Outback Red'
    ],
    'FIFA 2025': [
        'Ultimate Team Card', 'Career Mode Trophy', 'Pro Clubs Squad', 'Stadium Atmosphere',
        'Next Gen Graphics', 'Legendary Player Icon', 'World Cup Final', 'Street Football Skill'
    ],
    'Naruto': [
        'Hidden Leaf Village', 'Rasengan Energy Ball', 'Sasuke Uchiha Sharingan', 'Team 7 Reunion',
        'Hokage Monument View', 'Akatsuki Cloud Robe', 'Nine Tails Fox Chakra', 'Kakashi Lightning Blade'
    ],
    'PUBG': [
        'Pochinki Battle Royale', 'Erangel Map Drop', 'Winner Winner Chicken', 'Squad Goals Victory',
        'Sniper Nest View', 'Airdrop Crate Smoke', 'Vehicle Chase Action', 'Final Circle Tension'
    ],
    'BTC': [
        'Bitcoin Gold Coin', 'Blockchain Network', 'Crypto Market Chart', 'Digital Wallet Secure',
        'Mining Rig Setup', 'Decentralized Web', 'Satoshi Nakamoto Code', 'Bull Run Graph'
    ],
    'Cool': [
        'Abstract Neon Flow', 'Vaporwave Aesthetic', 'Glitch Art Portrait', 'Minimalist Geometric',
        'Street Art Graffiti', 'Retro Synthwave Sun', 'Dark Mode Elegant', 'Holographic Texture'
    ],
    'BMW': [
        'M4 Competition Drift', 'M3 Touring Blue', 'i8 Concept Hybrid', 'Classic E30 Legend',
        'M5 CS Track Day', 'X5 M SUV Power', 'Z4 Roadster Top Down', 'Angel Eyes Headlights'
    ],
    'Cyberpunk': [
        'Night City Streets', 'Neon Rain Reflection', 'Cyborg Girl Portrait', 'Flying Car Future',
        'Hacker Terminal Code', 'Augmented Reality UI', 'Dystopian Alleyway', 'Robot Arm Tech'
    ],
    'Minimalist': [
        'Clean White Desk', 'Simple Line Art', 'Pastel Gradient Sky', 'Monochrome Architecture',
        'Single Leaf Macro', 'Geometric Shape 3D', 'Soft Shadow Light', 'Negative Space Design'
    ],
    'Japan': [
        'Mount Fuji Sunrise', 'Tokyo Shibuya Crossing', 'Kyoto Fushimi Inari', 'Osaka Dotonbori Neon',
        'Hiroshima Torii Gate', 'Nara Deer Park', 'Himeji Castle White', 'Arashiyama Bamboo Grove',
        'Sapporo Snow Festival', 'Okinawa Beach Blue'
    ],
    'USA': [
        'New York Times Square', 'Grand Canyon Sunset', 'Golden Gate Bridge', 'Las Vegas Strip',
        'Miami South Beach', 'Yellowstone Geyser', 'Chicago Bean Reflection', 'Hollywood Sign View'
    ],
    'Korea': [
        'Seoul N Tower Night', 'Gyeongbokgung Palace', 'Busan Haeundae Beach', 'Jeju Island Coast',
        'Bukchon Hanok Village', 'Gangnam District Light', 'Seoraksan Mountain Fall', 'Incheon Bridge View'
    ],
    'Thailand': [
        'Bangkok Wat Arun', 'Phuket Phi Phi Island', 'Chiang Mai Temple', 'Ayutthaya Ruins',
        'Railay Beach Sunset', 'Floating Market Boat', 'Elephant Sanctuary', 'Khao Sok Lake'
    ],
    'Barcelona': [
        'Sagrada Familia View', 'Park Guell Mosaic', 'Camp Nou Stadium', 'Las Ramblas Street',
        'Casa Batllo Design', 'Barceloneta Beach', 'Gothic Quarter Lane', 'Montjuic Magic Fountain'
    ],
    'Real Madrid': [
        'Santiago Bernabeu', 'White Kit Jersey', 'Champions League Cup', 'Cibeles Celebration',
        'Hala Madrid Scarf', 'Legendary Number 7', 'Training Ground Pitch', 'Madrid Skyline View'
    ]
};

function scanFolder(folder) {
    const folderPath = path.join(PUBLIC_DIR, folder);
    if (!fs.existsSync(folderPath)) return [];

    const files = fs.readdirSync(folderPath);
    // Sort files naturally to keep order (e.g. 1, 2, 10 instead of 1, 10, 2)
    const images = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    const categoryName = categoryMap[folder] || folder;
    const titles = creativeTitles[categoryName] || [];

    return images.map((img, idx) => {
        const basename = path.basename(img, path.extname(img));

        // Use a creative title if available, otherwise fallback to generic
        // Use modulo to cycle through titles if we have more images than titles
        const title = titles.length > 0
            ? titles[idx % titles.length]
            : `${categoryName} Wallpaper ${idx + 1}`;

        // Add a suffix if we're cycling through titles to keep them unique
        const uniqueTitle = idx >= titles.length && titles.length > 0
            ? `${title} ${Math.floor(idx / titles.length) + 1}`
            : title;

        return {
            id: basename, // Use filename as ID for stability
            title: uniqueTitle,
            imageUrl: `/${folder}/${img}`,
            category: categoryName,
            resolution: '1920x1080'
        };
    });
}

function generateDataFile() {
    const wallpaperData = {};

    Object.keys(categoryMap).forEach(folder => {
        const images = scanFolder(folder);
        const categoryName = categoryMap[folder];
        if (images.length > 0) {
            wallpaperData[categoryName] = images;
        }
    });

    // Read existing data.ts to preserve categories and subcategories
    let existingContent = fs.readFileSync(DATA_FILE, 'utf8');

    // Extract categories and subcategories sections
    const categoriesMatch = existingContent.match(/export const categories = \[([\s\S]*?)\];/);
    const subcategoriesMatch = existingContent.match(/export const subcategories = \[([\s\S]*?)\];/);

    // Generate new wallpapers section
    let wallpapersSection = 'export const wallpapers: Record<string, Wallpaper[]> = {\n';

    Object.entries(wallpaperData).forEach(([category, images]) => {
        wallpapersSection += `  '${category}': [\n`;
        images.forEach(img => {
            wallpapersSection += `    { id: '${img.id}', title: '${img.title}', imageUrl: '${img.imageUrl}', category: '${img.category}', resolution: '${img.resolution}' },\n`;
        });
        wallpapersSection += `  ],\n`;
    });

    wallpapersSection += '};\n';

    // Rebuild the file
    const newContent = `export const categories = ${categoriesMatch ? categoriesMatch[0].replace('export const categories = ', '') : '[]'};

export const subcategories = ${subcategoriesMatch ? subcategoriesMatch[0].replace('export const subcategories = ', '') : '[]'};

export interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  resolution: string;
}

${wallpapersSection}

export const getAllWallpapers = () => {
  return Object.values(wallpapers).flat();
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(c => c.slug === slug) ||
    subcategories.find(c => c.slug === slug);
};

export const getWallpapersByCategory = (slug: string) => {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  return wallpapers[category.name] || [];
};
`;

    fs.writeFileSync(DATA_FILE, newContent);
    console.log('✅ data.ts updated successfully!');

    // Print summary
    console.log('\n📊 Summary:');
    Object.entries(wallpaperData).forEach(([category, images]) => {
        console.log(`  ${category}: ${images.length} images`);
    });
}

generateDataFile();
