import WallpaperBlock from '@/components/WallpaperBlock';
import { wallpapers, categories, subcategories } from '@/lib/data';

export const metadata = {
  title: 'WallpapersFlix - Premium 4K Wallpapers & HD Backgrounds',
  description: 'Download high-quality 4K wallpapers and HD backgrounds for desktop and mobile. Browse thousands of free wallpapers across multiple categories.',
  alternates: {
    canonical: 'https://wallpapersflix.com',
  },
};


export default function Home() {
  // Filter categories that have wallpapers
  const featuredCategories = categories.filter(cat => wallpapers[cat.name]);
  const featuredSubcategories = subcategories.filter(sub => wallpapers[sub.name]);

  return (
    <div>
      <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
          Welcome to <span style={{ color: 'var(--primary)' }}>WallpapersFlix</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          The best source for high-quality 4K wallpapers.
          Find amazing backgrounds for your devices.
        </p>
      </section>

      {/* Main Categories Blocks */}
      {featuredCategories.map((cat) => (
        <WallpaperBlock
          key={cat.slug}
          title={`${cat.name} Wallpapers`}
          wallpapers={wallpapers[cat.name].slice(0, 4)} // Show top 4
          viewAllLink={`/${cat.slug}`}
        />
      ))}

      {/* Subcategories Block */}
      <div style={{ marginTop: '4rem' }}>
        <h2 className="section-title">Trending Subcategories</h2>
        {featuredSubcategories.map((sub) => (
          <WallpaperBlock
            key={sub.slug}
            title={sub.name}
            wallpapers={wallpapers[sub.name].slice(0, 4)}
            viewAllLink={`/${sub.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
