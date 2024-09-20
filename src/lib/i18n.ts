const values: { [lang: string]: { [key: string]: string } } = {
	en: {
		fajr: 'Fajr',
		sunrise: 'Shuruk',
		dhuhr: 'Dhuhr',
		asr: 'Asr',
		maghrib: 'Maghrib',
		isha: 'Isha'
	}
};

/**
 * Returns the translation of the given key.
 */
export function t(key: string, lang: keyof typeof values = 'en'): string {
	return values[lang][key];
}

/**
 * A collection of useful formatting functions.
 */
export const f = {
	time(hour: number, minute: number): string {
		const h = hour.toString().padStart(2, '0');
		const m = minute.toString().padStart(2, '0');
		return `${h}:${m}`;
	}
};
