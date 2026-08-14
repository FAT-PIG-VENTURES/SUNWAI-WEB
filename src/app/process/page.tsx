import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-900" style={{ minHeight: '70vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <ScrollReveal>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>THE PROCEEDING</div>
              <h1 className="gradient-text" style={{ marginBottom: '24px' }}>Twenty-one days, from filing to finding.</h1>
              <p className="lede" style={{ marginBottom: '64px', maxWidth: '800px' }}>
                Published timelines, and we hold them. If we&apos;re going to be late, you&apos;ll hear that too.
              </p>
            </ScrollReveal>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <ScrollReveal delay={100}>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <h3 style={{ marginBottom: '16px' }}>DAY 0 — You apply</h3>
                  <p className="small">One form, about twenty minutes. A deck helps but isn&apos;t required — we&apos;d rather read how you describe the problem in your own words than watch it get compressed into ten slides. You get your case number immediately.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <h3 style={{ marginBottom: '16px' }}>DAY 1–7 — We screen</h3>
                  <p className="small">Eligibility checks first, then a first scoring pass against the published rubric. Every applicant hears back at this stage, including the ones we can&apos;t take forward. That is the part nobody else does, and it&apos;s the part we care most about.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <h3 style={{ marginBottom: '16px' }}>DAY 8–14 — We hear you</h3>
                  <p className="small">Shortlisted founders get thirty minutes. It isn&apos;t a pitch. It&apos;s a conversation about the parts of the score a form can&apos;t read — why you, why now, and what you&apos;d actually do with the next twelve months.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="glass-panel" style={{ padding: '32px' }}>
                  <h3 style={{ marginBottom: '16px' }}>DAY 15–21 — We find</h3>
                  <p className="small">Deeper diligence, reference conversations, final score. You receive the number, the five sub-scores behind it, and the reasoning — whichever way it goes.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="glass-panel" style={{ padding: '32px', borderColor: 'var(--stamp)', background: 'rgba(37, 99, 235, 0.05)' }}>
                  <h3 className="gradient-text" style={{ marginBottom: '16px' }}>AFTER — We introduce</h3>
                  <p className="small">Companies scoring 75 and above are written into a memo and circulated — with your written consent — to our private investor network. Members who are interested meet you directly and invest directly into your company. We never handle the money and we take no cut of your raise.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
