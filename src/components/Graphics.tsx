export function GraphicDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '48px 0', opacity: 0.5 }}>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--ink-700)' }}></div>
      <div style={{ display: 'flex', gap: '4px', padding: '0 16px' }}>
        <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--ink-500)', borderRadius: '50%' }}></div>
        <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--ink-500)', borderRadius: '50%' }}></div>
        <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--ink-500)', borderRadius: '50%' }}></div>
      </div>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--ink-700)' }}></div>
    </div>
  );
}

export function SealGraphic({ variant = 'default' }: { variant?: 'default' | 'inverted' }) {
  const color = variant === 'inverted' ? 'var(--stamp-dim)' : 'var(--stamp)';
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '64px', 
      height: '64px', 
      borderRadius: '50%', 
      border: `1.5px solid ${color}`,
      opacity: 0.2,
      transform: 'rotate(-12deg)',
      position: 'absolute',
      right: '24px',
      top: '24px',
      pointerEvents: 'none'
    }}>
      <div style={{ width: '40px', height: '1px', backgroundColor: color, marginBottom: '8px' }}></div>
      <div style={{ width: '28px', height: '1px', backgroundColor: color, position: 'absolute' }}></div>
    </div>
  );
}
