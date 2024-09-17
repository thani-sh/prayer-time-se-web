import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/**
 * Key used to store the city in localStorage.
 */
const CITY_STORAGE_KEY = 'state:city';

/**
 * Holds the current date as a svelte store.
 */
export const date = writable(new Date());

/**
 * Holds the current date as a svelte store.
 */
export const city = writable('Stockholm');

if (browser) {
	const storedCity = localStorage.getItem(CITY_STORAGE_KEY);
	if (storedCity) {
		city.set(storedCity);
	}
}

/**
 * Save city to localStorage
 */
city.subscribe((value) => {
	if (browser && value) {
		localStorage.setItem(CITY_STORAGE_KEY, value);
	}
});
