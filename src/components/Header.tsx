import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-latin">Sunwai</span>
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
