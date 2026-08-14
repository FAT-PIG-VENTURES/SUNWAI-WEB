import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-900" style={{ minHeight: '60vh' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '32px' }}>Privacy Policy</h1>
            <p className="lede" style={{ marginBottom: '48px', color: 'var(--ink-500)' }}>Last updated: [Date]</p>
            <p>
              [Placeholder for Privacy Policy content.]
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
