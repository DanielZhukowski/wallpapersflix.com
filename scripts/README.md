# WallpapersFlix Scripts

This directory contains utility scripts for managing wallpaper images on the website.

## Available Scripts

### 1. `sync-images.js` - Sync Images to Website
Scans all category folders and automatically updates `src/lib/data.ts` with images found.

```bash
node scripts/sync-images.js
```

**Use this:**
- After manually adding images to folders
- After running the scraper
- Whenever you want to refresh the image list

---

### 2. `scrape-google-images.js` - Auto-Download from Google Images
Automatically downloads wallpapers from Google Images for all categories.

**Prerequisites:**
```bash
npm install puppeteer
```

**Run:**
```bash
node scripts/scrape-google-images.js
```

**What it does:**
- Searches Google Images for each category keyword
- Downloads the first 8 images (4 for subcategories)
- Saves them to the appropriate `public/[category]/` folder
- Skips images that already exist

**After running:**
```bash
node scripts/sync-images.js
```

---

### 3. `clean-random-images.js` - Remove Auto-Generated Images
Deletes all auto-generated placeholder images (files matching pattern: `category-1.jpg`, `category-2.jpg`, etc.)

```bash
node scripts/clean-random-images.js
```

**Use this:**
- To clean up test images
- Before starting fresh with new images
- To remove unwanted auto-downloaded images

---

### 4. `generate-wallpapers.js` - AI Image Generation (Deprecated)
*This script is no longer recommended due to API limitations and cost.*

---

## Typical Workflow

### Option A: Automatic (Google Images Scraper)
```bash
# 1. Install Puppeteer (one-time)
npm install puppeteer

# 2. Scrape images from Google
node scripts/scrape-google-images.js

# 3. Sync to website
node scripts/sync-images.js

# 4. Check your site!
```

### Option B: Manual
```bash
# 1. Download images manually and place in public/[category]/

# 2. Sync to website
node scripts/sync-images.js

# 3. Check your site!
```

### Option C: Clean Start
```bash
# 1. Remove all auto-generated images
node scripts/clean-random-images.js

# 2. Add your own images or run scraper
# ... (follow Option A or B)

# 3. Sync to website
node scripts/sync-images.js
```

---

## Tips

- **Always run `sync-images.js` after adding/removing images**
- The scraper respects existing images (won't overwrite)
- You can edit keywords in `scrape-google-images.js` for better results
- Images are saved as `.jpg` or `.png` depending on source
- Recommended resolution: 1920x1080 or higher

---

## Troubleshooting

**Scraper not working?**
- Make sure Puppeteer is installed: `npm install puppeteer`
- Check your internet connection
- Google may rate-limit requests - add delays if needed

**Images not showing on site?**
- Did you run `node scripts/sync-images.js`?
- Check that images are in the correct folder
- Verify file extensions (`.jpg`, `.png`, `.webp`)

**Want different images?**
- Edit the `keyword` field in `scrape-google-images.js`
- Or manually replace images in `public/[category]/`
- Then run `sync-images.js`
