export const metadata = {
    title: 'About Us - WallpapersFlix | Premium 4K Wallpapers',
    description: 'Learn about WallpapersFlix, your trusted source for high-quality 4K wallpapers. Discover our mission, values, and commitment to providing the best background images.',
    alternates: {
        canonical: 'https://wallpapersflix.com/about',
    },
};

export default function AboutPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h1 className="section-title" style={{ marginBottom: '2rem' }}>About WallpapersFlix</h1>

            <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Our Mission</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Welcome to <strong>WallpapersFlix</strong>, your premier destination for discovering and downloading the highest quality wallpapers available on the internet. Since our inception in 2024, we have been dedicated to providing users worldwide with an exceptional collection of 4K and HD background images that transform ordinary screens into extraordinary visual experiences.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Our mission is simple yet powerful: to curate and deliver the most stunning, diverse, and high-resolution wallpapers that cater to every taste, style, and preference. Whether you're looking for breathtaking nature scenes, cutting-edge abstract art, beloved anime characters, or sleek minimalist designs, WallpapersFlix has something special for everyone.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>What Sets Us Apart</h2>
                    <div style={{ backgroundColor: 'var(--secondary)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Quality First</h3>
                        <p>
                            Every wallpaper in our collection undergoes careful selection to ensure it meets our strict quality standards. We prioritize 4K resolution images that look crisp and vibrant on modern displays, from smartphones to ultra-wide monitors.
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'var(--secondary)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Diverse Categories</h3>
                        <p>
                            With dozens of categories and subcategories, from Gaming and Anime to Nature and Abstract Art, we ensure that you'll always find the perfect wallpaper to match your mood, interests, or aesthetic preferences.
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'var(--secondary)', padding: '1.5rem', borderRadius: '8px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Free & Accessible</h3>
                        <p>
                            We believe beautiful design should be accessible to everyone. That's why all our wallpapers are completely free to download and use, with no hidden fees, subscriptions, or registration requirements.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Our Commitment</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        At WallpapersFlix, we are committed to continuously expanding and improving our collection. Our team regularly updates the library with fresh, trending images across all categories. We listen to our community and strive to provide content that resonates with our users' evolving tastes and preferences.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        We also prioritize user experience. Our website is designed to be fast, intuitive, and easy to navigate, with powerful search functionality that helps you find exactly what you're looking for in seconds. Whether you're browsing on desktop or mobile, WallpapersFlix delivers a seamless experience.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Join Our Community</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        WallpapersFlix is more than just a wallpaper website—it's a community of design enthusiasts, digital artists, and anyone who appreciates beautiful imagery. We're grateful for every visitor who chooses to personalize their digital space with our wallpapers.
                    </p>
                    <p>
                        Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to reach out through our <a href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</a>. Your input helps us grow and serve you better.
                    </p>
                </section>

                <section>
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', textAlign: 'center', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                        Thank you for choosing WallpapersFlix. We hope our collection brings beauty and inspiration to your digital life every day.
                    </p>
                </section>
            </div>
        </div>
    );
}
