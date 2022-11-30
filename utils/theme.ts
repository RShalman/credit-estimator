export const DAISY_THEME_KEY = 'data-theme';

export type DaisyThemes =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'
  | 'cmyk'
  | 'autumn'
  | 'business'
  | 'acid'
  | 'lemonade'
  | 'night'
  | 'coffee'
  | 'winter';

export const getTheme = (): DaisyThemes | boolean => {
  const storageTheme = localStorage?.getItem(DAISY_THEME_KEY) as DaisyThemes;
  const htmlTheme = document?.documentElement?.getAttribute(DAISY_THEME_KEY) as DaisyThemes;

  if (storageTheme && storageTheme !== htmlTheme) setItem(storageTheme);

  return storageTheme ?? htmlTheme ?? 'light';
};

export const setItem = (theme: DaisyThemes, topLevel = false): void => {
  topLevel && document?.documentElement?.setAttribute(DAISY_THEME_KEY, theme);
  localStorage?.setItem(DAISY_THEME_KEY, theme);
};

export const toggleLightAndDarkThemes = () => {
  let theme = getTheme();
  if (!theme) {
    setItem('light');
  } else {
    setItem(theme === 'light' ? 'dark' : 'light');
  }
};
