import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HearingRecordCard from '@/components/HearingRecordCard';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedBackground from '@/components/AnimatedBackground';
import { GraphicDivider, SealGraphic } from '@/components/Graphics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="bg-ink-900" style={{ paddingTop: 'clamp(48px, 8vw, 96px)', overflow: 'hidden' }}>
          <AnimatedBackground />
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '800px' }}>
              <ScrollReveal>
                <div className="eyebrow" style={{ marginBottom: '24px' }}>EVALUATION AND INTRODUCTIONS FOR EARLY-STAGE INDIA</div>
                <h1 style={{ marginBottom: '32px' }}>
                  Most startups don&apos;t get rejected. They get <span style={{ fontStyle: 'italic' }}>ignored</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="lede" style={{ marginBottom: '48px', color: 'var(--paper-200)' }}>
                  Apply once. We score you against a rubric we publish, we give you a written finding in twenty-one days, and if you clear the bar we put you in front of investors who write cheques directly. Free for founders. Always.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                  <Link href="/apply" className="btn btn-primary">Apply for a hearing</Link>
                  <Link href="/rubric" className="btn btn-ghost">See how we score</Link>
                </div>
                <div className="data" style={{ color: 'var(--verified)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>●</span> Cohort 01 open · Applications close 30 September
                </div>
              </ScrollReveal>
            </div>
            
            <div style={{ justifySelf: 'start' }}>
              <ScrollReveal delay={400}>
                <HearingRecordCard />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* THE IDEA SECTION */}
        <section className="bg-ink-900" id="the-idea">
          <SealGraphic />
          <div className="container" style={{ maxWidth: '800px' }}>
            <ScrollReveal>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>WHY SUNWAI</div>
              <p className="lede" style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontFamily: 'var(--font-family-display)', marginBottom: '48px', color: 'var(--paper-100)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                A <span style={{ fontStyle: 'italic' }}>sunwai</span> is a hearing. A proceeding where someone is obliged to listen to you and produce a finding.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <GraphicDivider />
              <p>
                Capital isn&apos;t what&apos;s scarce in India. Attention is. Forty thousand recognised startups are chasing the notice of a few hundred people who don&apos;t reply, and the standard outcome of applying for funding here isn&apos;t a no — it&apos;s nothing at all.
              </p>
              <p>
                So we built the opposite. Everyone who applies is heard. Everyone is scored against the same published rubric. Everyone receives a written finding with their name and their case number on it, whether the answer is yes or no.
              </p>
              <p style={{ color: 'var(--paper-200)' }}>
                We are not a fund. We hold no capital, take no equity, and charge founders nothing.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Sections removed for multipager */}

        {/* EARLY DISMISSAL SECTION */}
        <section className="bg-ink-800" id="early-dismissal">
          <div className="container">
            <ScrollReveal>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>BEFORE SCORING</div>
              <h2 style={{ marginBottom: '24px' }}>Four things end an application early.</h2>
              <p className="lede" style={{ marginBottom: '48px', maxWidth: '800px' }}>
                We&apos;d rather tell you on day two than waste three weeks of yours.
              </p>
              
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', marginBottom: '32px' }}>
                <li>Not incorporated in India as a private limited company or an LLP.</li>
                <li>No founder working on it full-time.</li>
                <li>A cap table where someone who isn&apos;t operating the business holds more than 30%.</li>
                <li>Ongoing litigation or regulatory action you haven&apos;t disclosed to us.</li>
              </ul>
              <p className="small" style={{ color: 'var(--ink-500)' }}>Pre-revenue is fine. Pre-product is usually too early.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* CLOSER SECTION (Inverted) */}
        <section className="bg-paper-100 inverted-section" style={{ paddingBottom: 'clamp(96px, 15vw, 180px)' }}>
          <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ScrollReveal>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>COHORT 01</div>
              <h2 style={{ marginBottom: '24px', maxWidth: '600px' }}>Twenty minutes now. A real answer in twenty-one days.</h2>
              <p className="lede" style={{ marginBottom: '48px', maxWidth: '600px', color: 'var(--ink-500)' }}>
                Applications for Cohort 01 close on 30 September. The next window opens in January.
              </p>
              <Link href="/apply" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '17px' }}>Start your application</Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
