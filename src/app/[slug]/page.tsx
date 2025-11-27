import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WallpaperBlock from '@/components/WallpaperBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelinkingSection from '@/components/RelinkingSection';
import { getWallpapersByCategory, getCategoryBySlug, categories, subcategories } from '@/lib/data';
import { generateCategoryDescription } from '@/lib/seo-content';

interface Props {
    params: Promise<{ slug: string }>;
}

// Helper to find category name from slug
const getCategoryName = (slug: string) => {
    const category = categories.find(c => c.slug === slug) ||
        subcategories.find(c => c.slug === slug);
    return category ? category.name : null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const categoryName = getCategoryName(slug);

    if (!categoryName) {
        return {
            title: 'Category Not Found',
        };
    }

    return {
        title: `${categoryName} Wallpaper 4K | Top 10 Best ${categoryName} Backgrounds 4K Download`,
        description: `Download the best ${categoryName} wallpapers in 4K resolution. High-quality backgrounds for your desktop and mobile.`,
        alternates: {
            canonical: `https://wallpapersflix.com/${slug}`,
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);
    const categoryName = category ? category.name : null;
    const wallpapers = getWallpapersByCategory(slug);

    if (!categoryName) {
        notFound();
    }

    // Construct breadcrumbs
    const breadcrumbItems = [];

    // Check for parent category
    if ('parentSlug' in category!) {
        // It's a subcategory
        const parentSlug = (category as any).parentSlug;
        const parentCategory = getCategoryBySlug(parentSlug);
        if (parentCategory) {
            breadcrumbItems.push({ label: parentCategory.name, href: `/${parentSlug}` });
        }
    }

    // Add current category
    breadcrumbItems.push({ label: categoryName, href: `/${slug}` });
    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {categoryName} Wallpapers
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    Browse our collection of high-quality {categoryName} wallpapers.
                </p>
            </div>

            <WallpaperBlock
                title={`Best ${categoryName} Wallpapers`}
                wallpapers={wallpapers}
            />

            <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About {categoryName} Wallpapers</h2>
                {generateCategoryDescription(categoryName).map((paragraph, index) => (
                    <p
                        key={index}
                        style={{ lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1rem' }}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))}
            </div>

            <RelinkingSection />
        </div >
    );
}
