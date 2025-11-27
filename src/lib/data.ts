export const categories = [
  { name: '4K', slug: '4k-wallpapers' },
  { name: 'Singers', slug: 'singers-wallpapers' },
  { name: 'Nature', slug: 'nature-wallpapers' },
  { name: 'Anime', slug: 'anime-wallpapers' },
  { name: 'Actress', slug: 'actress-wallpapers' },
  { name: 'Gaming', slug: 'gaming-wallpapers' },
  { name: 'Sport', slug: 'sport-wallpapers' },
  { name: 'Football', slug: 'football-wallpapers' },
  { name: 'Samurai', slug: 'samurai-wallpapers' },
  { name: 'Cars', slug: 'cars-wallpapers' },
  { name: 'City', slug: 'city-wallpapers' },
  { name: 'Countries', slug: 'countries-wallpapers' },
];;

export const subcategories = [
  { name: 'FIFA 2025', slug: 'fifa-2025-wallpapers', parentSlug: 'gaming-wallpapers' },
  { name: 'Naruto', slug: 'naruto-wallpapers', parentSlug: 'anime-wallpapers' },
  { name: 'PUBG', slug: 'pubg-wallpapers', parentSlug: 'gaming-wallpapers' },
  { name: 'BMW', slug: 'bmw-wallpapers', parentSlug: 'cars-wallpapers' },
  { name: 'Cyberpunk', slug: 'cyberpunk-wallpapers', parentSlug: 'gaming-wallpapers' },
  { name: 'Japan', slug: 'japan-wallpapers', parentSlug: 'countries-wallpapers' },
  { name: 'USA', slug: 'usa-wallpapers', parentSlug: 'countries-wallpapers' },
  { name: 'Korea', slug: 'korea-wallpapers', parentSlug: 'countries-wallpapers' },
  { name: 'Thailand', slug: 'thailand-wallpapers', parentSlug: 'countries-wallpapers' },
  { name: 'Barcelona', slug: 'barcelona-wallpapers', parentSlug: 'football-wallpapers' },
  { name: 'Real Madrid', slug: 'real-madrid-wallpapers', parentSlug: 'football-wallpapers' },
];;

export interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  resolution: string;
}

export const wallpapers: Record<string, Wallpaper[]> = {
  '4K': [
    { id: '4k-1', title: 'Majestic Mountain Sunset', imageUrl: '/4k/4k-1.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-2', title: 'Neon Cityscape Night', imageUrl: '/4k/4k-2.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-3', title: 'Serene Ocean Horizon', imageUrl: '/4k/4k-3.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-4', title: 'Tropical Rainforest Mist', imageUrl: '/4k/4k-4.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-5', title: 'Aurora Borealis Sky', imageUrl: '/4k/4k-5.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-6', title: 'Golden Desert Dunes', imageUrl: '/4k/4k-6.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-7', title: 'Cherry Blossom Spring', imageUrl: '/4k/4k-7.png', category: '4K', resolution: '1920x1080' },
    { id: '4k-8', title: 'Snowy Alpine Peaks', imageUrl: '/4k/4k-8.png', category: '4K', resolution: '1920x1080' },
  ],
  'Singers': [
    { id: 'singers-1', title: 'Concert Spotlight Moment', imageUrl: '/singers/singers-1.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-2', title: 'Vintage Microphone Vibe', imageUrl: '/singers/singers-2.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-3', title: 'Abstract Sound Waves', imageUrl: '/singers/singers-3.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-4', title: 'Festival Crowd Energy', imageUrl: '/singers/singers-4.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-5', title: 'Recording Studio Session', imageUrl: '/singers/singers-5.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-6', title: 'Vinyl Record Classic', imageUrl: '/singers/singers-6.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-7', title: 'Acoustic Guitar Soul', imageUrl: '/singers/singers-7.png', category: 'Singers', resolution: '1920x1080' },
    { id: 'singers-8', title: 'Stage Lights Show', imageUrl: '/singers/singers-8.png', category: 'Singers', resolution: '1920x1080' },
  ],
  'Nature': [
    { id: 'nature-1', title: 'Peaceful Forest Path', imageUrl: '/nature/nature-1.png', category: 'Nature', resolution: '1920x1080' },
    { id: 'nature-2', title: 'Autumn Leaves Fall', imageUrl: '/nature/nature-2.png', category: 'Nature', resolution: '1920x1080' },
    { id: 'nature-3', title: 'Tropical Beach Paradise', imageUrl: '/nature/nature-3.png', category: 'Nature', resolution: '1920x1080' },
    { id: 'nature-4', title: 'Lavender Fields Forever', imageUrl: '/nature/nature-4.png', category: 'Nature', resolution: '1920x1080' },
    { id: 'nature-6', title: 'Mountain Lake Reflection', imageUrl: '/nature/nature-6.png', category: 'Nature', resolution: '1920x1080' },
    { id: 'nature-8', title: 'Wildflower Meadow Sun', imageUrl: '/nature/nature-8.png', category: 'Nature', resolution: '1920x1080' },
  ],
  'Anime': [
    { id: 'anime-1', title: 'Cherry Blossom Girl', imageUrl: '/anime/anime-1.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-2', title: 'Epic Warrior Stance', imageUrl: '/anime/anime-2.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-3', title: 'Kyoto Temple Sunset', imageUrl: '/anime/anime-3.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-4', title: 'School Days Joy', imageUrl: '/anime/anime-4.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-5', title: 'Floating Islands Fantasy', imageUrl: '/anime/anime-5.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-6', title: 'Cyberpunk City Neon', imageUrl: '/anime/anime-6.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-7', title: 'Forest Spirit Calm', imageUrl: '/anime/anime-7.png', category: 'Anime', resolution: '1920x1080' },
    { id: 'anime-8', title: 'Battle Energy Burst', imageUrl: '/anime/anime-8.png', category: 'Anime', resolution: '1920x1080' },
  ],
  'Actress': [
    { id: 'actress-1', title: 'Red Carpet Glamour', imageUrl: '/actress/actress-1.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-2', title: 'Vintage Cinema Hall', imageUrl: '/actress/actress-2.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-3', title: 'Film Reel Classic', imageUrl: '/actress/actress-3.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-4', title: 'Awards Night Gold', imageUrl: '/actress/actress-4.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-5', title: 'Hollywood Studio Lot', imageUrl: '/actress/actress-5.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-6', title: 'Camera Lens Focus', imageUrl: '/actress/actress-6.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-7', title: 'Broadway Lights Bright', imageUrl: '/actress/actress-7.png', category: 'Actress', resolution: '1920x1080' },
    { id: 'actress-8', title: 'Fashion Shoot Style', imageUrl: '/actress/actress-8.png', category: 'Actress', resolution: '1920x1080' },
  ],
  'Gaming': [
    { id: 'gaming-1', title: 'Cyber Warrior Setup', imageUrl: '/gaming/gaming-1.png', category: 'Gaming', resolution: '1920x1080' },
    { id: 'gaming-2', title: 'Retro Arcade Glow', imageUrl: '/gaming/gaming-2.png', category: 'Gaming', resolution: '1920x1080' },
    { id: 'gaming-3', title: 'Esports Arena Live', imageUrl: '/gaming/gaming-3.png', category: 'Gaming', resolution: '1920x1080' },
    { id: 'gaming-4', title: 'Fantasy RPG World', imageUrl: '/gaming/gaming-4.png', category: 'Gaming', resolution: '1920x1080' },
  ],
  'Sport': [
    { id: 'sport-1', title: 'Sprinter Motion Blur', imageUrl: '/sport/sport-1.png', category: 'Sport', resolution: '1920x1080' },
    { id: 'sport-2', title: 'Stadium Floodlights', imageUrl: '/sport/sport-2.png', category: 'Sport', resolution: '1920x1080' },
    { id: 'sport-3', title: 'Basketball Court Dunk', imageUrl: '/sport/sport-3.png', category: 'Sport', resolution: '1920x1080' },
    { id: 'sport-4', title: 'Running Track Dawn', imageUrl: '/sport/sport-4.png', category: 'Sport', resolution: '1920x1080' },
  ],
  'Football': [
    { id: 'football-1', title: 'Packed Stadium Roar', imageUrl: '/football/football-1.png', category: 'Football', resolution: '1920x1080' },
    { id: 'football-2', title: 'Perfect Pitch Grass', imageUrl: '/football/football-2.png', category: 'Football', resolution: '1920x1080' },
    { id: 'football-3', title: 'Goal Net Focus', imageUrl: '/football/football-3.png', category: 'Football', resolution: '1920x1080' },
    { id: 'football-4', title: 'Aerial Stadium View', imageUrl: '/football/football-4.png', category: 'Football', resolution: '1920x1080' },
  ],
  'Samurai': [
    { id: 'samurai-1', title: 'Lone Warrior Sunset', imageUrl: '/samurai/samurai-1.png', category: 'Samurai', resolution: '1920x1080' },
    { id: 'samurai-2', title: 'Katana Blade Edge', imageUrl: '/samurai/samurai-2.png', category: 'Samurai', resolution: '1920x1080' },
    { id: 'samurai-3', title: 'Ancient Temple Guard', imageUrl: '/samurai/samurai-3.png', category: 'Samurai', resolution: '1920x1080' },
    { id: 'samurai-4', title: 'Bamboo Forest Duel', imageUrl: '/samurai/samurai-4.png', category: 'Samurai', resolution: '1920x1080' },
  ],
  'Cars': [
    { id: 'cars-1', title: 'Supercar Speed Blur', imageUrl: '/cars/cars-1.png', category: 'Cars', resolution: '1920x1080' },
    { id: 'cars-2', title: 'Classic Muscle Shine', imageUrl: '/cars/cars-2.png', category: 'Cars', resolution: '1920x1080' },
    { id: 'cars-3', title: 'Luxury Sedan Interior', imageUrl: '/cars/cars-3.png', category: 'Cars', resolution: '1920x1080' },
    { id: 'cars-4', title: 'Drift Smoke Action', imageUrl: '/cars/cars-4.png', category: 'Cars', resolution: '1920x1080' },
  ],
  'City': [
    { id: 'city-1', title: 'New York Skyline', imageUrl: '/city/city-1.png', category: 'City', resolution: '1920x1080' },
    { id: 'City-2', title: 'Tokyo Neon Streets', imageUrl: '/city/City-2.png', category: 'City', resolution: '1920x1080' },
    { id: 'city-3', title: 'Paris Eiffel View', imageUrl: '/city/city-3.png', category: 'City', resolution: '1920x1080' },
    { id: 'city-4', title: 'London Bridge Fog', imageUrl: '/city/city-4.png', category: 'City', resolution: '1920x1080' },
  ],
  'Countries': [
    { id: 'countries-1', title: 'Swiss Alps Village', imageUrl: '/countries/countries-1.png', category: 'Countries', resolution: '1920x1080' },
    { id: 'countries-2', title: 'Italian Amalfi Coast', imageUrl: '/countries/countries-2.png', category: 'Countries', resolution: '1920x1080' },
    { id: 'countries-3', title: 'Greek Santorini Blue', imageUrl: '/countries/countries-3.png', category: 'Countries', resolution: '1920x1080' },
    { id: 'countries-4', title: 'French Provence Fields', imageUrl: '/countries/countries-4.png', category: 'Countries', resolution: '1920x1080' },
  ],
  'FIFA 2025': [
    { id: 'fifa-2025-1', title: 'Ultimate Team Card', imageUrl: '/fifa-2025/fifa-2025-1.png', category: 'FIFA 2025', resolution: '1920x1080' },
    { id: 'fifa-2025-2', title: 'Career Mode Trophy', imageUrl: '/fifa-2025/fifa-2025-2.png', category: 'FIFA 2025', resolution: '1920x1080' },
    { id: 'fifa-2025-3', title: 'Pro Clubs Squad', imageUrl: '/fifa-2025/fifa-2025-3.png', category: 'FIFA 2025', resolution: '1920x1080' },
    { id: 'fifa-2025-4', title: 'Stadium Atmosphere', imageUrl: '/fifa-2025/fifa-2025-4.png', category: 'FIFA 2025', resolution: '1920x1080' },
  ],
  'Naruto': [
    { id: 'naruto-1', title: 'Hidden Leaf Village', imageUrl: '/naruto/naruto-1.png', category: 'Naruto', resolution: '1920x1080' },
    { id: 'naruto-2', title: 'Rasengan Energy Ball', imageUrl: '/naruto/naruto-2.png', category: 'Naruto', resolution: '1920x1080' },
    { id: 'naruto-3', title: 'Sasuke Uchiha Sharingan', imageUrl: '/naruto/naruto-3.png', category: 'Naruto', resolution: '1920x1080' },
    { id: 'naruto-4', title: 'Team 7 Reunion', imageUrl: '/naruto/naruto-4.png', category: 'Naruto', resolution: '1920x1080' },
  ],
  'PUBG': [
    { id: 'pubg-1', title: 'Pochinki Battle Royale', imageUrl: '/pubg/pubg-1.png', category: 'PUBG', resolution: '1920x1080' },
    { id: 'pubg-2', title: 'Erangel Map Drop', imageUrl: '/pubg/pubg-2.png', category: 'PUBG', resolution: '1920x1080' },
    { id: 'pubg-3', title: 'Winner Winner Chicken', imageUrl: '/pubg/pubg-3.png', category: 'PUBG', resolution: '1920x1080' },
    { id: 'pubg-4', title: 'Squad Goals Victory', imageUrl: '/pubg/pubg-4.png', category: 'PUBG', resolution: '1920x1080' },
  ],
  'BMW': [
    { id: 'bmw-1', title: 'M4 Competition Drift', imageUrl: '/bmw/bmw-1.png', category: 'BMW', resolution: '1920x1080' },
    { id: 'bmw-2', title: 'M3 Touring Blue', imageUrl: '/bmw/bmw-2.png', category: 'BMW', resolution: '1920x1080' },
    { id: 'bmw-3', title: 'i8 Concept Hybrid', imageUrl: '/bmw/bmw-3.png', category: 'BMW', resolution: '1920x1080' },
    { id: 'bmw-4', title: 'Classic E30 Legend', imageUrl: '/bmw/bmw-4.png', category: 'BMW', resolution: '1920x1080' },
  ],
  'Cyberpunk': [
    { id: 'cyberpunk-1', title: 'Night City Streets', imageUrl: '/cyberpunk/cyberpunk-1.png', category: 'Cyberpunk', resolution: '1920x1080' },
    { id: 'cyberpunk-2', title: 'Neon Rain Reflection', imageUrl: '/cyberpunk/cyberpunk-2.png', category: 'Cyberpunk', resolution: '1920x1080' },
    { id: 'cyberpunk-3', title: 'Cyborg Girl Portrait', imageUrl: '/cyberpunk/cyberpunk-3.png', category: 'Cyberpunk', resolution: '1920x1080' },
    { id: 'cyberpunk-4', title: 'Flying Car Future', imageUrl: '/cyberpunk/cyberpunk-4.png', category: 'Cyberpunk', resolution: '1920x1080' },
  ],
  'Japan': [
    { id: 'japan-1', title: 'Mount Fuji Sunrise', imageUrl: '/japan/japan-1.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-2', title: 'Tokyo Shibuya Crossing', imageUrl: '/japan/japan-2.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-3', title: 'Kyoto Fushimi Inari', imageUrl: '/japan/japan-3.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-4', title: 'Osaka Dotonbori Neon', imageUrl: '/japan/japan-4.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-5', title: 'Hiroshima Torii Gate', imageUrl: '/japan/japan-5.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-6', title: 'Nara Deer Park', imageUrl: '/japan/japan-6.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-7', title: 'Himeji Castle White', imageUrl: '/japan/japan-7.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-8', title: 'Arashiyama Bamboo Grove', imageUrl: '/japan/japan-8.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-9', title: 'Sapporo Snow Festival', imageUrl: '/japan/japan-9.png', category: 'Japan', resolution: '1920x1080' },
    { id: 'japan-10', title: 'Okinawa Beach Blue', imageUrl: '/japan/japan-10.png', category: 'Japan', resolution: '1920x1080' },
  ],
  'USA': [
    { id: 'usa-1', title: 'New York Times Square', imageUrl: '/usa/usa-1.png', category: 'USA', resolution: '1920x1080' },
    { id: 'usa-2', title: 'Grand Canyon Sunset', imageUrl: '/usa/usa-2.png', category: 'USA', resolution: '1920x1080' },
    { id: 'usa-3', title: 'Golden Gate Bridge', imageUrl: '/usa/usa-3.png', category: 'USA', resolution: '1920x1080' },
    { id: 'usa-4', title: 'Las Vegas Strip', imageUrl: '/usa/usa-4.png', category: 'USA', resolution: '1920x1080' },
  ],
  'Korea': [
    { id: 'korea-1', title: 'Seoul N Tower Night', imageUrl: '/korea/korea-1.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-2', title: 'Gyeongbokgung Palace', imageUrl: '/korea/korea-2.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-3', title: 'Busan Haeundae Beach', imageUrl: '/korea/korea-3.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-4', title: 'Jeju Island Coast', imageUrl: '/korea/korea-4.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-5', title: 'Bukchon Hanok Village', imageUrl: '/korea/korea-5.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-6', title: 'Gangnam District Light', imageUrl: '/korea/korea-6.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-7', title: 'Seoraksan Mountain Fall', imageUrl: '/korea/korea-7.png', category: 'Korea', resolution: '1920x1080' },
    { id: 'korea-8', title: 'Incheon Bridge View', imageUrl: '/korea/korea-8.png', category: 'Korea', resolution: '1920x1080' },
  ],
  'Thailand': [
    { id: 'thailand-1', title: 'Bangkok Wat Arun', imageUrl: '/thailand/thailand-1.png', category: 'Thailand', resolution: '1920x1080' },
    { id: 'thailand-2', title: 'Phuket Phi Phi Island', imageUrl: '/thailand/thailand-2.png', category: 'Thailand', resolution: '1920x1080' },
    { id: 'thailand-3', title: 'Chiang Mai Temple', imageUrl: '/thailand/thailand-3.png', category: 'Thailand', resolution: '1920x1080' },
    { id: 'thailand-4', title: 'Ayutthaya Ruins', imageUrl: '/thailand/thailand-4.png', category: 'Thailand', resolution: '1920x1080' },
  ],
  'Barcelona': [
    { id: 'barcelona-1', title: 'Sagrada Familia View', imageUrl: '/barcelona/barcelona-1.png', category: 'Barcelona', resolution: '1920x1080' },
    { id: 'barcelona-2', title: 'Park Guell Mosaic', imageUrl: '/barcelona/barcelona-2.png', category: 'Barcelona', resolution: '1920x1080' },
    { id: 'barcelona-3', title: 'Camp Nou Stadium', imageUrl: '/barcelona/barcelona-3.png', category: 'Barcelona', resolution: '1920x1080' },
    { id: 'barcelona-4', title: 'Las Ramblas Street', imageUrl: '/barcelona/barcelona-4.png', category: 'Barcelona', resolution: '1920x1080' },
  ],
  'Real Madrid': [
    { id: 'real-madrid-1', title: 'Santiago Bernabeu', imageUrl: '/real-madrid/real-madrid-1.png', category: 'Real Madrid', resolution: '1920x1080' },
    { id: 'real-madrid-2', title: 'White Kit Jersey', imageUrl: '/real-madrid/real-madrid-2.png', category: 'Real Madrid', resolution: '1920x1080' },
    { id: 'real-madrid-3', title: 'Champions League Cup', imageUrl: '/real-madrid/real-madrid-3.png', category: 'Real Madrid', resolution: '1920x1080' },
    { id: 'real-madrid-4', title: 'Cibeles Celebration', imageUrl: '/real-madrid/real-madrid-4.png', category: 'Real Madrid', resolution: '1920x1080' },
  ],
};


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
