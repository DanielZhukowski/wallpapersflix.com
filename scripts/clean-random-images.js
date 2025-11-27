#!/usr/bin/env node

/**
 * Clean Random Images Script
 * Removes all auto-downloaded Picsum images, keeping only manually added ones
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Folders to clean
const folders = [
    '4k', 'singers', 'nature', 'anime', 'actress', 'sport', 'football',
    'samurai', 'cars', 'space', 'abstract', 'animals', 'city', 'movies',
    'trees', 'countries', 'fifa-2025', 'naruto', 'pubg', 'btc', 'cool',
    'bmw', 'mercedes', 'bugatti', 'cyberpunk', 'minimalist', 'galaxy',
    'cats', 'dogs', 'marvel', 'dc', 'oak-trees', 'palm-trees', 'pine-trees',
    'usa', 'korea', 'thailand', 'barcelona', 'real-madrid'
];

let totalDeleted = 0;

folders.forEach(folder => {
    const folderPath = path.join(PUBLIC_DIR, folder);
    if (!fs.existsSync(folderPath)) return;

    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
        // Delete files that match the auto-generated pattern: category-1.jpg, category-2.jpg, etc.
        if (/^[a-z0-9-]+-\d+\.(jpg|jpeg|png|webp)$/i.test(file)) {
            const filepath = path.join(folderPath, file);
            fs.unlinkSync(filepath);
            console.log(`Deleted: ${folder}/${file}`);
            totalDeleted++;
        }
    });
});

console.log(`\n✅ Cleanup complete! Deleted ${totalDeleted} auto-generated images.`);
console.log('You can now add your own images to the category folders.');
