import { writable } from 'svelte/store';

export const darkTheme = writable(false);

export const currentLang = writable("french");