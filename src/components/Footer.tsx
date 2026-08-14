import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-paper-100" style={{ padding: 'var(--section-padding) var(--gutter)' }}>
      <div className="container" style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', paddingBottom: '48px' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Founders</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/apply">Apply</Link></li>
            <li><Link href="/rubric">The Sunwai Score</Link></li>
            <li><Link href="/process">Process & timelines</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Company</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/about">About</Link></li>
            <li><a href="mailto:contact@sunwai.in">Contact</a></li>
            <li><Link href="/terms">Terms of use</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', borderTop: '1px solid var(--stamp-dim)', paddingTop: '48px' }}>
        <p className="small" style={{ fontWeight: 600, color: 'var(--ink-900)' }}>
          Sunwai is a startup evaluation and introduction platform. It is not a SEBI-registered Alternative Investment Fund. It does not pool, hold or manage investor capital, does not solicit investment from the public, and does not provide investment advice.
        </p>
        <p className="small" style={{ color: 'var(--ink-500)', maxWidth: 'none' }}>
          Submitting an application does not guarantee evaluation, shortlisting, introduction to any investor, or investment. Any investment that follows is a private transaction agreed directly between the founder and the individual investor, on terms they set between themselves. Sunwai is not a party to it.
        </p>
        <p className="small" style={{ color: 'var(--ink-500)', marginTop: '24px' }}>
          © 2026 Sunwai. <span style={{ fontFamily: 'var(--font-family-body)', fontSize: '12px', color: 'var(--ink-500)' }}>A Fat Pig Ventures LLP company.</span> Kolkata, India.
        </p>
      </div>
    </footer>
  );
}
