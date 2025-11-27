'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Wallpaper } from '@/lib/data';
import styles from './WallpaperBlock.module.css';

interface WallpaperBlockProps {
    title: string;
    wallpapers: Wallpaper[];
    viewAllLink?: string;
}

export default function WallpaperBlock({ title, wallpapers, viewAllLink }: WallpaperBlockProps) {
    const handleDownload = (wallpaper: Wallpaper) => {
        // Use our API route to download the image
        const filename = `${wallpaper.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
        const downloadUrl = `/api/download?url=${encodeURIComponent(wallpaper.imageUrl)}&filename=${encodeURIComponent(filename)}`;

        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {viewAllLink && (
                    <Link href={viewAllLink} className={styles.viewAll}>
                        View All
                    </Link>
                )}
            </div>

            <div className={styles.grid}>
                {wallpapers.map((wallpaper) => (
                    <div key={wallpaper.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={wallpaper.imageUrl}
                                alt={wallpaper.title}
                                fill
                                unoptimized
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className={styles.overlay}>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleDownload(wallpaper)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Download size={18} />
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.cardTitle}>{wallpaper.title}</h3>
                            <span className={styles.resolution}>{wallpaper.resolution}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
