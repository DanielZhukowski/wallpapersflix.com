export const metadata = {
    title: 'Terms of Service - WallpapersFlix | User Agreement',
    description: 'Read our terms of service to understand the rules and regulations for using WallpapersFlix.',
    alternates: {
        canonical: 'https://wallpapersflix.com/terms',
    },
};

export default function TermsPage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Terms of Service</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>1. Agreement to Terms</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        By accessing and using WallpapersFlix ("Site," "we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and WallpapersFlix, concerning your access to and use of the wallpapersflix.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>2. Intellectual Property Rights</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        The wallpapers available on our Site are provided for personal, non-commercial use only. You may download and use the wallpapers for personal purposes, but you may not:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Sell, redistribute, or commercially exploit the wallpapers</li>
                        <li>Claim ownership or authorship of the wallpapers</li>
                        <li>Use the wallpapers in any way that violates applicable laws</li>
                        <li>Remove or alter any copyright notices or watermarks</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>3. User Representations</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                        <li>You are not under the age of 13</li>
                        <li>You will not access the Site through automated or non-human means</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose</li>
                        <li>Your use of the Site will not violate any applicable law or regulation</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>4. Prohibited Activities</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Systematically retrieving data or other content from the Site to create a collection or database</li>
                        <li>Making any unauthorized use of the Site</li>
                        <li>Using the Site to advertise or offer to sell goods and services</li>
                        <li>Circumventing, disabling, or otherwise interfering with security-related features of the Site</li>
                        <li>Engaging in unauthorized framing of or linking to the Site</li>
                        <li>Uploading or transmitting viruses, trojan horses, or other material that interferes with any party's use of the Site</li>
                        <li>Using any information obtained from the Site to harass, abuse, or harm another person</li>
                        <li>Attempting to impersonate another user or person</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>5. User Generated Content</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        If you submit any content to us (such as feedback, suggestions, or comments), you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>6. Site Management</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We reserve the right, but not the obligation, to:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Monitor the Site for violations of these Terms of Service</li>
                        <li>Take appropriate legal action against anyone who violates these Terms</li>
                        <li>Refuse, restrict access to, limit availability of, or disable any content</li>
                        <li>Remove from the Site or otherwise disable any content that we determine is harmful</li>
                        <li>Manage the Site in a manner designed to protect our rights and property</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>7. Disclaimer</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
                    </p>
                    <p>
                        WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>8. Limitations of Liability</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>9. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Site or breach of these Terms of Service.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>10. Term and Termination</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>11. Modifications and Interruptions</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
                    </p>
                    <p>
                        We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Site.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>12. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined following the laws of the jurisdiction in which WallpapersFlix operates. WallpapersFlix and yourself irrevocably consent that the courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--foreground)' }}>13. Contact Us</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '8px' }}>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> legal@wallpapersflix.com</p>
                        <p><strong>Website:</strong> <a href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact Form</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
