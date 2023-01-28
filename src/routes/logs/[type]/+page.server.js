import { LOG_ACCESS_SOURCE } from "$env/static/private";
import { readFileSync } from "fs";
import { resolve } from "path";

import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const accessLogRegex = /^(\S*).*\[(.*)\]\s"(\S*)\s(\S*)\s([^"]*)"\s(\S*)\s(\S*)\s"([^"]*)"\s"([^"]*)"/;
	const logDataRaw = await readFileSync(resolve(LOG_ACCESS_SOURCE), { encoding: "utf8", flag: "r" });
	const logData = logDataRaw
		.trim()
		.split(/\n+/)
		.map((line) => accessLogRegex.exec(line));
	console.log({ time: Date.now(), logData: logData.length });

	if (logData) {
		return { params, logData };
	}

	throw error(404, "Not found");
}
