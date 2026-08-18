import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <Image
            src="/sunwai-icon.png"
            alt="Sunwai"
            width={32}
            height={32}
            style={{ borderRadius: '7px', flexShrink: 0 }}
          />
          <span className="logo-latin">
            sunwa<span style={{ color: 'var(--stamp)' }}>i</span>
          </span>
          <span className="logo-deva">सुनवाई</span>
        </Link>
        <nav className="main-nav">
          <Link href="/process">How it works</Link>
          <Link href="/rubric">The score</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/apply" className="btn btn-primary" style={{ marginLeft: '16px' }}>Apply</Link>
        </nav>
      </div>
    </header>
  );
}
