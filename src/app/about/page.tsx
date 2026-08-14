import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-900">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '64px' }}>Who hears you.</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '96px' }}>
              {/* Slots for real people */}
              <div>
                <div style={{ width: '100%', aspectRatio: '1', backgroundColor: 'var(--ink-800)', border: '1px solid var(--ink-700)', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}></div>
                <h3 style={{ marginBottom: '8px' }}>[Name]</h3>
                <p className="small" style={{ color: 'var(--ink-500)', marginBottom: '16px' }}>[Background / Operating Experience]</p>
              </div>
              <div>
                <div style={{ width: '100%', aspectRatio: '1', backgroundColor: 'var(--ink-800)', border: '1px solid var(--ink-700)', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}></div>
                <h3 style={{ marginBottom: '8px' }}>[Name]</h3>
                <p className="small" style={{ color: 'var(--ink-500)', marginBottom: '16px' }}>[Background / Operating Experience]</p>
              </div>
            </div>

            <div className="eyebrow" style={{ marginBottom: '24px' }}>WHY WE BUILT THIS</div>
            <p className="lede" style={{ marginBottom: '32px' }}>
              [First paragraph: specific catalyst for creating Sunwai]
            </p>
            <p style={{ marginBottom: '32px' }}>
              [Second paragraph: the problem observed]
            </p>
            <p style={{ marginBottom: '96px' }}>
              [Third paragraph: what made this necessary]
            </p>

            <div className="eyebrow" style={{ marginBottom: '24px' }}>WHAT WE DON&apos;T DO</div>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '96px' }}>
              <li style={{ borderLeft: '2px solid var(--stamp)', paddingLeft: '16px' }}>We don&apos;t hold money.</li>
              <li style={{ borderLeft: '2px solid var(--stamp)', paddingLeft: '16px' }}>We don&apos;t take equity.</li>
              <li style={{ borderLeft: '2px solid var(--stamp)', paddingLeft: '16px' }}>We don&apos;t charge founders.</li>
              <li style={{ borderLeft: '2px solid var(--stamp)', paddingLeft: '16px' }}>We don&apos;t leave anyone without an answer.</li>
            </ul>

            <div className="eyebrow" style={{ marginBottom: '24px' }}>THE PARENT COMPANY</div>
            <p style={{ marginBottom: '16px' }}>
              Sunwai is operated by Fat Pig Ventures LLP, Kolkata.
            </p>
            <p className="small" style={{ color: 'var(--ink-500)', marginBottom: '96px' }}>
              Registered address: [Address]<br />
              LLPIN: [LLPIN]
            </p>

            <div className="eyebrow" style={{ marginBottom: '24px' }}>CONTACT</div>
            <p>
              <a href="mailto:contact@sunwai.in">contact@sunwai.in</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
