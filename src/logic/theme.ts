import { writable } from "svelte/store";

export type Theme = 'light' | 'dark';

export const theme = writable<Theme>('light');

export const initTheme = () => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    theme.update(theme => storedTheme ?? theme);
}

export const updateTheme = (newTheme: Theme): void => {
    localStorage.setItem('theme', newTheme);
    theme.set(newTheme);
}