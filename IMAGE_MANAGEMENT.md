# Manual Image Management Guide

## Overview
This guide explains how to add your own wallpaper images to the website.

## Folder Structure
All images should be placed in the `public/` directory, organized by category:

```
public/
├── 4k/
├── singers/
├── nature/
├── anime/
├── actress/
├── gaming/
├── sport/
├── football/
├── samurai/
├── cars/
├── space/
├── abstract/
├── animals/
├── city/
├── movies/
├── trees/
├── countries/
└── ... (subcategories)
```

## How to Add Images

### Step 1: Download or Create Images
- Find wallpapers from any source (Google Images, Unsplash, Pexels, etc.)
- Make sure images are high quality (preferably 1920x1080 or higher)
- Save them as `.jpg`, `.png`, or `.webp`

### Step 2: Place Images in Correct Folder
- Navigate to `public/[category-name]/`
- Drop your images into the appropriate category folder
- Name them descriptively (e.g., `mountain-sunset.jpg`, `anime-character-1.png`)

### Step 3: Sync Images to Website
Run this command from the project root:
```bash
node scripts/sync-images.js
```

This will automatically:
- Scan all category folders
- Find all images
- Update `src/lib/data.ts` with the new images
- Display a summary of what was found

### Step 4: Verify
- Refresh your browser (the dev server should auto-reload)
- Navigate to the category page to see your images

## Tips

### Image Naming
- Use descriptive names: `tokyo-skyline.jpg` instead of `img001.jpg`
- Avoid spaces in filenames (use hyphens instead)
- Keep names lowercase for consistency

### Image Quality
- Recommended resolution: 1920x1080 (Full HD)
- Supported formats: JPG, PNG, WebP
- Keep file sizes reasonable (under 2MB per image)

### Organization
- Keep related images together in their category folder
- You can have as many or as few images per category as you want
- The sync script will automatically pick up all images

## Cleaning Up Random Images

To remove the random Picsum images that were downloaded:

```bash
node scripts/clean-random-images.js
```

This will delete all auto-generated images, leaving only manually added ones.

## Example Workflow

1. Download 5 anime wallpapers from Google Images
2. Save them to `public/anime/` as:
   - `naruto-sunset.jpg`
   - `one-piece-ship.jpg`
   - `attack-on-titan.jpg`
   - `demon-slayer.jpg`
   - `my-hero-academia.jpg`
3. Run `node scripts/sync-images.js`
4. Visit `http://localhost:3000/anime-wallpapers` to see them!

## Troubleshooting

**Images not showing up?**
- Make sure you ran `node scripts/sync-images.js`
- Check that images are in the correct folder
- Verify file extensions are `.jpg`, `.png`, or `.webp`

**Wrong category?**
- Move the image to the correct folder
- Run `node scripts/sync-images.js` again

**Need to rename images?**
- Rename them in the folder
- Run `node scripts/sync-images.js` to update
