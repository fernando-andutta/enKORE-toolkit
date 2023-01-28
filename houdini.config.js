/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: "https://sinas.hasura.app/v1/graphql",
	schemaPollHeaders: {
		"X-Hasura-Admin-Secret": "cOOdTFYBwAVdf4eb08g4NBezCizJWYZn5J8RzWrpw0rg66W9SaKFpdyIMPa2B2eE",
	},
	plugins: {
		"houdini-svelte": {
			client: "./src/client",
		},
	},
};

export default config;
