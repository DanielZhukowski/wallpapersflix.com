import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Wallpapers<span className={styles.highlight}>Flix</span>
                        </Link>
                        <p className={styles.description}>
                            Find Amazing High-Quality Free Wallpapers for your desktop and mobile devices.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Legal</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>Categories</h4>
                        <Link href="/4k-wallpapers">4K Wallpapers</Link>
                        <Link href="/anime-wallpapers">Anime Wallpapers</Link>
                        <Link href="/gaming-wallpapers">Gaming Wallpapers</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>Tools</h4>
                        <a href="https://aienhance.io" target="_blank" rel="noopener">AIEnhance.io</a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} WallpapersFlix. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
