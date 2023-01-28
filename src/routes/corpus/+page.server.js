import { CORPUS_ENTRIES_SOURCE } from "$env/static/private";
import { readFileSync } from "fs";
import { resolve } from "path";

import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const corpusDataRaw = await readFileSync(resolve(CORPUS_ENTRIES_SOURCE), { encoding: "utf8", flag: "r" });
	const corpusData = await JSON.parse(corpusDataRaw);
	console.log(JSON.stringify(corpusData, null, 2));
	const data = {
		params,
		corpusData,
	};
	console.log({ data });

	if (corpusData) {
		return data;
	}

	throw error(404, "Not found");
}
