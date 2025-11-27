import Link from 'next/link';
import { categories, subcategories } from '@/lib/data';
import styles from './RelinkingSection.module.css';

export default function RelinkingSection() {
    // Combine and sort or pick popular ones. For now, we show all or a subset.
    const allLinks = [...categories, ...subcategories].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--secondary)',
            borderRadius: '24px'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>
                    Explore More Wallpapers
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                }}>
                    {allLinks.map((link) => (
                        <Link
                            key={link.slug}
                            href={`/${link.slug}`}
                            className={styles.link}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
