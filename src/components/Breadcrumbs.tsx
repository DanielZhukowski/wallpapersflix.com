import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://wallpapersflix.com${item.href}`,
        })),
    };

    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>
                    <Link href="/" style={{ transition: 'color 0.2s' }} className="hover:text-primary">
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ChevronRight size={14} />
                        {index === items.length - 1 ? (
                            <span style={{ color: 'var(--foreground)', fontWeight: '500' }}>{item.label}</span>
                        ) : (
                            <Link href={item.href} style={{ transition: 'color 0.2s' }} className="hover:text-primary">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
