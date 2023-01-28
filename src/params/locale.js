/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return /^\w+$/.test(param);
}
