window.addEventListener('DOMContentLoaded', () => {
	const switchElt = document.getElementById('switch');

	/**
	 * Get user preference:
	 * 1. Site
	 * 2. System
	 * 3. Default
	 */
	const mode = localStorage.getItem('mode')
		|| (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

	switchElt.checked = mode === 'light'

	switchElt.addEventListener('change', (e) => {
		localStorage.setItem('mode', e.target.checked ? 'light' : 'dark');
	})
});
