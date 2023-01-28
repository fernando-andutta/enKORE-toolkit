export function entriesByLocationVariables({ params: { locationid } }) {
	return {
		locationid: locationid ? parseInt(locationid) : 1,
	};
}
