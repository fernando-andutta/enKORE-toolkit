export function entriesByCountryVariables({ params: { countrycode } }) {
	return {
		countrycode: countrycode.toUpperCase(),
	};
}
