export function entriesByTaxaVariables({ params: { taxonid } }) {
	return {
		taxonID: taxonid ? parseInt(taxonid) : 1,
	};
}
