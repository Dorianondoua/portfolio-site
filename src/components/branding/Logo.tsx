import React from 'react';

const DEFAULT_ACCENT = '#5BF0F0';
const DEFAULT_TEXT   = '#FFFFFF';
const DEFAULT_BREAK  = '#FFFFFF';

interface LogoMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  breakColor?: string;
}

export function LogoMark({ size = 40, color = DEFAULT_ACCENT, breakColor = DEFAULT_BREAK, ...rest }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <rect x="14" y="14" width="64" height="14" rx="3" fill={color} />
      <rect x="14" y="39" width="64" height="14" rx="3" fill={breakColor} />
      <rect x="14" y="64" width="64" height="14" rx="3" fill={color} />
      <rect x="14" y="14" width="14" height="39" rx="3" fill={color} />
      <rect x="64" y="39" width="14" height="39" rx="3" fill={color} />
    </svg>
  );
}

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark';
  color?: string;
  textColor?: string;
  mutedColor?: string;
  tagline?: string;
  showTagline?: boolean;
}

export default function Logo({
  size = 32,
  variant = 'horizontal',
  color = DEFAULT_ACCENT,
  textColor = DEFAULT_TEXT,
  mutedColor = '#6B7B8C',
  tagline = 'WEB · DEVELOPER',
  showTagline = true,
  ...rest
}: LogoProps) {
  if (variant === 'mark') {
    return <LogoMark size={size} color={color} />;
  }

  const wordmark = (
    <div translate="no" style={{ lineHeight: 1, fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>
      <div style={{
        fontWeight: 700,
        fontSize: size,
        color: textColor,
        letterSpacing: '-0.02em',
      }}>
        shadowsod
      </div>
      {showTagline && (
        <div style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontWeight: 500,
          fontSize: Math.max(10, size * 0.36),
          color: mutedColor,
          marginTop: size * 0.22,
          letterSpacing: '0.18em',
        }}>
          {tagline}
        </div>
      )}
    </div>
  );

  if (variant === 'wordmark') return wordmark;

  if (variant === 'stacked') {
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.5 }} {...rest}>
        <LogoMark size={size * 2.4} color={color} />
        {wordmark}
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.7 }} {...rest}>
      <LogoMark size={size * 2.4} color={color} />
      {wordmark}
    </div>
  );
}
