import { writable } from 'svelte/store';
import { getTheme, toggleLightAndDarkThemes } from '@utils/theme';

export const theme = writable(getTheme());
export function toggleTheme() {
  toggleLightAndDarkThemes();
  theme.set(getTheme());
}
