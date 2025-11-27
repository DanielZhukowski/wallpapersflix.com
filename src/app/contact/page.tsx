export const metadata = {
    title: 'Contact Us - WallpapersFlix | Get in Touch',
    description: 'Have questions or feedback? Contact the WallpapersFlix team. We\'re here to help with any inquiries about our wallpaper collection.',
    alternates: {
        canonical: 'https://wallpapersflix.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h1 className="section-title" style={{ marginBottom: '2rem' }}>Contact Us</h1>

            <div style={{ lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                    We'd love to hear from you! Whether you have questions, suggestions, feedback, or just want to say hello, the WallpapersFlix team is here to help.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                    Please fill out the form below and we'll get back to you as soon as possible. We typically respond within 24-48 hours during business days.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Send Us a Message</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name *</label>
                            <input
                                type="text"
                                required
                                placeholder="Your name"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--secondary)',
                                    color: 'var(--foreground)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email *</label>
                            <input
                                type="email"
                                required
                                placeholder="your.email@example.com"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--secondary)',
                                    color: 'var(--foreground)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                            <input
                                type="text"
                                placeholder="What is this about?"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--secondary)',
                                    color: 'var(--foreground)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message *</label>
                            <textarea
                                rows={6}
                                required
                                placeholder="Tell us what's on your mind..."
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--secondary)',
                                    color: 'var(--foreground)',
                                    fontSize: '1rem',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                alignSelf: 'flex-start',
                                padding: '0.75rem 2rem',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'opacity 0.2s'
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Other Ways to Reach Us</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>General Inquiries</h3>
                            <p style={{ marginBottom: '0.5rem' }}>For general questions about our service</p>
                            <a href="mailto:info@wallpapersflix.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                info@wallpapersflix.com
                            </a>
                        </div>

                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Technical Support</h3>
                            <p style={{ marginBottom: '0.5rem' }}>Having technical issues?</p>
                            <a href="mailto:support@wallpapersflix.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                support@wallpapersflix.com
                            </a>
                        </div>

                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Content Submissions</h3>
                            <p style={{ marginBottom: '0.5rem' }}>Want to submit wallpapers?</p>
                            <a href="mailto:submit@wallpapersflix.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                submit@wallpapersflix.com
                            </a>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(220, 38, 38, 0.1)', borderRadius: '8px', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--foreground)' }}>Response Time</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            We aim to respond to all inquiries within 24-48 hours during business days (Monday-Friday).
                            Messages received on weekends will be addressed on the next business day.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '8px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Frequently Asked Questions</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Before reaching out, you might find answers to common questions in our FAQ section.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    Common topics include: download issues, image quality, licensing, and category requests.
                </p>
            </div>
        </div>
    );
}
