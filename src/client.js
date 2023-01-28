import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_HASURA_GRAPHQL_API_URL } from "$env/static/public";

import { HoudiniClient } from "$houdini";

async function fetchQuery({ fetch, text = "", variables = {} }) {
	const url = PUBLIC_HASURA_GRAPHQL_API_URL;
	const result = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Hasura-Admin-Secret": PUBLIC_HASURA_ADMIN_SECRET,
		},
		body: JSON.stringify({
			query: text,
			variables,
		}),
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
