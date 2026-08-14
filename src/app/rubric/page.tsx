import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function RubricPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-900" style={{ minHeight: '70vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <ScrollReveal>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>THE SUNWAI SCORE</div>
              <h1 className="gradient-text" style={{ marginBottom: '24px' }}>We publish the rubric.</h1>
              <p className="lede" style={{ marginBottom: '64px', maxWidth: '800px' }}>
                Every application is scored out of 100 across the same five dimensions, by the same people, in the same order. A score you can&apos;t interrogate is just an opinion with a number stuck on it.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="glass-panel" style={{ overflowX: 'auto', marginBottom: '64px', padding: '16px' }}>
                <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '24px 16px', fontFamily: 'var(--font-family-body)', fontWeight: 500, color: 'var(--ink-500)' }}>Dimension</th>
                      <th style={{ padding: '24px 16px', fontFamily: 'var(--font-family-body)', fontWeight: 500, color: 'var(--ink-500)' }}>Weight</th>
                      <th style={{ padding: '24px 16px', fontFamily: 'var(--font-family-body)', fontWeight: 500, color: 'var(--ink-500)' }}>What we&apos;re reading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontWeight: 500 }}>Founder & team</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>25</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', color: 'var(--paper-200)', fontSize: '14.5px' }}>Domain insight, full-time commitment, how the co-founders divide the work, what you&apos;ve shipped before.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontWeight: 500 }}>Problem & market</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>20</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', color: 'var(--paper-200)', fontSize: '14.5px' }}>Whether the pain is real or invented, the size of it in India specifically, and why this is solvable now and wasn&apos;t three years ago.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontWeight: 500 }}>Product & traction</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>25</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', color: 'var(--paper-200)', fontSize: '14.5px' }}>Something live beats something described. Retention beats downloads. Revenue beats both.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontWeight: 500 }}>Business model</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>15</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', color: 'var(--paper-200)', fontSize: '14.5px' }}>Unit economics you can defend, a coherent story on acquisition cost, a believable route to margin.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontWeight: 500 }}>Deal readiness</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>15</td>
                      <td style={{ padding: '24px 16px', verticalAlign: 'top', color: 'var(--paper-200)', fontSize: '14.5px' }}>Clean cap table, DPIIT recognition, books in order, a data room that exists, an ask that matches the stage.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h3 style={{ marginBottom: '32px' }}>The three findings</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <div className="data" style={{ color: 'var(--ink-500)', marginBottom: '8px' }}>Below 55</div>
                  <h3 style={{ marginBottom: '16px', color: 'var(--seal)' }}>Not yet</h3>
                  <p className="small">We&apos;ve named what&apos;s missing. Come back when it isn&apos;t.</p>
                </div>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <div className="data" style={{ color: 'var(--ink-500)', marginBottom: '8px' }}>55–74</div>
                  <h3 style={{ marginBottom: '16px', color: 'var(--paper-200)' }}>Held over</h3>
                  <p className="small">Adjourned to the next cohort. We keep your file, so the second read starts where the first finished.</p>
                </div>
                <div className="glass-panel" style={{ padding: '32px', borderColor: 'var(--stamp)', background: 'rgba(37, 99, 235, 0.05)' }}>
                  <div className="data" style={{ color: 'var(--stamp)', marginBottom: '8px' }}>75 and up</div>
                  <h3 className="gradient-text" style={{ marginBottom: '16px' }}>Listed</h3>
                  <p className="small">Written into a memo and put before the network, with your consent.</p>
                </div>
              </div>
              <p className="small" style={{ color: 'var(--ink-500)' }}>
                <strong>Note:</strong> A <span style={{ fontStyle: 'italic' }}>held over</span> is not a no. It means we&apos;ve named the gap and you can reapply once you&apos;ve closed it. Most founders who come back come back higher.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
