'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    entityType: 'Private Limited Company',
    cin: '',
    incDate: '',
    fullTimeFounder: 'Yes',
    capTableClean: 'Yes',
    litigation: 'No',
    sector: '',
    founderNames: '',
    commitments: '',
    linkedin: '',
    builtBefore: '',
    howMet: '',
    headcount: '',
    problem: '',
    whoHasIt: '',
    currentSolution: '',
    whyNow: '',
    productLink: '',
    mau: '',
    retention: '',
    revenue: '',
    growthRate: '',
    bestNumber: '',
    revenueModel: '',
    cac: '',
    grossMargin: '',
    dpiit: '',
    capTableLink: '',
    raisingAmount: '',
    valuation: '',
    useOfFunds: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStep(6); // Success
      } else {
        alert('There was an issue submitting your application. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
    setIsSubmitting(false);
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: '24px' }}>Before you start</h1>
            <p className="lede" style={{ marginBottom: '32px' }}>
              Four things end an application before scoring. Check these now so neither of us wastes three weeks.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <li>Not incorporated in India as a private limited company or an LLP.</li>
              <li>No founder working on it full-time.</li>
              <li>A cap table where someone who isn&apos;t operating the business holds more than 30%.</li>
              <li>Ongoing litigation or regulatory action you haven&apos;t disclosed to us.</li>
            </ul>
            <button className="btn btn-primary" onClick={() => setStep(1)}>I meet these criteria</button>
          </div>
        );
      case 1:
        return (
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Screen 1 of 5</div>
            <h2 style={{ marginBottom: '32px' }}>Eligibility</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Entity type</label>
                <select name="entityType" value={formData.entityType} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-800)', color: 'var(--paper-100)' }}>
                  <option>Private Limited Company</option>
                  <option>LLP</option>
                </select>
              </div>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>CIN or LLPIN</label>
                <input type="text" name="cin" value={formData.cin} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Is any founder full-time on this?</label>
                <select name="fullTimeFounder" value={formData.fullTimeFounder} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-800)', color: 'var(--paper-100)' }}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn btn-ghost" onClick={() => setStep(0)}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(2)}>Next</button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Screen 2 of 5</div>
            <h2 style={{ marginBottom: '32px' }}>Founders & team</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Founder names and roles</label>
                <textarea name="founderNames" value={formData.founderNames} onChange={handleChange} rows={3} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Current headcount</label>
                <input type="text" name="headcount" value={formData.headcount} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(3)}>Next</button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Screen 3 of 5</div>
            <h2 style={{ marginBottom: '32px' }}>Problem & market</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>The problem, in 100 words</label>
                <textarea name="problem" value={formData.problem} onChange={handleChange} rows={5} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn btn-ghost" onClick={() => setStep(2)}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(4)}>Next</button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Screen 4 of 5</div>
            <h2 style={{ marginBottom: '32px' }}>Product & traction</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Link to the live product</label>
                <input type="url" name="productLink" value={formData.productLink} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Revenue, last three months</label>
                <input type="text" name="revenue" value={formData.revenue} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn btn-ghost" onClick={() => setStep(3)}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(5)}>Next</button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Screen 5 of 5</div>
            <h2 style={{ marginBottom: '32px' }}>Model & readiness</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>Cap table (Link to Google Drive / DropBox)</label>
                <input type="url" name="capTableLink" value={formData.capTableLink} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} placeholder="https://" />
              </div>
              <div>
                <label className="small" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink-500)' }}>How much you&apos;re raising</label>
                <input type="text" name="raisingAmount" value={formData.raisingAmount} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ink-700)', backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }} />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '16px', backgroundColor: 'var(--ink-800)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} id="consent" style={{ marginTop: '6px' }} />
                <label htmlFor="consent" className="small" style={{ color: 'var(--paper-200)', cursor: 'pointer' }}>
                  I understand that submitting this application does not guarantee evaluation, introduction to any investor, or investment, and that nothing in this application will be shared with any investor without my separate written consent.
                </label>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn btn-ghost" onClick={() => setStep(4)} disabled={isSubmitting}>Back</button>
                <button className="btn btn-primary" onClick={handleSubmit} disabled={!formData.consent || isSubmitting}>
                  {isSubmitting ? 'Filing...' : 'File your application'}
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: '24px' }}>Filed.</h1>
            <p className="lede" style={{ marginBottom: '16px' }}>Your case number is <strong style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--stamp-hi)' }}>SW-{Math.floor(Math.random() * 100).toString().padStart(2, '0')}/{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</strong>.</p>
            <p style={{ marginBottom: '48px' }}>You&apos;ll hear from us by <strong>21 August</strong>, whichever way it goes. Everyone does.</p>
            <button className="btn btn-ghost" onClick={() => alert('Copied!')}>Copy your case number</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-900" style={{ minHeight: '70vh' }}>
          <div className="container">
            {renderStep()}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
