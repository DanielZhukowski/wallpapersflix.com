'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { categories, subcategories } from '@/lib/data';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Combine all searchable items
    const allItems = [...categories, ...subcategories];

    // Filter results based on search query
    const searchResults = searchQuery.trim()
        ? allItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 8) // Limit to 8 results
        : [];

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            router.push(`/${searchResults[0].slug}`);
            setSearchQuery('');
            setShowResults(false);
        }
    };

    const handleResultClick = (slug: string) => {
        setSearchQuery('');
        setShowResults(false);
        router.push(`/${slug}`);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Wallpapers<span className={styles.highlight}>Flix</span>
                </Link>

                <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
                    {categories.slice(0, 9).map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/${cat.slug}`}
                            className={styles.link}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    <div className={styles.searchWrapper} ref={searchRef}>
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search wallpapers..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowResults(true);
                                }}
                                onFocus={() => setShowResults(true)}
                            />
                        </form>
                        <Search className={styles.searchIcon} size={20} />

                        {showResults && searchResults.length > 0 && (
                            <div className={styles.searchResults}>
                                {searchResults.map((item) => (
                                    <button
                                        key={item.slug}
                                        className={styles.searchResultItem}
                                        onClick={() => handleResultClick(item.slug)}
                                    >
                                        <Search size={16} />
                                        <span>{item.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
