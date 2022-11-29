import { get, writable } from 'svelte/store';
import { getTheme, toggleLightAndDarkThemes } from '@utils/theme';

export const theme = writable(getTheme());
export const isLightTheme = writable(get(theme) === 'light');
export function toggleTheme() {
  toggleLightAndDarkThemes();
  theme.set(getTheme());
}
