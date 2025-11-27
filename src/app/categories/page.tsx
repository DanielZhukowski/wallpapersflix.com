import Link from 'next/link';
import { Metadata } from 'next';
import RelinkingSection from '@/components/RelinkingSection';
import { categories, subcategories } from '@/lib/data';

export const metadata: Metadata = {
    title: 'All Categories - WallpapersFlix',
    description: 'Browse all wallpaper categories and subcategories available on WallpapersFlix.',
    alternates: {
        canonical: 'https://wallpapersflix.com/categories',
    },
};

export default function CategoriesPage() {
    return (
        <div>
            <h1 className="section-title">All Categories</h1>

            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Main Categories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/${cat.slug}`}
                            style={{
                                display: 'block',
                                padding: '1.5rem',
                                backgroundColor: 'var(--secondary)',
                                borderRadius: '8px',
                                textAlign: 'center',
                                fontWeight: '600',
                                transition: 'background-color 0.2s'
                            }}
                            className="hover:bg-primary"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Popular Subcategories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                    {subcategories.map((sub) => (
                        <Link
                            key={sub.slug}
                            href={`/${sub.slug}`}
                            style={{
                                display: 'block',
                                padding: '1.5rem',
                                backgroundColor: 'var(--secondary)',
                                borderRadius: '8px',
                                textAlign: 'center',
                                fontWeight: '600',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            {sub.name}
                        </Link>
                    ))}
                </div>
            </div>

            <RelinkingSection />
        </div>
    );
}
