#!/usr/bin/env node

/**
 * Wallpaper Generation Script using OpenRouter API
 * Generates AI wallpapers using Gemini 3 Pro Image model
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;
const SITE_URL = 'https://wallpapersflix.com';
const SITE_NAME = 'WallpapersFlix';
const MODEL = OPENROUTER_MODEL || 'openai/gpt-5-image';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_PER_CATEGORY = parseInt(process.env.IMAGES_PER_CATEGORY || '4', 10);

// Helpers to build prompts dynamically for folders without manual definitions
const toTitleCase = (folder) => folder
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const generateDefaultPrompts = (categoryName) => {
    const lowercase = categoryName.toLowerCase();
    return [
        `${categoryName} wallpaper: cinematic 4K composition highlighting iconic elements of ${lowercase}, dramatic lighting, photo-realistic details`,
        `${categoryName} wallpaper: minimal background featuring ${lowercase} symbolism, sleek gradients, modern design, UHD resolution`,
        `${categoryName} wallpaper: dynamic action scene inspired by ${lowercase}, vibrant colors, motion energy, high contrast`,
        `${categoryName} wallpaper: atmospheric interpretation of ${lowercase}, ethereal lighting, volumetric fog, 4K quality`
    ];
};

// Main menu categories (excluding Gaming which is already done)
const presetCategories = [
    {
        name: '4K',
        folder: '4k',
        prompts: [
            'Ultra high definition 4K wallpaper: majestic mountain landscape at golden hour with dramatic clouds, crystal clear details, professional photography, breathtaking vista',
            'Ultra high definition 4K wallpaper: futuristic neon cityscape at night, towering skyscrapers, cyberpunk aesthetic, vibrant colors, sharp details',
            'Ultra high definition 4K wallpaper: serene ocean sunset with vibrant orange and purple sky, calm waves, peaceful atmosphere, photorealistic',
            'Ultra high definition 4K wallpaper: powerful waterfall in lush tropical rainforest, emerald green vegetation, misty atmosphere, dramatic lighting'
        ]
    },
    {
        name: 'Singers',
        folder: 'singers',
        prompts: [
            'Music wallpaper: silhouette of singer performing on stage with dramatic spotlight, concert atmosphere, vibrant colors, energetic mood',
            'Music wallpaper: vintage microphone with neon lights, retro aesthetic, music studio vibe, warm lighting, artistic composition',
            'Music wallpaper: abstract musical notes and sound waves, colorful gradient, modern design, dynamic energy, creative visualization',
            'Music wallpaper: concert crowd with raised hands, stage lights, festival atmosphere, energetic vibe, celebration of music'
        ]
    },
    {
        name: 'Nature',
        folder: 'nature',
        prompts: [
            'Beautiful nature wallpaper: peaceful forest with sunlight streaming through tall trees, morning mist, serene atmosphere, lush greenery',
            'Beautiful nature wallpaper: colorful autumn forest with red and orange leaves, scenic woodland path, warm lighting, fall season',
            'Beautiful nature wallpaper: tropical paradise beach with palm trees, turquoise water, white sand, crystal clear ocean, peaceful setting',
            'Beautiful nature wallpaper: lavender fields in Provence, endless purple flowers, rolling hills, summer day, peaceful countryside'
        ]
    },
    {
        name: 'Anime',
        folder: 'anime',
        prompts: [
            'Anime wallpaper: beautiful anime character with flowing hair among cherry blossoms, soft pastel colors, detailed art style, peaceful atmosphere',
            'Anime wallpaper: epic anime warrior in dynamic action pose, vibrant colors, detailed armor, energy effects, dramatic composition',
            'Anime wallpaper: peaceful Japanese temple at sunset, anime art style, atmospheric lighting, cherry blossoms, serene beauty',
            'Anime wallpaper: cute anime school scene with colorful characters, cheerful atmosphere, bright colors, friendly vibe'
        ]
    },
    {
        name: 'Actress',
        folder: 'actress',
        prompts: [
            'Hollywood glamour wallpaper: elegant red carpet scene with spotlight, luxurious atmosphere, golden lights, sophisticated style',
            'Cinema wallpaper: vintage movie theater with red velvet curtains, classic Hollywood aesthetic, warm lighting, nostalgic atmosphere',
            'Film wallpaper: movie clapperboard and film reels, cinematic aesthetic, dramatic lighting, artistic composition, entertainment theme',
            'Celebrity wallpaper: glamorous award ceremony stage with golden lights, elegant atmosphere, sophisticated setting, luxury ambiance',
            'Hollywood wallpaper: iconic movie studio lot, golden hour lighting, classic cinema aesthetic, nostalgic atmosphere',
            'Cinema wallpaper: vintage film camera with dramatic lighting, artistic composition, classic filmmaking aesthetic, creative mood',
            'Entertainment wallpaper: Broadway theater marquee with bright lights, vibrant colors, exciting atmosphere, show business theme',
            'Glamour wallpaper: elegant fashion photoshoot setting, professional lighting, sophisticated atmosphere, artistic composition'
        ]
    },
    {
        name: 'Sport',
        folder: 'sport',
        prompts: [
            'Sports wallpaper: dynamic athlete in action, motion blur, energetic atmosphere, competitive spirit, powerful composition',
            'Sports wallpaper: modern stadium at sunset, dramatic lighting, epic scale, architectural beauty, sporting venue',
            'Sports wallpaper: basketball court with dramatic spotlight, indoor arena, professional setting, energetic atmosphere',
            'Sports wallpaper: running track at sunrise, athletic motivation, fresh start, inspiring atmosphere, clean lines',
            'Sports wallpaper: gym equipment with dramatic lighting, fitness motivation, powerful atmosphere, strength and determination',
            'Sports wallpaper: swimming pool lanes from above, geometric patterns, clean aesthetic, athletic setting, refreshing atmosphere',
            'Sports wallpaper: tennis court with perfect lines, professional setting, clean aesthetic, sporting elegance',
            'Sports wallpaper: mountain biking trail through forest, adventure sports, dynamic action, outdoor athletics, exciting atmosphere'
        ]
    },
    {
        name: 'Football',
        folder: 'football',
        prompts: [
            'Football wallpaper: massive stadium filled with fans, dramatic floodlights, epic atmosphere, sporting cathedral, energetic crowd',
            'Football wallpaper: soccer ball on perfect grass pitch, stadium lights, professional setting, clean composition, sporting focus',
            'Football wallpaper: football goal net with stadium in background, dramatic lighting, professional atmosphere, sporting beauty',
            'Football wallpaper: aerial view of illuminated football stadium at night, architectural beauty, epic scale, vibrant lights',
            'Football wallpaper: football boots on grass with dramatic lighting, close-up detail, professional equipment, sporting aesthetic',
            'Football wallpaper: corner flag and pitch markings, professional stadium, clean lines, sporting geometry, perfect grass',
            'Football wallpaper: football in mid-air with stadium background, action shot, dynamic composition, sporting excitement',
            'Football wallpaper: empty stadium at golden hour, peaceful atmosphere, architectural beauty, calm before the game'
        ]
    },
    {
        name: 'Samurai',
        folder: 'samurai',
        prompts: [
            'Samurai wallpaper: lone samurai warrior silhouette at sunset, dramatic sky, Japanese aesthetic, honor and tradition, epic atmosphere',
            'Samurai wallpaper: traditional katana sword with cherry blossoms, Japanese art style, elegant composition, cultural beauty',
            'Samurai wallpaper: ancient Japanese temple with samurai armor display, historical atmosphere, traditional architecture, cultural heritage',
            'Samurai wallpaper: samurai warrior in traditional armor standing in bamboo forest, atmospheric lighting, Japanese aesthetic',
            'Samurai wallpaper: katana blade detail with Japanese calligraphy, artistic composition, traditional craftsmanship, cultural elegance',
            'Samurai wallpaper: feudal Japanese castle at sunset, historical architecture, dramatic sky, traditional beauty, epic scale',
            'Samurai wallpaper: samurai meditation scene in zen garden, peaceful atmosphere, traditional Japanese setting, spiritual calm',
            'Samurai wallpaper: traditional samurai helmet and armor, detailed craftsmanship, dramatic lighting, historical artifact, cultural pride'
        ]
    }
];

const presetFolders = new Set(presetCategories.map(cat => cat.folder));

const discoverAdditionalCategories = () => {
    try {
        const entries = fs.readdirSync(PUBLIC_DIR, { withFileTypes: true });
        return entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name)
            .filter(folder => !presetFolders.has(folder) && !folder.startsWith('.'))
            .map(folder => {
                const name = toTitleCase(folder);
                return {
                    name,
                    folder,
                    prompts: generateDefaultPrompts(name)
                };
            });
    } catch (error) {
        console.warn('⚠️  Failed to scan public directory for extra categories:', error.message);
        return [];
    }
};

const autoCategories = discoverAdditionalCategories();
const categories = [...presetCategories, ...autoCategories];

/**
 * Make API request to OpenRouter for image generation
 */
function generateImage(prompt) {
    return new Promise((resolve, reject) => {
        const isGoogleModel = /google|gemini/i.test(MODEL);
        const isOpenAIModel = /^openai\//i.test(MODEL);

        const baseMessage = {
            role: 'user',
            content: [
                {
                    type: 'text',
                    text: prompt
                }
            ]
        };

        const requestBody = {
            model: MODEL,
            messages: [baseMessage]
        };

        if (isGoogleModel) {
            requestBody.modalities = ['image', 'text'];
            requestBody.max_tokens = 1000;
        } else if (isOpenAIModel) {
            requestBody.max_output_tokens = 1024;
        }

        const data = JSON.stringify(requestBody);

        const options = {
            hostname: 'openrouter.ai',
            port: 443,
            path: '/api/v1/chat/completions',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data),
                'HTTP-Referer': 'https://wallpapersflix.com',
                'X-Title': 'WallpapersFlix'
            }
        };

        const req = https.request(options, (res) => {
            let body = '';

            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(body);

                    if (response.error) {
                        reject(new Error(response.error.message || JSON.stringify(response.error)));
                        return;
                    }

                    resolve(response);
                } catch (error) {
                    reject(new Error(`Failed to parse response: ${error.message}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

/**
 * Extract and save base64 image from API response
 */
function saveBase64Image(base64Data, filepath) {
    // Remove data URL prefix if present (e.g., "data:image/png;base64,")
    const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Image, 'base64');
    fs.writeFileSync(filepath, buffer);
}

/**
 * Download an image when the API returns a remote URL
 */
function downloadImageFromUrl(url, filepath) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download image (${res.statusCode})`));
                return;
            }

            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', () => {
                fs.writeFileSync(filepath, Buffer.concat(data));
                resolve();
            });
        }).on('error', reject);
    });
}

/**
 * Normalize any of the possible image formats in the response
 */
function normalizeImageCandidate(candidate) {
    if (!candidate) return null;

    if (typeof candidate === 'string') {
        return candidate.trim();
    }

    if (candidate.type === 'output_image' && candidate.image_base64) {
        const mime = candidate.mime_type || 'image/png';
        return `data:${mime};base64,${candidate.image_base64}`;
    }

    if (candidate.type === 'output_image' && candidate.b64_json) {
        const mime = candidate.mime_type || 'image/png';
        return `data:${mime};base64,${candidate.b64_json}`;
    }

    if (candidate.b64_json) {
        return `data:image/png;base64,${candidate.b64_json}`;
    }

    if (candidate.base64) {
        return `data:image/png;base64,${candidate.base64}`;
    }

    if (candidate.url) {
        return candidate.url;
    }

    if (candidate.image_url) {
        if (typeof candidate.image_url === 'string') return candidate.image_url;
        if (candidate.image_url.url) return candidate.image_url.url;
    }

    return null;
}

/**
 * Extract the image payload from the OpenRouter response message
 */
function extractImageData(message) {
    if (!message) return null;

    if (Array.isArray(message.images)) {
        for (const img of message.images) {
            const normalized = normalizeImageCandidate(img);
            if (normalized) return normalized;
        }
    }

    if (typeof message.content === 'string' && message.content.includes('data:image')) {
        return message.content;
    }

    if (Array.isArray(message.content)) {
        for (const part of message.content) {
            const normalized = normalizeImageCandidate(part);
            if (normalized) return normalized;

            if (part.type === 'image_url') {
                const url = part.image_url?.url || part.image_url;
                if (url) return url;
            }

            if (part.type === 'image' && part.image_url) {
                const url = typeof part.image_url === 'string' ? part.image_url : part.image_url.url;
                if (url) return url;
            }

            if (typeof part === 'string' && part.includes('data:image')) {
                return part;
            }
        }
    }

    if (message.content && typeof message.content === 'object') {
        const normalized = normalizeImageCandidate(message.content);
        if (normalized) return normalized;
    }

    return null;
}

/**
 * Save either a base64 payload or fetch a remote URL
 */
async function saveImageData(imageData, filepath) {
    if (!imageData || typeof imageData !== 'string') {
        return false;
    }

    if (imageData.startsWith('data:image')) {
        saveBase64Image(imageData, filepath);
        return true;
    }

    if (/^https?:\/\//i.test(imageData)) {
        await downloadImageFromUrl(imageData, filepath);
        return true;
    }

    return false;
}

/**
 * Main generation function
 */
async function generateWallpapers() {
    if (!OPENROUTER_API_KEY) {
        console.error('❌ Error: OPENROUTER_API_KEY environment variable is not set\n');
        console.log('Usage:');
        console.log('  OPENROUTER_API_KEY=your_key_here node scripts/generate-wallpapers.js\n');
        process.exit(1);
    }

    console.log('🎨 WallpapersFlix Image Generator');
    console.log('==================================\n');
    console.log('✅ API key found');
    console.log(`📊 Generating images for ${categories.length} categories`);
    console.log(`🖼️  Target per category: ${IMAGES_PER_CATEGORY}`);
    console.log(`🖼️  Total images (max): ${categories.length * IMAGES_PER_CATEGORY}\n`);
    console.log(`🧠 Model: ${MODEL}`);

    let totalGenerated = 0;
    let totalFailed = 0;

    let targetCategories = categories;
    let debugMode = false;

    if (process.env.GENERATOR_DEBUG === 'true' || process.argv.includes('--debug')) {
        debugMode = true;
        targetCategories = categories.slice(0, 1);
    }

    if (debugMode) {
        console.log(`⚠️  DEBUG MODE: Generating for only ${targetCategories.length} category: ${targetCategories[0].name}`);
    } else {
        console.log('🚀 Generating for all categories');
    }

    for (const category of targetCategories) {
        console.log(`\n📁 Category: ${category.name}`);
        console.log('─'.repeat(50));

        // Ensure directory exists
        const categoryDir = path.join(PUBLIC_DIR, category.folder);
        if (!fs.existsSync(categoryDir)) {
            fs.mkdirSync(categoryDir, { recursive: true });
        }

        // Skip categories that already have images
        const existingImages = fs.readdirSync(categoryDir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
        if (existingImages.length > 0) {
            console.log(`  🔁 Skipping ${category.name} - ${existingImages.length} images already present`);
            continue;
        }

        // Generate images
        const promptsToUse = category.prompts.slice(0, IMAGES_PER_CATEGORY);

        for (let i = 0; i < promptsToUse.length; i++) {
            const prompt = promptsToUse[i];
            const filename = `${category.folder}-${i + 1}.png`;
            const filepath = path.join(categoryDir, filename);

            try {
                console.log(`  ⏳ Generating ${filename}...`);

                const response = await generateImage(prompt);

                // Extract image from response
                if (response.choices && response.choices[0] && response.choices[0].message) {
                    const message = response.choices[0].message;
                    console.log('  🔍 DEBUG - Message keys:', Object.keys(message));

                    // The response content might be a string or an array
                    const imageData = extractImageData(message);

                    // Validate and save
                    if (await saveImageData(imageData, filepath)) {
                        console.log(`  ✅ Saved ${filename}`);
                        totalGenerated++;
                    } else {
                        console.log(`  ⚠️  No valid image data found for ${filename}`);
                        totalFailed++;
                    }
                } else {
                    console.log(`  ⚠️  Invalid response format for ${filename}`);
                    totalFailed++;
                }

                // Add delay to avoid rate limiting (2 seconds between requests)
                await new Promise(resolve => setTimeout(resolve, 2000));

            } catch (error) {
                console.error(`  ❌ Error: ${error.message}`);
                totalFailed++;
            }
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log('✨ Generation Complete!');
    console.log(`✅ Successfully generated: ${totalGenerated} images`);
    console.log(`❌ Failed: ${totalFailed} images`);
    console.log('='.repeat(50) + '\n');
}

// Run the script
generateWallpapers().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
});
