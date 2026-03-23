type CursorTheme = {
  accent: string;
  core?: string;
  ink?: string;
};

const DEFAULT_CURSOR_THEME: Required<CursorTheme> = {
  accent: '#ef233c',
  core: '#fff5f5',
  ink: '#180507'
};

const ROUTE_CURSOR_THEMES: Array<{ match: (pathname: string) => boolean; theme: CursorTheme }> = [
  { match: (pathname) => pathname === '/', theme: { accent: '#ef233c', core: '#fff5f5', ink: '#180507' } },
  { match: (pathname) => pathname.startsWith('/events'), theme: { accent: '#e8729a', core: '#fff4f8', ink: '#18080f' } },
  { match: (pathname) => pathname.startsWith('/schedule'), theme: { accent: '#e8729a', core: '#fff4f8', ink: '#18080f' } },
  { match: (pathname) => pathname.startsWith('/passes'), theme: { accent: '#ef233c', core: '#fff2f4', ink: '#190507' } },
  { match: (pathname) => pathname.startsWith('/sponsors'), theme: { accent: '#d8b24a', core: '#fff5cf', ink: '#201504' } },
  { match: () => true, theme: DEFAULT_CURSOR_THEME }
];

const hexToRgb = (hex: string) => {
  const sanitized = hex.replace('#', '').trim();
  const normalized = sanitized.length === 3
    ? sanitized.split('').map((char) => char + char).join('')
    : sanitized;

  const value = Number.parseInt(normalized, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
};

const toRgba = (hex: string, alpha: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const isLightColor = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.72;
};

const resolveTheme = (theme: CursorTheme): Required<CursorTheme> => {
  const accent = theme.accent;
  return {
    accent,
    core: theme.core ?? (isLightColor(accent) ? '#fff3dc' : '#ffffff'),
    ink: theme.ink ?? (isLightColor(accent) ? '#1a1008' : '#fff7fb')
  };
};

export const applyCursorTheme = (theme: CursorTheme) => {
  if (typeof document === 'undefined') {
    return;
  }

  const resolved = resolveTheme(theme);
  const root = document.documentElement;
  root.style.setProperty('--cursor-accent', resolved.accent);
  root.style.setProperty('--cursor-core', resolved.core);
  root.style.setProperty('--cursor-ink', resolved.ink);
  root.style.setProperty('--cursor-glow', toRgba(resolved.accent, 0.24));
  root.style.setProperty('--cursor-glow-strong', toRgba(resolved.accent, 0.5));
  root.style.setProperty('--cursor-outline', toRgba(resolved.accent, 0.65));
};

export const applyRouteCursorTheme = (pathname: string) => {
  const match = ROUTE_CURSOR_THEMES.find((entry) => entry.match(pathname));
  applyCursorTheme(match?.theme ?? DEFAULT_CURSOR_THEME);
};
