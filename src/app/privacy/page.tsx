export const metadata = {
    title: 'Privacy Policy - WallpapersFlix | Your Privacy Matters',
    description: 'Read our privacy policy to understand how WallpapersFlix collects, uses, and protects your information.',
    alternates: {
        canonical: 'https://wallpapersflix.com/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        At WallpapersFlix ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website wallpapersflix.com (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                    <p>
                        We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>2. Information We Collect</h2>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--primary)', marginTop: '1.5rem' }}>Personal Data</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        We do not require users to create accounts or provide personal information to browse and download wallpapers. However, if you choose to contact us through our contact form, we may collect:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Message content</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--primary)', marginTop: '1.5rem' }}>Automatically Collected Information</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        When you visit our Site, we may automatically collect certain information about your device, including:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website addresses</li>
                        <li>Device information</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>3. How We Use Your Information</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We use the information we collect in the following ways:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>To respond to your inquiries and provide customer support</li>
                        <li>To improve our website and user experience</li>
                        <li>To analyze site usage and trends</li>
                        <li>To detect, prevent, and address technical issues</li>
                        <li>To monitor and analyze usage patterns</li>
                        <li>To protect against fraudulent or illegal activity</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>4. Cookies and Tracking Technologies</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We may use cookies and similar tracking technologies to access or store information. Cookies are small data files stored on your device. We use cookies to:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Remember your preferences and settings</li>
                        <li>Understand how you use our Site</li>
                        <li>Improve site functionality and performance</li>
                        <li>Provide analytics and measure traffic</li>
                    </ul>
                    <p>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>5. Third-Party Services</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We may use third-party service providers to help us operate our website and analyze how our Site is used. These third parties may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                    <p>
                        Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>6. Data Security</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>7. Children's Privacy</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so we can delete such information.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>8. Your Rights</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Depending on your location, you may have certain rights regarding your personal information, including:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>The right to access your personal data</li>
                        <li>The right to rectify inaccurate data</li>
                        <li>The right to request deletion of your data</li>
                        <li>The right to restrict processing of your data</li>
                        <li>The right to data portability</li>
                        <li>The right to object to processing</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us using the information provided in the Contact section below.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>9. International Data Transfers</h2>
                    <p>
                        Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our Site, you consent to the transfer of your information to our facilities and those third parties with whom we share it as described in this privacy policy.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>10. Contact Us</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> privacy@wallpapersflix.com</p>
                        <p><strong>Website:</strong> <a href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact Form</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
